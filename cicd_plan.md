# CI/CD plan: personal-website

Host: `portfolio.gacnikhome.duckdns.org` (internal only).

## Existing infra (verified)
- Gitea `https://gitea.gacnikhome.duckdns.org` (LXC 120, 192.168.0.25:3000), org `tcg`, registry `gitea.gacnikhome.duckdns.org/tcg/<repo>`.
- ArgoCD in ns `argocd` (NodePort 30100). Apps sync from `tcg/homelab-gitops` path `apps/<name>`, auto-sync, selfHeal, ns `default`, pull secret `gitea-registry`.
- Technitium: wildcard `*.gacnikhome.duckdns.org -> 192.168.0.22` (NPM). Already covers new host. No DNS change.
- NPM: Gitea host uses access list `int-only`. Reuse for new host.
- Existing app pattern: Deployment+Service NodePort, container port 8080 `http`, tcp probes, limits 250m/128Mi.

## Files

### [NEW] `.gitea/workflows/ci.yml` (this repo)
- Trigger: push to `main`.
- Job `build`: `npm ci`, `npm run build`.
- Job `image` (needs build): kaniko build, push `:$SHA7` + `:latest` to `gitea.gacnikhome.duckdns.org/tcg/personal-website`. Secrets: `REGISTRY_USER`, `REGISTRY_TOKEN`.
- Job `bump` (needs image): clone `tcg/homelab-gitops`, set image tag in `apps/personal-website/deployment.yaml`, commit, push. Secret: `GITOPS_TOKEN`. ArgoCD auto-syncs.

### [MODIFY] `nginx.conf`
- Listen 8080 (matches other apps; verify current port first).

### [NEW] `homelab-gitops/apps/personal-website/deployment.yaml`
- 1 replica, image tag placeholder, port 8080, tcp probes, limits like meishifrontend, `imagePullSecrets: gitea-registry`.

### [NEW] `homelab-gitops/apps/personal-website/service.yaml`
- NodePort 30085 -> `http` (verify 30085 free).

### [NEW] ArgoCD Application `personal-website`
- Same spec as `meishifrontend` (path `apps/personal-website`, auto-sync, selfHeal, ServerSideApply). Apply via `kubectl apply` unless gitops repo has app-of-apps.

### Gitea (API)
- Create repo `tcg/personal-website`, add remote, push `main`.
- Set repo secrets above.
- Register act_runner if none exists.

### NPM (API)
- Proxy host `portfolio.gacnikhome.duckdns.org` -> `192.168.0.171:30085`, wildcard LE cert, access list `int-only`, HTTP/2, force SSL. Not added to Oracle relay allowlist.

## Verify
- Push triggers workflow green; image in registry; gitops commit; Argo app Synced/Healthy.
- `curl https://portfolio.gacnikhome.duckdns.org` OK from LAN; blocked via non-LAN IP.

## Blockers
1. Gitea API rejects `jan` password from admin-credentials.txt (needs token).
2. No act_runner found in cluster. Confirm if one exists elsewhere.
3. Working tree has large uncommitted site changes; commit before first push.

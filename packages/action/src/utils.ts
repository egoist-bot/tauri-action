import { context } from "@actions/github"

export const REPO = {
  owner: process.env.REPO_OWNER || context.repo.owner,
  repo: process.env.REPO_NAME || context.repo.repo,
  target_commit: process.env.TARGET_COMMIT,
}

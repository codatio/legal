ARG DOCKER_REGISTRY

FROM ${DOCKER_REGISTRY:-}base-images/node-build:24-bookworm-slim AS build

# showLastUpdateAuthor/Time shell out to git; the slim base image doesn't ship it.
RUN apt-get update && apt-get install -y --no-install-recommends git && rm -rf /var/lib/apt/lists/*

WORKDIR /src

COPY package.json .
COPY package-lock.json .
COPY .npmrc .

RUN npm ci

# .git is deliberately NOT dockerignored: Docusaurus reads real last-updated
# dates from git history (deploy.yml fetches full history for the same reason).
COPY . .

ENV CI=true

RUN npm run build

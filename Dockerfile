# Image source
FROM node:19-alpine

# Docker working directory
WORKDIR /app

COPY . /app

# Then install the NPM module
RUN corepack enable
RUN pnpm install --force
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "preview"]
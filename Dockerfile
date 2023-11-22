# Image source
FROM node:21-alpine

# Docker working directory
WORKDIR /app

COPY . /app

# Then install the NPM module
RUN corepack enable
RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "run", "preview", "--host", "--port", "3000"]
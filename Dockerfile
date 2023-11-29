FROM node:19-alpine

WORKDIR /usr/src/app

COPY . .

RUN corepack enable
RUN corepack enable
RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "run", "dev", "--host", "--port", "3000"]
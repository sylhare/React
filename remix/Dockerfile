FROM node:20.13.1-bookworm-slim AS builder

RUN apt-get update && apt-get install -y ca-certificates && apt-get purge -y \
    curl \
    wget \
    ssh \
    && apt-get dist-upgrade -y && apt-get -y clean all

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY vite.config.ts .

RUN yarn

COPY . ./

RUN yarn build

RUN ls -la

FROM node:20.13.1-bookworm-slim

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY --chown=node:node --from=builder app/build ./build
COPY --chown=node:node --from=builder app/node_modules ./node_modules
COPY --chown=node:node --from=builder app/package.json ./
COPY --chown=node:node --from=builder app/vite.config.ts ./

# $ id
# uid=1000(node) gid=1000(node) groups=1000(node)
USER 1000
EXPOSE 3000

ENV NODE_OPTIONS="--use-openssl-ca"
CMD [ "yarn", "start" ]

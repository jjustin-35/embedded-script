FROM 758880085468.dkr.ecr.us-east-1.amazonaws.com/ecr-public/docker/library/node:16.20.2-bookworm-slim AS base
WORKDIR /app

ARG ENV

ENV ENV $ENV
ENV NODE_ENV=production

FROM base AS install

COPY package.json yarn.lock ./
RUN yarn install



FROM install AS build

COPY --from=install /app/node_modules ./node_modules

COPY . .

RUN yarn run build

ARG BRANCH=none
ARG COMMIT=none
LABEL branch=$BRANCH commit=$COMMIT env=$ENV

EXPOSE 3000

CMD [ "yarn", "start" ]

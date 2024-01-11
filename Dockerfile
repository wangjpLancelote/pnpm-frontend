FROM node:16.16.0-alpine AS build

ARG tag_env
ARG tag_version

WORKDIR /app

COPY . /app/

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install -g pnpm@7.6.0

RUN pnpm install --ignore-scripts --prod

RUN node ./scripts/update-version.mjs ${tag_version} ${tag_env}

RUN pnpm run build_${tag_env}

FROM nginx:latest

COPY --from=build /app/packages/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

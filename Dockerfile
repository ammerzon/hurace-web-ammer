FROM node:10.16.3-alpine AS builder
WORKDIR /app
COPY scripts/hurace-client/hurace-client-api-1.0.0.tgz /app/scripts/hurace-client/
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration=$configuration

FROM nginx:1.17.3-alpine
RUN apk add --update gettext
COPY --from=builder /app/dist/out/ /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY docker/entryPoint.sh /
RUN chmod +x entryPoint.sh
ENTRYPOINT ["/entryPoint.sh"]

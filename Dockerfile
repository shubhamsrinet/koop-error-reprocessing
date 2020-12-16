# FROM node:14.15.1-alpine AS build-step
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build --prod

# FROM nginx:1.18.0-alpine as prod-stage
# COPY --from=build-step /app/dist/test-project /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY default.conf /etc/nginx/conf.d/default.conf
# EXPOSE 8084
# CMD ["nginx","-g","daemon off;"]

FROM nginx
# ENV NGINX_PORT=443
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html/
COPY ./dist/test-project .
EXPOSE 8084
FROM nginx:1.19.4-alpine
COPY default.conf /etc/nginx/nginx.conf
COPY ./index.html /usr/share/nginx/html/index.html
RUN nginx

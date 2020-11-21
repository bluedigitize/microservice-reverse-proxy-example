FROM nginx:1.19.4-alpine
COPY default.conf /etc/nginx/conf.d/
CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]

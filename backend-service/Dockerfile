FROM node:14.11.0-alpine3.10
WORKDIR /srv/backend-service
COPY ./package.json .
RUN npm install
COPY . .

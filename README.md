# Example of NGINX reverse proxy within a microservice architecture

## Start up
`$ docker-compose up` inside the root directory

## Stack
### backend-service
The backend service is written in Node.js app using the Express framework. The service consists of a single endpoint `/backend` that returns a json object.
### frontend-service
The frontend service is a NGINX web server that hosts a static html file `index.html`. The frontend makes a request to the `backend-service` and updates the html document.
### router-service
The router service is a NGINX based reverse proxy. The router redirects requests to the appropriate service.
```nginx
location /backend {
     proxy_pass http://backend-service;
 }

 location / {
    proxy_pass http://frontend-service;
 }
```

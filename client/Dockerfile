FROM node:20-alpine3.19 as builder

WORKDIR /client

COPY ./app/package*.json ./

RUN npm install --frozen-package-lock.json

COPY ./app .

# EXPOSE 8002

CMD npm run dev




# FROM node:20-alpine3.19 as builder

# WORKDIR /client

# COPY ./app/package*.json ./

# RUN npm install --frozen-package-lock.json

# COPY ./app .

# CMD npm run dev

# FROM nginx:alpine

# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# Filename: Dockerfile
FROM node:14.17.0-alpine

WORKDIR /mern-docker/server/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "app"]

# Filename: Dockerfile
FROM node:14.17.0-alpine

WORKDIR /mern-docker/client/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

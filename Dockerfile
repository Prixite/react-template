FROM node:16
WORKDIR /opt/source/
COPY package.json package.json
RUN npm install

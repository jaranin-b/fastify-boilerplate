FROM node:14.17-slim

RUN apt-get update
RUN apt-get install -y curl bash git

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install typescript -g
RUN npm install
RUN npm ci --only=production

ADD . /usr/src/app

RUN npm run build

CMD [ "npm", "start" ]
EXPOSE 8080

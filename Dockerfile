# The instructions for the first stage
FROM node:14.17 as builder

COPY . .
RUN npm install typescript -g
RUN npm install
RUN npm ci --only=production
RUN npm run build

# The instructions for second stage
FROM node:14.17

WORKDIR /usr/src/app
COPY --from=builder dist dist

ENV NODE_ENV=production
RUN npm install --production
RUN npm ci --only=production

CMD [ "npm", "start" ]

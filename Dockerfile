FROM node:14-alpine

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli 

COPY package.json package-lock.json ./
RUN npm install

CMD [ "npm", "run", "start:dev"]
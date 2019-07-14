# TODO: This file must be populated so reviewer could easily run your app
FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --save

COPY . /usr/src/app

EXPOSE 3000

CMD npm start

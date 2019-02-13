FROM node:10 AS dev

WORKDIR /frontend

COPY . /frontend

RUN npm install

CMD [ "npm", "run", "dev" ]

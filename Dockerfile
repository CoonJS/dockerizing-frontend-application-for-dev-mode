FROM node:10 AS dev
WORKDIR /frontend
COPY . /frontend
RUN npm install -g webpack-dev-server
RUN npm install -g webpack
RUN npm install -g webpack-cli
RUN npm install

CMD [ "npm", "run", "dev" ]

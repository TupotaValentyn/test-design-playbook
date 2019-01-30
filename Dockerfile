FROM node:10.15

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./angular.json ./
COPY ./ts*.json ./

RUN npm run postinstall

COPY server.js ./
COPY ./api ./api

EXPOSE 8000

CMD ["node", "server.js"]

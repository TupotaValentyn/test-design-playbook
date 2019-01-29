FROM node:10.15

WORKDIR /app

COPY package*.json ./
COPY server.js ./
COPY ./dist ./dist
COPY ./api ./api

RUN npm install

EXPOSE 8000

CMD ["node", "server.js"]

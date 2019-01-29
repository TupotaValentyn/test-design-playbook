FROM node:10.15

WORKDIR /app

COPY ./ ./

RUN npm install

EXPOSE 8000

CMD ["node", "server.js"]

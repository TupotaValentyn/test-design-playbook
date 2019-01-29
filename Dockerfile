FROM node:10.15

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

# копіювання фронта
# білд фронта

COPY server.js ./
COPY ./dist ./dist
COPY ./api ./api


EXPOSE 8000

CMD ["node", "server.js"]

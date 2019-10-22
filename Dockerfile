FROM node:10.13.0

RUN npm install -g yarn serve

RUN mkdir app

WORKDIR /app

ADD . .
RUN yarn install && chmod +x ./entrypoint.sh

CMD ["./entrypoint.sh"]

EXPOSE 80

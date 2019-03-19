FROM node:10.15.3-alpine

RUN adduser --disabled-password --gecos '' node-user
USER node-user
WORKDIR /home/node-user/app

EXPOSE 3000

CMD npm run start

FROM node:latest

WORKDIR /home/nextjs/app

COPY front/ .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
FROM node:latest

RUN npm install -g nodemon

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm" ,"run" ,"server"]
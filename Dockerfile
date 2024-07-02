FROM node:10.19.0

WORKDIR /usr/src/app/client

RUN npm install -g @angular/cli@9.1.15

COPY client .

RUN npm install

RUN ng build --prod

WORKDIR /usr/src/app/server

RUN mv /usr/src/app/client/dist /usr/src/app/server

# COPY /usr/src/app/client/dist ./

COPY server/package*.json ./

RUN npm install

COPY server .

EXPOSE 4200

CMD ["npm", "run", "start"]
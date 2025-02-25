FROM node:18
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY . /usr/src/app
RUN npm install 
EXPOSE 3000
CMD ["node", "app.js"]
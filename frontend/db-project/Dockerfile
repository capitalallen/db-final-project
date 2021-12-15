FROM node:14
 
WORKDIR /app1
 
COPY package*.json ./app1/
 
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
EXPOSE 3000

CMD [ "npm", "start" ]
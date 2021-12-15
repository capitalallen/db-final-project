FROM node:16
 
WORKDIR /app1
 
COPY package*.json ./app1
 
RUN npm install
 
COPY . .
EXPOSE 3000

CMD [ "npm", "start" ]
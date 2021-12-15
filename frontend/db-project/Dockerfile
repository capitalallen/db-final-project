FROM node:14
 
WORKDIR /app1
 
COPY package*.json ./app1/
 
RUN npm install
 
COPY . .
EXPOSE 3000

CMD [ "npm", "start" ]
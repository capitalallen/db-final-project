FROM node:14.9
 
WORKDIR /usr/src/app1
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3000
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
CMD [ "npm", "start" ]
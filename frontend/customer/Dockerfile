FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm install react-scripts@3.4.1 -g --silent
EXPOSE 3000
CMD ["npm", "start"]
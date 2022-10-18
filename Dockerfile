FROM node
COPY package.json .
WORKDIR /app
RUN npm install
COPY . ./
EXPOSE 5000
CMD ["node", "index.js"]
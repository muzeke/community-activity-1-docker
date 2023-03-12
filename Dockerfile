FROM node:16

WORKDIR /app1

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4300

CMD ["npm", "run", "dev"]

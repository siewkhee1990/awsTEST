FROM node:17-alpine
WORKDIR /awsTEST
COPY package.json /awsTEST
RUN npm install
COPY . /awsTEST
CMD ["npm", "start"]
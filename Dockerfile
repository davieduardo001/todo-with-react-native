FROM node:alpine

WORKDIR '/app'

COPY package.json yarn.lock ./
RUN yarn install
RUN yarn add @expo/ngrok@^4.1.0
COPY . ./

EXPOSE 19000

CMD ["yarn", "start", "--tunnel"]

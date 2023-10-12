FROM node:14
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn rw build
ENV NODE_ENV=production
CMD ["yarn", "rw", "serve"]

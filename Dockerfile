FROM node:5-wheezy
WORKDIR /app
ADD / /app
RUN npm rebuild
RUN npm run

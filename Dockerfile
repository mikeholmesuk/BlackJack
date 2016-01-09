FROM node:4-onbuild
WORKDIR /app
ADD / /app
RUN npm rebuild
RUN npm run

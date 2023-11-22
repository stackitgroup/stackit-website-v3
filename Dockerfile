# Image source
FROM node:19-alpine

# Docker working directory
WORKDIR /app

COPY . /app

# Then install the NPM module
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "preview"]
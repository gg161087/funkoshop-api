create ".env":
PORT=3000
HOST=localhost
DB_HOST=localhost
DB_NAME=funkoshop
DB_USER=admin
DB_PASSWORD=admin

create "docker-compose.yml":
version: "3.8"
services:
  mysql:
    image: mysql:8.0
    container_name: mysql_funkoshopdb
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: funkoshop
      MYSQL_USER: admin
      MYSQL_PASSWORD: admin
    volumes:
      - ./mysql:/var/lib/mysql
    ports:
      - "3308:3306"

run in terminal:
docker compose up

import funkoshop.sql on mysql docker server on
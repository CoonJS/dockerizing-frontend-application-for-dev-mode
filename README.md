# Оборачиваем frontend приложение в Docker Container

1. Скачиваем [docker](https://docs.docker.com/install/)
2. Устанавливаем [docker-compose](https://docs.docker.com/compose/install/)

Проверяем установку
> docker -v 
> docker-compose -v

Запускаем `frontend` сервис:
> docker-compose up

Для того, чтобы посмотреть список активных контейнеров, выполняем команду:
> docker ps

Открываем [localhost](http://0.0.0.0:8080) и видим приложение, запущенное через `docker-container`

Для остановки `frontend` сервиса, выполняем команду:
> docker-compose stop

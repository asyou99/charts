## Install

1. docker-compose build <br>
2. docker-compose up </br>
3. docker-compose exec php composer install </br>
4. docker-compose exec php cp .env.example .env </br>
5. docker-compose exec php php artisan key:generate </br>
6. add to hosts file line: '127.0.0.1  chart.loc'
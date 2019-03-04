# dziennik_php_backend [English version]
<small>*[README po polsku](README.pl.md)*</small>


heroku config:get DATABASE_URL -a dziennik-php | xargs ./pgweb --url
heroku config:get DATABASE_URL -a dziennik-php | xargs ./pgweb --url --listen 1234


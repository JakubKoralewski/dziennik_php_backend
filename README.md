# dziennik_php_backend [English version]
<small>*[README po polsku](README.pl.md)*</small>

This is branch contains both the frontend and the backend. Deploying two repositories at the same time on Heroku (according to my small Google research) is impossible. That's way (only as a fallback) I copied an old Vue frontend build into this repository; however, it is not used as I am too lazy to copy the dist folder with every commit. Instead only the API is actively used and the frontend is served through its own repository and Netlify.


heroku config:get DATABASE_URL -a dziennik-php | xargs ./pgweb --url
heroku config:get DATABASE_URL -a dziennik-php | xargs ./pgweb --url --listen 1234


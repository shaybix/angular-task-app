


prod-build:
	cd /var/www && git pull origin master
	cd /var/angular-task-app && git pull origin master
	ng build --prod --base-href="https://angular.shaybix.com"
	rm -rf ../www/public/*.js ../www/public/*.json ../www/public/*.html ../www/public/*.css
	cp dist/* ../www/public

	cp dist/index.html ../www/resources/views/index.blade.php


dev-build:
	ng build --base-href="http://angular-task.dev"
	rm -rf ../../xampp/htdocs/laravel-task-app/public/*.js ../../xampp/htdocs/laravel-task-app/public/*.json ../../xampp/htdocs/laravel-task-app/public/*.html ../www/public/*.css
	cp dist/* ../../xampp/htdocs/laravel-task-app/public

	cp dist/index.html ../../xampp/htdocs/laravel-task-app/resources/views/index.blade.php
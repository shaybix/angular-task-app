


prod-build:
	ng build --prod --base-href="https://angular.shaybix.com"
	rm -rf ../www/public/*.js ../www/public/*.json ../www/public/*.html ../www/public/*.css
	cp dist/* ../www/public

	cp dist/index.html ../www/resources/views/index.blade.php


dev-build:
	ng build --base-href="http://angular-task.dev"
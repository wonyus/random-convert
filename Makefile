start-prod:
	docker-compose -f docker-compose.yml up -d
stop-prod:
	docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
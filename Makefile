dev:
	docker-compose up -d

dev-down:
	docker-compose down

server:
	deno task dev

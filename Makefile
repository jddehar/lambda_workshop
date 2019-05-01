
dev:
	sam local start-api

build:
	npm run build

test: build
	npm run test

infrastructure:
	(cd infra && ./deploy.sh)

swagger-start:
	docker run --name swagger-editor -d -p 8080:8080 swaggerapi/swagger-editor

swagger-stop:
	docker stop swagger-editor

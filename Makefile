.PHONY: gorun
gorun:
	go run cmd/manifest_puller.go

.PHONY: install
install:
	npm run install

.PHONY: start
start:
	npm run dev

.PHONY: build
build:
	make install
	npm run build

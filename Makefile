build-docs:
	rm -rf .docz
	npm run build

netlify:
	make build-docs
	cp .netlify/_redirects .docz/dist

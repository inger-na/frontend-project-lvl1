install:
	npm install
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
1:
	brain-games
2:
	brain-even

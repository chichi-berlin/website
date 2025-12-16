CHICHI Public Site
==================



This is the development environment and repository for the website of CHICHI - the bicycle store in 
the heart of Berlin Neukölln. The site can be found under [chichi.berlin](https://chichi.berlin)


## Editor

+   To disable some contents set `draft: true` in 
    -   `_index.md` for a section
    -   `page-name.md` for a page 


## Developer

### How to get started?

__Prerequisites:__

*   Node.js >= 20.0
*   Hugo >= 0.152.0

Or use Docker (recommended for consistent builds).


### Local Development

```sh
npm install
npm start
```

### Docker Development

```sh
# Start development server
docker compose up

# Production build (outputs to ./dist)
docker compose run --rm build
```

### Build Commands

```sh
# Development build
npm run build

# Production build
npm run build:prod
```

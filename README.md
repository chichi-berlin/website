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

*   Node.js >= 24.0
*   NPM >= 11.0
*   Hugo >= 0.152.0


### Local Development

```sh
npm install
npm start
```

If needed, a container runtime may be used to run the development process in
an isolated context (see `./Containerfile` for more details).

### Build Commands

```sh
# Development build
npm run build

# Production build
npm run build:prod
```

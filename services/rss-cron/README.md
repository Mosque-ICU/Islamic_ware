# Docker Node Example
This is a simple example for running a Node.js Server with Docker. 

## Build
```
docker build --tag docker-node-example-image .
```

## Run
```
docker run --rm --name docker-node-example-container --publish 9000:9000 --volume $(pwd):/usr/src/app docker-node-example-image
```

## Test
Open `http://localhost:9000/` in your browser.

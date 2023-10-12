https://docs.docker.com/language/golang/

changes need the server to be rebuilt you can do this with the command

docker build -t docker-go .

and then 

> docker run --publish 8080:8080 docker-go

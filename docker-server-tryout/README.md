# docker-server-tryout

```
wget https://downloads.mongodb.com/compass/mongodb-compass_1.21.2_amd64.deb /tmp/mongo-compass.deb

dpkg -i /tmp/mongo-compass.deb
```

# mongoDB connection string
```
mongodb://root:example@127.0.0.1:27017/test?authSource=admin
```

# docker image
```
# start node graphql middleware
$ ./up_node.sh

# start docker mongodb backend
./up_docker.sh
```
#!/usr/bin/env bash

set -x

docker-compose down

docker volume rm docker-server-tryout_mongo_volume

docker-compose up

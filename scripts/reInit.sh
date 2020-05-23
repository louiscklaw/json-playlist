#!/usr/bin/env bash

set -ex

rm -rf package.json
rm -rf yarn.lock
rm -rf node_modules

npm init -y

yarn add express graphql express-graphql
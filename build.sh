#!/usr/bin/env bash

rm -rf ./dist

tsc -d

cp ./package.json ./dist/package.json

cp ./README.md ./dist/README.md

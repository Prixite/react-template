#!/usr/bin/env bash
docker build --tag react-template .
docker run --rm -it -v $(pwd):/opt/source -p 3000:3000 react-template bash

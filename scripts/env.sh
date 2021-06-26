#!/usr/bin/env bash
docker build --tag react-template .
docker run --rm -it -v $(pwd):/opt/react react-template bash

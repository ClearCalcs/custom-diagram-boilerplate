FROM ubuntu:24.04

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
RUN mkdir -p ${FUNCTION_DIR}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    # NodeJS
    apt-get install -y wget curl && \
    (curl -fsSL https://deb.nodesource.com/setup_18.x | bash) && \
    apt-get install -y nodejs

COPY ./test ${FUNCTION_DIR}
RUN npm install
COPY ./output ${FUNCTION_DIR}/output

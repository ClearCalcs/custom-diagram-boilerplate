FROM ubuntu:24.04

ARG FUNCTION_DIR="/var/task"
WORKDIR ${FUNCTION_DIR}
RUN mkdir -p ${FUNCTION_DIR}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    # Common tools 
    wget curl \
    # Python dependencies
    python3-pip python3-cffi python3-poetry python3-brotli \
    # WeasyPrint dependencies
    libpango-1.0-0 libharfbuzz0b libpangoft2-1.0-0 fonts-open-sans fonts-noto-core && \
    (curl -fsSL https://deb.nodesource.com/setup_18.x | bash) && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install WeasyPrint
ENV POETRY_VIRTUALENVS_IN_PROJECT=true
COPY poetry.lock pyproject.toml /usr/local/lib/weasyprint/
RUN cd /usr/local/lib/weasyprint && \
    poetry install && \
    ln -s $(poetry run which weasyprint) /usr/local/bin/weasyprint

COPY ./test ${FUNCTION_DIR}
RUN npm install
COPY ./output ${FUNCTION_DIR}/output

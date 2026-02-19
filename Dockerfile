FROM registry-1.docker.io/library/node:24-slim

ENV HUGO_VERSION=0.152.2

RUN apt-get update \
    && apt-get install --yes --no-install-recommends wget ca-certificates \
    && ARCH=$(dpkg --print-architecture) \
    wget --quiet --output-document=- \
            "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-${ARCH}.tar.gz" \
        | tar --extract --ungzip --directory /usr/local/bin \
    && apt-get remove --yes wget \
    && apt-get autoremove --yes \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

EXPOSE 3000

CMD ["sh", "-c", "npm install && npm run start"]

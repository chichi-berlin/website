FROM node:20-slim

ENV HUGO_VERSION=0.152.2

RUN apt-get update && apt-get install -y --no-install-recommends wget ca-certificates && \
    ARCH=$(dpkg --print-architecture) && \
    wget -qO- "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${ARCH}.tar.gz" | tar xz -C /usr/local/bin && \
    apt-get remove -y wget && apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

EXPOSE 3000

CMD ["sh", "-c", "npm install && npm run start"]

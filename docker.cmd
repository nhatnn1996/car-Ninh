docker run -d \
    --name postgres-directus-dev \
    -p 5432:5432 \
    -e POSTGRES_PASSWORD=postgres-development-132 \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v /root/backup/postgres-dev:/var/lib/postgresql/data \
    postgres
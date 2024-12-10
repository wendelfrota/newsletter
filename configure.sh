#!/bin/bash

if [ $# -ne 5 ]; then
    echo "$0 database: <name> <user> <password> <host> <dialect>"
    exit 1
fi

touch .env

echo "DB_NAME=$1" >> .env
echo "DB_USER=$2" >> .env
echo "DB_PASS=$3" >> .env
echo "DB_HOST=$4" >> .env
echo "DB_DIALECT=$5" >> .env

echo ".env file created"
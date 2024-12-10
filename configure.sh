#!/bin/bash

if [ $# -ne 6 ]; then
    echo "$0 database: <name> <user> <password> <host> <dialect> <node_env>"
    exit 1
fi

touch .env

echo "DB_NAME=$1" >> .env
echo "DB_USER=$2" >> .env
echo "DB_PASS=$3" >> .env
echo "DB_HOST=$4" >> .env
echo "DB_DIALECT=$5" >> .env
echo "NODE_ENV=$6" >> .env

echo ".env file created"
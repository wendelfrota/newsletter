#!/bin/bash

if [ "$#" -ne 6 ]; then
    echo "Usage: $0 <database_name> <user> <password> <host> <dialect> <node_env>"
    echo "Example: $0 my_database my_user my_password localhost mysql development"
    exit 1
fi

DB_NAME=$1
DB_USER=$2
DB_PASS=$3
DB_HOST=$4
DB_DIALECT=$5
NODE_ENV=$6

{
    echo "DB_NAME=$DB_NAME"
    echo "DB_USER=$DB_USER"
    echo "DB_PASS=$DB_PASS"
    echo "DB_HOST=$DB_HOST"
    echo "DB_DIALECT=$DB_DIALECT"
    echo "NODE_ENV=$NODE_ENV"
} > .env

echo ".env file successfully created"
echo "---------------------------------"
cat .env
echo "---------------------------------"

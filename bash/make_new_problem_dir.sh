#!/bin/bash

# Check if exactly two parameters are provided
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <type> <number>"
  exit 1
fi

# Assign parameters to variables
TYPE=$1
NUMBER=$2

# Define the directory and file paths
TYPE_DIR="src/${TYPE}"
DIR="${TYPE_DIR}/${NUMBER}"
FILE1="${DIR}/${NUMBER}.ts"
FILE2="${DIR}/${NUMBER}.test.ts"

# Check if the TYPE directory exists
if [ ! -d "$TYPE_DIR" ]; then
  echo "Directory $TYPE_DIR does not exist. Creating TYPE directory..."
  mkdir -p "$TYPE_DIR"
fi

# Check if the NUMBER directory exists
if [ ! -d "$DIR" ]; then
  echo "Directory $DIR does not exist. Creating NUMBER directory..."
  mkdir -p "$DIR"
fi

# Create the files
touch "$FILE1" "$FILE2"

# Output success message
echo "Created files:"
echo "$FILE1"
echo "$FILE2"
#!/bin/bash

# Set your CSV file name and SQLite database name
csv_file="./SwiftCloud.csv"
database_name="./dev.db"
table_name="Song"
temp_table="temp_table"

# Check if the CSV file exists
if [ ! -f "$csv_file" ]; then
  echo "CSV file '$csv_file' not found."
  exit 1
fi

# Check if SQLite is installed
if ! command -v sqlite3 &> /dev/null; then
  echo "SQLite is not installed. Please install it."
  exit 1
fi

# Create or open the SQLite database
sqlite3 "$database_name" <<EOF
.mode csv
.import "$csv_file" "$temp_table"
insert into ${table_name} (song,artist,writer,album,year,playsJune,playsJuly,playsAugust) select * from ${temp_table};
select * from ${table_name};
drop table ${temp_table};
.quit
EOF

echo "CSV data from '$csv_file' has been successfully seeded into '$database_name' as '$table_name'."

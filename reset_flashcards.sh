#!/bin/bash

# Define a function to replace the date part using awk
replace_dates_with_awk() {
  awk '
    function replaceDate(line) {
      gsub(/[0-9]{4}-[0-9]{2}-13T/, "2023-09-01T", line)
      return line
    }
    
    /card-next-schedule:: [0-9]{4}-[0-9]{2}-13T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z/ {
      $0 = replaceDate($0)
    }
    
    { print }
  ' "$1" > temp && mv temp "$1"
}

# Find and process files in the specified folder
find /path/to/your/folder -type f -exec bash -c 'replace_dates_with_awk "$0"' {} \;

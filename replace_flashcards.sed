#!/bin/sed -f

# Match lines containing "card-next-schedule::" followed by a date in the specified format
/card-next-schedule:: [0-9]{4}-[0-9]{2}-13T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z/ {
  # Replace the date part with "2023-09-01"
  s/\(card-next-schedule:: [0-9]\{4\}-[0-9]\{2\}\)-13T/\12023-09-01T/
}

import re
from pathlib import Path

folder_path = Path("/path/to/your/folder")

pattern = re.compile(r"card-next-schedule:: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)")

# Replacement string with the new date
replacement = "card-next-schedule:: 2023-09-01T"

# Iterate through all files in the folder
for file_path in folder_path.iterdir():
    # Check if the item is a file (not a subfolder)
    if file_path.is_file():
        with file_path.open('r') as file:
            lines = file.readlines()
        
        with file_path.open('w') as file:
            for line in lines:
                # Use compiled regex to find and replace the date portion
                modified_line = pattern.sub(replacement, line)
                print(modified_line)
                # file.write(modified_line)

print("Date replacement completed.")

import os
import json

def get_papers_json():
    # Get the path of the current file
    current_path = os.path.dirname(__file__)
    # Get the path of the data.json file
    data_path = os.path.join(current_path, "data.json")

    with open(data_path, 'r') as file:
        for line in file:
            yield json.loads(line)

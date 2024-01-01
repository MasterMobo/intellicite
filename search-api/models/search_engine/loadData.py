import os
import json
from kaggle.api.kaggle_api_extended import KaggleApi

def get_papers_json(dataset, file):
    api = KaggleApi()
    api.authenticate()

    os.makedirs(dataset, exist_ok=True)

    # Check if dataset is already downloaded
    if not os.path.exists(os.path.join(dataset, file)):
        print("Downloading dataset...")
        api.dataset_download_files('Cornell-University/arxiv', path=dataset, unzip=True)
        print("Dataset downloaded successfully")

    # Get the path of the data.json file
    final_path = os.path.join(dataset, file)

    with open(final_path, 'r') as file:
        for line in file:
            yield json.loads(line)

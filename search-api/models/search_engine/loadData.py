import os
import json
from kaggle.api.kaggle_api_extended import KaggleApi

def get_papers_json(dataset, file):
    os.environ['KAGGLE_USERNAME'] = "buidangkhoa"
    os.environ['KAGGLE_KEY'] = "495bdf9d087690b2212b0edfc6c10acc"
    # Replace with path of the API key on local
    os.environ["KAGGLE_CONFIG_DIR"] = "C:/Users/Admin/kaggle/kaggle.json"

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

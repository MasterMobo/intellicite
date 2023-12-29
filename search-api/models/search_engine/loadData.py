import os
import json
from kaggle.api.kaggle_api_extended import KaggleApi

def get_papers_json():
    os.environ['KAGGLE_USERNAME'] = "buidangkhoa"
    os.environ['KAGGLE_KEY'] = "495bdf9d087690b2212b0edfc6c10acc"
    # Replace path with the actual path of the API key
    os.environ["KAGGLE_CONFIG_DIR"] = "C:/Users/Admin/kaggle/kaggle.json"

    filename = 'arxiv-metadata-oai-snapshot.json'

    # Get path to current directory
    path = os.path.dirname(os.path.realpath(__file__))

    api = KaggleApi()
    api.authenticate()

    dataset_path = os.path.join(path, 'data')
    os.makedirs(dataset_path, exist_ok=True)

    # Check if dataset is already downloaded
    if not os.path.exists(os.path.join(dataset_path, filename)):
        print("Downloading dataset...")
        api.dataset_download_files('Cornell-University/arxiv', path=dataset_path, unzip=True)
        print("Dataset downloaded successfully")

    # Get the path of the data.json file
    final_path = os.path.join(dataset_path, filename)

    with open(final_path, 'r') as file:
        for line in file:
            yield json.loads(line)

    # Delete the file after reading
    os.remove(final_path)

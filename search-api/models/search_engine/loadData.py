import requests
import json

def get_papers_json():
    # need new link of the json metadata file
    url = "https://datasets-server.huggingface.co/rows?dataset=scientific_papers&config=arxiv&split=train&offset=0&length=100"     
    try:
        # Make a GET request to the URL
        response = requests.get(url)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()["rows"]
            data = [entry["row"] for entry in data]

            return data

    except Exception as e:
        print(f"An error occurred: {e}")

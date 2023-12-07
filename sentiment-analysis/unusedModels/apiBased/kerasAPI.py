import requests
import json
url = "https://keras-io-bert-semantic-similarity.hf.space/api/predict"

# Modify the payload to match the structure from Postman
payload = {
    "data": [
        "The constant demand for productivity has made people more industrious, driving them to enhance time-management skills and adopt innovative technologies.",
        "The people of the 21st century are hardworking due to the competitive environment, where success often hinges on one's ability to navigate challenges, adapt to rapid changes, and consistently strive for excellence. The relentless pursuit of goals is fueled by a globalized world that demands continuous innovation and a strong work ethic. In this era, individuals are motivated not only by personal ambition but also by the necessity to stay relevant and contribute meaningfully in a dynamic and ever-evolving professional landscape."
    ]
}

# Make the POST request
response = requests.post(url, json=payload)

# Check the response status and print the result
if response.status_code == 200:
    # Format the JSON response for readability
    formatted_response = json.dumps(response.json(), indent=2)
    print(formatted_response)
else:
    print(f"Error: {response.status_code} - {response.text}")
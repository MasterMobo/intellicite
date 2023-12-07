import requests
import asyncio
import time
import json  # Import the json module

# This model is the same as robertaTransformers
# This is its API version, it may take about 5s when it is first loaded
start_time = time.time()
API_URL = "https://api-inference.huggingface.co/models/roberta-large-mnli"
headers = {"Authorization": "Bearer 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"}

async def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()



async def main():
    premise = "The people of this century is as lazy and lax as ever"

    hypothesis = "The people of the 21st century are hardworking due to the competitive environment, where success often hinges on one's ability to navigate challenges, adapt to rapid changes, and consistently strive for excellence."

    output = await query({
        "inputs": f"premise: {premise} hypothesis: {hypothesis}",
    })

    # Format the JSON response for readability
    formatted_output = json.dumps(output, indent=2)
    print(formatted_output)

    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f"Elapsed time: {elapsed_time} seconds")

# Run the event loop
asyncio.run(main())

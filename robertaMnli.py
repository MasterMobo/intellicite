import requests
import asyncio
import time
import json  # Import the json module

start_time = time.time()
API_URL = "https://api-inference.huggingface.co/models/roberta-large-mnli"
headers = {"Authorization": "Bearer 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"}

async def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()



async def main():
    premise = "The constant demand for productivity has made people more industrious, driving them to enhance time-management skills and adopt innovative technologies."

    hypothesis = "The people of the 21st century are hardworking due to the competitive environment, where success often hinges on one's ability to navigate challenges, adapt to rapid changes, and consistently strive for excellence. The relentless pursuit of goals is fueled by a globalized world that demands continuous innovation and a strong work ethic. In this era, individuals are motivated not only by personal ambition but also by the necessity to stay relevant and contribute meaningfully in a dynamic and ever-evolving professional landscape."

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

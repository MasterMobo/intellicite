import requests
BASEURL = "127.0.0.1"
PORT = 5000
BASEURL_PREFIX = "/api/v1"
url = f"{BASEURL}:{PORT}{BASEURL_PREFIX}/process"
max_chars = 500
user_input = input("Enter something here: "[:max_chars])

input_data = {"user_input": user_input}

response = requests.post(url, json=input_data)

if response.status_code == 200:
    results = response.json()['results']
    for result in results:
        print(f"PAPER INDEX: {result['paper_index']}:")
        print(f"ABSTRACT: {result['abstract']}")
        print(f"HIGHLIGHTS: {result['highlights']}")
        print(f"SENTIMENT: {result['sentiment']}")
        print("--------------------------------------------------")
else:
    print(f"Error: {response.status_code}, {response.json()}")
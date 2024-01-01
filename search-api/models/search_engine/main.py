# main.py:
from .connectES import connect_elasticsearch
from .paperHandler import paperHandler

index_mapping = {
    "mappings": {
        "properties": {
            "id": {"type": "text"},
            "authors": {"type": "text"},
            "title": {"type": "text"},
            "abstract": {"type": "text"},
            "doi": {"type": "text"},
            "categories": {"type": "text"},
            "journal-ref": {"type": "text"},
            "submitter": {"type": "text"},
        }
    }
}

class SearchEngine:
    def __init__(self):
        self.es_client = connect_elasticsearch()
        self.index_name = "scientific_papers"
        self.index_mapping = index_mapping
        self.max_search_results = 50

        if not self.es_client.indices.exists(index=self.index_name):
            self.create_index()
            self.paper_manager = paperHandler(self.es_client, self.index_name, self.index_mapping)
            self.paper_manager.index_papers()

    def create_index(self):
        print("Creating index...")
        self.es_client.indices.create(index=self.index_name, body=self.index_mapping, ignore=400)
        print("Index created")

    def search_papers(self, user_query):
        search_query = {
            "query": {
                "multi_match": {
                    "query": user_query,
                    "fields": ["abstract", "authors", "title"]
                }
            }
        }

        results = self.es_client.search(index=self.index_name, body=search_query, size=self.max_search_results)
        return [result["_source"] for result in results['hits']['hits']]

if __name__ == "__main__":
    search = SearchEngine()

    # Call the search_papers method with a sample query
    results = search.search_papers("machine learning")
    for line in results:
        print(line)

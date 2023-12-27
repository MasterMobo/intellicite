from .connectES import connect_elasticsearch
from .loadData import get_papers_json

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
            self.index_papers()

    def create_index(self):
        print("Creating index...")
        self.es_client.indices.create(index=self.index_name, body=self.index_mapping, ignore=400)
        print("Index created")

    def index_papers(self, batch_size=1000):
        print("Indexing papers...")
        papers_generator = get_papers_json()

        papers_batch = []
        for paper in papers_generator:
            papers_batch.append({"index": {"_index": self.index_name}})
            papers_batch.append(paper)

            if len(papers_batch) >= 2 * batch_size:
                self.es_client.bulk(body=papers_batch, refresh=True)
                papers_batch = []

        # Index any remaining papers
        if papers_batch:
            self.es_client.bulk(body=papers_batch, refresh=True) 
        
        print("Finished indexing papers")

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

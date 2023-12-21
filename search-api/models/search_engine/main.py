from .connectES import connect_elasticsearch
from .loadData import get_papers_json

index_mapping = {
    "mappings": {
        "properties": {
            "id": {"type": "string"},
            "submitter": {"type": "string"},
            "authors": {"type": "string"},
            "title": {"type": "string"},
            "comments": {"type": "string"},
            "journal-ref": {"type": "string"},
            "doi": {"type": "string"},
            "report-no": {"type": "string"},
            "categories": {"type": "string"},
            "license": {"type": "string"},
            "abstract": {"type": "string"},
            "versions": {
                "type": "nested",
                "properties": {
                    "version": {"type": "string"},
                    "created": {"type": "string"}
                }
            },
            "update_date": {"type": "string"},
            "authors_parsed": {
                "type": "nested",
                "properties": {
                    "first_name": {"type": "string"},
                    "middle_name": {"type": "string"},
                    "last_name": {"type": "string"}
                }
            }
        }
    }
}

class SearchEngine:
    def __init__(self):
        self.es_client = connect_elasticsearch()
        self.index_name = "scientific_papers"
        self.index_mapping = index_mapping

    def index_papers(self):
        papers = get_papers_json()
        self.es_client.indices.create(index=self.index_name, body=self.index_mapping, ignore=400)

        for paper in papers:
            self.es_client.index(index=self.index_name, body=paper)        

    def search_papers(self, user_query):
        if not self.es_client.indices.exists(index=self.index_name):
            self.index_papers()
            
        search_query = {
            "query": {
                "multi_match": {
                    "query": user_query,
                    "fields": ["title", "abstract"]
                }
            }
        }

        results = self.es_client.search(index=self.index_name, body=search_query)
        return [result["_source"] for result in results['hits']['hits']]

from .connectES import connect_elasticsearch
from .loadData import get_papers_json

index_mapping = {
    "mappings": {
        "properties": {
            "abstract": {"type": "text"},
            "article": {"type": "text"},
            "section_names": {"type": "keyword"}
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
                    "fields": ["abstract", "article"]
                }
            }
        }

        results = self.es_client.search(index=self.index_name, body=search_query)
        return [result["_source"] for result in results['hits']['hits']]

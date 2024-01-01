from loadData import get_papers_json
from connectES import connect_elasticsearch
import os

class paperHandler:
    def __init__(self, es_client, index_name, index_mapping):
        self.es_client = es_client
        self.index_name = index_name
        self.index_mapping = index_mapping
        self.dataset = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'data')
        self.file = 'arxiv-metadata-oai-snapshot.json'

    def index_papers(self, batch_size=1000):
        print("Indexing papers...")
        papers_generator = get_papers_json(self.dataset, self.file)

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

        # Delete the file after indexing
        os.remove(os.path.join(self.dataset, self.file))

from elasticsearch import Elasticsearch

import time
from elasticsearch import Elasticsearch, exceptions

def connect_elasticsearch():
    print('Connecting to Elasticsearch...')
    _es = None
    while _es is None:
        try:
            _es = Elasticsearch("http://es01:9200")
            if _es.ping():
                print('Connected to Elasticsearch!')
            else:
                print('Could not connect! Trying again in 5 seconds.')
                _es = None
        except exceptions.ConnectionError:
            print('Elasticsearch connection failed. Retrying in 5 seconds.')
        time.sleep(5)
    return _es
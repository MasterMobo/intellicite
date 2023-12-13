from elasticsearch import Elasticsearch

def connect_elasticsearch():
    _es = Elasticsearch("http://es01:9200")

    if _es.ping():
        print('Connected to Elasticsearch!')
    else:
        print('Could not connect!')

    return _es
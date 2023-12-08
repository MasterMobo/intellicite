from nltk.corpus import stopwords

def loadStopWords():
    stop_words = set(stopwords.words('english'))
    return stop_words
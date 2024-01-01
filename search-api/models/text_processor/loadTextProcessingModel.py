import spacy

def loadTextProcessingModel():
    # Load the spaCy English model with word embeddings
    nlp = spacy.load("en_core_web_md")
    return nlp

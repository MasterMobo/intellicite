from .loadTextProcessingModel import loadTextProcessingModel
from .loadLemmatizer import loadLemmatizer
from .loadStopWords import loadStopWords
import re

class TextProcessor:
    def __init__(self):
        self.model = loadTextProcessingModel()
        self.lemmatizer = loadLemmatizer()
        self.stop_words = loadStopWords()
    
    def lemmatize(self, token):
        return self.lemmatizer.lemmatize(token)

    def get_tokens(self, text):
        # Convert to lowercase
        text = text.lower()

        # Remove special characters
        text = re.sub(r'[^a-zA-Z0-9\s]', '', text)

        # Remove URLs
        text = re.sub(r'http\S+', '', text)

        # Tokenize using spaCy
        doc = self.model(text)
        tokens = [token.text for token in doc]

        # Remove stop words
        tokens = [token for token in tokens if token.lower() not in self.stop_words]

        # Lemmatization (reducing words into base form)
        tokens = [self.lemmatize(token) for token in tokens]

        return tokens
    


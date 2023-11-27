from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import re

import spacy

# Load English tokenizer, tagger, parser, NER, and word vectors
nlp = spacy.load("en_core_web_sm")

def preprocess_text(text):
    # Convert to lowercase
    text = text.lower()

    # Remove special characters
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)

    # Remove URLs
    text = re.sub(r'http\S+', '', text)

    # Tokenize using spaCy
    doc = nlp(text)
    tokens = [token.text for token in doc]

    # Remove stop words
    stop_words = set(stopwords.words('english'))
    tokens = [token for token in tokens if token.lower() not in stop_words]

    # Lemmatization (reducing words into base form)
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(token) for token in tokens]

    return tokens

# Example usage:
user_input = "Text processing in Python is interesting and important for NLP tasks. Check out https://example.com for more info!"
preprocessed_input = preprocess_text(user_input)
print(preprocessed_input)

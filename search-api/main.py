from text_preprocessing import *
from search import *

userQuery = "Text processing in Python is interesting and important for NLP tasks. Check out https://example.com for more info!"

keywords = preprocess_text(userQuery)

search_papers(keywords.join(" "))
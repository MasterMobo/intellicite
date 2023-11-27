import re
import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Word Embeddings (e.g., spaCy) with Cosine Similarity:

# Pros:
# Captures semantic relationships, including synonyms.
# Performs well on larger and diverse datasets.

# Cons:
# Requires pre-trained embeddings, which can be large in size.
# Computationally more intensive than TF-IDF.

# Sample academic papers data
papers = [
    {
        'title': 'Machine Learning in Healthcare',
        'abstract': 'This paper explores the applications of machine learning in healthcare.'
    },
    {
        'title': 'Natural Language Processing Techniques',
        'abstract': 'The study investigates various techniques in natural language processing.'
    },
    # Add more papers as needed
]

# Load the spaCy English model with word embeddings
nlp = spacy.load("en_core_web_md")

def preprocess_text(text):
    # Simple text preprocessing (lowercasing and removing non-alphanumeric characters)
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s]', '', text)
    return text

def calculate_paper_similarity(query, paper):
    # Calculate similarity between user query and paper content
    query_embedding = nlp(query).vector
    paper_embedding = nlp(paper['title'] + ' ' + paper['abstract']).vector

    # Calculate cosine similarity between the query and paper embeddings
    similarity_score = cosine_similarity([query_embedding], [paper_embedding])[0][0]

    return similarity_score

def sort_papers_by_relevance(query, papers):
    # Calculate similarity scores for each paper
    similarity_scores = [(paper, calculate_paper_similarity(query, paper)) for paper in papers]

    # Sort papers by similarity score in descending order
    sorted_papers = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

    # Return sorted papers
    return [paper[0] for paper in sorted_papers]

# Example usage
user_query = "applications of machine learning"
sorted_papers = sort_papers_by_relevance(user_query, papers)

# Display sorted papers
for idx, paper in enumerate(sorted_papers, start=1):
    print(f"{idx}. {paper['title']} - Similarity Score: {calculate_paper_similarity(user_query, paper):.2f}")

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# TF-IDF with Cosine Similarity:

# Pros:
# Simple and interpretable.
# Effective for smaller datasets.
# Performs well when the focus is on the overall content similarity.

# Cons:
# Does not capture word semantics and relationships (e.g., synonyms) well.
# May not perform optimally on very large and diverse datasets.


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

def sort_papers_by_relevance(query, papers):
    # Combine title and abstract into a single text for each paper
    paper_texts = [paper['title'] + ' ' + paper['abstract'] for paper in papers]

    # Add the user query to the list
    paper_texts.append(query)

    # Use TfidfVectorizer to convert text into TF-IDF features
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(paper_texts)

    # Calculate cosine similarity between the user query and each paper
    similarity_scores = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])

    # Sort papers by similarity score in descending order
    sorted_papers_indices = similarity_scores.argsort()[0][::-1]
    sorted_papers = [papers[i] for i in sorted_papers_indices]

    # Return sorted papers
    return sorted_papers

# Example usage
user_query = "machine learning in healthcare applications"
sorted_papers = sort_papers_by_relevance(user_query, papers)

# Display sorted papers
for idx, paper in enumerate(sorted_papers, start=1):
    print(f"{idx}. {paper['title']}")

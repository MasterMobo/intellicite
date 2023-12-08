from sklearn.metrics.pairwise import cosine_similarity

class ResultSorter:
    def __init__(self, model):
        self.model = model
    
    def get_embedding(self, text):
        return self.model(text).vector

    def calculate_paper_similarity(self, query, paper):
        # Calculate similarity between user query and paper content
        query_embedding = self.get_embedding(query)
        paper_embedding = self.get_embedding(paper['abstract'])

        # Calculate cosine similarity between the query and paper embeddings
        similarity_score = cosine_similarity([query_embedding], [paper_embedding])[0][0]

        return similarity_score

    def sort_papers_by_relevance(self, query, papers):
        # Calculate similarity scores for each paper
        similarity_scores = [(paper, self.calculate_paper_similarity(query, paper)) for paper in papers]

        # Sort papers by similarity score in descending order
        sorted_papers = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

        # Return sorted papers
        return [paper[0] for paper in sorted_papers]
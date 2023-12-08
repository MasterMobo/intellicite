from .loadDataSet import loadDataSet

class SearchEngine:
    def __init__(self):
        self.dataset = loadDataSet()

    def search_papers(self, keyword, result_limit=20, word_limit=100):
        matching_papers = []

        # Iterate over the dataset
        for example in self.dataset['train']:
            abstract = example['abstract'].lower()
            article = example['article'].lower()

            # Check if the keyword is present
            if keyword.lower() in abstract or keyword.lower() in article:
                # Truncate text and add to results
                truncated_abstract = self.truncate_text(abstract, word_limit)
                truncated_article = self.truncate_text(article, word_limit)
                matching_papers.append({
                    'abstract': truncated_abstract,
                    'article': truncated_article
                })

            # Limit the number of results
            if len(matching_papers) >= result_limit:
                break

        return matching_papers
    
    # Truncate text to a word limit and add "..."
    def truncate_text(self, text, word_limit):
        word = text.split()[:word_limit]
        truncated_text = ' '.join(word)
        if len(word) == word_limit:
            truncated_text += "..."
        return truncated_text
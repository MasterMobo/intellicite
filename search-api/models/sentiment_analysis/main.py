from .loadSentimentModel import loadSentimentModel
import torch
from torch.nn.functional import softmax

class SentimentAnalyzer:
    def __init__(self) -> None:
        self.tokenizer, self.model = loadSentimentModel()
    
    def get_sentiment_score(self, premise, hypothesis):
        print(premise, type(premise))
        print(hypothesis, type(hypothesis))
        # Tokenize input
        input_ids = self.tokenizer.encode(premise, hypothesis, return_tensors="pt")

        # Make predictions
        with torch.no_grad():
            logits = self.model(input_ids).logits

        # Apply softmax to obtain probabilities
        probs = softmax(logits, dim=1)

        # Get the labels and scores
        labels = ["CONTRADICTION", "NEUTRAL", "ENTAILMENT"]
        results = [{"label": label, "score": score.item()} for label, score in zip(labels, probs[0])]

        return results
    
    def analyze_papers_sentiment(self, user_input, papers):
        for paper in papers:
            filtered_sentences = []
            token_count = 0
            for sentence in paper["highlights"]:
                token_count += len(self.tokenizer.tokenize(sentence))

                if(token_count <= 514):
                    filtered_sentences.append(sentence)
            paper["sentiment"] = self.get_sentiment_score(user_input, " ".join(filtered_sentences))
            print(paper["sentiment"])
        print(papers)
        return papers
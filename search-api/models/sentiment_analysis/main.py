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
            # Token limit
            token_limit = 514

            # Initialize variables
            truncated_text = ""
            current_token_count = 0

            # Iterate through sentences until the total token count is less than or equal to the limit
            for sentence in paper["highlights"]:
                # Remove "@xmath", "@xcite", and "\n" from the sentence
                cleaned_sentence = sentence.replace('@xmath', '').replace('@xcite', '').replace('\n', '')
                
                sentence_tokens = len(cleaned_sentence.split())
                
                if current_token_count + sentence_tokens <= token_limit:
                    truncated_text += cleaned_sentence + " "
                    current_token_count += sentence_tokens
                else:
                    break

            paper["sentiment"] = self.get_sentiment_score(user_input, truncated_text)
        return papers
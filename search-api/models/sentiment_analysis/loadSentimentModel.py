import torch
from torch.nn.functional import softmax
from transformers import AutoTokenizer, RobertaForSequenceClassification

def loadSentimentModel():
    # Load tokenizer and model
    tokenizer = AutoTokenizer.from_pretrained("roberta-large-mnli")
    model = RobertaForSequenceClassification.from_pretrained("roberta-large-mnli")

    return tokenizer, model
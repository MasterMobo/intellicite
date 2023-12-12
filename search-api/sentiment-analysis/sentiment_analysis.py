import torch
from torch.nn.functional import softmax
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# Load tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("roberta-large-mnli")
model = AutoModelForSequenceClassification.from_pretrained("roberta-large-mnli")

# Sample input
premise = "The people of this century are as lazy and lax as ever"
hypothesis = "The people of the 21st century are hardworking due to the competitive environment, where success often hinges on one's ability to navigate challenges, adapt to rapid changes, and consistently strive for excellence."

# Tokenize input
input_ids = tokenizer.encode(premise, hypothesis, return_tensors="pt")

# Make predictions
with torch.no_grad():
    logits = model(input_ids).logits

# Apply softmax to obtain probabilities
probs = softmax(logits, dim=1)

# Get the labels and scores
labels = ["CONTRADICTION", "NEUTRAL", "ENTAILMENT"]
results = [{"label": label, "score": score.item()} for label, score in zip(labels, probs[0])]

# Print the results
print(results)

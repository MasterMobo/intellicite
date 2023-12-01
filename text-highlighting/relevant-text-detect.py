# Import the NLTK library
import nltk

# Define a paragraph of text
paragraph = "Natural language processing (NLP) is a specialized field for analysis and generation of human languages. Human languages, rightly called natural language, are highly context-sensitive and often ambiguous in order to produce a distinct meaning. (Remember the joke where the wife asks the husband to \"get a carton of milk and if they have eggs, get six,\" so he gets six cartons of milk because they had eggs.) NLP provides the ability to comprehend natural language input and produce natural language output appropriately."

# Define a list of keywords
keywords = ["natural language"]

# Tokenize the paragraph into sentences
sentences = nltk.sent_tokenize(paragraph)

# Loop through the sentences and check if they contain any of the keywords
for sentence in sentences:
    # Convert the sentence to lower case
    sentence = sentence.lower()
    # Loop through the keywords
    for keyword in keywords:
        # Check if the keyword is in the sentence
        if keyword in sentence:
            # Print the sentence
            print(sentence)
            # Break the inner loop
            break

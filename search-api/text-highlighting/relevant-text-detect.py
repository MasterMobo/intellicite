# Import the spacy library
import spacy

# Load the en_core_web_sm model
nlp = spacy.load("en_core_web_sm")

# Define a paragraph of text
paragraph = "Natural language processing (NLP) is a specialized field for analysis and generation of human languages. Human languages, rightly called natural language, are highly context-sensitive and often ambiguous in order to produce a distinct meaning. (Remember the joke where the wife asks the husband to \"get a carton of milk and if they have eggs, get six,\" so he gets six cartons of milk because they had eggs.) NLP provides the ability to comprehend natural language input and produce natural language output appropriately."

# Ask the user to enter a list of keywords separated by commas
print("Please enter a list of keywords separated by commas:")
# Read the user input and split it by commas
keywords = input().split(",")

# Process the paragraph with spacy
doc = nlp(paragraph)

# Loop through the sentences and check if they contain any of the keywords or similar words
for sent in doc.sents:
    # Loop through the keywords
    for keyword in keywords:
        # Strip any whitespace from the keyword
        keyword = keyword.strip()
        # Process the keyword with spacy
        keyword_doc = nlp(keyword)
        # Loop through the words in the sentence
        for word in sent:
            # Check if the word and the keyword have the same lemma (base form)
            if word.lemma_ == keyword_doc[0].lemma_:
                # Print the sentence
                print(sent.text)
                # Break the inner loops
                break

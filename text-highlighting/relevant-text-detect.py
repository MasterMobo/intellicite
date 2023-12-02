# Import the NLTK and gensim libraries
import nltk
import gensim

filename='GoogleNews-vectors-negative300.bin.gz'

# Load a pre-trained word2vec model
model = gensim.models.KeyedVectors.load_word2vec_format(filename, binary=True)

# Define a paragraph of text
paragraph = "Natural language processing (NLP) is a specialized field for analysis and generation of human languages. Human languages, rightly called natural language, are highly context-sensitive and often ambiguous in order to produce a distinct meaning. (Remember the joke where the wife asks the husband to \"get a carton of milk and if they have eggs, get six,\" so he gets six cartons of milk because they had eggs.) NLP provides the ability to comprehend natural language input and produce natural language output appropriately."

# Ask the user to enter a list of keywords separated by commas
print("Please enter a list of keywords separated by commas:")
# Read the user input and split it by commas
keywords = input().split(",")

# Define a similarity threshold
threshold = 0.8

# Tokenize the paragraph into sentences
sentences = nltk.sent_tokenize(paragraph)

# Loop through the sentences and check if they contain any of the keywords or similar words
for sentence in sentences:
    # Convert the sentence to lower case
    sentence = sentence.lower()
    # Tokenize the sentence into words
    words = nltk.word_tokenize(sentence)
    # Loop through the keywords
    for keyword in keywords:
        # Strip any whitespace from the keyword
        keyword = keyword.strip()
        # Loop through the words in the sentence
        for word in words:
            # Check if the word and the keyword are in the model's vocabulary
            if word in model and keyword in model:
                # Calculate the cosine similarity between the word and the keyword
                similarity = model.similarity(word, keyword)
                # Check if the similarity is above the threshold
                if similarity > threshold:
                    # Print the sentence
                    print(sentence)
                    # Break the inner loops
                    break

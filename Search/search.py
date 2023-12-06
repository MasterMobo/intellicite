from datasets import load_dataset

# Load the dataset
dataset = load_dataset('scientific_papers', 'arxiv')

# Truncate text to a word limit and add "..."
def truncate_text(text, word_limit):
    word = text.split()[:word_limit]
    truncated_text = ' '.join(word)
    if len(word) == word_limit:
        truncated_text += "..."
    return truncated_text

# Search for papers
def search_papers(keyword, result_limit=20, word_limit=100):
    matching_papers = []

    # Iterate over the dataset
    for example in dataset['train']:
        abstract = example['abstract'].lower()
        article = example['article'].lower()

        # Check if the keyword is present
        if keyword.lower() in abstract or keyword.lower() in article:
            # Truncate text and add to results
            truncated_abstract = truncate_text(abstract, word_limit)
            truncated_article = truncate_text(article, word_limit)
            matching_papers.append({
                'abstract': truncated_abstract,
                'article': truncated_article
            })

        # Limit the number of results
        if len(matching_papers) >= result_limit:
            break

    return matching_papers

# User input
input = input("Enter a keyword to search for papers: ")

# Search function
matching_papers = search_papers(input)

# Print the matching papers
if matching_papers:
    print(f"Papers containing the keyword '{input}':")
    print("=" * 50)
    for i, paper in enumerate(matching_papers, start=1):
        print(f"{i}. Abstract: {paper['abstract']}")
        print(f"   Article: {paper['article']}")
        print("=" * 50)  # Separate the results
else:
    print(f"No papers found.")

import tensorflow as tf
import tensorflow_datasets as tfds

new_data_dir = 'D:/Hoang/search'

# Load the scientific papers dataset
ds, info = tfds.load('scientific_papers', split='train', shuffle_files=True, with_info=True, data_dir = new_data_dir)

# Verify that the loaded object is a tf.data.Dataset
assert isinstance(ds, tf.data.Dataset)

# Example: Text search based on user input
def search_papers(keyword):
    matching_papers = []
    for paper in ds:
        abstract = example['abstract'].numpy().decode('utf-8').lower()
        article = example['article'].numpy().decode('utf-8').lower()
        section_names = example['section_names'].numpy().decode('utf-8').lower()

        # Check if the keyword is present in any of the features
        if keyword.lower() in abstract or keyword.lower() in article or keyword.lower() in section_names:
            matching_papers.append(paper)

    return matching_papers

# User input for the search keyword
user_input = input("Enter a keyword to search for papers: ")

# Search function
matching_papers = search_papers(user_input)

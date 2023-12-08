from datasets import load_dataset

def loadDataSet():
    # Load the dataset
    dataset = load_dataset('scientific_papers', 'arxiv')
    return dataset

class TextHighlighter:
    def __init__(self, model, text_processor):
        self.model = model
        self.text_processor = text_processor
    
    def get_sentences(self, text):
        # Process the paragraph with spacy
        doc = self.model(text)
        return doc.sents
    
    def get_highlighted_sentences(self, keywords, text):
        result = []


        for sentence in self.get_sentences(text):
            if self.sentence_contains_keywords(sentence.text, keywords):
                result.append(sentence.text)
    
        # # Loop through the words in the sentence
        #     for word in sent:
        #     # Loop through the keywords
        #         for keyword in keywords:
        #             # Check if the word and the keyword have the same lemma (base form)
        #             if word.lemma_ == keyword:
        #                 result.append(sent.text)
        #                 break
        
        return result
    
    def sentence_contains_keywords(self, sentence, keywords):
        sentence_keywords = self.text_processor.get_tokens(sentence)
        set1 = set(sentence_keywords)
        set2 = set(keywords)

        return bool(set1.intersection(set2))

    def highlight_information(self, keywords, papers):
        for paper in papers:
            paper["highlights"] = self.get_highlighted_sentences(keywords, paper["abstract"])

        return papers

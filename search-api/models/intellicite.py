from .text_processor.main import TextProcessor
from .search_engine.main import SearchEngine
from .result_sorter.main import ResultSorter
from .text_highlighter.main import TextHighlighter
from .sentiment_analysis.main import SentimentAnalyzer

class IntelliCite:
    def __init__(self) -> None:
        self.text_processor = TextProcessor()
        self.search_engine = SearchEngine()
        self.result_sorter = ResultSorter(self.text_processor.model)
        self.text_highlighter = TextHighlighter(self.text_processor.model, self.text_processor)
        self.sentiment_analyzer = SentimentAnalyzer()

    def process(self, user_input: str):
        print(f"Processing user input: {user_input}")

        print("Processing keywords...")
        keywords = self.text_processor.get_tokens(user_input)
        print("Keywords: ", keywords)

        print("Searching papers...")
        papers = self.search_engine.search_papers(" ".join(keywords))
        print(f"Found {len(papers)} results")

        print("Sorting papers...")
        sorted_papers = self.result_sorter.sort_papers_by_relevance(user_input, papers)

        print("Highlighting papers...")
        highlighted_papers = self.text_highlighter.highlight_information(keywords, sorted_papers)
        
        print("Analyzing sentiment...")
        sentiment_analysis = self.sentiment_analyzer.analyze_papers_sentiment(user_input, highlighted_papers)
        
        print("Done!")
        return sentiment_analysis

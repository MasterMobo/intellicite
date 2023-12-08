from .text_processor.main import TextProcessor
from .search_engine.main import SearchEngine
from .result_sorter.main import ResultSorter
from .text_highlighter.main import TextHighlighter


class IntelliCite:
    def __init__(self) -> None:
        self.text_processor = TextProcessor()
        self.search_engine = SearchEngine()
        self.result_sorter = ResultSorter(self.text_processor.model)
        self.text_highlighter = TextHighlighter(self.text_processor.model, self.text_processor)


    def process(self, user_input: str):
        keywords = self.text_processor.get_tokens(user_input)
        papers = self.search_engine.search_papers(" ".join(keywords))
        sorted_papers = self.result_sorter.sort_papers_by_relevance(user_input, papers)
        highlighted_papers = self.text_highlighter.highlight_information(keywords, sorted_papers)
        return highlighted_papers

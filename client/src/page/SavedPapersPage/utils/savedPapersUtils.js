const findPapers = (papers, query) => {
    const results = papers.filter((paper) => {
        return (
            paper.title.toLowerCase().includes(query.toLowerCase()) ||
            paper.authors.toLowerCase().includes(query.toLowerCase()) ||
            paper.abstract.toLowerCase().includes(query.toLowerCase()) ||
            paper.userQuery.toLowerCase().includes(query.toLowerCase()) ||
            paper.highlights.some((highlight) =>
                highlight.toLowerCase().includes(query.toLowerCase())
            )
        );
    });
    return results;
};

const sortPapersByRecency = (papers, asc = true) => {
    return papers.sort((a, b) => {
        if (asc) {
            return new Date(b.saveTime) - new Date(a.saveTime);
        } else {
            return new Date(a.saveTime) - new Date(b.saveTime);
        }
    });
};

export { findPapers, sortPapersByRecency };

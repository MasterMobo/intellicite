// This file contains sample data, remove in production

const papers = [
    {
        id: 1,
        title: "Advancements in Artificial Intelligence",
        authors: ["John Smith", "Emily Johnson"],
        abstract:
            "This paper explores the latest advancements in artificial intelligence, focusing on machine learning algorithms and their applications in various domains.",
        highlights: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum inventore quod debitis libero explicabo maiores consectetur dignissimos? Vitae corrupti expedita, saepe ipsam eveniet sapiente tenetur eius sunt culpa ducimus",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum inventore quod debitis libero explicabo maiores consectetur dignissimos? Vitae corrupti expedita, saepe ipsam eveniet sapiente tenetur eius sunt culpa ducimus",
        ],
        url: "https://www.google.com",
        sentiment: [
            {
                label: "positive",
                score: 0.7,
            },
            {
                label: "negative",
                score: 0.1,
            },
            {
                label: "neutral",
                score: 0.2,
            },
        ],
        tags: ["Machine Learning", "Artificial Intelligence", "Innovation"],
        journal: "Journal of AI Research",
        relevance: 0.92,
        doi: "10.1234/1234.1234",
    },
    {
        id: 2,
        title: "Bioinformatics and Genomic Data Analysis",
        authors: ["Mary Brown", "Robert Johnson"],
        abstract:
            "This paper presents a comprehensive analysis of bioinformatics techniques for processing and interpreting genomic data, with a focus on personalized medicine.",
        highlights: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum inventore quod debitis libero explicabo maiores consectetur dignissimos? Vitae corrupti expedita, saepe ipsam eveniet sapiente tenetur eius sunt culpa ducimus",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum inventore quod debitis libero explicabo maiores consectetur dignissimos? Vitae corrupti expedita, saepe ipsam eveniet sapiente tenetur eius sunt culpa ducimus",
        ],
        url: "https://www.google.com",

        sentiment: [
            {
                label: "positive",
                score: 0.2,
            },
            {
                label: "negative",
                score: 0.6,
            },
            {
                label: "neutral",
                score: 0.1,
            },
        ],
        tags: [
            "Bioinformatics",
            "Genomics",
            "Personalized Medicine",
            "Bioinformatics",
            "Personalized Medicine",
        ],
        journal: "Journal of Bioinformatics",
        relevance: 0.88,
        doi: "10.1234/1234.1234",
    },

    {
        id: 3,
        title: "Environmental Sustainability and Green Technologies",
        authors: ["Alice White", "David Miller"],
        abstract:
            "This paper investigates the role of green technologies in promoting environmental sustainability, discussing the challenges and opportunities in the transition to a greener future.",
        highlights: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum inventore quod debitis libero explicabo maiores consectetur dignissimos? Vitae corrupti expedita, saepe ipsam eveniet sapiente tenetur eius sunt culpa ducimus",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum inventore quod debitis libero explicabo maiores consectetur dignissimos? Vitae corrupti expedita, saepe ipsam eveniet sapiente tenetur eius sunt culpa ducimus",
        ],
        url: "https://www.google.com",
        sentiment: [
            {
                label: "positive",
                score: 0.1,
            },
            {
                label: "negative",
                score: 0.1,
            },
            {
                label: "neutral",
                score: 0.7,
            },
        ],
        tags: ["Green Technologies", "Environmental Sustainability"],
        journal: "Journal of Environmental Science",
        relevance: 0.85,
        doi: "10.1234/1234.1234",
    },
];

export { papers };

import { useState, useEffect } from "react";

const LIST = [
    {
        id: 1,
        name: "article title",
        description: "Information description",
        date: "21/12/2023",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        id: 2,
        name: "article title",
        description: "Information description",
        date: "21/12/2023",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        id: 3,
        name: "article title",
        description: "Information description",
        date: "21/12/2023",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        id: 4,
        name: "article title",
        description: "Information description",
        date: "21/12/2023",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        id: 5,
        name: "article title",
        description: "Information description",
        date: "21/12/2023",
        tags: ["tag1", "tag2", "tag3"],
    },
];

function SearchPage() {
    const [list, setList] = useState(LIST);
    return (
        <div className="search">
            <div className="search-form mt-5" style={{ paddingBottom: "40px" }}>
                <input type="text" placeholder="Search here ..." />
                <button className="btn-search">Search</button>
            </div>
            <div className="form-result">
                {list?.map((item, index) => (
                    <div className="card-result" key={item.id}>
                        <div className="info">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <p>{item.date}</p>
                            <ul className="tag">
                                {item.tags?.map((i) => (
                                    <li className="tag-item" key={i}>
                                        {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="group-button">
                            <button>Open</button>
                            <button>Save</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;

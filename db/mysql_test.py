import mysql.connector
from mysql.connector import pooling

# MySQL database connection
db_config = {
    'host': '127.0.0.1',
    'port': 3306,
    'user': 'root',
    'password': 'root',
    'database': 'scientific_papers',
}

# Create a connection pool
db_pool = mysql.connector.pooling.MySQLConnectionPool(pool_name ="mypool",
                                                      pool_size = 5,
                                                      **db_config)

db_connect = db_pool.get_connection()

# Create a cursor object
cursor = db_connect.cursor()

# User input (separated words)
input = input("Enter keyword to search for papers: ")
search_terms = input.split()

# Search function
for term in search_terms:
    search_term = "%" + term + "%"
    search_query = (
        "SELECT * FROM papers WHERE "
        "abstract LIKE %s OR "
        "article LIKE %s OR "
        "section_names LIKE %s "
        "LIMIT 50"  # Limit the result set to 50 records
    )
    cursor.execute(search_query, (search_term, search_term, search_term))

    # Fetch the matching papers
    matching_papers = cursor.fetchall()

    # Display matching papers
    if matching_papers:
        print(f"Papers containing the keyword '{term}':")
        print("=" * 50)
        for paper in matching_papers:
            abstract = ' '.join(paper[1].split()[:100]) + '...' if len(paper[1].split()) > 100 else paper[1]
            article = ' '.join(paper[2].split()[:100]) + '...' if len(paper[2].split()) > 100 else paper[2]
            print(f"Abstract: {abstract}")
            print(f"Article: {article}")
            print("=" * 50)
    else:
        print(f"No papers found for keyword '{term}'.")

cursor.close()
db_connect.close()

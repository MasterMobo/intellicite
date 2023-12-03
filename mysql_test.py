import tensorflow as tf
import tensorflow_datasets as tfds
import mysql.connector

# MySQL database connection
db_config = {
    'host': '127.0.0.1:3306',
    'user': 'username',
    'password': 'password',
    'database': 'scientific_papers',
}

# Load the dataset
ds, info = tfds.load('scientific_papers', split='train', shuffle_files=True, with_info=True)

# Connect to MySQL server
db_connect = mysql.connector.connect(**mysql_config)

# Create a cursor object to interact with the database
cursor = db_connect.cursor()

# Create the 'papers' table if it doesn't exist
create_table_query = """
CREATE TABLE IF NOT EXISTS papers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    abstract TEXT,
    article TEXT,
    section_names TEXT
);
"""
cursor.execute(create_table_query)

# Insert dataset records into the 'papers' table
insert_query = "INSERT INTO papers (abstract, article, section_names) VALUES (%s, %s, %s)"

for example in ds:
    data = (example['abstract'].numpy().decode('utf-8'), example['article'].numpy().decode('utf-8'), example['section_names'].numpy().decode('utf-8'))
    cursor.execute(insert_query, data)

# Commit the changes and close the connection
db_connect.commit()
db_connect.close()

def search_papers(keyword):
    # Create a cursor object to interact with the database
    cursor = db_connect.cursor()

    # SQL query to search for papers containing the keyword
    search_query = (
        "SELECT * FROM papers WHERE "
        "LOWER(abstract) LIKE %s OR "
        "LOWER(article) LIKE %s OR "
        "LOWER(section_names) LIKE %s"
    )
    keyword = f"%{keyword.lower()}%"
    cursor.execute(search_query, (keyword, keyword, keyword))

    # Fetch the matching papers
    matching_papers = cursor.fetchall()

    # Close the connection
    db_connection.close()

    return matching_papers

# User input
user_input = input("Enter a keyword to search for papers: ")

# Perform the search
matching_papers = search_papers(user_input)

# Display matching papers
if matching_papers:
    print(f"Papers containing the keyword '{user_input}':")
    for paper in matching_papers:
        print(f"Abstract: {papers[0]}")
        print(f"Article: {papers[1]}")
        print(f"Section Names: {papers[2]}")
        print("=" * 50)
else:
    print(f"No papers found '{user_input}'.")

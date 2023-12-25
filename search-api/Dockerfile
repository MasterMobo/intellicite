FROM python:3.9

WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

RUN python -m nltk.downloader stopwords

RUN python -m nltk.downloader wordnet

COPY . .

ENV FLASK_APP=main.py

EXPOSE 3000

CMD ["flask", "run", "--host=0.0.0.0"]

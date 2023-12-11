FROM python:3.8

WORKDIR /app

COPY requirements.txt /app/requirements.txt

# I put this comment becuase on the ./search-api there is a requirements.txt
# which I do not know what purpose it serves
# cause the dependencies does not add up
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=main.py

EXPOSE 3000

# Currently no Flask up and running
CMD ["flask", "run", "--host=0.0.0.0"]

# Create our image based on Python 3.8
FROM python:3.8

# Tell Python to not generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Turn off buffering
ENV PYTHONUNBUFFERRED 1

RUN mkdir /backend
WORKDIR /backend

# Install requirements using pip
COPY requirements.txt /backend/requirements.txt
RUN pip install -r requirements.txt

COPY . .

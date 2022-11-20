from dotenv import load_dotenv
import os
from pymongo import MongoClient

load_dotenv()

def get_connection():
    db_url = os.getenv('DATABASE_URL')
    client = MongoClient(db_url)
    db = client.todoAPP
    collection = db.user
    return collection
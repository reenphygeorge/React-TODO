from fastapi import FastAPI
import service, connection, schema
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

load_dotenv()
origins = [os.getenv('ORIGIN_URL')]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

collection = connection.get_connection()

@app.get('/items', response_model=schema.User)
def get_tasks(username :str):
    return service.get_tasks(collection, username)

@app.post('/items')
def create_tasks(user :schema.User):
    return service.create_tasks(collection, user)

@app.patch('/items')
def update_tasks(tasks :list[schema.Task], username :str):
    return service.update_tasks(collection, tasks, username)
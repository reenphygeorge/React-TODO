from pydantic import BaseModel

class Task(BaseModel):
    id :str
    body :str

class User(BaseModel):
    username :str
    name :str
    tasks :list[Task]
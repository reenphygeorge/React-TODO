import json

def get_tasks(collection, username):
    data = collection.find_one({'username':username})
    return data

def create_tasks(collection, user):
    # data=collection.insert_one(user.dict())
    # print(type(data.results))
    result = collection.create_index(user.username,unique=True)
    print(result)
    return 'Create Tasks'

def update_tasks(collection, tasks, username):
    task_array = []
    for task in tasks:
        task_array.append(task.dict())
    collection.update_one({'username':username},{'$set':{'tasks':task_array}})
    return 'Update Tasks'
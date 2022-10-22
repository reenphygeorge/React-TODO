import { Heading } from '@chakra-ui/react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [todos, setTodos] = useState([])

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo => {
      return todo.id !== id
    }))
    setTodos(newTodos);
  }

  const insertTodo = (task) => {
    var TaskObj = {
      id: nanoid(),
      body: task
    }
    var newTodos = []
    newTodos.push(...todos)
    newTodos.push(TaskObj)
    setTodos(newTodos)
  }

  return (
    <VStack p={4}>
      <IconButton mb='7' icon={<FaSun />} isRound='true' size="lg" alignSelf="flex-end" />
      <Heading mb='8' fontWeight='bold' bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text'>Todo Application</Heading>;
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo insertTodo={insertTodo} />
    </VStack>
  );
}

export default App;

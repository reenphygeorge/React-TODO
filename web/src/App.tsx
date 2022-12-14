import React, { useState, useEffect } from 'react';
import { Heading, useColorMode, VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import { AddTodo, TodoList } from './components';

interface Todo {
    id: string;
    body: string;
}

const App = () => {
    const [todos, setTodos] = useState<Array<Todo>>(
        () => JSON.parse(localStorage.getItem('todos')!) || [],
    );
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const { colorMode, toggleColorMode } = useColorMode();

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const insertTodo = (task: string) => {
        const TaskObj = {
            id: nanoid(),
            body: task,
        };
        const newTodos: Array<Todo> = [];
        newTodos.push(...todos);
        newTodos.push(TaskObj);
        setTodos(newTodos);
    };

    return (
        <VStack p={4}>
            <IconButton
                mb="7"
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound
                size="lg"
                alignSelf="flex-end"
                onClick={toggleColorMode}
                aria-label="Toggle Color Mode"
            />
            <Heading
                mb="8"
                fontWeight="bold"
                bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
                bgClip="text"
            >
                Todo Application
            </Heading>
            ;
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <AddTodo insertTodo={insertTodo} />
        </VStack>
    );
};
export default App;

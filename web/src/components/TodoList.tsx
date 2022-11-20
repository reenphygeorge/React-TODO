import React from 'react';
import { VStack, Text, HStack, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

interface Todo {
    id: string;
    body: string;
}

interface TodoListProps {
    todos: Array<Todo>;
    deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
    if (!todos.length) {
        return (
            <Badge colorScheme="green" p="5" m="10" borderRadius="lg">
                No tasks left to do 🎉
            </Badge>
        );
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
            alignItems="stretch"
        >
            {todos.map((todo) => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton
                        icon={<FaTrash />}
                        isRound
                        onClick={() => deleteTodo(todo.id)}
                        aria-label=""
                    />
                </HStack>
            ))}
        </VStack>
    );
};

export default TodoList;

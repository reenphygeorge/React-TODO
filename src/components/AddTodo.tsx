import React, { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';

const AddTodo = ({ insertTodo }: any) => {
    const [Content, setContent] = useState('');
    const toast = useToast();
    const handleSubmit = () => {
        if (!Content || Content.trim().length === 0) {
            toast({
                title: 'No content',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        insertTodo(Content);
        setContent('');
    };

    return (
        <form>
            <HStack mt="10">
                <Input
                    variant="filled"
                    placeholder="add it now"
                    value={Content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button px="8" colorScheme="pink" type="button" onClick={() => handleSubmit()}>
                    Add Todo
                </Button>
            </HStack>
        </form>
    );
};

export default AddTodo;

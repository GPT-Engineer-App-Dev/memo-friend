import { useState } from "react";
import { Box, Button, Container, Flex, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddNote = () => {
    if (input.trim() === "") {
      toast({
        title: "Cannot add empty note",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput("");
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4}>
        <Flex w="full">
          <Input placeholder="Add a new note" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddNote()} />
          <Button ml={2} colorScheme="blue" onClick={handleAddNote}>
            <FaPlus />
          </Button>
        </Flex>
        {notes.map((note, index) => (
          <Flex key={index} w="full" p={4} borderWidth="1px" borderRadius="lg" alignItems="center" justifyContent="space-between">
            <Text>{note}</Text>
            <Button colorScheme="red" onClick={() => handleDeleteNote(index)}>
              <FaTrash />
            </Button>
          </Flex>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;

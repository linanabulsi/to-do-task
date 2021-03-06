import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ToDoCard from "../to-do-card/ToDoCard";

export default function ToDoContainer({ title, todos, children }) {
  return (
    <Flex
      flexDirection="column"
      borderRadius="md"
      border="2px solid rgb(34, 112, 214)"
      w="250px"
    >
      <Box
        bg="rgb(209, 220, 235)"
        h="35px"
        borderBottom="2px solid rgb(34, 112, 214)"
      >
        <Text>{title}</Text>
      </Box>

      <Flex direction="column" p={2} mt={2} sx={{ "& > div + div": { mt: 2 } }}>
        {todos.map((todo) => (
          <ToDoCard
            key={todo.id}
            severity={todo.severity}
            title={todo.title}
            progress={todo.progress}
            date={todo.date}
            description={todo.description}
            id={todo.id}
          />
        ))}
        {children}
      </Flex>
    </Flex>
  );
}

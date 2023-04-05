import { Box, Flex } from "@chakra-ui/react";

function Bug({ item, provided, removeTask, containerId }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="50px"
      bg="white"
      padding="1%"
      borderRadius="5px"
      marginBottom="5px"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Box w="80%">{item.task}</Box>
      <span
        className="material-symbols-rounded"
        onClick={() => removeTask(item.id, containerId)}
      >
        delete
      </span>
    </Flex>
  );
}

export default Bug;

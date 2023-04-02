import { Box } from "@chakra-ui/react";

function Task({ item, provided }) {
  return (
    <Box
      h="50px"
      bg="pink"
      padding="1%"
      marginBottom="10px"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {item.task}
    </Box>
  );
}

export default Task;

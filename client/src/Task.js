import { Box } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

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

{
  /* <Box
          marginBottom="2px"
          h="50px"
          bg="pink"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task}
        </Box> */
}

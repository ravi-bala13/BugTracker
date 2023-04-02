import { Box, Flex } from "@chakra-ui/react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import "../App.css";
import { CRITICAL, LOW, MAJOR, MEDIUM } from "../constants/ContainerIds";

function Taskcontainer({ critical, major, medium, low, addTask }) {
  return (
    <Flex
      w="80%"
      bg="blue"
      h="80vh"
      margin="auto"
      gap="1%"
      padding="1%"
      boxSizing="border-box"
    >
      <Box w="24%" h="90%" bg="gray" borderRadius="5px">
        <Box>Critical</Box>
        <Droppable droppableId={CRITICAL}>
          {(provided, snapshot) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} h="100%">
              {critical.map((el, index) => (
                <Draggable draggableId={el.id} index={index} key={el.id}>
                  {(provided) => <Task provided={provided} item={el} />}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>

      <Box w="24%" h="90%" bg="gray">
        <Box>Major</Box>
        <Droppable droppableId={MAJOR}>
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} h="100%">
              {major.map((el, index) => (
                <Draggable draggableId={el.id} index={index} key={el.id}>
                  {(provided) => <Task provided={provided} item={el} />}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>

      <Box w="24%" h="90%" bg="gray">
        <Box>Meidum</Box>
        <Droppable droppableId={MEDIUM}>
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              // bg="yellow"
              h="100%"
            >
              {medium.map((el, index) => (
                <Draggable draggableId={el.id} index={index} key={el.id}>
                  {(provided) => <Task provided={provided} item={el} />}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>

      <Box w="24%" h="90%" bg="gray">
        <Box>Low</Box>
        <Droppable droppableId={LOW}>
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} h="100%">
              {low.map((el, index) => (
                <Draggable draggableId={el.id} index={index} key={el.id}>
                  {(provided) => <Task provided={provided} item={el} />}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>
    </Flex>
  );
}

export default Taskcontainer;

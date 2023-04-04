import { Box, Flex } from "@chakra-ui/react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Bug from "./Bug";
import "../App.css";
import { CRITICAL, LOW, MAJOR, MEDIUM } from "../constants/ContainerIds";

function Bugcontainer({ critical, major, medium, low, removeTask }) {
  return (
    <Flex
      w="80%"
      // bg="#161a2b"
      h="80vh"
      margin="auto"
      gap="1%"
      padding="1%"
      boxSizing="border-box"
    >
      <Box w="25%" h="100%" bg="#d3c6c6" borderRadius="15px">
        <Box
          marginBottom="10px"
          bg="#8bb3e3"
          w="30%"
          borderRadius="10px"
          textAlign="center"
        >
          CRITICAL
        </Box>
        <Droppable droppableId={CRITICAL}>
          {(provided, snapshot) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} h="100%">
              {critical.map((el, index) => (
                <Draggable draggableId={el.id} index={index} key={el.id}>
                  {(provided) => (
                    <Bug
                      containerId={CRITICAL}
                      removeTask={removeTask}
                      provided={provided}
                      item={el}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>

      <Box w="25%" h="100%" bg="#d3c6c6" borderRadius="15px">
        <Box
          marginBottom="10px"
          bg="#8bb3e3"
          w="30%"
          borderRadius="10px"
          textAlign="center"
        >
          MAJOR
        </Box>
        <Droppable droppableId={MAJOR}>
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} h="100%">
              {major.map((el, index) => (
                <Draggable draggableId={el.id} index={index} key={el.id}>
                  {(provided) => (
                    <Bug
                      containerId={MAJOR}
                      removeTask={removeTask}
                      provided={provided}
                      item={el}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>

      <Box w="25%" h="100%" bg="#d3c6c6" borderRadius="15px">
        <Box
          marginBottom="10px"
          bg="#8bb3e3"
          w="30%"
          borderRadius="10px"
          textAlign="center"
        >
          MEDIUM
        </Box>
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
                  {(provided) => (
                    <Bug
                      containerId={MEDIUM}
                      removeTask={removeTask}
                      provided={provided}
                      item={el}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>

      <Box w="25%" h="100%" bg="#d3c6c6" borderRadius="15px">
        <Box
          marginBottom="10px"
          bg="#8bb3e3"
          w="30%"
          borderRadius="10px"
          textAlign="center"
        >
          LOW
        </Box>
        <Droppable droppableId={LOW}>
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} h="100%">
              {low.map((el, index) => (
                <Draggable draggableId={el.id} index={index} key={el.id}>
                  {(provided) => (
                    <Bug
                      containerId={LOW}
                      removeTask={removeTask}
                      provided={provided}
                      item={el}
                    />
                  )}
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

export default Bugcontainer;

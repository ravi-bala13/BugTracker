import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import "./App.css";

function Taskcontainer({ critical, major, medium, low }) {
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
      <Droppable droppableId="critical">
        {(provided, snapshot) => (
          <Box
            w="24%"
            h="90%"
            bg="gray"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {critical.map((el, index) => (
              <Draggable draggableId={el.id} index={index} key={el.id}>
                {(provided) => <Task provided={provided} item={el} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>

      <Droppable droppableId="major">
        {(provided) => (
          <Box
            w="24%"
            h="90%"
            bg="gray"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {major.map((el, index) => (
              <Draggable draggableId={el.id} index={index} key={el.id}>
                {(provided) => <Task provided={provided} item={el} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <Droppable droppableId="medium">
        {(provided) => (
          <Box
            w="24%"
            h="90%"
            bg="gray"
            ref={provided.innerRef}
            {...provided.droppableProps}
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

      <Droppable droppableId="low">
        {(provided) => (
          <Box
            w="24%"
            h="90%"
            bg="gray"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {low.map((el, index) => (
              <Draggable draggableId={el.id} index={index} key={el.id}>
                {(provided) => <Task provided={provided} item={el} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Flex>
  );
}

export default Taskcontainer;

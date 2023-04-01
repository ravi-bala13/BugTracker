import "./App.css";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import Taskcontainer from "./Taskcontainer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [critical, setCritical] = useState([
    { task: "bala", id: uuidv4() },
    { task: "balmurugana", id: uuidv4() },
    { task: "dharma", id: uuidv4() },
  ]);
  const [major, setMajor] = useState([
    { task: "bala", id: "sd1" },
    { task: "balmurugana", id: "sdf2" },
    { task: "dharma", id: "sdfc3" },
  ]);
  const [medium, setMedium] = useState([
    { task: "bala", id: "sd11" },
    { task: "balmurugana", id: "sdf22" },
    { task: "dharma", id: "sdfc33" },
  ]);
  const [low, setLow] = useState([
    { task: "bala", id: "sd111" },
    { task: "balmurugana", id: "sdf222" },
    { task: "dharma", id: "sdfc333" },
  ]);

  const details = {
    critical: critical,
    major: major,
    medium: medium,
    low: low,
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log("result", source, destination, critical);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    const tempTask = [...critical];
    console.log("changingTodos", tempTask);

    if (source.droppableId == "critical") {
      add = tempTask.splice(source.index, 1);
      console.log("add", add);
    }
    console.log("destination", destination.index, tempTask);
    tempTask.splice(destination.index, 0, ...add);
    console.log("changingTodos", tempTask);
    setCritical(tempTask);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Heading>Jira Task</Heading>
        <Taskcontainer
          critical={critical}
          major={major}
          medium={medium}
          low={low}
        />
      </DragDropContext>
    </div>
  );
}

export default App;

import "./App.css";
import { Flex, Heading, Select } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Taskcontainer from "./components/Taskcontainer";
import { v4 as uuidv4 } from "uuid";
import { CRITICAL, MAJOR, MEDIUM, LOW } from "./constants/ContainerIds";
import InputBox from "./components/InputBox";

function App() {
  const critical = [];
  const major = [];
  const medium = [];
  const low = [];

  const [details, setDetails] = useState({
    [CRITICAL]: critical,
    [MAJOR]: major,
    [MEDIUM]: medium,
    [LOW]: low,
  });
  // console.log("details", details);

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
    const sourceList = [...details[source.droppableId]];
    const destinationList = [...details[destination.droppableId]];
    // console.log("sourceList", sourceList);
    // console.log("destinationList", destinationList);

    add = sourceList[source.index];
    // if source and destination is same need to remove both sourceList and destination List
    if (source.droppableId === destination.droppableId) {
      destinationList.splice(source.index, 1);
    }
    sourceList.splice(source.index, 1);
    // console.log("add", add);

    destinationList.splice(destination.index, 0, add);
    // console.log("sourceList", sourceList);
    // console.log("destinationList", destinationList);
    setDetails({
      ...details,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    });
  };

  const addTask = (element, containerId) => {
    // console.log("element, containerId", element, containerId);
    let tempTaskList = details[containerId];
    let taskObj = {};
    taskObj["id"] = uuidv4();
    taskObj["task"] = element;
    tempTaskList.push(taskObj);

    setDetails({ ...details, [containerId]: tempTaskList });
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex
          paddingLeft="5%"
          paddingRight="5%"
          w="80%"
          margin="auto"
          bg={"yellow"}
          alignItems="center"
          justifyContent="center"
          boxSizing="border-box"
        >
          <Heading w="40%">Jira Task</Heading>
          <InputBox addTask={addTask} containerId={MAJOR} />
        </Flex>
        <Taskcontainer
          critical={details.critical}
          major={details.major}
          medium={details.medium}
          low={details.low}
          addTask={addTask}
        />
      </DragDropContext>
    </div>
  );
}

export default App;

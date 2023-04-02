import "./App.css";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Taskcontainer from "./Taskcontainer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const critical = [
    { task: "bala", id: uuidv4() },
    { task: "balmurugana", id: uuidv4() },
    { task: "dharma", id: uuidv4() },
  ];
  const major = [
    { task: "hema", id: "sd1" },
    { task: "sathya", id: "sdf2" },
    { task: "nasd", id: "sdfc3" },
  ];
  const medium = [
    { task: "bala", id: "sd11" },
    { task: "balmurugana", id: "sdf22" },
    { task: "dharma", id: "sdfc33" },
  ];
  const low = [
    { task: "bala", id: "sd111" },
    { task: "balmurugana", id: "sdf222" },
    { task: "dharma", id: "sdfc333" },
  ];

  const [details, setDetails] = useState({
    critical: critical,
    major: major,
    medium: medium,
    low: low,
  });
  console.log("details", details);

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

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Heading>Jira Task</Heading>
        <Taskcontainer
          critical={details.critical}
          major={details.major}
          medium={details.medium}
          low={details.low}
        />
      </DragDropContext>
    </div>
  );
}

export default App;

import "./App.css";
import { Flex, Heading, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Bugcontainer from "./components/Bugcontainer";
import { v4 as uuidv4 } from "uuid";
import { CRITICAL, MAJOR, MEDIUM, LOW } from "./constants/ContainerIds";
import InputBox from "./components/InputBox";
import axios from "axios";

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
  console.log("details", details);

  function saveToDb(containerId, bugsList) {
    console.log("containerId, bugsList", containerId, bugsList);
    let bug = {};
    bug["containerId"] = containerId;
    bug["bugs"] = bugsList;
    axios
      .post(`http://localhost:8080/bugs`, bug)
      .then((res) => console.log(res));
  }

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
    if (source.droppableId === destination.droppableId) {
      console.log("saving single");
      saveToDb(destination.droppableId, destinationList);
    } else {
      console.log("saving both");
      saveToDb(source.droppableId, sourceList);
      saveToDb(destination.droppableId, destinationList);
    }
    setDetails({
      ...details,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    });
  };

  const addTask = (element, containerId) => {
    // console.log("element, containerId", element, containerId);
    let temBugList = details[containerId];
    let bugObj = {};
    bugObj["id"] = uuidv4();
    bugObj["task"] = element;
    temBugList.push(bugObj);
    saveToDb(containerId, temBugList);
    setDetails({ ...details, [containerId]: temBugList });
  };

  useEffect(() => {
    fetchFromDb();
  }, []);

  const fetchFromDb = () => {
    axios.get(`http://localhost:8080/bugs`).then((res) => {
      console.log(res);
      let temDetails = { ...details };
      res.data.forEach((element) => {
        console.log("element", element);
        temDetails[element.containerId] = element.bugs;
      });
      setDetails(temDetails);
    });
  };

  const removeTask = (toRemoveId, containerId) => {
    let temBugList = details[containerId];
    temBugList = temBugList.filter((el) => el.id != toRemoveId);
    saveToDb(containerId, temBugList);
    setDetails({ ...details, [containerId]: temBugList });
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex
          paddingLeft="5%"
          paddingRight="5%"
          w="80%"
          margin="auto"
          // bg={"yellow"}
          alignItems="center"
          justifyContent="center"
          boxSizing="border-box"
        >
          <Heading color="#fff" fontSize="24px" w="40%">
            Jira Task
          </Heading>
          <InputBox addTask={addTask} containerId={MAJOR} />
        </Flex>
        <Bugcontainer
          critical={details.critical}
          major={details.major}
          medium={details.medium}
          low={details.low}
          removeTask={removeTask}
        />
      </DragDropContext>
    </div>
  );
}

export default App;

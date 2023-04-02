import { Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { CRITICAL, LOW, MAJOR, MEDIUM } from "../constants/ContainerIds";

function InputBox({ addTask }) {
  const [taskDetails, setTaskDetails] = useState({
    [CRITICAL]: "",
    [MAJOR]: "",
    [MEDIUM]: "",
    [LOW]: "",
  });
  //   console.log("setTaskDetails", taskDetails);
  const [containerId, setContainerId] = useState(CRITICAL);

  const handleInputChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };
  return (
    // <Flex bg={"blue"} gap="2%" marginBottom={"20px"}>
    <>
      <Select
        marginLeft="10%"
        placeholder="Select task type"
        marginRight="0%"
        w="30%"
        h="30px"
        onChange={(e) => setContainerId(e.target.value)}
      >
        <option value={CRITICAL}>{CRITICAL}</option>
        <option value={MAJOR}>{MAJOR}</option>
        <option value={MEDIUM}>{MEDIUM}</option>
        <option value={LOW}>{LOW}</option>
      </Select>
      <Input
        onChange={handleInputChange}
        name={containerId}
        value={taskDetails[containerId]}
        w="60%"
        h="30px"
        placeholder="Enter the task details"
      />
      <Button
        onClick={() => {
          addTask(taskDetails[containerId], containerId);
          setTaskDetails({ ...taskDetails, [containerId]: "" });
        }}
        w="38%"
        h="32px"
      >
        Create Bug
      </Button>
    </>
    // </Flex>
  );
}

export default InputBox;

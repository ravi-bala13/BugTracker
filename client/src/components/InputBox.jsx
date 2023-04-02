import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { CRITICAL, LOW, MAJOR, MEDIUM } from "../constants/ContainerIds";

function InputBox({ addTask, containerId }) {
  const [taskDetails, setTaskDetails] = useState({
    [CRITICAL]: "",
    [MAJOR]: "",
    [MEDIUM]: "",
    [LOW]: "",
  });
  //   console.log("setTaskDetails", taskDetails);

  const handleInputChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };
  return (
    <Flex gap="2%" marginBottom={"20px"}>
      <Input
        onChange={handleInputChange}
        name={containerId}
        w="60%"
        h="30px"
        placeholder="Enter the task details"
      />
      <Button
        onClick={() => addTask(taskDetails[containerId], containerId)}
        w="38%"
      >
        Create Bug
      </Button>
    </Flex>
  );
}

export default InputBox;

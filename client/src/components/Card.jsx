import React, { useState } from "react";
import { Box, Text, Center } from "@chakra-ui/react";

const Card = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Box
      backgroundColor="red.300"
      width={{ base: "80vw", md: "30vw" }}
      height="300px"
      borderRadius="10px"
      textAlign="center"
      mx="auto"
      my="10px"
    >
      <Text
        color="white"
        position="relative"
        top="50%"
        transform="translateY(-50%)"
      >
        {showAnswer ? question : answer}
      </Text>
    </Box>
  );
};

export default Card;

import React, { useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";

const Card = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const cardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <ReactCardFlip isFlipped={showAnswer}>
      <Box
        backgroundColor="red.300"
        width={{ base: "80vw", md: "30vw" }}
        height="300px"
        borderRadius="10px"
        textAlign="center"
        mx="auto"
        my="10px"
        onClick={cardClick}
      >
        <Box position="relative" top="50%" transform="translateY(-50%)">
          <Heading color="white" fontSize="24px" fontWeight="bold">
            Question
          </Heading>
          <Text color="white">{question}</Text>
        </Box>
      </Box>
      <Box
        backgroundColor="red.300"
        width={{ base: "80vw", md: "30vw" }}
        height="300px"
        borderRadius="10px"
        textAlign="center"
        mx="auto"
        my="10px"
        onClick={cardClick}
      >
        <Box position="relative" top="50%" transform="translateY(-50%)">
          <Heading fontSize="24px" color="white" fontWeight="bold">
            Answer
          </Heading>
          <Text color="white">{answer}</Text>
        </Box>
      </Box>
    </ReactCardFlip>
  );
};

export default Card;

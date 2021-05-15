import React, { useState } from "react";
import { Box, Text, Heading, IconButton } from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import ReactCardFlip from "react-card-flip";

const Card = ({ question, answer, id, removeCard }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const cardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <ReactCardFlip isFlipped={showAnswer}>
      <Box
        width={{ base: "80vw", md: "30vw" }}
        height="300px"
        borderRadius="10px"
        textAlign="center"
        mx="auto"
        my="10px"
        bgGradient="linear(to-l, #9831ff,#fa31b7)"
        onClick={cardClick}
      >
        <IconButton
          icon={<CloseIcon />}
          onClick={(e) => {
            e.stopPropagation();
            removeCard(id);
          }}
          color="white"
          position="absolute"
          variant="ghost"
          top="15px"
          right="30px"
          _hover="none"
        />
        <IconButton
          icon={<EditIcon />}
          onClick={(e) => {
            e.stopPropagation();
          }}
          color="white"
          variant="ghost"
          position="absolute"
          top="60px"
          right="30px"
          _hover="none"
        />
        <Box position="relative" top="50%" transform="translateY(-50%)">
          <Heading color="white" fontSize="24px" fontWeight="bold">
            Question
          </Heading>
          <Text color="white">{question}</Text>
        </Box>
      </Box>
      <Box
        bgGradient="linear(to-l, #9831ff,#fa31b7)"
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

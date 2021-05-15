import React, { useState, useEffect } from "react";
import { Button, SimpleGrid, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import Card from "../components/Card";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([{ question: "ooga" }, { question: "ooga 2" }]);
  }, [cards]);

  return (
    <>
      <Heading
        textAlign="center"
        my="20px"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Study Buddy
      </Heading>
      <Link to="/new">
        <Button
          height="75px"
          width="75px"
          borderRadius="50%"
          position="fixed"
          color="white"
          backgroundColor="#7928CA"
          _hover={{ bg: "purple.300" }}
          bottom="30px"
          right="30px"
        >
          <AddIcon />
        </Button>
      </Link>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {cards.map((e) => {
          return <Card question={e.question} answer="answer 1" />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Home;

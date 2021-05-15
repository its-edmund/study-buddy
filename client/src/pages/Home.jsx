import React, { useState, useEffect } from "react";
import { Button, SimpleGrid, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../components/Card";

const URL = "http://localhost:5000";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`${URL}/allcards`);
      setCards(res.data);
    };
    getData();
    console.log(cards);
  }, []);

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
          bgGradient="linear(to-l, #9831ff,#62bdff)"
          _hover={{ bg: "purple.300" }}
          bottom="30px"
          right="30px"
        >
          <AddIcon />
        </Button>
      </Link>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {cards.map((e) => {
          return <Card question={e.question} answer={e.answer} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Home;

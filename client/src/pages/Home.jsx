import React, { useState, useEffect } from "react";
import {
  Button,
  SimpleGrid,
  Heading,
  Spinner,
  Box,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Card from "../components/Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cards"));
    setCards(data ? data : []);
    setLoading(false);
  }, []);

  const removeCard = async (_id) => {
    const newCards = cards.filter((card) => {
      return card._id !== _id;
    });
    /*await axios.delete(`${URL}/delete`, { data: { id: _id } });*/
    localStorage.setItem("cards", JSON.stringify(newCards));
    setCards(newCards);
  };

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
        Study Buddy ✎
      </Heading>
      <>
        {isAuthenticated ? (
          <>
            <Text
              position="absolute"
              top="21px"
              right="140px"
              fontSize="20px"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
            >
              User: {user.name}
            </Text>
            <Button
              position="absolute"
              variant="ghost"
              top="15px"
              fontSize="20px"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              right="30px"
              _hover="none"
              _active="none"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </Button>
          </>
        ) : (
          <Button
            position="absolute"
            variant="ghost"
            top="15px"
            fontSize="20px"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            right="30px"
            _hover="none"
            _active="none"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
        )}
      </>
      <Link to="/new">
        <Button
          height="60px"
          width="60px"
          borderRadius="50%"
          position="fixed"
          color="white"
          bgGradient="linear(to-l, #9831ff,#62bdff)"
          _hover={{ bg: "purple.300" }}
          bottom="30px"
          right="30px"
          zIndex={100}
        >
          <AddIcon />
        </Button>
      </Link>
      <>
        {loading ? (
          <Box
            width="100vw"
            height="100vh"
            position="absolute"
            top="0"
            left="0"
          >
            <Spinner
              size="xl"
              color="pink.300"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          </Box>
        ) : (
          <>
            {cards.length <= 0 ? (
              <Heading
                textAlign="center"
                my="70px"
                fontSize="3xl"
                fontWeight="extrabold"
              >
                You haven't added any cards yet!
              </Heading>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {cards.map((e) => {
                  return (
                    <Card
                      key={e._id}
                      id={e._id}
                      question={e.question}
                      answer={e.answer}
                      removeCard={removeCard}
                    />
                  );
                })}
              </SimpleGrid>
            )}
          </>
        )}
      </>
    </>
  );
};

export default Home;

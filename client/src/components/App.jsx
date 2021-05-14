import React, { useState, useEffect } from "react";
import { Button, SimpleGrid } from "@chakra-ui/react";

import Card from "./Card";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([{ question: "ooga" }]);
  }, [cards]);

  return (
    <>
      <Button>Add Card</Button>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {cards.map((e) => {
          return <Card question="question 1" answer="answer 1" />;
        })}
      </SimpleGrid>
    </>
  );
};

export default App;

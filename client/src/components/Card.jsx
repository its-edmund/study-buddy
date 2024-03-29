import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  IconButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import ReactCardFlip from "react-card-flip";
import { Formik, Form } from "formik";

const Card = ({ question, answer, id, removeCard }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [editing, setEditing] = useState(false);
  const [questionState, setQuestionState] = useState("");
  const [answerState, setAnswerState] = useState("");

  useEffect(() => {
    setAnswerState(answer);
    setQuestionState(question);
  }, [answer, question]);

  const cardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return editing ? (
    <Box
      width={{ base: "80vw", md: "30vw" }}
      height="300px"
      borderRadius="10px"
      textAlign="center"
      mx="auto"
      my="10px"
      bgGradient="linear(to-l, #9831ff,#fa31b7)"
    >
      <Formik
        initialValues={{ question: questionState, answer: answerState }}
        enableReinitialize
        onSubmit={async (values, actions) => {
          /*await axios.put(`${URL}/update`, {
            question: values.question,
            answer: values.answer,
            id: id,
          });*/
          let data = JSON.parse(localStorage.getItem("cards"));
          for (let i in data) {
            if (data[i]._id === id) {
              data[i].question = values.question;
              data[i].answer = values.answer;
              break;
            }
          }
          localStorage.setItem("cards", JSON.stringify(data));
          setEditing(false);
          setAnswerState(values.answer);
          setQuestionState(values.question);
        }}
      >
        {({ handleChange, setFieldValue, values }) => (
          <Box width="80%" mx="auto" my="20px">
            <Form>
              <FormControl>
                <FormLabel color="white" htmlFor="question">
                  Question
                </FormLabel>
                <Input
                  id="question"
                  background="white"
                  onChange={handleChange}
                  placeholder="Question"
                  value={values.question}
                />
                <FormErrorMessage>Error :(</FormErrorMessage>
              </FormControl>
              <FormControl py="10px">
                <FormLabel color="white" htmlFor="answer">
                  Answer
                </FormLabel>
                <Input
                  background="white"
                  name="answer"
                  onChange={handleChange}
                  placeholder="Answer"
                  value={values.answer}
                />
                <FormErrorMessage>Error :(</FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                onClick={() => {
                  setEditing(false);
                }}
                color="white"
                variant="ghost"
                position="relative"
                right="5vw"
                _hover="none"
                _active="none"
              >
                Cancel
              </Button>
              <Button
                mt={4}
                type="submit"
                bgGradient="linear(to-l, #9831ff,#62bdff)"
                color="white"
                position="relative"
                left="5vw"
              >
                Edit
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  ) : (
    <ReactCardFlip isFlipped={showAnswer}>
      <Flex
        width={{ base: "80vw", md: "30vw" }}
        height="300px"
        borderRadius="10px"
        textAlign="center"
        mx="auto"
        my="10px"
        bgGradient="linear(to-l, #9831ff,#fa31b7)"
        onClick={cardClick}
        flexDir='column'
        justifyContent='center'
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
            setEditing(true);
          }}
          color="white"
          variant="ghost"
          position="absolute"
          top="60px"
          right="30px"
          _hover="none"
        />
          <Heading color="white" fontSize="24px" fontWeight="bold">
            Question
          </Heading>
          <Text color="white">{questionState}</Text>
      </Flex>
      <Flex
        bgGradient="linear(to-l, #9831ff,#fa31b7)"
        width={{ base: "80vw", md: "30vw" }}
        height="300px"
        borderRadius="10px"
        textAlign="center"
        mx="auto"
        my="10px"
        onClick={cardClick}
        flexDir='column'
        justifyContent='center'
      >
          <Heading fontSize="24px" color="white" fontWeight="bold">
            Answer
          </Heading>
          <Text color="white">{answerState}</Text>
      </Flex>
    </ReactCardFlip>
  );
};

export default Card;

import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import axios from "axios";
import { Formik, Form } from "formik";

const URL = "http://localhost:5000";

const New = () => {
  const history = useHistory();

  return (
    <Box
      width="100vw"
      height="100vh"
      bgGradient="linear(to-l, #9831ff,#ff187c)"
      position="absolute"
      top="0"
    >
      <Heading
        textAlign="center"
        my="20px"
        color="white"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Creating a New Card
      </Heading>
      <Formik
        initialValues={{ question: "", answer: "" }}
        onSubmit={async (values, actions) => {
          const res = await axios.post(`${URL}/add`, {
            question: values.question,
            answer: values.answer,
          }, {

          });
          console.log(res);
          actions.setSubmitting(false);
          history.push("/");
        }}
      >
        {({ handleChange }) => (
          <Box
            width="30vw"
            position="absolute"
            left="50%"
            top="50%"
            transform="translate(-50%, -50%)"
            p="30px"
            borderRadius="20px"
            bgColor="white"
          >
            <Button onClick={() => {history.push("/")}} variant='ghost' p={0} mb='20px' _hover='none' _active='none'><ArrowBackIcon />Return</Button>
            <Form>
              <FormControl>
                <FormLabel htmlFor="question">Question</FormLabel>
                <Input
                  name="question"
                  onChange={handleChange}
                  placeholder="Question"
                />
                <FormErrorMessage>Error :(</FormErrorMessage>
              </FormControl>
              <FormControl py="10px">
                <FormLabel htmlFor="answer">Answer</FormLabel>
                <Input
                  name="answer"
                  onChange={handleChange}
                  placeholder="Answer"
                />
                <FormErrorMessage>Error :(</FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                type="submit"
                bgGradient="linear(to-l, #9831ff,#62bdff)"
                color="white"
              >
                Create
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default New;

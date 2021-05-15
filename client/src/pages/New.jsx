import React from "react";
import { withRouter } from "react-router-dom";
import {
  Box,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";

const New = () => {
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
        initialValues={{ question: "jared" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
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
          <Form>
            <FormControl>
              <FormLabel htmlFor="question">Question</FormLabel>
              <Input id="question" placeholder="Question" />
              <FormErrorMessage>Error :(</FormErrorMessage>
            </FormControl>
            <FormControl py="10px">
              <FormLabel htmlFor="answer">Answer</FormLabel>
              <Input id="answer" placeholder="Answer" />
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
      </Formik>
    </Box>
  );
};

export default New;

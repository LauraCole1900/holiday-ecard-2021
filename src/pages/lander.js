import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// Run random() for each blank
// Push results to word array
// Loop through word array to populate Mad Lib

const Lander = () => {
  const characters = ["Santa Claus", "Jack Frost", "Frosty", "Abominable Snowmonster", "Rudolph", "the reindeer", "an elf", "Baby New Year"];
  const nouns = [];
  const verbs = [];
  const adjectives = [];
  const adverbs = [];
  let randomIndex = 0;
  let word = "";
  let chosenWords = [];

  const random = (arr) => {
    randomIndex = Math.floor(Math.random() * arr.length);
    word = arr[randomIndex];
    chosenWords.push(word);
    // return word;
  }

  return(
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <p>Hello World</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Lander;
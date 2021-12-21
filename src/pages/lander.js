import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// Run random() for each blank
// Push results to word array
// Loop through word array to populate Mad Lib

const Lander = () => {
  const characters = ["Santa Claus", "Mrs. Claus", "Jack Frost", "Frosty", "Abominable Snowmonster", "Rudolph", "the reindeer", "the kangaroos", "an elf", "Baby New Year", "Scrooge", "Clara", "Nutcracker Prince", "Sugar Plum Fairy"];
  const carolNames = ["in the bleak midwinter", "silent night", "away in a manger"]
  const nouns = ["pine tree", "eggnog", "Yule log", "lights", "candles", "wreath", "garland", "poinsettia", "cookies", "carrots", "scarf", "hat", "stockings", "skis", "menorah", "dreidl", "latkes", "gelt", "sufganiyah", "hot chocolate", "candy cane", "fruitcake", "holly", "mistletoe", "bells", "gingerbread house", "ribbons", "presents", "kinara", "mishumaa sabaa", "kikombe cha umoja", "mkeka", "mazao", "muhindi", "zawadi", "nutcracker", "snow", "sleigh", "snowflakes", "ribbons", "tinsel", "ornaments"];
  const colors = ["red", "green", "white", "silver", "gold", "black"]
  const verbs = [];
  const adjectives = [];
  const adverbs = [];
  let chosenWords = [];

  const random = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const word = arr[randomIndex];
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
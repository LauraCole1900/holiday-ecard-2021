import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

// Run random() for each blank
// Push results to word array
// Loop through word array to populate Mad Lib

const Lander = () => {
  const characters = ["Santa Claus", "Mrs. Claus", "Jack Frost", "Frosty", "Abominable Snowmonster", "Rudolph", "an elf", "Baby New Year", "Scrooge", "Clara", "Nutcracker Prince", "Sugar Plum Fairy"];
  const animals = ["reindeer", "kangaroos", "goats", "cats", "dogs", "zebras", "camels", "capybaras", "beavers", "squirrels", "birds", "mice", "rats"]
  const carolNames = ["in the bleak midwinter", "silent night", "away in a manger"]
  const singNouns = ["pine tree", "eggnog", "Yule log", "wreath", "garland", "poinsettia", "scarf", "hat", "menorah", "dreidl", "gelt", "sufganiyah", "hot chocolate", "candy cane", "fruitcake", "holly", "mistletoe", "gingerbread house", "kinara", "mishumaa sabaa", "kikombe cha umoja", "mkeka", "mazao", "muhindi", "zawadi", "nutcracker", "snow", "sleigh", "tinsel", "birds nest", "pickle"];
  const plurNouns = ["lights", "candles", "cookies", "carrots", "latkes", "stockings", "skis", "bells", "ribbons", "presents", "snowflakes", "ornaments", "lists"];
  const colors = ["red", "green", "white", "silver", "gold", "black", "orange", "purple", "blue"]
  const verbs = ["crackled", "cackled", "sparkled", "checked", "laughed", "ran", "flew", "froze", "melted", "slid", "crunched", "said", "asked", "fell", "built", "tapped", "hung", "decorated", "baked", "made", "mixed", "drifted", "drove", "dove", "dripped", "burned", "twinkled", "fought", "clashed", "jingled", "rang", "sang", "broke", "shattered", "was", "stubbed", "slipped", "cleaned", "opened", "closed", "started", "stopped", "rolled", "grew", "mowed", "raked", "shoveled", "jumped"];
  const adjectives = ["good", "bad", "cold", "hot", "lukewarm", "spiky", "soft", "clean", "dirty", "high", "low", "wet", "dry", "round", "square", "triangular", "fluffy", "damp", "moist", "bland", "flavorful", "foreboding", "welcoming", "feathery", ""];
  const adverbs = [];
  let chosenWords = [];

  const random = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const word = arr[randomIndex];
    chosenWords.push(word);
  }

  const generateStory = () => {

  }

  return (
    <>
      <Container>
        <Row>
          <Col sm={12} className="d-flex justify-content-center header">
            <h1>Welcome to Holiday 2021 Mad Libs!</h1>
          </Col>
        </Row>
        <Row className="story">
          <Col sm={{ span: 8, offset: 2 }}>
            <p>Winter had come.</p>
            <p></p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col sm="auto">
            <Button onClick={generateStory} className="genBtn">Click to regenerate the story!</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Lander;
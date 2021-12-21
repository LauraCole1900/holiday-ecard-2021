import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

// Run random() for each blank
// Push results to word array
// Loop through word array to populate Mad Lib

const Lander = () => {
  const characters = ["Santa Claus", "Mrs. Claus", "Jack Frost", "Frosty", "Abominable Snowmonster", "Rudolph", "an elf", "Baby New Year", "Scrooge", "Clara", "Nutcracker Prince", "Sugar Plum Fairy"];
  const animals = ["reindeer", "kangaroos", "goats", "cats", "dogs", "zebras", "camels", "capybaras", "beavers", "squirrels", "birds", "mice", "rats"]
  const carolNames = ["in the bleak midwinter", "silent night", "away in a manger"]
  const singNouns = ["pine tree", "eggnog", "Yule log", "wreath", "garland", "poinsettia", "scarf", "hat", "menorah", "dreidl", "gelt", "sufganiyah", "hot chocolate", "candy cane", "fruitcake", "holly", "mistletoe", "gingerbread house", "kinara", "mishumaa sabaa", "kikombe cha umoja", "mkeka", "mazao", "muhindi", "zawadi", "nutcracker", "snow", "sleigh", "tinsel", "birds nest", "pickle"];
  const plurNouns = ["lights", "candles", "cookies", "carrots", "latkes", "stockings", "skis", "bells", "ribbons", "presents", "snowflakes", "ornaments", "lists"];
  const colors = ["red", "green", "white", "silver", "gold", "black"]
  const verbs = ["crackled", "cackled", "sparkled", "checked", "laughed", "ran", "flew", "froze", "melted", "slid", "crunched", "said", "asked", "fell", "built", "tapped", "hung", "decorated", "baked", "made", "mixed", "drifted", "drove", "dove", "dripped", "burned", "twinkled", "fought", "clashed", "jingled", "rang", "sang"];
  const adjectives = [];
  const adverbs = [];
  let chosenWords = [];

  const random = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const word = arr[randomIndex];
    chosenWords.push(word);
  }

  return(
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <p>Winter had come.</p>
            <p></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Lander;
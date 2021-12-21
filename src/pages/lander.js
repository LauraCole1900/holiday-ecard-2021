import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

// Run random() for each blank
// Push results to word array
// Loop through word array to populate Mad Lib

const Lander = () => {
  const characters = ["Santa Claus", "Mrs. Claus", "Jack Frost", "Frosty", "Abominable Snowmonster", "Rudolph", "an elf", "Baby New Year", "Scrooge", "Clara", "Nutcracker Prince", "Sugar Plum Fairy", "Krampus"];
  const animals = ["reindeer", "kangaroos", "goats", "cats", "dogs", "zebras", "camels", "capybaras", "beavers", "squirrels", "birds", "mice", "rats", "polar bears", "penguins", "birds of paradise", "peacocks", "lions", "horses", "mules", "donkeys", "orangutans", "elephants", "possums", "huntsman spiders"]
  const carolNames = ["in the bleak midwinter", "silent night", "away in a manger"]
  const singNouns = ["pine tree", "eggnog", "Yule log", "wreath", "garland", "poinsettia", "scarf", "hat", "menorah", "dreidl", "gelt", "sufganiyah", "hot chocolate", "candy cane", "fruitcake", "holly", "mistletoe", "gingerbread house", "kinara", "mishumaa sabaa", "kikombe cha umoja", "mkeka", "mazao", "muhindi", "zawadi", "nutcracker", "snow", "sleigh", "tinsel", "birds nest", "pickle", "snowstorm", "surfboard"];
  const plurNouns = ["lights", "candles", "cookies", "carrots", "latkes", "stockings", "skis", "bells", "ribbons", "presents", "snowflakes", "ornaments", "lists", "nuts"];
  const colors = ["red", "green", "white", "silver", "gold", "black", "orange", "purple", "blue"]
  const verbs = ["crackled", "cackled", "sparkled", "checked", "laughed", "ran", "flew", "froze", "melted", "slid", "crunched", "said", "asked", "fell", "built", "tapped", "hung", "decorated", "baked", "made", "mixed", "drifted", "drove", "dove", "dripped", "burned", "twinkled", "fought", "clashed", "jingled", "rang", "sang", "broke", "shattered", "was", "stubbed", "slipped", "cleaned", "opened", "closed", "started", "stopped", "rolled", "grew", "mowed", "raked", "shoveled", "jumped", "surfed", "hurtled", "sat", "walked", "ran", "wound", "popped", "levered", "searched", "snowed", "dug", "laughed", "chuckled", "froze", "melted", "solidified", "thawed", "examined", "entered", "exited", "lifted", "hopped"];
  const adjectives = ["good", "bad", "cold", "hot", "lukewarm", "spiky", "soft", "clean", "dirty", "high", "low", "wet", "dry", "round", "square", "triangular", "fluffy", "damp", "moist", "bland", "flavorful", "foreboding", "welcoming", "feathery", "sweet", "savory", "crunchy", "mushy", "al dente", "windy", "calm", "crisp", "bouncy", "sparkly", "flat", "excited", "sharp", "dull"];
  const adverbs = ["strongly", "weakly", "bouncily", "smoothly", "roughly", "hotly", "warmly", "coolly", "coldly", "curiously", "tiredly", "happily", "sadly", "warily", "sneakily", "mushily", "excitedly", "softly", "loudly", "sharply", "dully", "wetly", "drily", "slyly", "politely"];
  let chosenWords = [];

  const randomWordWithRepeats = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const word = arr[randomIndex];
    chosenWords.push(word);
  }

  const randomWordNoRepeats = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const word = arr[randomIndex];
    if (chosenWords.includes(word)) {
      randomWordNoRepeats()
    } else {
      chosenWords.push(word);
    }
  }

  const generateStory = () => {
    console.log("click")
  }

  const generateStoryWithRepeats = () => {

  }

  useEffect(() => {
    generateStory();
  })

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
            <Button onClick={() => generateStory()} className="genBtn">Click to regenerate the story!</Button>
            <Button onClick={generateStoryWithRepeats} className="genBtn">Click to regenerate the story ... with the possibility of repeated words!</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Lander;
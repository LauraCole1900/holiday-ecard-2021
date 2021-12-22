import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Lander = () => {
  const [chosenWords, setChosenWords] = useState([]);
  let wordsArr = [];

  const characters = ["Santa", "Mrs. Claus", "Jack Frost", "Frosty", "Abominable Snowmonster", "Rudolph", "Elf", "Baby New Year", "Scrooge", "Clara", "Nutcracker Prince", "Sugar Plum Fairy", "Krampus"];
  const animals = ["reindeer", "kangaroos", "goats", "cats", "dogs", "zebras", "camels", "capybaras", "beavers", "squirrels", "mice", "rats", "polar bears", "penguins", "birds of paradise", "peacocks", "lions", "horses", "mules", "donkeys", "orangutans", "elephants", "possums", "huntsman spiders", "bison", "turkeys", "snow crabs", "ravens"];
  const singNouns = ["pine tree", "eggnog", "Yule log", "wreath", "garland", "poinsettia", "scarf", "hat", "menorah", "dreidl", "gelt", "sufganiyah", "hot chocolate", "candy cane", "fruitcake", "holly", "mistletoe", "gingerbread house", "kinara", "mishumaa sabaa", "kikombe cha umoja", "mkeka", "mazao", "muhindi", "zawadi", "nutcracker", "sleigh", "tinsel", "bird's nest", "pickle", "snowstorm", "surfboard", "fire", "light"];
  const plurNouns = ["lights", "candles", "cookies", "carrots", "latkes", "stockings", "skis", "bells", "ribbons", "presents", "snowflakes", "ornaments", "lists", "nuts", "patterns"];
  const colors = ["red", "green", "white", "silver", "gold", "black", "orange", "purple", "blue"];
  const verbs = ["crackled", "cackled", "sparkled", "checked", "laughed at", "ran", "flew", "froze", "melted", "slid", "crunched", "said", "asked", "fell", "built", "tapped", "hung", "decorated", "baked", "made", "mixed", "drifted", "drove", "dove", "dripped", "burned", "twinkled", "fought", "clashed", "jingled", "rang", "sang", "broke", "shattered", "was", "stubbed", "slipped", "cleaned", "opened", "closed", "started", "stopped", "rolled", "grew", "moved", "raked", "shoveled", "jumped", "surfed", "hurtled", "sat", "walked", "ran", "wound", "popped", "levered", "searched", "snowed", "dug", "laughed", "chuckled", "froze", "melted", "solidified", "thawed", "examined", "entered", "exited", "lifted", "hopped", "wafted", "smiled", "stood"];
  const adjectives = ["good", "bad", "cold", "hot", "lukewarm", "spiky", "soft", "clean", "dirty", "high", "low", "wet", "dry", "round", "square", "triangular", "fluffy", "damp", "moist", "bland", "flavorful", "foreboding", "welcoming", "feathery", "sweet", "savory", "crunchy", "mushy", "al dente", "windy", "calm", "crisp", "bouncy", "sparkly", "flat", "excited", "sharp", "dull", "restive"];
  const adverbs = ["strongly", "weakly", "bouncily", "smoothly", "roughly", "hotly", "warmly", "coolly", "coldly", "curiously", "tiredly", "happily", "sadly", "warily", "sneakily", "mushily", "excitedly", "softly", "loudly", "sharply", "dully", "wetly", "drily", "slyly", "politely", "clearly"];

  function randomWord(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const word = arr[randomIndex];
    if (wordsArr.includes(word)) {
      randomWord(arr);
    } else {
      setChosenWords(chosenWords => [...chosenWords, word]);
      wordsArr = wordsArr.concat(word);
    }
  }

  const generateStory = () => {
    wordsArr = [];
    setChosenWords([]);
    randomWord(characters);
    randomWord(adjectives);
    randomWord(colors);
    randomWord(singNouns);
    randomWord(verbs);
    randomWord(plurNouns);
    randomWord(singNouns);
    randomWord(verbs);
    randomWord(plurNouns);
    randomWord(verbs);
    randomWord(singNouns);
    randomWord(adjectives);
    randomWord(singNouns);
    randomWord(plurNouns);
    randomWord(verbs);
    randomWord(characters);
    randomWord(verbs);
    randomWord(singNouns);
    randomWord(verbs);
    randomWord(singNouns);
    randomWord(verbs);
    randomWord(animals);
    randomWord(plurNouns);
    randomWord(verbs);
    randomWord(singNouns);
    randomWord(verbs);
    randomWord(characters);
    randomWord(verbs);
    randomWord(adverbs);
    randomWord(adjectives);
    randomWord(verbs);
    randomWord(verbs);
    randomWord(characters);
    randomWord(adjectives);
    randomWord(plurNouns);
    randomWord(adjectives);
    randomWord(singNouns);
  }

  useEffect(() => {
    generateStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex justify-content-center header">
            <h1 className="headerTxt">Holiday Mad Libs</h1>
          </Col>
        </Row>
        <Row className="story">
          <Col sm={{ span: 8, offset: 2 }}>
            <p>Winter had come.</p>
            <p>{chosenWords[0]} sat back in {["Mrs. Claus", "Clara", "Sugar Plum Fairy"].includes(chosenWords[0]) ? "her" : "his"} {chosenWords[1]} {chosenWords[2]} {chosenWords[3]} and {chosenWords[4]} {["Mrs. Claus", "Clara", "Sugar Plum Fairy"].includes(chosenWords[0]) ? "her" : "his"} {chosenWords[5]}. {chosenWords[6] === "eggnog" ? "An" : "A"} {chosenWords[6]} {chosenWords[7]} in the fireplace, warming the room; {chosenWords[8]} {chosenWords[9]} on the {chosenWords[10]} at the window, casting {["al dente", "excited"].includes(chosenWords[11]) ? "an" : "a"} {chosenWords[11]} {chosenWords[12]} on the snow outside. From outside, {chosenWords[13]} {chosenWords[14]} in the barn where {chosenWords[15]} {chosenWords[16]} the {chosenWords[17]}, {chosenWords[18]} the {chosenWords[19]}, and {chosenWords[20]} the {chosenWords[21]}, readying them for their run in just a few nights’ time. The smell of {chosenWords[22]} {chosenWords[23]} through the room, and a mug of {chosenWords[24]} {chosenWords[25]} at {["Mrs. Claus", "Clara", "Sugar Plum Fairy"].includes(chosenWords[0]) ? "her" : "his"} elbow.</p>
            <p>A cry of “Ho, {chosenWords[26]}!” came from the barn. {chosenWords[0]} {chosenWords[27]}. {chosenWords[26]}, the leader of the {chosenWords[21]}, was {chosenWords[28]} {chosenWords[29]} and ready to fly. Tonight was the Solstice; they needed to be patient for just a little longer.</p>
            <p>{chosenWords[0]} {chosenWords[30]} and {chosenWords[31]} {["Mrs. Claus", "Clara", "Sugar Plum Fairy"].includes(chosenWords[0]) ? "her" : "his"} way to the window. {chosenWords[32]} had been at work, drawing {["Mrs. Claus", "Clara", "Sugar Plum Fairy"].includes(chosenWords[32]) ? "her" : "his"} {chosenWords[33]} {chosenWords[34]} across the glass. In the distance, the moon was just past full. It was {["al dente", "excited"].includes(chosenWords[35]) ? "an" : "a"} {chosenWords[35]} {chosenWords[36]}.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <div className="center">
              <h2 className="headerTxt bright">Wishing you a happy holiday season and a joyous New Year</h2>
              <p className="justify-self-end bright">Have a safe and happy 2022!</p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col sm="auto">
            <Button onClick={() => generateStory()} className="genBtn">Click to regenerate the story!</Button>
          </Col>
        </Row>
        <Row className="showOrig">
          <Col sm={{ span: 6, offset: 1 }}>
            <p className="small">Hover or tap here to read the un-Mad-Libbed version</p>
          </Col>
          <div className="orig">
            <Row>
              <Col sm={{ span: 8, offset: 2 }}>
                <p>Winter had come.</p>
                <p>Santa sat back in his chair and studied his lists. A fire crackled in the fireplace, warming the room; candles twinkled on the tree at the window, casting a warm light on the snow outside. From outside, bells jingled in the barn as elves checked the harness, prepared the sleigh, and groomed the reindeer, readying for their run in just a few nights’ time. The smell of cookies wafted through the room, and a mug of hot chocolate steamed at his elbow.</p>
                <p>A cry of “Ho, Rudolph!” came from the barn. Santa smiled. Rudolph, the leader of the reindeer, was clearly restive and ready to fly. Tonight was the Solstice; they needed to be patient for just a little longer.</p>
                <p>Santa stood and made his way to the window. Jack Frost had been at work, drawing his feathery patterns across the glass. In the distance, the moon was just past full. It was a peaceful night.</p>
              </Col>
            </Row>
            <Row>
              <Col sm={{ span: 8, offset: 2 }}>
                <div className="center">
                  <h2 className="headerTxt bright">Wishing you a happy holiday season and a joyous New Year</h2>
                  <p className="justify-self-end bright">Have a safe and happy 2022!</p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Lander;
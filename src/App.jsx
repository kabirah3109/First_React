import { useState } from "react";

const App = () => {
  const [rollDice1, setRollDice1] = useState(null);
  const [rollDice2, setRollDice2] = useState(null);
  // const [first, setfirst] = useState(second)
  // const [nameOfVariable, nameOfFunctionToChangeTheState] = useState(initialValueOfTheState)
  // const [myAge, setMyAge] = useState(9)
  // let myName = 'kabirah';
  // let myAge = 9;
  // const increaseAge = ()=>{
  // setMyAge(myAge+1)
  const rollDice = () => {
    const generateDiceValue = () => {
      const diceArray = [1, 2, 3, 4, 5, 6];
      let i = Math.floor(Math.random() * diceArray.length);
      return diceArray[i];
    };

    setRollDice1(generateDiceValue())
    setRollDice2(generateDiceValue())
  };
  return (
    <div>
      {/* <h1> my name is {myName}</h1>
      <h2>{Math.random()}</h2>
      <h3>i am {myAge} years old</h3>
      <button onClick={increaseAge}>increase age</button> */}
      <h1>Roll 1: <img src={`/dice${rollDice1}.png`} alt="" />  </h1>
      <h1>Roll 2: <img src={`/dice${rollDice2}.png`} alt="" /> </h1>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default App;

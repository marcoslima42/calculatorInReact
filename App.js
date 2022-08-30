import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';





export default function App() {
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("") 
  const buttons = [
    'AC', 'DEL', '%', '/', '7',
    '8', '9', '*', '4', '5','6',
    '-', '1', '2', '3', '+', '.',
    '0', '+/-', '='
  ]


  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const firstNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]
  
    switch(operator){
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString())
        return
      
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString())
        return
      
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString())
        return
      
      case '/':
        setCurrentNumber((firstNumber / lastNumber).toString())
        return
      
    }
  }
  
  
  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/")
    {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.lenght -1)))
        return
      case 'AC':
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
      case '+/-':
        return
    }
  
    setCurrentNumber(currentNumber + buttonPressed)
  }


  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={[StyleSheet.resultText, {fontWeight: 'bold', color: "purple", fontSize: 45 }]}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button,
          {backgroundColor: 'lightpink'}]}>
            <Text style={[styles.textButton, {color: "white", fontSize: 30, fontWeight: 'bold'}]}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  result: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
    backgroundColor: 'lightyellow',
  },
  // colocar borderRadius
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
   
  textButton: {
    color: "#5b5b5b",
    fontSize: 25
  },
  
  button: {
    flex: 2,  //set 25% to fix in web but broken execution in android
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
    minHeight: 136,
    minWidth: 80
  },

  resultText: {
    color:"#282F38",
    margin: 10,
    fontSize: 40,
  }, 
  
  historyText:{
    color: "#7c7c7c",
    fontSize: 50,
    marginRight: 10, 
    alignSelf: 'flex-end',
    fontWeight: 'bold'
  },
});

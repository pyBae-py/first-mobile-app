import React, { useState } from 'react'
import { ScrollView, Button, Text, View, TextInput, StyleSheet, Vibration } from 'react-native'

// Containers

// Style Components
import { Main } from './styles/index'

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])
  const handleEnteredGoal = (e) => {
    setEnteredGoal(e)
  }

  const enterGoal = () => {
    if (enteredGoal === '') {
      Vibration.vibrate(40)
      alert('Please enter something, first')
      return
    }
    setGoals((goals) => [...goals, enteredGoal])
    Vibration.vibrate(40)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row1}>
        <TextInput style={styles.textInput} placeholder="Enter Text" value={enteredGoal} onChangeText={handleEnteredGoal} />
        <Button title="+" onPress={enterGoal} />
      </View>
      <View>
        {goals.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: Main.container,
  textInput: Main.normalTextField,
  row1: Main.row1,
})
export default App

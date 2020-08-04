import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

// Style Components
import { Main } from '../styles/index'

const GoalInput = (props) => {
  return (
    <View style={styles.row1}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Text"
        value={props.enteredGoal}
        onChangeText={props.handleEnteredGoal}
      />
      <Button title="+" onPress={props.enterGoal} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: Main.normalTextField,
  row1: Main.row1,
})
export default GoalInput

import React, { useState } from 'react'
import { ScrollView, StyleSheet, Vibration, FlatList } from 'react-native'

// Containers
import GoalItem from './components/goalItem'
import GoalInput from './components/goalInput'

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
    setGoals((goals) => [
      ...goals,
      { key: Math.random().toString(), value: enteredGoal },
    ])
    setEnteredGoal('')
    Vibration.vibrate(40)
  }

  const onDelete = (goalKey) => {
    setGoals((goals) => {
      return goals.filter((goal) => {
        goal.key !== goalKey
      })
    })
  }
  return (
    <ScrollView style={styles.container}>
      <GoalInput
        enterGoal={enterGoal}
        enteredGoal={enteredGoal}
        handleEnteredGoal={handleEnteredGoal}
      />
      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={onDelete}
          />
        )}
      ></FlatList>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: Main.container,
})
export default App

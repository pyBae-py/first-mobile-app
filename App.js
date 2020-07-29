import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import MyButton from './components/mybutton.jsx'
import { Main } from './styles'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          padding: 15,
          textAlign: 'center',
        }}
      >
        {count}
      </Text>
      <MyButton
        onPress={() => {
          setCount(count + 1)
        }}
        title={'+'}
      />

      <MyButton
        onPress={() => {
          if (count === 0) {
            alert("I can't decrement more")
            return
          }
          setCount(count - 1)
        }}
        title={'-'}
      />

      <MyButton
        onPress={() => {
          if (count === 0) {
            alert('Count is already 0')
            return
          }
          setCount(0)
        }}
        title={'Reset'}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Main.bgColor,
    padding: Main.padding,
    margin: Main.margin,
    marginTop: Main.marginTop,
  },
})

export default App

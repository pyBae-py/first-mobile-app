import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'

const App = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count++)
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 50,
      }}
    >
      <Text
        style={{
          padding: 15,
          textAlign: 'center',
        }}
      >
        {count}
      </Text>
      <Button
        onPress={() => {
          setCount(count + 1)
        }}
        title={'+'}
      />
      <Text></Text>
      <Button
        onPress={() => {
          if (count === 0) {
            alert("I can't decrement more")
            return
          }
          setCount(count - 1)
        }}
        title={'-'}
      />
      <Text></Text>
      <Button
        onPress={() => {
          setCount(0)
        }}
        title={'Reset'}
      />
    </View>
  )
}

export default App

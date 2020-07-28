import React, { useState } from 'react'
import { View, Text } from 'react-native'
import MyButton from './components/mybutton.jsx'

const App = () => {
  const [count, setCount] = useState(0)


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
      <MyButton
        onPress={() => {
          setCount(count + 1)
        }}
        title={'+'}
      />
      <Text></Text>
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
      <Text></Text>
      <MyButton
        onPress={() => {
          setCount(0)
        }}
        title={'Reset'}
      />
    </View>
  )
}

export default App

import React, { useState } from 'react'
import { Button, View, TextInput } from 'react-native'

const TextField = () => {
  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState('0')
  const [sum, setSum] = useState('0')

  const handleNum1 = (e) => {
    setNum1(e)
  }

  const handleNum2 = (e) => {
    setNum2(e)
  }

  const handleSum = (e) => {
    setSum(parseFloat(num1) + parseFloat(num2))
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        marginTop: 250,
      }}
    >
      <View>
        <TextInput value={num1} onChangeText={handleNum1} />
      </View>
      <View>
        <TextInput value={num2} onChangeText={handleNum2} />
      </View>
      <View>
        <TextInput value={`${sum}`} editable={false} />
      </View>
      <View>
        <Button onPress={handleSum} title="Sum" />
      </View>
    </View>
  )
}

export default TextField

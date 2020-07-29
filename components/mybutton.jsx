import React from 'react'
import { View, Button } from 'react-native'

const MyButton = (props) => {
  return (
    <View
      style={{
        margin: 10,
        width: 200,
        alignSelf: 'center',
      }}
    >
      <Button title={props.title} onPress={props.onPress} />
    </View>
  )
}

export default MyButton

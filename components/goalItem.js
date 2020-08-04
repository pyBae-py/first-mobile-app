import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

// Style Components
import { Main } from '../styles/index'

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.list}>
        <Text style={styles.listItem}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  list: Main.list,
  listItem: Main.listItem,
})
export default GoalItem

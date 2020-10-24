import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const App = (props) => {
  const name = "Irwanto";
  const [ count, setCount ] = useState(0);

  const handleInc = () => {
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to DumbWays, {name}</Text>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity onPress={handleInc}>
        <Text>INC</Text>
      </TouchableOpacity>
      <Button title="Go To List" onPress={() => props.navigation.navigate('FundamentalFlatList')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default App;
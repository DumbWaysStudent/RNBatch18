import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

const FundamentalFlatList = () => {

  const [ list, setList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    console.log('Component Did Mount')
    getData()
  }, [])

  const getData = () => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log('response success')
      setList(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log('response error')
      console.log(err)
      setIsLoading(false);
    })
  }

  const renderItem = ({ item, index }) => {
    return (
      <ListItem key={item.id} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.body}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View style={styles.container}>  
      <FlatList
        data={list}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={getData}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FundamentalFlatList;
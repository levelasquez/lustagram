import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export class SearchComponent extends Component {
  navigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Search Component</Text>
        <Button
          title='Post'
          onPress={this.navigate('Post')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SearchComponent

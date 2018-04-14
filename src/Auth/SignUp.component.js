import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export class SignUpComponent extends Component {
  handleGoBack = () => {
    const { navigation: { goBack } } = this.props

    goBack()
  }

  render() {
    const { add } = this.props

    return (
      <View style={styles.container}>
        <Text>SignUp Component</Text>
        <Button
          title='Sign In'
          onPress={this.handleGoBack}
        />
        <Button
          title='Add'
          onPress={add}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export const mapStateToProps = state => {
  const { reducerTest } = state

  return {
    number: reducerTest,
  }
}

export const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: 'ADD_REDUCER_TEST' }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpComponent)

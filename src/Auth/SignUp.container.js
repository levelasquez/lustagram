import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SignUpForm from './Components/SignUpForm.component'

export class SignUpComponent extends Component {
  handleGoBack = () => {
    const { navigation: { goBack } } = this.props

    goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <Button
          title='Sign In'
          onPress={this.handleGoBack}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
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

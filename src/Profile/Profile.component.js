import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

import { actionSignOut } from '../Auth/Actions/auth.creator'

export class ProfileComponent extends Component {
  navigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    const { signOut } = this.props

    return (
      <View style={styles.container}>
        <Text>Profile Component</Text>
        <Button
          title='Post'
          onPress={this.navigate('Post')}
        />
        <Button
          title='Sign Out'
          onPress={signOut}
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

export const mapStateToProps = state => ({ state })

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(actionSignOut()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileComponent)

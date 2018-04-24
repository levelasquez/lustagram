import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { AuthRoutes, TabRoutes } from './Routes'
import { actionSignIn } from './Auth/Actions/auth.creator'

export class NavigationComponent extends Component {
  componentDidMount() {
    const { signIn } = this.props

    signIn()
  }

  render() {
    const { AuthReducer: { user } } = this.props

    return (
      <View style={styles.container}>
        {user
          ? <TabRoutes />
          : <AuthRoutes />}
      </View>
    )
  }
}

const styles = StyleSheet.create({ container: { flex: 1 } })

export const mapStateToProps = state => {
  const { AuthReducer } = state

  return { AuthReducer }
}

export const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(actionSignIn()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationComponent)

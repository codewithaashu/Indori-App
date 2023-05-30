import { StyleSheet } from 'react-native'
import React from 'react'
import AuthNavigation from './Navigation/AuthNavigation'
import {Provider} from 'react-redux';
import Store from './Redux/Store'
const App = () => {
  return (
    <Provider store={Store}>
      <AuthNavigation/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyBgNzkecYK2lVymY5TYM8h_gCOxhkendJw",
                authDomain: "auth-e76cb.firebaseapp.com",
                databaseURL: "https://auth-e76cb.firebaseio.com",
                projectId: "auth-e76cb",
                storageBucket: "auth-e76cb.appspot.com",
                messagingSenderId: "210889096339"
              }
        );
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;
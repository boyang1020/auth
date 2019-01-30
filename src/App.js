import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
                <LoginForm />
            </View>
        );
    }
}

export default App;
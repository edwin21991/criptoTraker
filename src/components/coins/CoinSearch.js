import React, { Component } from 'react'
import {TextInput, View, StyleSheet, Platform } from 'react-native'
import Colors from '../../res/colors'

class CoinSearch extends Component {

    state = {
        query: ""
    }

    handleText = (query) =>{
        this.setState({ query })

        if (this.props.onChange){
            this.props.onChange(query)
        }
    }

    render(){
        const { query } = this.state
        return(
            <View>
                <TextInput
                    style = {[
                        styles.textInput,
                        Platform.OS == 'ios' ?
                            styles.textInputIOS:
                            styles.textInputAndroid
                    ]}
                    onChangeText= { this.handleText } 
                    value = { query }
                    placeholder = "Search coin"
                    placeholderTextColor = "rgba(255,255,255,0.5)"
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    textInput:{
        margin: 5,
        height: 46,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        color: "#fff",
    },
    textInputAndroid:{
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 8,
    },
    textInputIOS: {
        margin: 8,
        borderRadius:8,
    }
})

export default CoinSearch
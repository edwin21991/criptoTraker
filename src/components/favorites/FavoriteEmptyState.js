import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavoriteEmptyState = ()=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>No hay Favoritos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
        alignSelf:"center"
    },

})

export default FavoriteEmptyState
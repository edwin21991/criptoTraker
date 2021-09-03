import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import ConisItem from '../coins/CoinsItem'
import Colors from '../../res/colors'
import FavoriteEmptyState from './FavoriteEmptyState'
import Storage from '../../libs/storage'

class FavoriteScreen extends Component{
    
    state={
        favorites:[]
    }

    getFavorites = async()=>{
        try {
            
            const allKeys = await Storage.instance.getAllKeys()
            const keys = allKeys.filter((key) =>key.includes("favorite-"))
            const favs = await Storage.instance.multiGet(keys)
            const favorites = favs.map((fav)=> JSON.parse(fav[1]))
            this.setState({ favorites })
            
        } catch (err) {
            console.log("Store getFavorite err ", errr)
        }
    }
    handlePress = (coin)=>{

        this.props.navigation.navigate("CoinsDetails",{coin})
    }

    componentDidMount(){
        
        this.props.navigation.addListener("focus", this.getFavorites)

    }
    
    componentWillUnmount(){
        this.props.navigation.removeListener("focus", this.getFavorites)
    }

    render(){

        const {favorites} = this.state
        return(
            <View style={styles.container}>
                { favorites.length == 0 ?
                    <FavoriteEmptyState />
                    :null
                }
                { favorites.length > 0 ?
                    <FlatList 
                        data = {favorites}
                        renderItem = {({item})=>
                            <ConisItem 
                                item={item} 
                                onPress={()=> this.handlePress(item)}
                            />
                        } 
                    />
                    :null
                }
            </View>
        )
    }

}
const styles = StyleSheet.create({
  container:{
      backgroundColor: Colors.charade,
      flex: 1
  }      
})
export default FavoriteScreen
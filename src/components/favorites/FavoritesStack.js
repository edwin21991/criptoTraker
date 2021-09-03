import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from './FavoritesScreen'
import Colors from '../../res/colors'

const Stack = createStackNavigator()

const FavoriteSatack =()=>{

    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl
                },
                headerTintColor: Colors.white,
                headerTitleAlign: 'center'
        }}
        >
            
            <Stack.Screen 
            
                name="Favorites"
                component= { FavoriteScreen }
            
            />
        
        </Stack.Navigator>
    )
}
export default FavoriteSatack
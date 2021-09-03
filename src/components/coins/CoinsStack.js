import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ConinsScreen from './CoinnsScreen'
import ConinDetailsScreen from '../coinDetail/CoinDetailsScreen'

import Colors from '../../res/colors'

const Stack = createStackNavigator()

const ConinsStack = () =>{
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
                name="Coins" 
                component={ConinsScreen}
            />

            <Stack.Screen 
                name="CoinsDetails" 
                component={ConinDetailsScreen}
            />

        </Stack.Navigator>
    )
}

export default ConinsStack
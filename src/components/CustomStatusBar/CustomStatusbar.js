import React from 'react'
import { StatusBar, View } from 'react-native'


function CustomStatusbar({ backgraoundColor }) {
    return (
        <View>
            <StatusBar backgroundColor={backgraoundColor} />
        </View>
    )
}

export default CustomStatusbar
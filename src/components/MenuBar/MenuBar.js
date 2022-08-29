import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './MenuBar.style'
import { Entypo } from 'react-native-vector-icons'


function MenuBar() {
    return (
        <View style={styles.menu}>
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={.3}>
                    <Entypo name='menu' size={35} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.text}>Employee Profile</Text>
            </View>
        </View>
    )
}

export default MenuBar
import React from 'react'
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import styles from './EmployeeItem.style'

function EmployeeItem({ img, title, backgroundColor }) {
    return (
        <TouchableOpacity activeOpacity={.5} style={styles.wrapper} onPress={() => Alert.alert('Comming Soon')}>
            <View style={{ ...styles.imgWrapper, backgroundColor: backgroundColor }}>
                <Image source={img} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default EmployeeItem
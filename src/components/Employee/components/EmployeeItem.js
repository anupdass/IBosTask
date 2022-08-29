import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './EmployeeItem.style'

function EmployeeItem({ Image, title, backgroundColor }) {
    return (
        <TouchableOpacity activeOpacity={.5} style={styles.wrapper} onPress={() => Alert.alert('Comming Soon')}>
            <View style={{ ...styles.imgWrapper, backgroundColor: backgroundColor }}>
                <Image />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default EmployeeItem
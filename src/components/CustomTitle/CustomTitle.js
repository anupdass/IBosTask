import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function CustomTitle({ title }) {
    return (
        <Text style={styles.container}>{title}</Text>
    )
}

export default CustomTitle

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 28
    }
})
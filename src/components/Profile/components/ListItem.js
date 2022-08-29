import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './ListItem.style'


function ListItem({ img, title, dept, region, regTitle }) {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img} />
            {/* <Image /> */}
            <View style={styles.content}>
                <View style={region ? styles.region : null}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.dept}>{dept}</Text>
                </View>
                <View style={styles.regionBar}>
                    <Text style={styles.title}>{region}</Text>
                    <Text style={styles.dept}>{regTitle}</Text>
                </View>
            </View>
        </View>
    )
}

export default ListItem
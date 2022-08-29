import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialIcons } from 'react-native-vector-icons'

function InputForm({
    label,
    arrow,
    date,
    notEdit,
    paddingRight,
    width,
    leaveType,
    handleSetLeave,
    leave
}) {

    const [showLeave, SetShowLeave] = useState(true)

    const handleLeaveType = () => {
        SetShowLeave(!showLeave)
    }


    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={{ ...styles.input, width: width }} >
                <TouchableOpacity activeOpacity={.5} onPress={() => handleLeaveType()} style={{ paddingRight: paddingRight, width: '100%' }}>
                    <TextInput
                        editable={notEdit && false}
                        value={leave}
                        style={{ color: '#000000' }}
                    />
                </TouchableOpacity>
                {arrow &&
                    <AntDesign
                        name='caretdown'
                        size={15}
                        color={"#000000"}
                        style={styles.arrow}
                    />}
                {date && <MaterialIcons name='date-range' size={15} color={"#000000"} style={styles.arrow} />}
            </View>
            <View>
                {
                    !showLeave &&
                    leaveType?.map(leave =>
                        <TouchableOpacity activeOpacity={.5} onPress={() => { handleSetLeave(leave.type); SetShowLeave(!showLeave) }}>
                            <Text key={leave.id} style={styles.leaveType}>
                                {leave.type}
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#D0D5DD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        position: 'relative'
    },
    label: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: "#299647"
    },
    arrow: {
        position: 'absolute',
        right: 5,
    },
    leaveType: {
        paddingVertical: 5
    }
})
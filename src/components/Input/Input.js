import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import CustomTitle from '../CustomTitle/CustomTitle'
import InputForm from './components/InputForm'
import styles from './Input.style'

function Input() {

    const [leave, setLeave] = useState('Marriage Leave')

    const leaveType = [
        {
            id: 1,
            type: 'Sick Leave'
        },
        {
            id: 2,
            type: 'Emmergency Leave'
        },
        {
            id: 3,
            type: 'Birthday Leave'
        },
        {
            id: 4,
            type: 'Marriage Leave'
        },
    ]

    const handleSetLeave = (leave) => {
        setLeave(leave)
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <CustomTitle title={'Please input your information'} />
                <View style={styles.inputWrapper}>
                    <InputForm
                        leaveType={leaveType}
                        label={"Leave Type"}
                        arrow={"arrow"}
                        paddingRight={30} notEdit
                        leave={leave}
                        handleSetLeave={handleSetLeave}
                    />

                    <View style={styles.date}>
                        <InputForm label={"From Date"} width={"61%"} paddingRight={30} date />
                        <InputForm label={"To Date"} width={"62%"} paddingRight={30} date />
                    </View>

                    <InputForm label={"Location"} />
                    <InputForm label={"Reason"} />

                    <TouchableOpacity style={styles.fileUpload} activeOpacity={.5} >
                        <MaterialCommunityIcons name="upload" color="#34A853" size={25} />
                        <Text style={styles.fileText}>File Upload</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.btn} activeOpacity={.5} onPress={() => Alert.alert('Comming Soon')}>
                        <Text style={styles.text}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Input
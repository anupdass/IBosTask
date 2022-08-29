import React from 'react'
import { View } from 'react-native';
import CustomTitle from '../CustomTitle/CustomTitle';
import EmployeeItem from './components/EmployeeItem';

import Leave from '../../../assets/svg/Leave.svg'
import Loan from '../../../assets/svg/Loan.svg'
import Movement from '../../../assets/svg/Movement.svg'
import Overtime from '../../../assets/svg/Overtime.svg'
import Remote from '../../../assets/svg/Remote.svg'
import Iou from '../../../assets/svg/Iou.svg'

import styles from './Employee.style'

function Employee() {

    const employeeData = [
        {
            id: 1,
            title: 'Leave',
            color: '#D444F1',
            image: Leave
        },
        {
            id: 2,
            title: 'Movement',
            color: '#2E90FA',
            image: Movement
        },
        {
            id: 3,
            title: 'Remote Attendance',
            color: '#F63D68',
            image: Remote
        },
        {
            id: 4,
            title: 'IOU',
            color: '#F79009',
            image: Iou
        },
        {
            id: 5,
            title: 'Loan',
            color: '#669F2A',
            image: Loan
        },
        {
            id: 6,
            title: 'Overtime',
            color: '#875BF7',
            image: Overtime
        },
    ]

    return (
        <View style={{ backgroundColor: 'white', marginBottom: 8 }}>
            <View style={styles.container}>
                <CustomTitle title={'Employee Application'} />
                <View style={styles.emWrapper}>
                    {
                        employeeData.map(emData =>
                            <EmployeeItem
                                key={emData.id}
                                Image={emData.image}
                                title={emData.title}
                                backgroundColor={emData.color}
                            />
                        )
                    }
                </View>
            </View>
        </View >
    )
}

export default Employee
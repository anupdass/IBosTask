import React from 'react'
import { View } from 'react-native';
import CustomTitle from '../CustomTitle/CustomTitle';
import EmployeeItem from './components/EmployeeItem';

// import Leave from '../../../assets/svg/leave.svg'
// import Loan from '../../../assets/svg/loan.svg'
// import Movement from '../../../assets/svg/movement.svg'
// import Overtime from '../../../assets/svg/overtime.svg'
// import Remote from '../../../assets/svg/remote.svg'
// import Iou from '../../../assets/svg/iou.svg'

import styles from './Employee.style'

function Employee() {

    const employeeData = [

        {
            id: 1,
            title: 'Leave',
            color: '#2E90FA',
            image: require('../../../assets/leave.png')
        },
        {
            id: 2,
            title: 'Movement',
            color: '#2E90FA',
            image: require('../../../assets/movement.png')
        },
        {
            id: 3,
            title: 'Remote Attendance',
            color: '#F63D68',
            image: require('../../../assets/remote.png')
        },
        {
            id: 4,
            title: 'IOU',
            color: '#F79009',
            image: require('../../../assets/iou.png')
        },
        {
            id: 5,
            title: 'Loan',
            color: '#669F2A',
            image: require('../../../assets/loan.png')
        },
        {
            id: 6,
            title: 'Overtime',
            color: '#875BF7',
            image: require('../../../assets/overtime.png')
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
                                img={emData.image}
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
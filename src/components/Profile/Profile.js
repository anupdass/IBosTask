import React from 'react'
import { View, Text } from 'react-native'
import ListItem from './components/ListItem'
import styles from './Profile.style'
import Human from '../../../assets/svg/Human.svg'
import Birthday from '../../../assets/svg/Birthday.svg'
import Gender from '../../../assets/svg/Gender.svg'
import Profileimg from '../../../assets/svg/Profile.svg'


function Profile() {
    const infoData = [
        {
            id: 1,
            title: 'Human Resource',
            image: Human,
            dept: "Department"
        },
        {
            id: 2,
            title: '28 September,1990',
            image: Birthday,
            dept: "Date of Birth"
        },
        {
            id: 3,
            title: 'Female',
            image: Gender,
            dept: "Gender",
            region: 'Islam',
            regTitle: 'Religion'
        },
    ]


    return (
        <View style={styles.container}>
            <View style={styles.Profilecontent}>
                <View style={styles.content}>
                    <Profileimg />
                    <View style={styles.contentText}>
                        <Text style={styles.name}>Darlene Robertson</Text>
                        <Text style={styles.title}>Senior UX Designer</Text>
                        <Text style={styles.title}>ID43178</Text>
                    </View>
                </View>

                <Text style={styles.active}>Active</Text>
            </View>
            {/* <View>
                {
                    infoData.map(proData =>
                        <ListItem
                            key={proData.id}
                            Image={proData.image}
                            title={proData.title}
                            dept={proData.dept}
                            region={proData.region}
                            regTitle={proData.regTitle}
                        />
                    )
                }
            </View> */}
        </View>
    )
}

export default Profile
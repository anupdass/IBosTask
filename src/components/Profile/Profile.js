import React from 'react'
import { View, Text, Image } from 'react-native'
import ListItem from './components/ListItem'
import styles from './Profile.style'

// import Human from '../../../assets/svg/human.svg'
// import Birthday from '../../../assets/svg/birthday.svg'
// import Gender from '../../../assets/svg/gender.svg'
// import Profileimg from '../../../assets/svg/profile.svg'


function Profile() {
    const infoData = [
        {
            id: 1,
            title: 'Human Resource',
            image: require('../../../assets/human.png'),
            dept: "Department"
        },
        {
            id: 2,
            title: '28 September,1990',
            image: require('../../../assets/birthDay.png'),
            dept: "Date of Birth"
        },
        {
            id: 3,
            title: 'Female',
            image: require('../../../assets/gender.png'),
            dept: "Gender",
            region: 'Islam',
            regTitle: 'Religion'
        },
    ]


    return (
        <View style={styles.container}>
            <View style={styles.Profilecontent}>
                <View style={styles.content}>
                    {/* <Profileimg /> */}
                    <Image source={require('../../../assets/profileImg.png')} />
                    <View style={styles.contentText}>
                        <Text style={styles.name}>Darlene Robertson</Text>
                        <Text style={styles.title}>Senior UX Designer</Text>
                        <Text style={styles.title}>ID43178</Text>
                    </View>
                </View>

                <Text style={styles.active}>Active</Text>
            </View>
            <View>
                {
                    infoData.map(proData =>
                        <ListItem
                            key={proData.id}
                            img={proData.image}
                            title={proData.title}
                            dept={proData.dept}
                            region={proData.region}
                            regTitle={proData.regTitle}
                        />
                    )
                }
            </View>
        </View>
    )
}

export default Profile
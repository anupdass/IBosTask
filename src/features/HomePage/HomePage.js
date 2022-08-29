import React from 'react'
import { ScrollView, View } from 'react-native'
import CustomStatusbar from '../../components/CustomStatusBar/CustomStatusbar'
import Employee from '../../components/Employee/Employee'
import Input from '../../components/Input/Input'
import MenuBar from '../../components/MenuBar/MenuBar'
import Profile from '../../components/Profile/Profile'
import ColorStyle from '../../styles/Color'

function HomePage() {
    return (
        <View style={{ backgroundColor: '#F2F2F7', width: "100%", height: '100%', position: 'relative' }}>
            <CustomStatusbar backgraoundColor={ColorStyle.statusBarColor} />
            <MenuBar />
            <ScrollView style={{ marginTop: 56 }}>
                {/* <Profile /> */}
                {/* <Employee /> */}
                <Input />
            </ScrollView>
        </View>
    )
}

export default HomePage
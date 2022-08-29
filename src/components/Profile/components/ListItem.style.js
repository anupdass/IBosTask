import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderTopColor: 'rgba(158, 150, 150, .5)',
        borderTopWidth: .5,
        alignItems: 'flex-start'
    },
    img: {
        width: 20,
        height: 18,

    },
    content: {
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    },
    dept: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18
    },
    region: {
        borderRightWidth: .5,
        borderColor: 'rgba(158, 150, 150, .5)',
        color: '#F2F2F7',
        paddingRight: 24
    },
    regionBar: {
        paddingLeft: 24
    }

})
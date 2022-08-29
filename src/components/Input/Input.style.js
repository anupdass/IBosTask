import { StyleSheet } from "react-native";
import GlobalStyle from "../../styles/GlobalStyle";


export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 8,

    },
    contentWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: GlobalStyle.wrapperPaddng,

    },
    inputWrapper: {
        marginTop: 20,
        padding: 30,
        backgroundColor: '#FFFFFF',
        elevation: 5
    },
    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20
    },
    btn: {
        width: 120,
        height: 50,
        backgroundColor: '#299647',
        borderRadius: 50,
    },
    text: {
        height: "100%",
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFFFFF',
        fontWeight: '600'

    },
    date: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fileUpload: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    fileText: {
        paddingVertical: 10,
        color: '#34A853',
        paddingLeft: 10,
        fontWeight: '500',
    }
})
import { StyleSheet } from "react-native";
import GlobalStyle from "../../styles/GlobalStyle";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: GlobalStyle.wrapperPaddng,
        backgroundColor: 'white',
        marginBottom: 8,
        paddingBottom: 10
    },
    Profilecontent: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentText: {
        paddingLeft: 20,
    },
    name: {
        fontSize: 20,
        lineHeight: 40,
        fontWeight: '500',
        color: "#344054",
    },
    title: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 25,
        color: '#344054'
    },
    active: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#E6F9E9',
        borderRadius: 50,
        color: "#299647",
        fontWeight: '600',
        fontSize: 12
    }
})
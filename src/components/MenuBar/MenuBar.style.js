import { StyleSheet } from "react-native";
import Color from "../../styles/Color";
import GlobalStyle from "../../styles/GlobalStyle";

export default styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: 56,
        backgroundColor: Color.menubarColor,
        position: 'absolute',
        top: 0,
        zIndex: 10,
    },
    container: {
        height: '100%',
        paddingHorizontal: GlobalStyle.wrapperPaddng,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        paddingLeft: 16,
        color: '#FFFFFF',
        fontSize: 24
    }

})
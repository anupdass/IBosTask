import { StyleSheet } from "react-native";
import GlobalStyle from "../../styles/GlobalStyle";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: GlobalStyle.wrapperPaddng,
        paddingVertical: 15
    },
    emWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap'
    }
})
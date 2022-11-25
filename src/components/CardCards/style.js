import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flex: 1,
    },
    cards: {
        marginTop: 10,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        padding: 10
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    buttonOpen: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 20,
    },
    buttonClose: {
        backgroundColor: 'lightgray',
        marginLeft: 10,
        borderRadius: 20,
        padding: 10

    },
    image: {
        width: 40,
        height: 40,
    },
    values: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
    },
    valuesTexts: {
        paddingLeft: 10,
        flex: 1,
    }
})

export default styles
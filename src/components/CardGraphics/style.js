import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,

    },
    cards: {
        marginTop: 10,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        padding: 10,
        flexDirection: "row",
    },
    graphic: {
        flex: 1,

    }, data: {
        flex: 2,
        paddingLeft: 10,

    }, dataValues: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flex: 1,

    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 10,
    }

})

export default styles
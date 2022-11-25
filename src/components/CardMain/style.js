import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    cardMain: {
        width: '100%',
        height: 250,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10
    },
    dataIcons: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%',
        minHeight: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataBalance: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        flex: 2,
    },
    dataValues: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
    }
})

export default styles
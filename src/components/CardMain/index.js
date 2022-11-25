import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import styles from './style'

export default class index extends Component {
    render() {
        return (
            <View style={styles.cardMain}>
                <View style={styles.dataIcons}>
                    <FontAwesome5 name="user-circle" size={32} color="#828486" style={{ width: 50 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Vaaas</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={'#828486'} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 50 }}>
                        <FontAwesome5 name="bell" size={22} color="#828486" style={{ marginRight: 20, }} />
                        <Entypo name="dots-three-vertical" size={22} color="#828486" style={{ marginRight: 10, }} />
                    </View>
                </View>
                <View style={styles.dataBalance}>
                    <Text>Saldo em conta</Text>
                    <Text style={{ fontSize: 30 }}>R$ 7500,00</Text>
                    <Entypo name={true ? "eye" : 'eye-with-line'} size={22} color="#828486" style={{ marginRight: 10, }} />

                </View>
                <View style={styles.dataValues}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <Entypo name="arrow-with-circle-up" style={{ marginRight: 5 }} size={40} color="green" />
                        <View>
                            <Text>Receita</Text>
                            <Text style={{ fontSize: 23, marginBottom: 10, color: 'green' }}>R$ 7.500,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <Entypo name="arrow-with-circle-down" size={40} style={{ marginRight: 5 }} color="red" />
                        <View>
                            <Text>Despesas</Text>
                            <Text style={{ fontSize: 23, marginBottom: 10, color: 'red' }}>R$ 7.500,00</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { Entypo, EvilIcons } from '@expo/vector-icons'

import styles from './style'

const src = 'data:image/png;base64,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'
export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, color: 'gray' }}>Cartões de Credito</Text>
                <View style={styles.cards}>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonOpen}>
                            <Text style={{ color: 'white' }}>Faturas Abertas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonClose}>
                            <Text style={{ color: 'black' }}>Faturas Fechadas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.values}>
                        <Image style={styles.image} source={{ uri: src }} />
                        <View style={styles.valuesTexts}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 10 }}>ITAU</Text>
                                <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>fecha em 29 out 2022</Text>
                            </View>
                            <Text style={{ fontWeight: '600', color: "red", marginTop: 5 }}>R$ 250,00</Text>
                        </View>
                        <EvilIcons name="plus" size={35} style={{ marginRight: 5 }} color="green" />
                    </View>
                    <View style={{ height: .3, width: '100%', backgroundColor: 'lightgray', marginTop: 10 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontWeight: '800', color: "black", marginTop: 5, marginRight: 20, fontSize: 20 }}>Total</Text>
                        <Text style={{ fontSize: 16, fontWeight: '800' }}>R$ 150,00</Text>
                    </View>
                </View>

            </View>

        )
    }
}
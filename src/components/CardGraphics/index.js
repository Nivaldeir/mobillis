import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { PieChart } from 'react-native-svg-charts'

import styles from './style'

export default class index extends Component {
    render() {
        const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
        const data = [
            {
                id: 1,
                value: 700,
                description: 'Alimentação',
                color: randomColor()
            },
            {
                id: 2,
                value: 2700,
                description: 'Carro',
                color: randomColor()
            },
            {
                id: 3,
                value: 150,
                description: 'Investimento',
                color: randomColor()
            },
            {
                id: 4,
                value: 500,
                description: 'Outros',
                color: randomColor()
            },
        ]

        const pieData = data
            .map((item, index) => ({
                value: item.value,
                svg: {
                    fill: item.color
                },
                key: `pie-${index}`,
            }))

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 26, color: 'gray' }}>Despesa por categorias</Text>
                <View style={styles.cards}>
                    <View style={styles.graphic}>
                        <PieChart style={{ height: 150 }} data={pieData} />
                    </View>
                    <View style={styles.data}>
                        {
                            data.map(i => (
                                <View style={styles.dataValues}>
                                    <View style={[styles.circle, { backgroundColor: i.color }]} />
                                    <Text style={{ flex: 1, marginLeft: 10 }}>{i.description}</Text>
                                    <Text >R$ {i.value}</Text>
                                </View>
                            ))
                        }

                    </View>
                </View>
            </View>
        )
    }
}
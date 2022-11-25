import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import styles from "./style";

import CardMain from '../../components/CardMain'
import CardCards from '../../components/CardCards'
import CardGraphics from '../../components/CardGraphics'
import { ScrollView } from "react-native";

export default function HomeScreen() {
    return (
        <>
            <SafeAreaView style={styles.container} >
                <ScrollView >
                    <CardMain />
                    <CardCards />
                    <CardGraphics />
                </ScrollView>
                <StatusBar backgroundColor="#FFFFFF" />
            </SafeAreaView >
        </>

    );
}

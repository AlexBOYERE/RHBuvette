import {ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '@/components/Themed';
import ListingItems from "@/components/ListingItems";
import CartSummary from "@/components/CartSummary";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Items</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Text>Test 5</Text>
            <ScrollView style={styles.listContainer}>
                <ListingItems/>
            </ScrollView>
            <CartSummary />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    listContainer: {
        flex: 1,
        width: '100%',
    },
});

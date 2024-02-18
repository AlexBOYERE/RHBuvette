import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ItemsData from '@/datas/items.json';

interface Item {
    name: string;
    category: string;
    price: number;
}

const ListingItems: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('Tout');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setItems(ItemsData.items);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    const filterItems = (category: string) => {
        setSelectedCategory(category);
        if (category === 'Tout') {
            setItems(ItemsData.items);
        } else {
            const filteredItems = ItemsData.items.filter(item => item.category === category);
            setItems(filteredItems);
        }
    };

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
                <Text style={[styles.filterItem, selectedCategory === 'Tout' && styles.selectedFilter]} onPress={() => filterItems('Tout')}>Tout</Text>
                <Text style={[styles.filterItem, selectedCategory === 'food' && styles.selectedFilter]} onPress={() => filterItems('food')}>Food</Text>
                <Text style={[styles.filterItem, selectedCategory === 'snack' && styles.selectedFilter]} onPress={() => filterItems('snack')}>Snack</Text>
                <Text style={[styles.filterItem, selectedCategory === 'drink' && styles.selectedFilter]} onPress={() => filterItems('drink')}>Boissons</Text>
            </ScrollView>
            <View style={styles.container}>
                {items.map((item) => (
                    <TouchableOpacity key={item.name} style={styles.itemContainer}>
                        <View style={styles.itemContainer}>
                            <View style={styles.square}>
                                <Ionicons name="fast-food" size={50} color="white" />
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 5,
    },
    itemContainer: {
        width: 150,
        height: 200,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: '#941212',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    price: {
        fontSize: 14,
        marginTop: 5,
    },
    filterContainer: {
        paddingBottom: 10,
    },
    filterItem: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 6,
    },
    selectedFilter: {
        backgroundColor: '#941212',
        color: 'white',
    },
});

export default ListingItems;
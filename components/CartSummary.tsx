import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Item {
    name: string;
    category: string;
    price: number;
}

interface CartItem {
    item: Item;
    price: number;
    quantity: number;
}

const CartSummary: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        // Fetch cart items from storage or API
        // For demonstration purposes, let's use the cartItems state from the parent component
        setCartItems(cartItems);
    }, [cartItems]);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    };

    return (
        <View style={styles.cartSummaryContainer}>
            <Text style={styles.cartSummaryTitle}>Récapitulatif du panier :</Text>
            {cartItems.map((cartItem, index) => (
                <View key={index} style={styles.cartItemContainer}>
                    <Text style={styles.cartItemName}>{cartItem.item.name}</Text>
                    <Text style={styles.cartItemPrice}>{cartItem.price}</Text>
                    <Text style={styles.cartItemQuantity}>{cartItem.quantity}</Text>
                </View>
            ))}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalPrice}>{calculateTotalPrice()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartSummaryContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    cartSummaryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    cartItemName: {
        flex: 2,
        fontSize: 14,
    },
    cartItemPrice: {
        flex: 1,
        fontSize: 14,
    },
    cartItemQuantity: {
        flex: 1,
        fontSize: 14,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartSummary;
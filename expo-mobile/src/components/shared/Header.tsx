import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Header Teste</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        paddingHorizontal: 10,
        borderColor: 'none'
    },
    headerText: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#333',
            letterSpacing: 1
    }
});
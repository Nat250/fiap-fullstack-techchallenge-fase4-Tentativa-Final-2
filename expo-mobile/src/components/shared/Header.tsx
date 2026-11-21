import { StyleSheet, Text, View } from "react-native";

export default function Header({ headerText }: { headerText:any }) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{headerText}</Text>
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
    },
    container: {
        width: '100%',
        height: 80,
        backgroundColor: '#4a90e2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flex: 1
    },
    backButtonContainer: {
        position: 'absolute',
        left: 15,
        paddingRight: 10
    },
    menuContainer: {
        position: 'absolute',
        right: 15,
        paddingRight: 10
    }
});
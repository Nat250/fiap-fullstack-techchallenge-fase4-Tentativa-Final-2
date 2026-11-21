import Header from '@/components/shared/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
//import { auth } from '@/config/firebase';
//import { RootStackParamList } from "../../../types";

/*type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Home"
>;*/


export default function Login() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigation = useNavigation()

    const handleButtonPress = async () => {
        try {
//            await placeholdercommand(auth, user, password);
//            navigation.navigate('Home')
        }catch(error:any){
            setError(error.message)
        }
    }

    return (
        <LinearGradient 
        style={styles.container}
        colors={['#87CEEB', '#FFFFFF']}
        >
        
        <Text></Text>
        
        <Header headerText={'Login'}/>
        <View style={styles.container}>
            <Text></Text>

            <TextInput style={styles.input}
            placeholder='Digite seu Email'
            onChangeText={setEmail}
            value={email}
            />

            <Text></Text>
        
            <TextInput style={styles.input}
            placeholder='Digite sua senha'
            onChangeText={setPassword}
            value={password}
            />

            <StatusBar style="auto"/>
            <Button title="Login" onPress={handleLogin} />
        </View>

        </LinearGradient>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
    },
    content: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
        borderRadius: 25
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        padding: 5
    }
});
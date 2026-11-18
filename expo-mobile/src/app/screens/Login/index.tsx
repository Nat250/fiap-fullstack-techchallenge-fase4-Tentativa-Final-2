import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../../components/shared/Header';
import { auth } from '../config/firebase';
//import { RootStackParamList } from "../../../types";

/*type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Home"
>;*/


export default function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigation = useNavigation()
//    const navigation = useNavigation<HomeScreenNavigationProp>()

    const handleButtonPress = async () => {
        try {
            await placeholdercommand(auth, user, password);
            navigation.navigate('Home')
        }catch(error:any){
            setError(error.message)
        }

/*        Alert.alert('Usuario digitado:', user)
        Alert.alert('Senha digitada:', password)
        Alert.alert(
            'Credenciais Digitadas',
            `Usuário: ${user}\nSenha: ${password}`,
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                    style: 'cancel',
                    //accessibilityLabel: 'Fechar Alerta',
                },
            ],
            {cancelable: true}
        );
        
        if (user){
            navigation.navigate('screens/Home/index', {userName: user});
        } else {
            Alert.alert("Error", "User not logged in");
        }*/
        
    }

    return (
        <LinearGradient 
        style={styles.container}
        colors={['#87CEEB', '#FFFFFF']}
        >
        
        <TextInput/>
        
        <Header/>
        <View style={styles.container}>
            <Text>Texto Teste</Text>

            <Text>Digite seu usuário</Text>
            <TextInput style={styles.input}
            onChangeText={(inputText)=>{setUser(inputText)}}
            value={user}
            />

            <TextInput/>
        
            <Text>Digite sua senha</Text>
            <TextInput style={styles.input}
            onChangeText={(inputText)=>{setPassword(inputText)}}
            value={password}
            />

            <StatusBar style="auto"/>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text>Login</Text>
            </TouchableOpacity>
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
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../../components/shared/Header';

const ListScreen = () => {
    const [data, setData] = useState<any[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
    // Simula a obtenção de dados de uma API
        setData([
            { id: '1', title: 'Item 1', content: 'Conteúdo 1', author: 'Autor 1' },
            { id: '2', title: 'Item 2', content: 'Conteúdo 2', author: 'Autor 2' },
            { id: '3', title: 'Item 3', content: 'Conteúdo 3', author: 'Autor 3' },
        ]);
    };

    function renderPost({ item } : { item:any }) {
        return (
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>Por: {item.author}</Text>
                <Text style={styles.content}>{item.content}</Text>
            </View>
        );
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData();
        setRefreshing(false);
    };

    const loadMoreData = () => {
        // Simula a obtenção de mais dados
        setData([...data, { id: (data.length + 1).toString(), title: `Item ${data.length + 1}` }]);
    };

    return (
        <LinearGradient
        style={styles.container}
        colors={['#87CEEB', '#FFFFFF']}>
        <TouchableOpacity style={styles.container}>
            
            <Header headerText={'Posts'}/>
            <Text></Text>
            <Text></Text>

            <FlatList
                data={data}
                renderItem={renderPost}
                keyExtractor={item => item.id}
                onRefresh={handleRefresh}
                refreshing={refreshing}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.5}
            />
        </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 6,
        marginLeft: 4,
    },
    content: {
        fontSize: 10,
        color: '#333',
        lineHeight: 22,
        marginBottom: 8,
        marginLeft: 4,
    },
    author: {
        fontSize: 12,
        color: '#444',
        marginBottom: 10,
        marginLeft: 4,
    },
});

export default ListScreen;
/*import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from '../../../components/shared/Item';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();


    useEffect(() => {
        fetchData();
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        fetchData;
        setLoading(false);
    };
    
    const fetchData = () => {
        //Simula a obtenção de dados de uma API
        setData([
            {id: '1', title: 'Item 1'},
            {id: '2', title: 'Item 2'},
            {id: '3', title: 'Item 3'}
        ]);
    };
    
    function renderPost({ item } : { item:any }) {
        return (
            <View style={styles.postCard}>
                <TouchableOpacity
                    style={styles.postInfo}
                >
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <Text style={styles.author}>Por: {item.author}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                </TouchableOpacity>

            </View>
        );
    }

    
    return (
        <LinearGradient
        style={styles.container}
        colors={['#87CEEB', '#FFFFFF']}>
        <View>
            <Text></Text>
            <Text>Home</Text>

            <FlatList
                    data={data}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={(item) => String(item.id)}
                    onRefresh={handleRefresh}
                    refreshing={loading}

                    contentContainerStyle={styles.list}
                    ListEmptyComponent={
                        <Text style={styles.empty}>
                            Nenhum post encontrado.
                        </Text>
                    }
            >

            </FlatList>
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        marginTop: 20
    },
    list: {
        alignItems: 'center',
        paddingBottom: 10
    },
    empty: {
        flex: 1,
        backgroundColor: 'fff'
    },
    postCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        alignItems: 'center',
    },
    postInfo: {
        flex: 1,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#222',
    },
    author: {
        fontSize: 13,
        color: '#666',
        marginBottom: 10,
    },
    content: {
        fontSize: 15,
        color: '#444',
        lineHeight: 22,
    },
});*/

import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        <TouchableOpacity style={styles.container}>
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
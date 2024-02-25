import React from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputForm from '../components/InputForm'
import TodoItem from '../components/TodoItem'
import { useSelector } from 'react-redux'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const MainScreen = () => {
    const todos = useSelector(state => state.todo.todos)
    const todoTask = todos.filter((item)=> item.state === "todo")
    const doneTask = todos.filter((item)=> item.state === "done")
    const auth = getAuth()
    const navigation = useNavigation()

    const handleLogout = async () =>{
        try {
            await signOut(auth)
            navigation.replace('login')
        } catch (error) {
            console.log(error.message);            
        }
    }

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'} />
        <View style={styles.headerContainer}>
            <Text style={styles.pageTitle}>ToDo App</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>X</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.listView}>
            <Text style={styles.listTitle}>To Do</Text>
            { todoTask.length !==0?
                <FlatList 
                    data={todoTask}
                    renderItem={({item})=> <TodoItem {...item}/>}
                    keyExtractor={(item)=>item.id}
                />
            : <Text style={styles.emptyListText}>
                Nothing to do
            </Text>
            }
        </View>
        <View style={styles.separator} />
        <View style={styles.listView}>
            <Text style={styles.listTitle}>Done</Text>
            { doneTask.length !==0?
                <FlatList 
                    data={doneTask}
                    renderItem={({item})=> <TodoItem {...item}/>}
                    keyExtractor={(item)=>item.id}
                />
            : <Text style={styles.emptyListText}>
                Nothing done
            </Text>
            }
        </View>
        <InputForm/>
    </SafeAreaView>
    )
}

export default MainScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 :0,
        backgroundColor: '#f7f8fa'
    },
    pageTitle:{
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 54,
        fontWeight: '600'
    },
    listView:{
        flex: 1

    },
    listTitle:{
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 41,
        fontWeight: "500"
    },
    separator:{
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    emptyListText:{
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
        fontSize: 15,
        lineHeight: 20,
        color:"#737373"
    },
    logoutButton:{
        marginBottom: 25,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 42,
        height: 42,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 4
    },
    logoutText:{
        color: "white",
        fontSize: 25
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    }
})
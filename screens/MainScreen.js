import React from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import InputForm from '../components/InputForm'
import TodoItem from '../components/TodoItem'
import { useSelector } from 'react-redux'

const MainScreen = () => {
    const todos = useSelector(state => state.todo.todos)
    const todoTask = todos.filter((item)=> item.state === "todo")
    const doneTask = todos.filter((item)=> item.state === "done")

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'} />
        <Text style={styles.pageTitle}>ToDo App</Text>
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
    }
})
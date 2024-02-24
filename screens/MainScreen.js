import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

const MainScreen = () => {
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'} />
        <Text style={styles.pageTitle}>ToDo App</Text>
        <View style={styles.listView}>
            <Text style={styles.listTitle}>To Do</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.listView}>
            <Text style={styles.listTitle}>Done</Text>
        </View>
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
    }
})
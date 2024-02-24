import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'

const MainScreen = () => {
    return (
    <SafeAreaView>
        <StatusBar barStyle={'default'} />
        <Text>ToDo App</Text>
        <View>
            <Text>To Do</Text>
        </View>
        <View>
            <Text>Done</Text>
        </View>
    </SafeAreaView>
    )
}

export default MainScreen
import {StatusBar} from 'expo-status-bar'
import {Text, View, Image} from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {icons} from "../constants"



export default function App(){

    return(

        <SafeAreaView className="bg-primary h-full">
        <View className="w-full justify-start items-center px-4 mt-20">
            <Text className="text-4xl text-secondary-200 font-mblack ">DRYCARGO</Text>
            <StatusBar style='light'/>
            <Link href="/home">Go to Home</Link>
        </View>
        </SafeAreaView>
    );
}
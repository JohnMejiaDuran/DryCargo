import {StatusBar} from 'expo-status-bar'
import {Text, View, Image, ScrollView, Stack} from 'react-native'
import {Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {icons} from "../constants/"
import CustomButton from '../components/CustomButton'
import FormField from '../components/FormField'
import SignIn from './(auth)/sign-in'



export default function App(){

    
    return(

        <SafeAreaView className="bg-primary h-full">
            
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="h-200">
                    <Image
                        source={icons.logo}
                        className="w-[100%] h-[150px]"
                        resizeMode='contain'
                    />
                <SignIn />
                </View>
                
                <View className="w-full justify-center items-center px-4  ">
                <CustomButton 
                        title="Iniciar Sesión"
                        handlePress={()=> router.push('/home')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#8C4191' style='light'/>
        </SafeAreaView>
    );
}
import { View, Text, Image} from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'

import {icons} from "../../constants"

const TabIcon = ({icon,color,name,focused}) => {
    
    return (
        <View className="items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-8 h-8"
            />
            <Text className={`${focused ? 'font-mbold':'font-mlight'} text-xs`} style={{color:color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#9E8B8B',
                tabBarStyle: {
                    backgroundColor: '#8C4191',
                    borderTopWidth: 2,
                    borderTopColor: '#D3C9C9',
                    height: 64
                    
                }
            }}
            >
            <Tabs.Screen 
                name='home'
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                           icon={icons.home}
                           color={color}
                           name="Inicio"
                           focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name='plus'
                options={{
                    title: "Plus",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                           icon={icons.plus}
                           color={color}
                           name="Nuevo Álbum"
                           focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name='profile'
                options={{
                    title: "profile",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                           icon={icons.profile}
                           color={color}
                           name="Perfil"
                           focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout
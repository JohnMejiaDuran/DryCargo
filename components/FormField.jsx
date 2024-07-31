import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import {icons} from "../constants"

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-secondary-200 text-semibold  font-mmedium">{title}</Text>
      <View className="border-2 border-gray-400 w-full h-16 px-4 bg-white rounded-2xl focus:border-secondary-200 flex-row items-center">
        <TextInput 
          className="flex-1 text-black font-mmedium text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Contraseña" && !showPassword}
        />

        {title === 'Contraseña' && (
          <TouchableOpacity onPress={() =>
            setShowPassword(!showPassword)}>
            <Image 
              source={!showPassword ? icons.eye : icons.eye_hide}
              className="w-8 h-8"
              resizeMode='contain'
            />


          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
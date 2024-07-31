import { View, Text, ScrollViewBase, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'

const SignIn = () => {
  const [form, setForm] = useState({
    document: '',
    password: ''
  })
  return (
    <SafeAreaView className="bg-primary ">
        <View className="w-full  px-4">
          <FormField 
            title="Documento"
            value={form.document}
            handleChangeText={(e) => setForm({...form,
            document:e})}
            otherStyles="mt-7"
            keyboardType="numeric"
          />
          <FormField 
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => setForm({...form,
            password:e})}
            otherStyles="mt-7"
        
          /> 
        </View>
    </SafeAreaView>
  )
}

export default SignIn
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import tw from "twrnc";


function ProfileInput({name,placeholder}){
    const validationColor = '#223e4b';
    return(
    <>  
    
        <View style={tw `p-4 mt-8`}>
            <TextInput style={[tw `rounded-b-3xl p-5 bg-[#3D7C98]/5 border border-t-[#EDF1F5] border-r-[#EDF1F5] border-l-[#EDF1F5] border-b-[#3D7C98]/65 h-[60px] w-[100%] `]}
                name={name} 
                placeholder={placeholder} 
            /> 
        </View>
    </>
    );

    
} 
// const styles = StyleSheet.create({
//     input: {
//         shadowColor: '#6C95A7',
//         shadowOffset:'20',
//     },
// });
export default ProfileInput;
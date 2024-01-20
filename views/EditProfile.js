import React from 'react';
import Navbar from '../components/Navbar';
import { IMAGES } from "../assets/Index";
import { StyleSheet,Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from "twrnc";

import ProfileInput from '../components/ProfileInput';

function EditProfile(){
return(
<>
<View style={tw `pt-8 rounded-lg w-full h-full bg-[#E3EBF3]`}>
    <Navbar label="Edit Profile" 
        icon={
            <Icon 
            name= 'chevron-left'
            color="#000000"
            size={25}
            /> 
        }
       
    />

     <Image source={require('../assets/profile.png')}
     style={{width:360, height: 250, borderRadius:300 }}
     /> 

     <ProfileInput name="name" placeholder="John Martin"/>
     <ProfileInput name="email" placeholder="JohnMartin@gmail.com"/>
     <View style={tw `bg-[#3D7C98] w-40 p-3 h-13 mt-15 mr-6 rounded-full self-center`}><Text style={tw `text-xl text-white self-center`}>Save changes</Text></View>

</View>


</>
);

}
export default EditProfile
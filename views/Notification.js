import React from 'react';
import Navbar from '../components/Navbar';
import { StyleSheet,Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from "twrnc";
import Content from '../components/NotificationContent';



function Notify(){
return(
<>
<View style={tw `pt-8 rounded-lg w-full h-full bg-[#D9D9D9]/60`}>
    <Navbar label="Notification" 
        icon={
            <Icon 
            name= 'chevron-left'
            color="#000000"
            size={25}
            /> 
        }
        icon2={
            <Icon
            name='bell'
            size={25}
            />
        }
       
    />
    <View style={tw `p-3 h-200 bg-white`}>
      <Text style={tw `rounded-full mb-5 text-5 w-20 h-10 pt-2 bg-[#01A768] text-center`}>All</Text>
      
      <View style={tw `p-5 bg-[#EDF1F5]`}>
        <Content message="Your reservation for Allegra 120mg Tablet has been declined!!!" NumDays="2days ago"/>
        <Content message="Your reservation for Allegra 120mg Tablet has been accepted!!!" NumDays="2days ago"/>
        <Content  message="Your reservation for Allegra 120mg Tablet has been accepted!!!" NumDays="2days ago"/>
        <Content  message="Your reservation for Allegra 120mg Tablet has been accepted!!!" NumDays="2days ago"/>
      </View>      
    </View>

    
</View>


</>
);

}
export default Notify
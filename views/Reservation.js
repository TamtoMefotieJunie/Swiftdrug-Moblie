import React from 'react';
import Navbar from '../components/Navbar';

import { StyleSheet,Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from "twrnc";
import ReservationForm from '../components/ReservationForm';


function Reserve(){
return(
<>
<View style={tw `pt-8 rounded-lg w-full h-full bg-[#E3EBF3]`}>
    <Navbar label="Reservation" 
        icon={
            <Icon 
            name= 'chevron-left'
            color="#000000"
            size={25}
            /> 
        }
       style={tw `bg-[#D9D9D9]/40`}
    />
    <View style={tw `p-5`}>
        <ReservationForm title="BOOK MEDICINE" label1="Drugname" label2="Category" label3="Quantity"/>
    </View>

    
</View>


</>
);

}
export default Reserve
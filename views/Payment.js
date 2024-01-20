import React from 'react';
import Navbar from '../components/Navbar';

import { StyleSheet,Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from "twrnc";
import PaymentForm from '../components/PaymentForm';


function Pay(){
return(
<>
<View style={tw `pt-8 rounded-lg w-full h-full bg-[#E3EBF3]`}>
    <Navbar label="Payment" 
        icon={
            <Icon 
            name= 'chevron-left'
            color="#000000"
            size={25}
            /> 
        }
       style={tw `bg-[#D9D9D9]/40`}
    />
    <View style={tw `ml-5.5`}>
        <Text style={tw `text-2xl text-[#229835]`}>SWIFT</Text>
        <Text style={tw `text-2xl text-[#206C8D]`}>DRUG</Text>
    </View>
    <View style={tw `p-5`}>
        <PaymentForm label1="Amount" label2="Name" label3="Telephone"  title="Payment" />
    </View>

    
</View>


</>
);

}
export default Pay
import React from "react";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Input from "../components/FormInput";
import Medicine from "../components/Medicine";

function PharmacyList(){
    return(
        <>
        <View style={tw`bg-white`}>
        <View style={tw`bg-[#D9D9D9]/20 h-20 mt-8 p-2 flex-row justify-between`}>
          <View style={tw `w-62% `}>
            <Input name = "search" placeholder="search for a pharmacy here"
            icon={
                <Icon
                name="search"
                size={13}
                />
            }
            />
          </View>

          <View style={tw `flex-row justify-around w-[30%]`}>
            <Icon name="bell" size={25} 
            style={{marginTop:15}}
            />
            <View style={tw`rounded-lg w-12 h-12 top-2 bg-[#D9D9D9]`}>
                <View style={tw `w-5 h-5 bg-[#01A768] rounded-full left-9 top-5`}></View>
            </View>
          </View>
        </View>

        <View style={tw `p-3`}>
        <Text style={tw `text-5 font-bold text-[#000000]`}>List of Pharmacies (80)</Text>
            <Text style={tw `text-3 mb-3 text-[#000000]/30`}>list of Pharmacies available </Text>
            <View style={tw`rounded-lg overscroll-auto  h-[90%]`}>
                <View style={tw `flex-row justify-between rounded-lg pl-2 bg-[#ffffff]`}>
                    <View style={tw `p-3  w-[33%] border-r-2 border-[#D9D9D9]`}><Text style={tw `text-4 font-bold text-start`}>Name</Text></View>
                    <View style={tw `p-3 border-r-2  w-[35%] border-[#D9D9D9]`}><Text style={tw `text-4 font-bold text-center`}>Location</Text></View>
                    <View style={tw `p-3  w-[30%] border-r-2  border-[#D9D9D9]`}><Text style={tw `text-4 font-bold text-center`}>Status</Text></View>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={tw`pt-1 border-[#D9D9D9] h-10%` }>
                        <Medicine name="Stella" category="Awae" price="OPENED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-2 border-t-2 border-[#D9D9D9] mt-2 h-11%` }>
                    <Medicine name="Ekounou" category="Ekounou" price="OPENED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-1 border-t-2 border-[#D9D9D9] mt-1 h-10%` }>
                        <Medicine name="Galien" category="Yademe" price="OPENED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-1 mt-2 border-t-2 border-[#D9D9D9] h-10%` }>
                        <Medicine name="Ekounou" category="Ekounou" price="CLOSED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-1 border-t-2 border-[#D9D9D9]  mt-2 h-11%` }>
                        <Medicine name="La Gloire" category="Dja" price="CLOSED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-1 mt-2 border-t-2 border-[#D9D9D9] h-11%` }>
                        <Medicine name="Bruxellois" category="banvele"price="OPENED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-1 mt-2 border-t-2 border-[#D9D9D9] h-13%` }>
                        <Medicine name="Tchapgang" category="Quiferou" price="OPENED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-7  border-t-2 border-[#D9D9D9] h-11%` }>
                        <Medicine name="Azithral 500" category="Rheumatism" price="CLOSED" action="View Medicine List"/>
                    </View>
                    <View style={tw`pt-7 border-t-2 border-[#D9D9D9] h-10%` }>
                        <Medicine name="Azithral 500" category="Rheumatism"  action="View Medicine List"/>
                    </View>
                </ScrollView>
                
            </View>
        </View>
    </View>
        </>
    )


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      flex: 1,
      overflow: 'auto', // or 'hidden', 'visible', 'auto'
      // Additional styling as needed
      innerHeight:900,
    },
  });
  
export default PharmacyList;
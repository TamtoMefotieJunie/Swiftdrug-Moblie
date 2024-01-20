import React from "react";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import { Stylesheet, Text, View } from "react-native";
import tw from "twrnc";
import Rates from "../components/PharmacyRates";
import Cards from "../components/Cards";
import Card2 from "../components/Card2";

function Dashboard() {
  return (
    <>
    <View style={tw`bg-white`}>
        <View style={tw`bg-[#D9D9D9]/20 h-20 mt-8 p-5 flex-row justify-between`}>
          <View>
            <Icon name="bars" size={30} />
          </View>

          <View style={tw `flex-row justify-around w-[30%]`}>
            <Icon name="bell" size={25} 
            style={{marginTop:5}}
            />
            <View style={tw`rounded-lg w-12 h-12 bg-[#D9D9D9]`}>
                <View style={tw `w-5 h-5 bg-[#01A768] rounded-full abolute left-9 top-5`}></View>
            </View>
          </View>
        </View>
        <View style={tw `p-5`}>
            <View style={tw `flex-row justify-between`}>
            <View>
                <Text style={tw `text-lg font-bold`}>Welcome Back,</Text>
                <Text style={tw `text-4`}>Junie</Text>
            </View>
            <View style={tw `rounded-lg bg-[#3D7C98] p-2`}><Text style={tw `text-lg text-white text-center font-bold`}>View Pharmacy List</Text></View>
            </View>
        </View>
    
            <View style={tw`w-[100%] justify-around flex-row border-2 h-[25%] p-2`}>
                <Cards value="20" label="Pharmacies opened" percentage="70%"
                icon={
                    <Icon 
                    name="plus-square"
                    size={25}
                    marginTop={6}
                    marginLeft={8}
                    style={{color:"green"}} 
                    />
                }
                />
                <Card2 value="5" label="Medicine Shortage" percentage="10%"
                icon={
                    <Icon 
                    name="exclamation-triangle"
                    size={25}
                    marginTop={4}
                    marginLeft={5}
                    style={{color:"red"}} 
                    />
                }
                />
                

            </View>
        
        <View style={tw`h-[50%] p-5`} >
            <Text style={tw `text-5 font-bold text-[#6C95A7]`}>Most Rated Pharmacies</Text>
            <Text style={tw `text-3 mb-3`}>Pharmacies with which most users were satisfied </Text>
            <View style={tw` h-[90%]`}>
                <View style={tw `flex-row justify-between bg-[#6C95A7]`}>
                    <View style={tw `pt-3  w-[50%] border-[#D9D9D9]`}><Text style={tw `text-4 text-start`}>Name</Text></View>
                    <View style={tw `p-3 justify-end w-[50%] border-[#D9D9D9]`}><Text style={tw `text-4 text-center`}>Rates</Text></View>
                    
                </View>
            <Rates name="Bruxellois"
                icon={
                    <Icon name="star" style={{color:"green"}} size={20}/>
                }
                icon2={
                    <Icon name="star" style={{color:"green"}} size={20}/>
                }
                icon3={
                    <Icon name="star" style={{color:"green"}} size={20}/>
                }
                icon4={
                    <Icon name="star" style={{color:"green"}}  size={20}/>
                }
                icon5={
                    <Icon name="star" style={{color:"green"}}  size={20}/>
                }       
            />
             <Rates name="La Gloire"
                icon={
                    <Icon name="star" style={{color:"green"}} size={20}/>
                }
                icon2={
                    <Icon name="star" style={{color:"green"}} size={20}/>
                }
                icon3={
                    <Icon name="star" style={{color:"green"}} size={20}/>
                }
                icon4={
                    <Icon name="star" style={{color:"green"}}  size={20}/>
                }
                icon5={
                    <Icon name="star" style={{color:"green"}}  size={20}/>
                }       
                />
                 <Rates name="Galien"
                    icon={
                        <Icon name="star" style={{color:"green"}} size={20}/>
                    }
                    icon2={
                        <Icon name="star" style={{color:"green"}} size={20}/>
                    }
                    icon3={
                        <Icon name="star" style={{color:"green"}} size={20}/>
                    }
                    icon4={
                        <Icon name="star" style={{color:"green"}}  size={20}/>
                    }
                    icon5={
                        <Icon name="star"  size={20}/>
                    }       
                />
                 <Rates name="Stella"
                    icon={
                        <Icon name="star" style={{color:"green"}} size={20}/>
                    }
                    icon2={
                        <Icon name="star" style={{color:"green"}} size={20}/>
                    }
                    icon3={
                        <Icon name="star" style={{color:""}} size={20}/>
                    }
                    icon4={
                        <Icon name="star"  size={20}/>
                    }
                    icon5={
                        <Icon name="star"  size={20}/>
                    }       
                />
                

            </View>
        </View>
        
    </View>
    </>
  );
}
export default Dashboard;

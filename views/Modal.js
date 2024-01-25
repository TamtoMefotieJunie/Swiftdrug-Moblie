import React from "react";
import { Text,View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import tw from "twrnc";

function Modal(){
    return(
        <>
        <View  style={tw `bg-[#00000060] rounded-lg w-full h-full`}>
            <View style={tw `bg-[#EDF1F5] rounded-lg w-77% h-full`}>
                <View style={tw `ml-4  pt-15 mb-5 h-20%`}>
                    <Text style={tw `text-2xl text-[#229835]`}>SWIFT</Text>
                    <Text style={tw `text-2xl text-[#206C8D]`}>DRUG</Text>
                </View>
                <View style={tw ` h-80%`}>
                    <View style={tw `flex-row justify-between p-8`}>
                        <View><Icon
                        name="home"
                        size={35}
                        
                        style={{color:"#3D7C98"}}
                        />
                        </View>
                        <View><Text style={tw `font-bold text-[#3D7C98] text-6`}>Home</Text></View>
                        <View style={tw `bg-[#3D7C98] w-5% h-110% rounded-lg`}></View>
                    </View>
                    <View style={tw `flex-row justify-between p-8`}>
                        <View><Icon
                        name="hospital"
                        size={35}
                        />
                        </View>
                        <View><Text style={tw `font-bold text-6`}>Pharmacies</Text></View>
                        {/* <View style={tw `bg-[#3D7C98] w-5% h-110% rounded-lg`}></View> */}
                    </View>
                    <View style={tw `flex-row justify-between p-8`}>
                        <View><Icon
                        name="file-invoice"
                        size={35}
                        />
                        </View>
                        <View><Text style={tw `font-bold text-6`}>Reservation</Text></View>
                        {/* <View style={tw `bg-[#3D7C98] w-5% h-110% rounded-lg`}></View> */}
                    </View>
                    <View style={tw `flex-row justify-between p-8`}>
                        <View><Icon
                        name="user"
                        size={35}
                        />
                        </View>
                        <View><Text style={tw `font-bold text-6`}>Profile</Text></View>
                        <View style={tw `bg-none w-5% h-110% rounded-lg`}></View>
                    </View>
                </View>
            </View>
        </View>

        </>
    )
}
export default Modal;
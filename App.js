import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import LoginForm from './views/LoginForm';
import tw from "twrnc";
import RegisterForm from './views/Register';
import UserProfile from './views/Profile';
import EditProfile from './views/EditProfile';
import Reserve from './views/Reservation';
import Pay from './views/Payment';
import Localisation from './views/Localisation';
import Notify from './views/Notification';
import Dashboard from './views/Dashboard';
import MedicineList from './views/MedicineList';
import PharmacyList from './views/PharmacyList';
import Modal from './views/Modal';

import Test from './views/test';

export default function App() {
  return (
     <>
        {/* <LoginForm/> */}
        {/* <RegisterForm/> */}
        {/* <UserProfile/> */}
        {/* <EditProfile/> */}
        {/* <Reserve/> */}
        {/* <Pay/> */}
        {/* <Localisation/> */}
        {/* <Notify/> */}
        <Dashboard/>
        {/* <MedicineList/> */}
        {/* <PharmacyList/> */}
      {/* <Modal/> */}
        
    </>
  );
}

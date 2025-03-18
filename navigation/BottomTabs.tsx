import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DealsScreen from "../screens/DealsScreen";
import StoresScreen from "../screens/StoresScreen";
import OrdersScreen from "../screens/OrdersScreen";
import DocumentsScreen from "../screens/DocumentsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const blueColor = "rgba(58, 161, 255, 1)";

// Stack Navigator для DocumentsScreen
const DocumentsStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Documents" 
      component={DocumentsScreen} 
      options={{
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Квартира на Чеховской
            </Text>
          </View>
        ),
        headerLeft: () => null,
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 15 }}>
            <MaterialCommunityIcons name="share-variant" size={24} color={blueColor} />
          </TouchableOpacity>
        ),
      }}
    />
  </Stack.Navigator>
);

// Bottom Tabs Navigator
const BottomTabs: React.FC = () => {
  return (
  <Tab.Navigator
    initialRouteName="DocumentsStack"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: blueColor,
      tabBarInactiveTintColor: "gray",
    }}
  >
      <Tab.Screen 
        name="Deals" 
        component={DealsScreen} 
        options={{ 
          title: "Сделки", 
          tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} /> 
        }} 
      />
      <Tab.Screen 
        name="Stores" 
        component={StoresScreen} 
        options={{ 
          title: "Магазины", 
          tabBarIcon: ({ color }) => <FontAwesome5 name="store" size={24} color={color} /> 
        }} 
      />
      <Tab.Screen 
        name="Orders" 
        component={OrdersScreen} 
        options={{ 
          title: "Заказы", 
          tabBarIcon: ({ color }) => <MaterialIcons name="bookmark-border" size={24} color={color} /> 
        }} 
      />
      <Tab.Screen 
        name="DocumentsStack" 
        component={DocumentsStack} 
        options={{ 
          title: "Документы", 
          tabBarIcon: ({ color }) => <Ionicons name="document-text-sharp" size={24} color={color} /> 
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          title: "Профиль", 
          tabBarIcon: ({ color }) => <FontAwesome6 name="user-circle" size={24} color={color} /> 
        }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
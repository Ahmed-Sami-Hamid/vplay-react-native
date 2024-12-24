import React from 'react'

// React Native
import { Image, Text, View , ImageSourcePropType, } from 'react-native'

// Expo
import { Tabs , Redirect} from "expo-router"

// Constants
import { icons } from "../../constants";

interface TabIconProps {
  icon: ImageSourcePropType; 
  color: string;            
  name: string;            
  focused: boolean;         
}

interface TabItem {
  title: string;     
  name: string;       
  iconTitle: string;  
  icon: string;      
}

const tabs: TabItem[] = [
  {
    title: "Home",
    name: "home",
    iconTitle: "Home",
    icon: "home",
  },
  {
    title: "Bookmark",
    name: "bookmark",
    iconTitle: "Bookmark",
    icon: "bookmark",
  },
  {
    title: "Create",
    name: "create",
    iconTitle: "Create",
    icon: "plus",
  },
  {
    title: "Profile",
    name: "profile",
    iconTitle: "Profile",
    icon: "profile",
  },
];

const TabIcon : React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#40FDAB",
      tabBarInactiveTintColor: "#CDCDE0",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#0B1711",
        borderTopWidth: 1,
        borderTopColor: "#232533",
        height: 90,
      },
    }}
  >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons[tab.icon as keyof typeof icons]}
                color={color}
                name={tab.iconTitle}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabsLayout

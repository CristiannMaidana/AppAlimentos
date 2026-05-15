import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#000000',
        headerShown: true,
        headerTitle: 'Digital Epicurean',
        headerTitleAlign: 'center',
        tabBarStyle: {
          height: 88,
          paddingTop: 8,
          paddingBottom: 8,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          overflow: 'hidden',
        },
        headerLeft: () => (
          <Pressable
            onPress={() => Alert.alert('Options', 'Options button touched')}
            style={{ marginLeft: 16 }}>
            <MaterialIcons name="menu" size={28} color="#000000" />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable
            onPress={() => Alert.alert('User', 'User button touched')}
            style={{ marginRight: 16 }}>
            <MaterialIcons name="account-circle" size={28} color="#000000" />
          </Pressable>
        ),
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: ({ focused }) => (
            focused ? null : <Text style={{ fontSize: 12, color: '#000000' }}>Home</Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              backgroundColor: focused ? '#5ea05f' : 'transparent',
              borderRadius: 999,
              marginTop: 6,
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
              <IconSymbol size={28} name="house.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarLabel: ({ focused }) => (
            focused ? null : <Text style={{ fontSize: 12, color: '#000000' }}>Search</Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              backgroundColor: focused ? '#5ea05f' : 'transparent',
              borderRadius: 999,
              marginTop: 6,
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
              <IconSymbol size={28} name="magnifyingglass" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarLabel: ({ focused }) => (
            focused ? null : <Text style={{ fontSize: 12, color: '#000000' }}>Favorites</Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              backgroundColor: focused ? '#5ea05f' : 'transparent',
              borderRadius: 999,
              marginTop: 6,
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
              <IconSymbol size={28} name="heart.fill" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

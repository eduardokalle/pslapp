import React from 'react';
import { Image, StyleSheet, BackHandler, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Block, Button, Text } from 'expo-ui-kit';
import { LinearGradient } from 'expo-linear-gradient';

// componentes

import Home from '../components/Home';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import AboutUs from '../components/AboutUs';
import List from '../components/List';
import PricePay  from '../components/PricePay';
import WorkWithUs from '../components/WorkWithUs';
import Blog from '../components/Blog';
import Form from '../components/Form';

import logo from '../assets/logo_alone_white.png';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()} style={{ top: 20 }}>
              <Feather name="menu" size={20} color="black" style={{ paddingHorizontal: 18 }} />
            </Button>
          ),
        }}>
        <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
        <Stack.Screen name="Services">{props => <Services {...props} />}</Stack.Screen>
        <Stack.Screen name="Appointment">{props => <Appointment {...props} />}</Stack.Screen>
        <Stack.Screen name="AboutUs">{props => <AboutUs {...props} />}</Stack.Screen>
        <Stack.Screen name="List">{props => <List {...props} />}</Stack.Screen>
        <Stack.Screen name="PricePay">{props => <PricePay {...props} />}</Stack.Screen>
        <Stack.Screen name="WorkWithUs">{props => <WorkWithUs {...props} />}</Stack.Screen>
        <Stack.Screen name="Blog">{props => <Blog {...props} />}</Stack.Screen>
        <Stack.Screen name="Contact">{props => <Form {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <Block>
        <Block flex={0.4} margin={20} bottom>
          <Image
            /* source={{
              uri: '../assets/logo_alone_white.png',
              height: 60,
              width: 60,
              scale: 0.5,
            }}*/
            source={require('../assets/logo_alone_white.png')}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text white title>
            Protejo
          </Text>
          <Text white size={9}>
            Mas cerca de ti
          </Text>
        </Block>
        <Block>
          <DrawerItem
            label="Home"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <AntDesign name="home" color="white" size={16} />}
          />
          <DrawerItem
            label="Servicios"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Services')}
            icon={() => <AntDesign name="message1" color="white" size={16} />}
          />
          <DrawerItem
            label="Tu Cita"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Appointment')}
            icon={() => <AntDesign name="calendar" color="white" size={16} />}
          />
           <DrawerItem
            label="Quienes Somos"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('AboutUs')}
            icon={() => <AntDesign name="flag" color="white" size={16} />}
          />
           <DrawerItem
            label="Testimonios"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('List')}
            icon={() => <AntDesign name="team" color="white" size={16} />}
          />
           <DrawerItem
            label="Precios"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('PricePay')}
            icon={() => <AntDesign name="creditcard" color="white" size={16} />}
          />
           <DrawerItem
            label="Trabaja con Nosotros"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('WorkWithUs')}
            icon={() => <AntDesign name="like2" color="white" size={16} />}
          />
            <DrawerItem
            label="Noticias"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Blog')}
            icon={() => <AntDesign name="book" color="white" size={16} />}
          />
            <DrawerItem
            label="Contactanos"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Contact')}
            icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
        </Block>
      </Block>

      <Block flex={false}>
        <DrawerItem
          label="Salir"
          labelStyle={{ color: 'white' }}
          icon={() => <AntDesign name="poweroff" color="white" size={16} />}
          onPress={ () =>  {
            Alert.alert(
                "",
                "Seguro que quiere salir de la app?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => BackHandler.exitApp() }
                ],
                { cancelable: false }
              );
          }}
        />
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#0064ad', '#c6469a', '#0064ad']}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    //borderColor: 'white',
    height: 60,
    width: 60,
    // scale: 0.5,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
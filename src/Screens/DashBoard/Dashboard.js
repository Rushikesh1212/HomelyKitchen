/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import BannerCarousel from '../../ScreenComponents/BannerCarousel/BannerCarousel';
import FlatListView from '../../ScreenComponents/FlatListView/FlatListView';



const Dashboard =(props)=>{
  const isDarkMode = useColorScheme() === 'dark';
  
  const CategoryList=[
   {id:1,img: require('../../images/mahathali.jpeg')},
   {id:2,img: require('../../images/southindian.jpeg')},
   {id:3,img: require('../../images/mahathali.jpeg')},
   {id:4,img: require('../../images/southindian.jpeg')},
  ]

  const OutletList=[
    {id:1,img: require('../../images/mahathali.jpeg')},
    {id:2,img: require('../../images/southindian.jpeg')},
    {id:3,img: require('../../images/mahathali.jpeg')},
    {id:4,img: require('../../images/southindian.jpeg')},
   ]


   const BannerList =[
    {id:1,img: require('../../images/Banner1.jpeg')},
    {id:2,img: require('../../images/banner2.jpeg')},
    {id:3,img: require('../../images/banner3.jpeg')},
   ]
  return (
    <SafeAreaView >
        <BannerCarousel  
            list={BannerList}
          />
        <FlatListView 
            headText="Category"
            list={CategoryList}
          props={props}

        />
        <FlatListView 
          headText="Outlets"
          list={OutletList}
          props={props}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    marginTop: 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems:'center',
    width:100,
    marginVertical: 8,
    marginHorizontal: 16,
  },
 
  highlight: {
    fontWeight: '700',
  },
  
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default Dashboard;

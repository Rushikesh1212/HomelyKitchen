/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  // FlatList
} from 'react-native';

import { Header,Icon,Image } from '@rneui/themed';
import Carousel from 'react-native-reanimated-carousel';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;




const BannerCarousel= (props: {
  list: [];
}) => {
  console.log("props",props);
  const {list}=props;
  console.log("list====>",list);
   

  return (
    <SafeAreaView >
      <Carousel
        loop
        width={width}
        height={height/4}
        autoPlay={true}
        data={list}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({item,index }) => (
            <View
                style={{
                    borderWidth: 1,
                    justifyContent: 'center',
                }}
            >
                <Image
                  source={item.img}
                  
                  style={{ width: width, height: 200 }}
                  PlaceholderContent={<ActivityIndicator />}
                />
            </View>
        )}
    /> 
   
    </SafeAreaView>
  );
}


export default BannerCarousel;

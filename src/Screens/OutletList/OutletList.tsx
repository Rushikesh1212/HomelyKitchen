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
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FlatList,GestureHandlerRootView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements'



import {Image } from '@rneui/themed';

const OutletList = (props: {
  headText: String;
  list: [];
}) => {
  const {headText,list}=props;
  const [headerText,setHeadText]=useState(headText);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height:'100%'
  };
  
  const [selectedId, setSelectedId] = useState<number>();
  type ItemData = {
    id: number;
    img: string;
    name:string;
  };

  const DATA: ItemData[]=[
    {id:1,img: require('../../images/mess1.jpeg'),name:"Hotel Mayur"},
    {id:2,img: require('../../images/mess2.jpeg'),name:"Hotel Samarth"},
    {id:3,img: require('../../images/mess3.jpeg'),name:"Annapurna Tiffin Service"},
    {id:4,img: require('../../images/mess4.jpeg'),name:"Tasty Biryani"},
    {id:4,img: require('../../images/mess5.jpeg'),name:"Hotel Kamat Kolhapuri"},
    {id:4,img: require('../../images/mess6.png'),name:"Hotel Mayur"},
    {id:4,img: require('../../images/mess1.jpeg'),name:"Hotel Haryali"},
    {id:4,img: require('../../images/mess2.jpeg'),name:"Hotel Mayur"},
   ]

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };
  

  const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
    <Card title="CARD WITH DIVIDER">
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Image
            style={{ width: 100, height: 100 }}
            resizeMode="cover"
            source={item.img}
        />
        <Text style={{fontSize:15,fontStyle:'italic',fontWeight:'bold'}}>{item.name}</Text>
        </View>
  </Card>
  );

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
console.log("item",item);
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
console.log('data',DATA);

  return (
    <GestureHandlerRootView  style={styles.container}>
     <FlatList
        data={DATA}
        renderItem={renderItem}

        keyExtractor={item => item.id.toString()}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    marginTop: 0,
    flex:1
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

export default OutletList;

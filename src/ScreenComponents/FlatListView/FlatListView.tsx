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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FlatList,GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';


import {Image } from '@rneui/themed';

const FlatListView = (props: {
  headText: String;
  list: [];
}) => {
  const {headText,list}=props;
  const {navigation}=props.props;

  // console.log("Navigation",Navigation);
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
  };

  const DATA: ItemData[]=list;

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };
  

  const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
    <TouchableWithoutFeedback style={styles.item}
    onPress={() =>  navigation.navigate('OutletList')}
    >
      <Text></Text>
     <Image
      source={item.img}
      style={{ width: 100, height: 100 }}
      PlaceholderContent={<ActivityIndicator />}
    />
    </TouchableWithoutFeedback>
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
      <Text style={{fontSize:20,marginLeft:15,marginTop:15,marginBottom:0,fontWeight:'bold'}}>{headerText}</Text>
     <FlatList
        data={list}
        horizontal
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
  },
  item: {
    backgroundColor: '#fff',
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

export default FlatListView;

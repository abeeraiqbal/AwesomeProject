import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ItemView = (item, key) => {
    return (
      // Flat List Item
      <View key={key}>
        <Text
          style={styles.itemStyle}
          onPress={() => getItem(item)}>
            {item.id}. {item.title}
        </Text>
        <ItemSeparatorView />
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View style={styles.itemSeparatorStyle} />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      
        <ScrollView horizontal={true} >
          {
            
            dataSource.map(ItemView)
          }
        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
  itemStyle: {
    padding: 10,
  },
  itemSeparatorStyle: {
    height: 0.5,
    width: '100%',
   
  },
});

export default App;
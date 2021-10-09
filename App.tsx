import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Constants from 'expo-constants';
import LongText from './components/LongText';

export default class  App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
       
        {/* Testing
            Still BROKE 
            
        */}
        <TouchableWithoutFeedback onPress={() => console.log('Pressed 5')}>
          <View
            style={[styles.container, { borderColor: 'red' }]}>
            
            <Text style={styles.label}>
              {'5) Touchable > View > View > ScrollView\n'}
             
            </Text>
              <ScrollView horizontal={true}
                style={{ flex: 1 }}
                onStartShouldSetResponder={() => true}>
                <View><LongText /></View>
              </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  label: { fontWeight: 'bold' },
});

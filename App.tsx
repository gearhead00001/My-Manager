/**
 * My Manager app
 */
 

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={{color : "white"}}>{"My Manager"}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>"Body"</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding : 15,
    backgroundColor : "black",
    
  },
  bodyContainer :{

  }
});

export default App;

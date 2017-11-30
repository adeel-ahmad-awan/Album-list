import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

    return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
};

const styles = {

  containerStyle: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'relative',
  }// end containerStyle


}; //end styles


export default CardSection;

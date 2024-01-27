import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from '../styles/styles';

const XpBtn = ({text = '0 XP', onPress, style = {}}) => {
  return (
    <TouchableOpacity style={[styles.xpBtn, style]} onPress={onPress}>
      <Text style={styles.xpBtnText}>{text}</Text>
      <Image
        style={styles.xpSparkle}
        source={require('../assets/sparkles.png')}
      />
    </TouchableOpacity>
  );
};

export default XpBtn;

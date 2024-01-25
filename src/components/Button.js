import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from '../styles/styles';

const Button = ({title, onPress, style = {}, textStyle = {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.primaryBtn, style]}>
      <Text style={[styles.primaryBtnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

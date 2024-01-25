import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowLeft2} from 'iconsax-react-native';
import styles from '../styles/styles';
import Colors from '../styles/colors';

const BackButton = ({onPress, style = {}}) => {
  return (
    <TouchableOpacity style={[styles.backBtn, style]} onPress={onPress}>
      <ArrowLeft2 size="22" color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default BackButton;

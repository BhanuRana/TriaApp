import React from 'react';
import Button from './Button';
import styles from '../styles/styles';

const LinkText = ({title, onPress, style = {}, textStyle = {}}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      style={{...styles.textLinkBtn, ...style}}
      textStyle={{...styles.textLinkBtnText, ...textStyle}}
    />
  );
};

export default LinkText;

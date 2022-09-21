import { typography } from '@/theme';
import React from 'react';
import { Text } from 'react-native';

export const TxtNormal = ({ props, title = '', style = {} }) => {
  return (
    <Text {...props} style={{...typography.merriweatherRegular,...style}}>
      {title}
    </Text>
  );
};

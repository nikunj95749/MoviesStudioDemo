import { typography } from '@/theme';
import React from 'react';
import { Text, View } from 'react-native';

export const TxtBold = ({ props, title = '', style = {} }) => {
  return (
    <Text {...props} style={[typography.merriweatherBold, { ...style }]}>
      {title}
    </Text>
  );
};

import { typography } from '@/theme';
import React from 'react';
import { Text } from 'react-native';

export const TxtMedium = ({ props, title = '', style = {} }) => {
  return (
    <Text {...props} style={[typography.merriweatherMedium, { ...style }]}>
      {title}
    </Text>
  );
};

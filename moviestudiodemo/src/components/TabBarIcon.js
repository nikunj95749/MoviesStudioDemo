import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { cinemaIcon, settingsIcon } from '@/assets';
import { NAVIGATION } from '@/constants';

const tabIcon = {
  [NAVIGATION.homeNav]: cinemaIcon,
  [NAVIGATION.profile]: settingsIcon,
};

export function TabBarIcon({ color, routeName }) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: routeName === NAVIGATION.homeNav ? null : color }}
    />
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};

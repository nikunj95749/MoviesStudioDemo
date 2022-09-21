import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  Text,
} from 'react-native';
import { padding, scaleSize } from '@/constants/mixins';
import { backIcon, bellIcon, menuIcon, moreIcon } from '@/assets';
import { BLACK } from '@/constants/colors';

export default function TopBar({
  onBack,
  backButtonTintColor = null,
  onMenuPress,
  onBellShow,
  headingText = '',
  onMoreShow = false,
  containerStyle = {},
  headerTextStyles = {},
}) {
  return (
    <SafeAreaView>
      <View style={{ ...styles.topBar, ...containerStyle }}>
        <View style={styles.leftOrRightButtonContainer}>
          {onBack && (
            <TouchableOpacity style={styles.back} onPress={onBack}>
              <Image
                resizeMode={'contain'}
                style={[styles.imgButton, { tintColor: backButtonTintColor }]}
                source={backIcon}
              />
            </TouchableOpacity>
          )}
          {onMenuPress && (
            <TouchableOpacity style={styles.back} onPress={onMenuPress}>
              <Image resizeMode={'contain'} style={styles.imgButton} source={menuIcon} />
            </TouchableOpacity>
          )}
        </View>
        {headingText !== '' && (
          <Text style={{ ...styles.headerText, ...headerTextStyles }}>{headingText}</Text>
        )}
        <View
          style={[
            !onMoreShow || (onBellShow && styles.emptyView),
            styles.leftOrRightButtonContainer,
          ]}
        >
          {onMoreShow && (
            <TouchableOpacity style={styles.close} onPress={onMoreShow}>
              <Image style={styles.imgButton} source={moreIcon} />
            </TouchableOpacity>
          )}
          {onBellShow && (
            <TouchableOpacity style={styles.close} onPress={onBellShow}>
              <Image style={styles.imgButton} source={bellIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

TopBar.propTypes = {
  onBack: PropTypes.func,
  onSearch: PropTypes.func,
  headingText: PropTypes.string,
  progressWidth: PropTypes.number,
  onColorPicker: PropTypes.func,
  openMenu: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  containerStyle: PropTypes.object,
  chevronColor: PropTypes.string,
  headerTextStyles: PropTypes.object,
  optionsIconColor: PropTypes.string,
};

const styles = StyleSheet.create({
  topBar: {
    height: 49,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerText: {
    position: 'absolute',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.5,
    textAlign: 'center',
    marginLeft: Dimensions.get('window').width * 0.5 - Dimensions.get('window').width * 0.25,
    bottom: 14,
  },
  back: {
    ...padding(12, 16, 12, scaleSize(4)),
  },
  close: {
    ...padding(8, 4, 8, 7),
  },
  search: {
    ...padding(12, 16, 12, scaleSize(4)),
  },
  menu: {
    ...padding(8, 0, 8, scaleSize(4)),
  },
  leftHeaderItemView: {
    flexDirection: 'row',
  },
  emptyView: {
    padding: 10,
  },
  saveAndUpdateButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  leftOrRightButtonContainer: { flexDirection: 'row' },
  imgButton: { height: 25, width: 30, resizeMode: 'contain' },
});

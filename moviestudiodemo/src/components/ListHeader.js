import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TxtNormal } from '@/components/text/TxtNormal';
import { TxtBold } from '@/components/text/TxtBold';

const ListHeader = ({ title = '', style = {}, onSearch }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <TxtBold title={title} style={styles.title} />
      <View style={styles.flex}></View>
      {onSearch && <TouchableOpacity onPress={onSearch}><TxtBold title={'Search'} style={styles.search} /></TouchableOpacity>}
    </View>
  );
};

export default ListHeader;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flex: { flex: 1 },
  title: { color: '#110E47' },
  search: { marginRight: 10 },
});

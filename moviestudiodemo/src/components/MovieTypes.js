import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TxtNormal } from '@/components/text/TxtNormal';
import { TxtBold } from '@/components/text/TxtBold';
import { typography } from '@/theme';
import { RFPercentage } from 'react-native-responsive-fontsize';

const MovieTypes = ({ style = {} }) => {
  const [arrMoviesType, setArrMoviesType] = useState(['HORROR', 'MYSTERY', 'THRILLER']);

  return (
    <View style={[styles.container, style]}>
      {arrMoviesType?.map((obj) => {
        return (
          <View key={obj} style={styles.subContainer}>
            <TxtNormal title={obj} style={styles.title} />
          </View>
        );
      })}
    </View>
  );
};

export default MovieTypes;

export const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  subContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#DBE3FF',
  },
  title: {
    ...typography.mulishRegular,
    color: '#88A4E8',
    fontSize: RFPercentage(1.4),
  },
});

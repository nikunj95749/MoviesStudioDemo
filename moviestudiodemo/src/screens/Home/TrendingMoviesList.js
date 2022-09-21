import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WINDOW_WIDTH } from '@/constants/mixins';
import { NAVIGATION } from '@/constants';
import { BASE_IMAGE_PATH } from '@/constants/baseApi';
import { typography } from '@/theme';
import { TxtNormal } from '@/components/text/TxtNormal';
import Rating from '@/components/Rating';

const TrendingMoviesList = ({ arrTrandingMovies = [], style = {} }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={arrTrandingMovies}
      style={[{ width: '100%' }, style]}
      horizontal={true}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate(NAVIGATION.movieDetail, { item });
          }}
          style={styles.container}
        >
          <Image
            source={{ uri: BASE_IMAGE_PATH + item?.poster_path }}
            style={styles.poster}
          />
          <TxtNormal
            title={item?.title ?? '-'}
            style={styles.title}
          />
          <Rating title={`${parseFloat(item?.vote_average).toFixed(1)}/10 IMDb`} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item?.id}
    />
  );
};

export default TrendingMoviesList;

export const styles = StyleSheet.create({
  container: { width: WINDOW_WIDTH * 0.37, marginRight: 15 },
  poster:{
    width: '100%',
    aspectRatio: 0.72,
    borderRadius: 5,
  },
  title:{ ...typography.mulishSemiBold, marginTop: 10 }
});

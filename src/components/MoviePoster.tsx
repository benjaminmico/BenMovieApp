import { View } from 'components';
import type { FunctionComponent } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import type { Movie } from 'types';
import { theme } from 'utils';

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster: FunctionComponent<MoviePosterProps> = ({ movie }) => {
  if (!movie?.['#IMG_POSTER']) return;

  return (
    <View fadeIn>
      <FastImage
        style={styles.image}
        source={{
          uri: movie?.['#IMG_POSTER'],
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 150,
    borderRadius: theme.borders.tiny,
  },
});

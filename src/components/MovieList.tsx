import React from 'react';
import type { ViewStyle } from 'react-native';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import type { Movie } from 'types';
import { theme } from 'utils';

import MoviePoster from './MoviePoster';

interface MovieListProps {
  movies: Movie[];
  style?: ViewStyle;
  onRefresh?: (() => void) | null | undefined;
  onMoviePress: (movie: Movie) => void;
  refreshing?: boolean | null | undefined;
  refreshControl?: React.JSX.Element;
  ListHeaderComponent?: React.ReactElement;
}

const MovieList: React.FunctionComponent<MovieListProps> = ({
  movies,
  onMoviePress,
  ...props
}) => {
  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity onPress={() => onMoviePress(item)}>
      <MoviePoster movie={item} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={(item) => item['#IMDB_ID']}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapper}
      {...props}
      ItemSeparatorComponent={Separator}
      data={movies}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    marginRight: theme.spacer.medium,
    marginTop: theme.spacer.large,
    gap: 20,
  },
  separatorContainer: {
    padding: theme.spacer.medium,
  },
});

export default React.memo(MovieList);

const Separator = () => <View style={styles.separatorContainer} />;

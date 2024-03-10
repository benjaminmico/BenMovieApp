import type { FunctionComponent } from 'react';
import React from 'react';
import type { ViewStyle } from 'react-native';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { Movie } from 'types';
import { theme } from 'utils';

interface MovieTitleListProps {
  movies: Movie[];
  isLoading?: boolean;
  style?: ViewStyle;
  onMoviePress: (movie: Movie) => void;
  ListHeaderComponent?: React.ReactElement;
}

interface MovieTitleItemProps {
  movie: Movie;
}

const MovieTitleList: React.FunctionComponent<MovieTitleListProps> = ({
  movies,
  onMoviePress,
  isLoading = false,
  ...props
}) => {
  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity onPress={() => onMoviePress(item)}>
      <MovieTitleItem movie={item} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={(item) => item['#IMDB_ID']}
      ItemSeparatorComponent={Separator}
      {...props}
      data={isLoading ? [] : movies}
      renderItem={renderItem}
    />
  );
};

export default React.memo(MovieTitleList);

const MovieTitleItem: FunctionComponent<MovieTitleItemProps> = ({ movie }) => {
  if (!movie?.['#TITLE']) return;

  return <Text style={styles.title}>{movie['#TITLE']}</Text>;
};

const Separator = () => <View style={styles.separatorContainer} />;

const styles = StyleSheet.create({
  separatorContainer: {
    height: theme.spacer.small,
  },
  title: theme.typography.title,
});

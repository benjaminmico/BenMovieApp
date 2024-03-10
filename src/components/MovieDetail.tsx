import type { FunctionComponent } from 'react';
import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { MovieDetail } from 'types';
import { formattedRuntime, theme } from 'utils';

interface MovieDetailProps {
  movieDetail: MovieDetail;
}

const MovieDetailScreen: FunctionComponent<MovieDetailProps> = ({
  movieDetail,
}) => {
  const {
    short,
    ratingsSummary,
    imdbId,
    main: { productionStatus, releaseDate, runtime },
    fake,
  } = movieDetail;

  return (
    <ScrollView style={styles.container}>
      {fake?.['#IMG_POSTER'] && (
        <Image
          source={{
            uri: fake['#IMG_POSTER'],
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{short.name || fake['#TITLE']}</Text>
        <Text style={styles.infoText}>
          Year: {short.datePublished.split('-')[0] || fake['#YEAR']}
        </Text>
        <Text style={styles.infoText}>
          Runtime: {formattedRuntime(runtime.seconds)}
        </Text>
        <Text style={styles.infoText}>
          Status: {productionStatus.currentProductionStage.text}
        </Text>
        <Text style={styles.infoText}>
          Release Date:{' '}
          {`${releaseDate.month}/${releaseDate.day}/${releaseDate.year}`}
        </Text>
        <Text style={styles.ratingText}>
          Rating: {ratingsSummary?.aggregateRating}
        </Text>
        <Text style={styles.caption}>{short.description}</Text>
        <Text style={styles.infoText}>
          Starring:{' '}
          {short.actor.map((actor) => actor.name).join(', ') || fake['#ACTORS']}
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://imdb.com/title/${imdbId}`)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>View on IMDb</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: theme.spacer.medium,
  },
  title: {
    ...theme.typography.headline,
    marginBottom: theme.spacer.small,
  },
  infoText: {
    ...theme.typography.caption,
    marginBottom: theme.spacer.tiny,
  },
  ratingText: {
    ...theme.typography.caption,
    color: theme.colors.primary,
    marginBottom: theme.spacer.small,
  },
  caption: {
    ...theme.typography.body,
    color: theme.colors.caption,
    marginBottom: theme.spacer.medium,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacer.small,
    borderRadius: theme.borders.small,
    alignItems: 'center',
    marginTop: theme.spacer.medium,
  },
  buttonText: {
    ...theme.typography.body,
    color: theme.colors.background,
  },
});

export default MovieDetailScreen;

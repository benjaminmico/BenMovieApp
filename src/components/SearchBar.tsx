import debounce from 'lodash/debounce';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ViewProps,
} from 'react-native';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-ico-material-design';
import { theme } from 'utils';

interface SearchBarProps extends ViewProps {
  onSearch: (query: string) => void;
  onCloseSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onCloseSearch,
  ...props
}) => {
  const [query, setQuery] = useState<string>('');

  const textInputRef = useRef<TextInput>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((q: string) => onSearch(q), 600),
    [],
  );

  useEffect(() => {
    if (query.length > 0) {
      debouncedSearch(query);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setQuery(event.nativeEvent.text);
  };

  const clearQuery = () => {
    onCloseSearch();
    setQuery('');
    textInputRef.current?.clear();
    Keyboard.dismiss();
  };

  return (
    <View style={props.style}>
      <TextInput
        style={styles.input}
        ref={textInputRef}
        placeholderTextColor={theme.colors.primary}
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={clearQuery} style={styles.icon}>
          <Icon
            name="close-button"
            height="14"
            width="14"
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: theme.colors.primary,
  },
  icon: {
    position: 'absolute',
    top: 24,
    right: 24,
    padding: 5,
  },
});

export default memo(SearchBar);

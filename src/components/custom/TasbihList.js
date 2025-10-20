import React, { useState, useEffect } from 'react';
import { View, FlatList} from 'react-native'; // You may switch Text to ui/Text later
import { styles } from '../../styles/styles';
import Button from '../ui/Button';
import Text from '../ui/Text';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList({ initialAzkaar }) {
  const [items, setItems] = useState(initialAzkaar);

  // refresh component on prop change
  useEffect(() => {
    setItems(initialAzkaar);
  }, [initialAzkaar]);

  const increment = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
        <Button style={styles.button} children="+" onPress={() => increment(item.id)} />
        <Button style={styles.button} children="-" onPress={() => decrement(item.id)} />
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}

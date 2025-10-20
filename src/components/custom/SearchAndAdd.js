import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

export default function SearchAndAdd({ onZikrAdd, onSetSearch, searchText }) {
  const [newZikr, setNewZikr] = useState('');

  const addZikr = () => {
    if (newZikr.trim()) {
      onZikrAdd({ phrase: newZikr.trim(), count: 0 });
      setNewZikr('');
    }
  };

  return (
    <View style={styles.centerContainer}>
      <TextInput
        placeholder="Search Zikr"
        value={searchText}
        onChangeText={onSetSearch}
        style={styles.textInput}
      />

      <TextInput
        placeholder="Add New Zikr"
        value={newZikr}
        onChangeText={setNewZikr}
        style={styles.textInput}
      />

      <Button style={styles.addZikrButton} children="Add Zikr" onPress={addZikr} />
    </View>
  );
}

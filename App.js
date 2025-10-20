import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TeacherMessage from './src/components/custom/TeacherMessage';
import TasbihList from './src/components/custom/TasbihList';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';
import { initialAzkaar } from './src/data/azkaar';

export default function App() {
  const [azkaar, setAzkaar] = useState(initialAzkaar);
  const [searchText, setSearchText] = useState('');

  // Update search text
  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  // Add new Zikr
  const handleAddZikr = (newZikr) => {
    const cleanZikr = newZikr.trim();

    if (!cleanZikr) {
      Alert.alert('Please enter a zikr phrase.');
      return;
    }

    const alreadyExists = azkaar.find(
      (item) => item.phrase.toLowerCase() === cleanZikr.toLowerCase()
    );

    if (alreadyExists) {
      Alert.alert('This zikr already exists.');
      return;
    }

    const newItem = {
      id: (azkaar.length + 1).toString(),
      phrase: cleanZikr,
      count: 0,
    };

    setAzkaar([...azkaar, newItem]);
  };

  // Filter list based on search text
  const filteredAzkaar = azkaar.filter((item) =>
    item.phrase.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />

      <TasbihList initialAzkaar={filteredAzkaar} />

      <SearchAndAdd
        searchText={searchText}
        onSetSearch={handleSearchChange}
        onZikrAdd={handleAddZikr}
      />
    </ScrollView>
  );
}

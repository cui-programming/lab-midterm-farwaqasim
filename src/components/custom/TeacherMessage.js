import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles';
import { Text } from '../ui';


export default function TeacherMessage () {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>Sir Kamran</Text>
        <Text style={styles.headerText}>Mobile App Development</Text>
      </View>
    )
}

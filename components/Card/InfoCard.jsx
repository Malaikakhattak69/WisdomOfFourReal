import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const InfoCard = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default InfoCard;

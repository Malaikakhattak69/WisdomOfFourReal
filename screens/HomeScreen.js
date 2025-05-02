import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import Colors from '../constants/colors'; // Your custom color file

const imams = [
  {
    name: 'Imam Malik',
    years: '(711–795 CE)',
    screen: 'ImamMalikProfile',
    image: require('../assets/maliklogoo.png'),
    description: 'Founder of the Maliki school, known for the Muwatta.',
  },
  {
    name: 'Imam Abu Hanifa',
    years: '(699–767 CE)',
    screen: 'ImamAbuHanifaProfile',
    image: require('../assets/hanifalogo.png'),
    description: 'Pioneer jurist, founder of the Hanafi school.',
  },
  {
    name: 'Imam Shafi’i',
    years: '(767–820 CE)',
    screen: 'ImamShafiiProfile',
    image: require('../assets/shafilogo.png'),
    description: 'Systematized Islamic jurisprudence, Shafi’i school founder.',
  },
  {
    name: 'Imam Ahmad',
    years: '(780–855 CE)',
    screen: 'ImamAhmadProfile',
    image: require('../assets/ahmadlogo.png'),
    description: 'Founder of the Hanbali school, known for Hadith authority.',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <Text style={styles.header}>Wisdom of Four</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search Imams..."
        placeholderTextColor={Colors.textSecondary}
      />

      <View style={styles.tabs}>
        <Text style={styles.tab}>Profiles</Text>
        <Text style={styles.tab}>Chatbots</Text>
        <Text style={styles.tab}>About</Text>
        <Text style={styles.tab}>Contact</Text>
      </View>

      <Image
        source={require('../assets/logo.png')}
        style={styles.centerLogo}
      />

      <View style={styles.carouselWrapper}>
        <FlatList
          data={imams}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate="fast"
          contentContainerStyle={styles.carouselContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.85}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardYears}>{item.years}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: Colors.cardHighlight,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: Colors.text,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: Colors.secondary,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent,
    paddingBottom: 6,
  },
  centerLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 25,
  },
  carouselWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  carouselContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 190, // increased from 170
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20, // more padding
    marginRight: 16,
    alignItems: 'center',
    elevation: 6,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: 90, // increased from 80
    height: 90,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary,
    textAlign: 'center',
  },
  cardYears: {
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.textSecondary,
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});
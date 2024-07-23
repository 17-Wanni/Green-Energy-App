import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [currentTab, setCurrentTab] = useState('tab1');

  return (
    <SafeAreaView style={styles.container}>
      {currentTab === 'tab1' ? (
        <View style={styles.limeGreenBackground}>
          <ScrollView contentContainerStyle={styles.innerContainer}>
            <Text style={styles.title}>The Problem and Our Solution</Text>
            <Text style={styles.content}>
              For disadvantaged youth, public water and electrical facilities are hard to come by. By introducing green energy to Canadian youth, we hope to first provide them a means to which they can use it.
              {'\n\n'}
              Our product provides a shower, heating and cooking facilities, electrical outlets, and many more functions which all seek to make life easier for youth in Canada. Best of all, our idea is powered entirely using green energy: solar grids and hydroelectric turbines.
              {'\n\n'}
              To add on, a main problem with solar energy is the inconsistency of weather. We have implemented a solar grid idea in which areas that use less energy can donate to a grid and would earn money for doing this while other places that require more energy can buy from the grid which will make the solar panels more effective.
            </Text>
          </ScrollView>
        </View>
      ) : (
        <View style={styles.royalBlueBackground}>
          <ScrollView contentContainerStyle={styles.innerContainer}>
            <Text style={styles.secondaryTitle}>For a Sustainable Future, From Catalyst Crew</Text>
          </ScrollView>
        </View>
      )}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, currentTab === 'tab1' && styles.activeTab]}
          onPress={() => setCurrentTab('tab1')}
        >
          <Text style={styles.tabText}>OUR MISSION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, currentTab === 'tab2' && styles.activeTab]}
          onPress={() => setCurrentTab('tab2')}
        >
          <Text style={styles.tabText}>Who Are We!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  limeGreenBackground: {
    flex: 1,
    backgroundColor: 'limegreen',
    justifyContent: 'center',
    padding: 20,
  },
  royalBlueBackground: {
    flex: 1,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
  secondaryTitle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#ddd',
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#bbb',
  },
});
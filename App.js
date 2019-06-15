import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { JavaScriptContent } from './imports/components/JavaScript.component.js';

const cssContent = `Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is one of the core languages of the open web and is standardized across browsers according to the W3C specification. Developed in levels, CSS1 is now obsolete, CSS2.1 is a recommendation, and CSS3, now split into smaller modules, is progressing on the standardization track.`;

const reactContent = 'This is the react page.'
const FirstRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: '#ff4081', color: '#fff' }]}>
   <JavaScriptContent />
  </ScrollView>
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <Text>{cssContent}</Text>
  </View>
);
const ThirdRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: '#fff', color: '#fff' }]}>
  <Text>{nodeContent}</Text>
  </ScrollView>
);
const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7', background: 'linear-gradient(to bottom, #feffff 0%,#ddf1f9 35%,#a0d8ef 100%)' }]}>
    <Text>{reactContent}</Text>
  </View>
);

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'JavaScript' },
      { key: 'second', title: 'CSS' },
      { key: 'third', title: 'Node' },
      { key: 'fourth', title: 'React' },
    ],
  };

  render() {
    return (
      <ScrollView>
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          fourth: FourthRoute,
        })}
        onIndexChange={index => this.setState({ index })}
      />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    color: '#ffffff',
    padding: 10,
    fontSize: 14,
  },
});
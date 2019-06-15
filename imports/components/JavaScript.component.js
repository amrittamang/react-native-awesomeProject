import React from 'react';
import { Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export const JavaScriptContent = () => (
    // implemented with Text and Button as children
<Card
  title='HELLO WORLD'
  image={require('../../assets/card.png')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
); 
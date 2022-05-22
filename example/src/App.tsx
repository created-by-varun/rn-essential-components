import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Column, Row, SafeColumn, Label, Divider } from 'react-native-essential-components';

export default function App() {
  return (
    <SafeColumn>
      <Column ph={24}>
        <Text>Result:</Text>
        <Label mt={20}>Result:</Label>
        <Divider color={'black'} />
      </Column>
    </SafeColumn>
  );
}
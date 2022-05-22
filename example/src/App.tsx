import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Column, Row, SafeColumn } from 'react-native-essential-components';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  return (
    <SafeColumn>
      <Row>
        <Text>Result: {result}</Text>
        <Text>Result: {result}</Text>
      </Row>
      <Column>
        <Text>Result: {result}</Text>
        <Text>Result: {result}</Text>
      </Column>
    </SafeColumn>
  );
}
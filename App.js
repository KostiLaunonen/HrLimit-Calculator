import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [age, setAge] = useState(0)
  const [lowerLimit, setLowerLimit] = useState(0)
  const [upperLimit, setUpperLimit] = useState(0)

  const calculate = () => {
    const x = (220 - age)
    setLowerLimit(x * 0.65)
    setUpperLimit(x * 0.85)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age:</Text>
      <TextInput
      style={styles.field}
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text stule={styles.field}>Limits</Text>
      <Text stule={styles.field}>{lowerLimit.toFixed(0)} - {upperLimit.toFixed(0)}</Text>
      <Button title="Calculate" onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10
  }
});

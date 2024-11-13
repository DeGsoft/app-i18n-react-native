import { View, StyleSheet, Text } from 'react-native';
import { TextLanguage } from '@/components/text-language';

export default function App() {
  return (
    <View style={styles.container}>
      <TextLanguage>welcome</TextLanguage>
      <TextLanguage>name</TextLanguage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
});

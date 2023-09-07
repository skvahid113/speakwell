import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ModalAuxiliaries = () => {
  return (
    <LinearGradient
            colors={['#0093E9', '#80D0C7']}
            style={{ flex: 1 }}
        >
    <View style={styles.container}>
      <Text style={styles.title}>MODAL AUXILIARIES (13)</Text>
      <Text>In the English language, there are 13 modal auxiliaries, and each modal auxiliary has its own importance:</Text>
      <Text>1. గలను - can</Text>
      <Text>2. గలిగాను - could</Text>
      <Text>3. ఖచ్చిత౦గాచేస్తాను - will do</Text>
      <Text>4. చేసేవాడిని/దానిని - would do</Text>
      <Text>5. చేస్తాను - shall do</Text>
      <Text>6. చేయాలి - should do</Text>
      <Text>7. చేయవచ్చు - may do</Text>
      <Text>8. చేసిఉ౦డవచ్చు - might do</Text>
      <Text>9. చేసితీరాలి - must do</Text>
      <Text>10. ఒకప్పుడుచేసేవాడిని - used to do</Text>
      <Text>11. చేయవలసినభాధ్యతఉ౦ది - ought to do</Text>
      <Text>12. చేయవలసినఅవసర౦ఉ౦ది - need/need to do</Text>
      <Text>13. చేసేధైర్య౦ఉ౦ది - dare/dare to do</Text>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ModalAuxiliaries;

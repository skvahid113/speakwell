import App from "./App";

const ScreenWithGradient = ({ children }) => {
    return (
      <LinearGradient
        colors={['#00A6ED', '#0091EA']}
        style={styles.screenContainer}
      >
      </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      borderWidth: 1, // Add borders
      borderColor: 'white', // Border color
    },
  });
  
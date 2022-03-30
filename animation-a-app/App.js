import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const SIZE = 100

const handleRotate = progress => {
  
'worklet'

  return `${progress.value * 2 * Math.PI}rad`
}

export default function App() {

  const progress = useSharedValue(1)
  const scale = useSharedValue(1)

  const reanimatedStyle = useAnimatedStyle(() => {
    
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotate(progress)}]
    }
  }, [])

  useEffect(() => {
    progress.value = withRepeat(withTiming(0.5), -1, true)
    scale.value = withRepeat(withSpring(1), -1, true)
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "blue" },
          reanimatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
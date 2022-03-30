import React from 'react';
import { View, Button, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
export default function ExpandingTextBox() {
  // creating shared value via useSharedValue
  const boxHeight = useSharedValue(150);
  const textOpacity = useSharedValue(1)
  // creating worklet via useAnimatedStyle, and incorporating the withTiming method
  const boxAnimation = useAnimatedStyle(() => {
    return {
      height: withTiming(boxHeight.value, {duration: 750})
    }
  });

  const textAnimation = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value
    }
  });
  // function that toggles the value of boxHeight so it can expand and contract
  const toggleHeight = () => boxHeight.value === 450 ? boxHeight.value = 150 : boxHeight.value = 450;

  // styles to use on our grey box
  const styles = {
    box: {
      width: 400,
      height: 150,
      backgroundColor: 'grey',
      borderRadius: 15,
      margin: 100,
      padding: 20,
      display: 'flex'
    }
  };
  return (
    <View style={styles.app}>
      {/* Animated.View component, with the typical styles contained in styles.box,
and the worklet "boxHeight" that updates the height property alongside it */}
      <Animated.View style={[styles.box, boxAnimation]}>
        {/* button that fires off toggleHeight() function every time it's pressed */}
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
          pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
          excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
          temporibus sint culpa, recusandae aliquam numquam totam ratione
          voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
          aliquam eligendi, placeat qui corporis!
        </Text>
        <Button title="More" onPress={() => toggleHeight()} />
      </Animated.View>
    </View>
  );
};

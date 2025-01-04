import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setScreenDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Screen Width: {screenDimensions.width}</Text>
      <Text>Screen Height: {screenDimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;
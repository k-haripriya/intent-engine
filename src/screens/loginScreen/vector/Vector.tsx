import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import Dimensions from '../../../theme/Dimensions';
import { styles } from './styles';

const width = Dimensions.SCREEN_WIDTH;

const Vector = () => {
  return (
    <View style={styles.container}>
      <Svg height="320" width={width} viewBox={`0 0 ${width} 320`}>
        <Path
          d={`M0 0 
              L${width} 0 
              L${width} 240 
              C${width * 0.9} 180, ${width * 0.7} 150, ${width * 0.5} 240 
              C${width * 0.3} 330, ${width * 0.1} 220, 0 260 
              Z`}
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default Vector;

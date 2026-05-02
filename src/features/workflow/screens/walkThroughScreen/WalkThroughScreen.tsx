import React, { useState, useCallback } from 'react';
import { View, useWindowDimensions, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { styles } from './styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const DATA = [
  {
    title: 'Control your\nday',
    subtitle:
      'Transform small daily actions into effortless automated routines.',
    highlight: 'Flow State',
    color: '#575aff',
    type: 'automation',
    shouldShowBtn: false,
  },
  {
    title: 'Precision\nTiming',
    subtitle: 'Trigger actions based on your unique schedule and environment.',
    highlight: 'Smart Sync',
    color: '#c72978',
    type: 'timing',
    shouldShowBtn: false,
  },
  {
    title: 'Instant\nResults',
    subtitle:
      'Focus on what matters while your routines run in the background.',
    highlight: 'Pure Output',
    color: '#4bc8de',
    type: 'results',
    shouldShowBtn: true,
  },
];

const WalkthroughScreen = () => {
  const { width, height } = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const translateX = useSharedValue(-5);
  const translateY = useSharedValue(height * 0.6);
  const nextIndex = (index + 1) % DATA.length;

  const onAnimationComplete = useCallback(() => {
    const newIdx = (index + 1) % DATA.length;
    translateX.value = -5;
    setIndex(newIdx);
  }, [index, translateX]);

  const pan = Gesture.Pan()
    .onUpdate(event => {
      translateX.value = Math.min(-5, event.translationX - 5);
      translateY.value = event.absoluteY;
    })
    .onEnd(event => {
      const shouldSnap =
        translateX.value < -width / 3 || event.velocityX < -800;

      if (shouldSnap) {
        translateX.value = withSpring(
          -width - 100,
          { damping: 30, stiffness: 200, mass: 1, overshootClamping: true },
          finished => {
            if (finished) {
              runOnJS(onAnimationComplete)();
            }
          },
        );
      } else {
        translateX.value = withSpring(-5, { damping: 20, stiffness: 200 });
      }
    });

  const renderVisual = (type: any) => {
    switch (type) {
      case 'automation':
        return (
          <View style={styles.visualContainer}>
            <View style={styles.pipelineMain}>
              <View style={styles.dotPulse} />
              <View
                style={[styles.skeletonLine, { width: '40%', opacity: 0.3 }]}
              />
            </View>
            <View style={styles.pipelineLink} />
            <View
              style={[
                styles.pipelineMain,
                { width: '60%', alignSelf: 'flex-end', opacity: 0.6 },
              ]}
            />
          </View>
        );
      case 'timing':
        return (
          <View style={styles.visualContainer}>
            <View style={styles.ringLarge}>
              <View style={styles.ringMedium}>
                <View style={styles.ringSmall} />
              </View>
            </View>
            <View style={styles.timeLabel}>
              <Text style={styles.timeLabelText}>SCHEDULED</Text>
            </View>
          </View>
        );
      default:
        return (
          <View style={[styles.visualContainer, styles.matrixGrid]}>
            <View style={styles.matrixBig} />
            <View style={styles.matrixColumn}>
              <View style={styles.matrixSmall} />
              <View style={[styles.matrixSmall, { opacity: 0.5 }]} />
            </View>
          </View>
        );
    }
  };

  const renderContent = (item: any, animStyle: any) => (
    <Animated.View
      style={[StyleSheet.absoluteFill, styles.contentWrapper, animStyle]}
    >
      <Text style={styles.highlightText}>{item.highlight.toUpperCase()}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      {renderVisual(item.type)}
      {item?.shouldShowBtn && (
        <View style={styles.ctaButton}>
          <Text style={[styles.ctaText, { color: item.color }]}>
            Get Started
          </Text>
        </View>
      )}
    </Animated.View>
  );

  const waveProps = useAnimatedProps(() => {
    const dragX = Math.abs(translateX.value);
    const x0 = width - dragX;
    const curveWidth = interpolate(
      dragX,
      [0, width],
      [40, 180],
      Extrapolate.CLAMP,
    );
    const vSpan = interpolate(dragX, [0, 100], [50, 250], Extrapolate.CLAMP);
    return {
      d: `M ${width} 0 L ${x0} 0 V ${translateY.value - vSpan}
          C ${x0} ${translateY.value - vSpan / 1.6}, ${x0 - curveWidth} ${
        translateY.value - vSpan / 1.6
      }, ${x0 - curveWidth} ${translateY.value}
          C ${x0 - curveWidth} ${translateY.value + vSpan / 1.6}, ${x0} ${
        translateY.value + vSpan / 1.6
      }, ${x0} ${translateY.value + vSpan}
          V ${height} L ${width} ${height} Z`,
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={pan}>
        <View
          style={[styles.container, { backgroundColor: DATA[index].color }]}
        >
          {renderContent(
            DATA[index],
            useAnimatedStyle(() => ({
              opacity: interpolate(
                Math.abs(translateX.value),
                [0, width * 0.3],
                [1, 0],
                Extrapolate.CLAMP,
              ),
              zIndex: Math.abs(translateX.value) > width ? -1 : 1,
            })),
          )}

          {/* SVG WAVE */}
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <Svg width={width} height={height}>
              <AnimatedPath
                animatedProps={waveProps}
                fill={DATA[nextIndex].color}
              />
            </Svg>
          </View>

          {/* NEXT CONTENT: Alignment fix here */}
          <View style={styles.screen} pointerEvents="none">
            {renderContent(
              DATA[nextIndex],
              useAnimatedStyle(() => ({
                opacity: interpolate(
                  Math.abs(translateX.value),
                  [width * 0.1, width * 0.7],
                  [0, 1],
                  Extrapolate.CLAMP,
                ),
                transform: [
                  {
                    translateX: interpolate(
                      translateX.value,
                      [0, -width],
                      [width * 0.12, 0],
                      Extrapolate.CLAMP,
                    ),
                  },
                ],
              })),
            )}
          </View>

          <View style={styles.header}>
            <Text style={styles.logo}>DYNAMO</Text>
            <View style={styles.indicatorContainer}>
              {DATA.map((_, i) => (
                <View key={i} style={styles.indicatorTrack}>
                  <View
                    style={[
                      styles.indicatorFill,
                      {
                        width: i === index ? '100%' : i < index ? '100%' : '0%',
                      },
                    ]}
                  />
                </View>
              ))}
            </View>
          </View>

          <Animated.View
            style={[
              styles.handle,
              useAnimatedStyle(() => ({
                transform: [
                  {
                    translateX:
                      width -
                      Math.abs(translateX.value) -
                      interpolate(
                        Math.abs(translateX.value),
                        [0, 100],
                        [45, 170],
                        Extrapolate.CLAMP,
                      ) +
                      12,
                  },
                  { translateY: translateY.value - 25 },
                ],
                opacity: interpolate(
                  Math.abs(translateX.value),
                  [0, 35],
                  [1, 0],
                ),
              })),
            ]}
          >
            <View style={styles.handleCircle}>
              <Text style={styles.handleArrow}>{'>'}</Text>
            </View>
          </Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default WalkthroughScreen;

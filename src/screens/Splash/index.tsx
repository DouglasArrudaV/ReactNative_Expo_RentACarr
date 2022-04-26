import React from 'react';
import { Button, StyleSheet, Dimensions } from 'react-native';


import Animated, {
    useSharedValue, // useSharedValue pega o valor, armazena e usa
    useAnimatedStyle,
    withTiming, // withTiming: como se fosse um transição do 0 ao 100, fica mais suave
    Easing
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

import {
    Container
} from './styles';

export function Splash() {
    const animation = useSharedValue(0);

    const aimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(animation.value, {
                        duration: 500,
                        easing: Easing.bezier(.01, 1.07, 1, -0.28), //velocidade linear
                    })
                }
            ]
        }
    });

    function handleAnimationPosition() {
        animation.value = Math.random() * (WIDTH - 100);
    }

    return (
        <Container>
            <Animated.View style={[styles.box, aimatedStyles]} />

            <Button title='Mover' onPress={handleAnimationPosition} />
        </Container>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})
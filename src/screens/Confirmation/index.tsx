import React from 'react';
import { useNavigation, ParamListBase, NavigationProp, useRoute } from '@react-navigation/native';
import { useWindowDimensions, StatusBar } from 'react-native';
//Dimensions(Fora da função) x useWindowDimensions(dentro de uma função react)

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';


import {
    Container,
    Content,
    Title,
    Message,
    Footer,
} from './styles';

interface Params {
    title: string;
    message: string;
    nextScreenRoute: string;
}

export function Confirmation() {
    const { width } = useWindowDimensions();

    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const route = useRoute();
    const { title, message, nextScreenRoute } = route.params as Params

    function handleConfirmRental() {
        navigation.navigate(nextScreenRoute);
    }

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />

                <Title>{title}</Title>

                <Message>{message}</Message>
            </Content>

            <Footer>
                <ConfirmButton title='ok' onPress={handleConfirmRental} />
            </Footer>

        </Container>
    );
}
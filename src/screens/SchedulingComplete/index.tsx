import React from 'react';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
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

export function SchedulingComplete() {
    const { width } = useWindowDimensions();

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleConfirmRental() {
        navigation.navigate('Home');
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

                <Title>Carro alugado!</Title>

                <Message>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX{'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton title='ok' onPress={handleConfirmRental} />
            </Footer>

        </Container>
    );
}
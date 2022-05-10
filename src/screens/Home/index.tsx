import React, { useEffect, useState } from 'react';
import {
    useNavigation,
    ParamListBase,
    NavigationProp,
} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg'
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList,
} from './styles';

export function Home() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const theme = useTheme();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCars();

    }, []);

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent //header começa no inicio da tela
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de {cars.length} carros
                    </TotalCars>
                </HeaderContent>

            </Header>
            {loading ? <Load /> :
                <CarList
                    data={cars}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)} />
                    }
                />
            }
        </Container>
    );
}
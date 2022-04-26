import SpeedSvg from '../assets/speed.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import ForceSvg from '../assets/force.svg';
import GasolineSvg from '../assets/gasoline.svg';
import EnergySvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';
import ExchangesSvg from '../assets/exchange.svg';
import PeoplesSvg from '../assets/people.svg';
import CarSvg from '../assets/car.svg';

export function getAccessoryIcon(type: string) {
    switch (type) {
        case 'speed':
            return SpeedSvg
        case 'acceleration':
            return AccelerationSvg
        case 'turning_diameter':
            return ForceSvg
        case 'gasoline_motor':
            return GasolineSvg
        case 'eletric_motor':
            return EnergySvg
        case 'hybdrid_motor':
            return HybridSvg
        case 'exchange':
            return ExchangesSvg
        case 'seats':
            return PeoplesSvg
        default:
            return CarSvg;
    }
}
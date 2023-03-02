import {CarComponent} from "../components/CarComponent";


function AppCars() {
    const cars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <CarComponent cars={cars}/>
        </>
    )

}

export default AppCars
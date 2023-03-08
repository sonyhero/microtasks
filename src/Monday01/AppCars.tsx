import {CarComponent} from './Components/CarComponent';


function AppCars() {
    const topcars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <CarComponent cars={topcars}/>
        </>
    )

}

export default AppCars
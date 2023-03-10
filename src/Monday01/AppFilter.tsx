import '../App.css'
import {useState} from "react";
import {ButtonFilter} from './components/ButtonFilter';



export type FilterType = 'all'|'usd'|'rub'

function AppFilter() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

        if(filter==='usd') {
            currentMoney = money.filter((el)=>el.banknots==='Dollars')
        }

        if(filter==='rub') {
            currentMoney = money.filter((el)=>el.banknots==='RUBLS')
        }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ButtonFilter currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>

    )
}

export default AppFilter
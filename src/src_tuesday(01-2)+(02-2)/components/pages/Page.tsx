import React from 'react';
import {PagesType} from '../../data/dataState';
import {useNavigate, useParams} from 'react-router-dom';
import {Error404} from './Error404';

type PropsType = {
    pages: PagesType[]
}
export const Page = (props: PropsType) => {

    const params = useParams()
    // console.log(props.pages.indexOf(props.pages[Number(params.id)]) < props.pages.length)
    // console.log('params ', params)

    const navigate = useNavigate()

    const mainPageHandler = () => {
        navigate('/page/0')
    }
    const backHandler = () => {
      navigate(-1)
    }

    return (
        props.pages.indexOf(props.pages[Number(params.id)]) === -1
             // Number(params.id) < props.pages.length-1
            ?
            <Error404/>
            :
            <div>
                <div>{props.pages[Number(params.id)].heading}</div>
                <div>{props.pages[Number(params.id)].about}</div>
                <button onClick={mainPageHandler}>Main Page</button>
                <button onClick={backHandler}>Back</button>
            </div>
    )
};
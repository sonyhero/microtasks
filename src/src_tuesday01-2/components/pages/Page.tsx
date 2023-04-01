import React from 'react';
import {PagesType} from '../../data/dataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';

type PropsType = {
    pages: PagesType[]
}
export const Page = (props: PropsType) => {

    const params = useParams()
    console.log(props.pages.indexOf(props.pages[Number(params.id)])<props.pages.length)

    return (
        props.pages.indexOf(props.pages[Number(params.id)]) === -1
        ?
            <Error404/>
        :
            <div>
                <div>{props.pages[Number(params.id)].heading}</div>
                <div>{props.pages[Number(params.id)].about}</div>
            </div>
    )
};
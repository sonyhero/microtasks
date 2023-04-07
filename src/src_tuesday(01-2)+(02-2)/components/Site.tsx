import React from 'react';
import styles from './Site.module.css'
import {Navigate, Route, Routes, NavLink} from 'react-router-dom';
import {Error404} from './pages/Error404';
import {dataState} from '../data/dataState';
import {Page} from './pages/Page';
import styled from 'styled-components';
import {useWindowSize} from '../helpers/useWindowSize';


export const Site = () => {

    let size = useWindowSize() ////кастомный хук

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size>1200
                    ? <div className={styles.nav}>
                        <NavWrapper><NavLink to={'/page/0'}> PAGE1</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/page/1'}> PAGE2</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/page/2'}> PAGE3</NavLink></NavWrapper>
                    </div>
                    : <div>HA-ha</div>
                }

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`


import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import './main-nav.css';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

class MainNav extends React.Component {
    render() {
        return (
            <div style={{ background: '#c4c4c4', color: '#FFF', width: 300 }}>
                <Nav>
                    <NavText>Whatever Blah</NavText>
                </Nav>
                <SideNav highlightColor='#c63939' highlightBgColor='#c4c4c4' defaultSelected='about'>
                    <Nav id='about'>
                        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon>
                        <NavText> About </NavText>
                    </Nav>
                    <Nav id='products'>
                        <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                        <NavText> Products </NavText>
                    </Nav>
                    <Nav id='products'>
                        <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                        <NavText> Contact </NavText>
                    </Nav>
                </SideNav>
            </div>
        )
    }
}

export default MainNav;
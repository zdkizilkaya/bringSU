import React , {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../bringSU-logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
export default class Navbar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons/1871438/online_shop_shopping_trolley_icon */}
                <Link to ='./'> 
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <Link to= "/" className="nav-link">ürünler</Link>
                    </li>
                </ul>
                {/* link to details page*/}
                    <label for="fname" style={{color: 'red' }}> What are you looking for?    </label>
                    <input type="text" id="fname" name="fname"/>
                    <Link to = '/details' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2 align-item-center">
                        {/* <i className ="fas fa-cart-plus"></i>*/}
                        </span>
                            Search 
                    </ButtonContainer>
                    </Link>
                    {/* login page  button*/}
                    <Link to = '/login' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2 align-item-center">
                        {/* <i className ="fas fa-cart-plus"></i>*/}
                        </span>
                            Login/Sign Up 
                    </ButtonContainer>
                    
                </Link>
                <Link to = '/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2" ali>
                        <i className ="fas fa-cart-plus"></i>
                        </span>
                            my cart 
                    </ButtonContainer>
                    </Link>
            </NavWrapper>
        );
    
    }
}

const NavWrapper =styled.nav`
background : var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform :capitalize ;

}
`;

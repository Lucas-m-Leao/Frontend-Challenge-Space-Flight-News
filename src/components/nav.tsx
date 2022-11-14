import React from 'react'
import { NavContainer, SearchContainer } from '../styles/nav'
import { BiSearch } from 'react-icons/bi'
const Nav = () => {
    return (
        <NavContainer>
            <SearchContainer>
                <input type="text" placeholder="Search" name="" id="" />
                <button>
                    <BiSearch className="lupa" />
                </button>
            </SearchContainer>
            <select>
                <option value="Mais antigas">Mais antigas</option>
                <option value="Mais recentes">Mais recentes</option>
            </select>
        </NavContainer>
    )
}

export default Nav

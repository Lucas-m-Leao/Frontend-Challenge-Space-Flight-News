import React, { useContext, useState } from 'react'
import { NavContainer, SearchContainer } from '../styles/nav'
import { BiSearch } from 'react-icons/bi'
import { ArticlesContext } from '../context/ArticlesContext'
const Nav = () => {
    const { setSearch, setSort } = useContext(ArticlesContext)
    const [data, setData] = useState('')
    return (
        <NavContainer>
            <SearchContainer>
                <input
                    type="text"
                    placeholder="Search"
                    name=""
                    id=""
                    onChange={e => setData(e.target.value)}
                />
                <button onClick={() => setSearch(data)}>
                    <BiSearch className="lupa" />
                </button>
            </SearchContainer>
            <select onChange={e => setSort(e.target.value)}>
                <option value="">Mais recentes</option>
                <option value="publishedAt">Mais antigas</option>
            </select>
        </NavContainer>
    )
}

export default Nav

import styled from 'styled-components'

export const NavContainer = styled.nav`
    display: flex;
    gap: 5px;
    padding: 5px;
    width: 100%;
    justify-content: flex-end;
    select {
        cursor: pointer;
        height: 1.7rem;
        border-radius: 5px;
    }
    align-items: flex-end;
`

export const SearchContainer = styled.div`
    border: solid 1px black;
    border-radius: 5px;
    input {
        border: none;
        outline: none;
        padding-left: 3px;
    }
    button {
        margin: 0;
        border: none;
        background-color: ${prop => prop.theme.color.background};
        cursor: pointer;
        padding: 3px;
        margin: 2px;
    }
    .lupa {
        color: white;
    }
`

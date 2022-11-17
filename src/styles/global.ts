import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Roboto Condensed', sans-serif;
}
ul, ol, li {
        list-style: none;
}
`

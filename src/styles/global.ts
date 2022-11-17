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
ul, ol, li,a {
        list-style: none;
        text-decoration: none;
}
button{
    cursor: pointer;
}
img{
    border-radius: 5px;
}
`

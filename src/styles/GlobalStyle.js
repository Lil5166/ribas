import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      font-family: Manrope, sans-serif;
    }

    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
    `

export default GlobalStyle;
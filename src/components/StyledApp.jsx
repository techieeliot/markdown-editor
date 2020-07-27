import styled from "styled-components"

const StyledApp = styled.main `

    #editor-section {
        width: 80vw;
        height: 80vh;
        background-color: gainsboro;
    } 
    
    #one, #two {
        background-color: white;
        border: 0.5em solid #E2E4E9;
        width: 50vw;
        height: 95vh;
    }

    #one h2, textarea {
        border: 0.5em dashed black;
        height: 75vh;
    }
    #two h2, aside {
        border: 0.5em dotted lightgreen;
        height: 75vh
    }

    .flexbox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
    }
`

export default StyledApp
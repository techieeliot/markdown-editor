import styled from "styled-components"

const StyledApp = styled.main `
    #editor-section {
        margin: 0 auto;
        width: 90vw;
        height: 80vh;
        background-color: black;
    } 
    
    #one, #two {
        background-color: white;
        border: 0.5em solid #E2E4E9;
        width: 40vw;
        height: 75vh;
    }

    #one h2, #two h2 {
        height: 5vh;
    }

    #editor, #preview {
        height: 60vh;
        width: 35vw;
    }

    #one textarea {
        border: 0.5em dashed black;
    }
    #two aside {
        border: 0.5em dotted lightgreen;
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
import React from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components'

const { TabPane } = Tabs;
const marked = require('marked')


function callback(key) {
  console.log(key);
}

export default ({ text, setText}) => (
    <TabWindow>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
                <article id="one">
                    <header>
                    <h2 className="heading">Editor</h2>
                    </header>
                    <textarea
                        id="editor"
                        name="editor"
                        placeholder="Enter Markdown"
                        onChange={event => setText(event.target.value)}
                        value = {text}
                    ></textarea>
                </article>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                <article id="two">
                    <header>
                    <h2 className="heading">Preview</h2>
                    </header>
                    <aside id="preview" name="preview" dangerouslySetInnerHTML= {{__html: marked(text)}}>
                    </aside>
                </article>
            </TabPane>
        </Tabs>
    </TabWindow>
);

 const TabWindow = styled.section`
   
 `
 // #one, #two {
    //     background-color: white;
    //     border: 0.5em solid #E2E4E9;
    //     width: 40vw;
    //     height: 75vh;
    // }

const Editor = styled.article`

`

// #editor-section {
//     margin: 0 auto;
//     width: 90vw;
//     height: 80vh;
//     background-color: black;
// }



// #one h2, #two h2 {
//     height: 5vh;
// }

// #editor, #preview {
//     height: 60vh;
//     width: 35vw;
// }

// #preview img {
//     width: 20vw;
// }

// #one textarea {
//     border: 0.5em dashed black;
// }
// #two aside {
//     border: 0.5em dotted lightgreen;
// }

// .flexbox {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     align-content: stretch;
// }
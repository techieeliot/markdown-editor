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
            <TabPane tab="Editor" key="1">
                <Editor id="one">
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
                </Editor>
            </TabPane>
            <TabPane tab="Preview" key="2">
                <Preview id="two">
                    <header>
                        <h2 className="heading">Preview</h2>
                    </header>
                    <aside id="preview" name="preview" dangerouslySetInnerHTML= {{__html: marked(text)}}>
                    </aside>
                </Preview>
            </TabPane>
        </Tabs>
    </TabWindow>
);

const TabWindow = styled.section`
width: 100%;

.ant-tabs-nav-list {
    display: flex; 
}

.ant-tabs-tab-btn{
    padding: 1rem;  
    font-weight: 800;      
}

.ant-tabs-tabpane {
    height: 50rem;
}
`
    
const Editor = styled.article`
background-color: white;
border: 0.5em solid #E2E4E9;
width: 90%;
height: 75%;

.heading {
    height: 5%;
}

#editor {
    height: 60%;
    width: 95%;
}

textarea {
    border: 6px solid #e1e4e8;
    height: 100%;
    width: auto;
    overflow: scroll;
    padding: 1rem;
}

#editor, .heading {
    margin: 1rem;
}
`

const Preview = styled.article`
background-color: white;
border: 0.5em solid #E2E4E9;
width: 90%;
height: 75%;
#preview, .heading {
    margin: 1rem;
}
#preview {
    height: 75%;
    width: 95%;
}
#preview img {
    width: 20%;
}
.heading {
    height: 5%;
}
aside {
    border: 6px solid #e1e4e8;
    overflow: scroll;
    padding: 1rem;
}
`
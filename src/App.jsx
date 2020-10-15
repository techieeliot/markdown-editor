import React, { useState } from "react";
import TabWindow from "./components/TabWindow"
import styled from 'styled-components'
// 1. get the textarea on change (keyup)
// 2. process the textarea content with marked
// 3. send the marked text to the previewer

const App = () => {
	const initialText = `
		\n# Eliot Sanford
		\n## Software Engineering Contractor
		\n[Portfolio Page](https://techieEliot.com)
		\n\`let name = "Eliot"\`
		\n\`\`\`
		\n	const fullName = "Eliot Sanford"
		\n	const greeting = () => console.log(\`Hello \${name}\`)
		\n\`\`\`
		\n- a list item
		\n- another list item
		\n- yet another list item
		\n
		\n**Warning!**
		\n> This react app is protected by a highly trained fainting goat. 
		\n![goat](https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg)
		\n**Not responsible for injury or possible death**
	`
	const [ text, setText ] = useState(initialText);
	
	return (
	<Main>
		<Header>
			<h1 id="title">Markdown Editor</h1>
		</Header>
		<TabWindow 
			markdownString={text}
			setMarkdownString={setText}
			/>
	</Main>
);
}

export default App

const Main = styled.section`
	* {
		box-sizing: border-box;
	}

	font-family:  Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
	font-size: 16px;
	margin: 1rem auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	#title {
		text-align: center;
	}
`

const Header = styled.header`
	#h1{
		font-size: 2rem;
	}
`
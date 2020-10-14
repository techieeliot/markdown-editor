import React, { useState } from "react";
import StyledApp from "./components/StyledApp";
import TabWindow from "./components/TabWindow"

// 1. get the textarea on change (keyup)
// 2. process the textarea content with marked
// 3. send the marked text to the previewer

const App = () => {
	const initialText = `\n# Eliot Sanford
		\n## Software Engineering Contractor
		\n[Portfolio Page](https://techieEliot.com)
		\n\`let name = "Eliot"\`
		\n\`\`\`
		\n	const fullName = "Eliot Sanford"
		\n	const greeting = () => {}
		\n\`\`\`
		\n- a list item
		\n- another list item
		\n- yet another list item
		\n
		\n> a blockquote
		\n![goat](https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg)
		\nThis is **bolded text**.
	`
	const [ text, setText ] = useState(initialText);
	
	return (
	<>
		<header>
			<h1>Markdown Editor</h1>
		</header>
		<TabWindow 
			text={text}
			setText={setText}
		/>
	</>
);
}

export default App
import React, { useState } from "react";
import StyledApp from "./components/StyledApp";

const marked = require('marked')

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
  <StyledApp >
    <header>
      <h1>Markdown Editor</h1>
    </header>
    <section id="editor-section" className="flexbox">
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
      <article id="two">
        <header>
          <h2 className="heading">Preview</h2>
        </header>
        <aside id="preview" name="preview" dangerouslySetInnerHTML= {{__html: marked(text)}}>
		</aside>
      </article>
    </section>
  </StyledApp>
);
}

export default App
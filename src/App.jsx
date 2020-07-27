import React from "react";
import StyledApp from "./components/StyledApp";

export default () => (
  <StyledApp >
    <header>
      <h1>Markdown Editor</h1>
    </header>
    <section id="editor-section" className="flexbox">
      <article id="one">
        <header>
          <h2>Editor</h2>
        </header>
        <textarea id="editor"></textarea>
      </article>
      <article id="two">
        <header>
          <h2>Preview</h2>
        </header>
        <aside id="preview"></aside>
      </article>
    </section>
  </StyledApp>
);
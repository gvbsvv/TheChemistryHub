// Load markdown file, convert to HTML, and enhance it with TOC and syntax highlighting
async function loadMarkdown() {
    const urlParams = new URLSearchParams(window.location.search);
    const file = urlParams.get('file');

    if (!file) {
        document.getElementById("content").innerText = "No file specified.";
        return;
    }

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("File not found");
        const text = await response.text();

        // Convert markdown to HTML
        const converter = new showdown.Converter();
        let htmlContent = converter.makeHtml(text);

        // Inject Table of Contents
        htmlContent = generateTableOfContents(htmlContent);

        // Set converted content
        document.getElementById("content").innerHTML = htmlContent;

        // Apply syntax highlighting
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block);
        });
    } catch (error) {
        document.getElementById("content").innerText = "Error loading file.";
    }
}

// Generate Table of Contents dynamically
function generateTableOfContents(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const headings = tempDiv.querySelectorAll("h1, h2");
    if (headings.length === 0) return html;

    let tocHTML = "<div class='toc'><h2>Table of Contents</h2><ul>";
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        const tag = heading.tagName.toLowerCase();
        const indent = tag === "h2" ? " class='toc-indent'" : "";

        tocHTML += `<li${indent}><a href="#${id}">${heading.innerText}</a></li>`;
    });
    tocHTML += "</ul></div>";

    return tocHTML + tempDiv.innerHTML;
}

// Load markdown on page load
document.addEventListener("DOMContentLoaded", loadMarkdown);

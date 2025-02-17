<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Chemistry Hub</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"></script>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
        }
        .column {
            width: 50%;
            padding: 20px;
        }
        .visual-box {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
        }
        .general { background-color: #d4e157; }
        .ap { background-color: #42a5f5; }
        .academic { background-color: #ffca28; }
        .advanced { background-color: #ef5350; }
        .honors { background-color: #ab47bc; }
        
        ul {
            list-style: none;
            padding: 0;
            display: none;
        }
        li {
            margin-bottom: 5px;
        }
        a {
            cursor: pointer;
            color: blue;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="column">
        <div class="visual-box general" onclick="toggleSection('general-chemistry-links')">📗 General Chemistry</div>
        <ul id="general-chemistry-links"></ul>

        <div class="visual-box ap" onclick="toggleSection('ap-chemistry-links')">📘 AP Chemistry</div>
        <ul id="ap-chemistry-links"></ul>

        <div class="visual-box academic" onclick="toggleSection('academic-chemistry-links')">📙 Advanced Chemistry Topics</div>
        <ul id="academic-chemistry-links"></ul>
    </div>

    <div class="column">
        <h2 id="content-title">Introduction to Chemistry</h2>
        <div id="content-box">Loading...</div>
    </div>

    <script>
        async function loadMarkdown(file, title) {
            try {
                const rawURL = `https://raw.githubusercontent.com/gvbsvv/TheChemistryHub/main/${file}`;
                const response = await fetch(rawURL);
                if (!response.ok) throw new Error(`Error loading ${file}: ${response.status}`);
                const text = await response.text();
                const converter = new showdown.Converter();
                document.getElementById("content-title").innerText = title;
                document.getElementById("content-box").innerHTML = converter.makeHtml(text);
            } catch (error) {
                console.error(error);
                document.getElementById("content-box").innerText = `Error loading ${file}.`;
            }
        }

        function addLinks(links, targetElementId) {
            const ul = document.getElementById(targetElementId);
            if (ul) {
                links.forEach(link => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.textContent = link.text;
                    a.onclick = () => loadMarkdown(link.file, link.text);
                    li.appendChild(a);
                    ul.appendChild(li);
                });
            } else {
                console.error("Target element not found:", targetElementId);
            }
        }

        function toggleSection(sectionId) {
            const sections = ['general-chemistry-links', 'ap-chemistry-links', 'academic-chemistry-links'];
            sections.forEach(id => {
                document.getElementById(id).style.display = (id === sectionId && document.getElementById(id).style.display !== 'block') ? 'block' : 'none';
            });
        }

        window.addEventListener('DOMContentLoaded', () => {
            loadMarkdown('introduction-to-chemistry.md', 'Introduction to Chemistry');

            const advancedChemistryLinks = [
                { file: 'nuclear-chemistry.md', text: 'Nuclear Chemistry' },
                { file: 'polymer-chemistry.md', text: 'Polymer Chemistry' },
                { file: 'electrochemistry.md', text: 'Electrochemistry' },
                { file: 'biomedical-chemistry.md', text: 'Biomedical Chemistry' },
                { file: 'environmental-chemistry.md', text: 'Environmental Chemistry' },
                { file: 'agricultural-chemistry.md', text: 'Agricultural Chemistry' }
            ];

            setTimeout(() => {
                addLinks(advancedChemistryLinks, 'academic-chemistry-links');
            }, 0);
        });
    </script>
</body>
</html>

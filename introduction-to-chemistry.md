<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"># Introduction to Chemistry

Chemistry is the branch of science that studies the composition, structure, properties, and changes of matter. It is broadly divided into three major fields:

## 1. Traditional Branches of Chemistry
### Organic Chemistry
Organic chemistry deals with carbon-based compounds, including their structure, properties, and reactions. It plays a crucial role in pharmaceuticals, petrochemicals, and biochemistry.
- Hydrocarbons and functional groups
- Polymers and macromolecules
- Medicinal chemistry and drug synthesis

### Inorganic Chemistry
Inorganic chemistry focuses on compounds that do not contain carbon-hydrogen bonds. It includes metals, minerals, and coordination compounds.
- Transition metals and catalysts
- Crystallography and solid-state chemistry
- Industrial applications (ceramics, pigments, semiconductors)

### Physical Chemistry
Physical chemistry examines the principles governing chemical systems and reactions, combining chemistry with physics and mathematics.
- Thermodynamics and kinetics
- Quantum chemistry and spectroscopy
- Surface chemistry and catalysis

## 2. Advanced and Emerging Fields in Chemistry
### Nuclear Chemistry
Nuclear chemistry focuses on radioactive substances, nuclear reactions, and their applications in energy production, medicine, and industry.
- Nuclear fission and fusion
- Applications in power generation
- Radioactive decay and isotopes
- Nuclear medicine (PET scans, radiation therapy)

### Polymer Chemistry
This field deals with the synthesis, properties, and applications of polymers used in everyday life.
- Biodegradable plastics
- Conductive polymers
- Smart materials and nanopolymers
- Polymer composites in aerospace and automotive industries

### Electrochemistry
Electrochemistry involves the study of chemical reactions that involve the movement of electrons, particularly in batteries and fuel cells.
- Lithium-ion and solid-state batteries
- Fuel cells and hydrogen energy
- Corrosion and its prevention
- Electroplating and electrolysis

### Biomedical Chemistry
Biomedical chemistry bridges chemistry and medicine, focusing on drug discovery and biochemical analysis.
- Pharmaceutical chemistry and drug development
- Biocompatible materials for implants
- Molecular diagnostics and biosensors
- Personalized medicine and gene therapy

### Environmental Chemistry
Environmental chemistry examines the impact of human activities on the environment and solutions for sustainability.
- Green chemistry and sustainable materials
- Air and water pollution control
- Climate change and carbon capture
- Waste management and recycling technologies

### Agricultural Chemistry
This field focuses on improving agricultural productivity and sustainability through chemistry.
- Fertilizers and soil chemistry
- Pesticide formulation and alternatives
- Genetically modified crops and biotechnology
- Precision agriculture and soil health monitoring

## Conclusion
From traditional fields like organic, inorganic, and physical chemistry to cutting-edge areas such as nuclear, biomedical, and environmental chemistry, the discipline continues to evolve. Continued research and innovation in these fields will drive the future of science and technology.


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
        .advanced { background-color: #ffca28; }
        
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

        <div class="visual-box advanced" onclick="toggleSection('advanced-chemistry-links')">🔬 Advanced Chemistry</div>
        <ul id="advanced-chemistry-links"></ul>
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
            ul.innerHTML = "";
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
            const sections = ['general-chemistry-links', 'ap-chemistry-links', 'advanced-chemistry-links'];
            sections.forEach(id => {
                document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
            });
        }

        window.addEventListener('DOMContentLoaded', () => {
            loadMarkdown('introduction-to-chemistry.md', 'Introduction to Chemistry');

            const generalChemistryLinks = [
                { file: 'chemical-bonding.md', text: 'Chemical Bonding' },
                { file: 'stoichiometry.md', text: 'Stoichiometry' }
            ];
            const apChemistryLinks = [
                { file: 'atomic-structure.md', text: 'Atomic Structure and Properties' },
                { file: 'compound-structure.md', text: 'Compound Structure and Properties' }
            ];
            const advancedChemistryLinks = [
                { file: 'nuclear-chemistry.md', text: 'Nuclear Chemistry' },
                { file: 'polymer-chemistry.md', text: 'Polymer Chemistry' },
                { file: 'electrochemistry.md', text: 'Electrochemistry' },
                { file: 'biomedical-chemistry.md', text: 'Biomedical Chemistry' },
                { file: 'environmental-chemistry.md', text: 'Environmental Chemistry' },
                { file: 'agricultural-chemistry.md', text: 'Agricultural Chemistry' }
            ];

            addLinks(generalChemistryLinks, 'general-chemistry-links');
            addLinks(apChemistryLinks, 'ap-chemistry-links');
            addLinks(advancedChemistryLinks, 'advanced-chemistry-links');
        });
    </script>
</body>
</html>

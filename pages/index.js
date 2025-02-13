import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [introContent, setIntroContent] = useState("Loading...");
  const [generalChemistryLinks, setGeneralChemistryLinks] = useState([]);
  const [apChemistryLinks, setApChemistryLinks] = useState([]);

  useEffect(() => {
    loadMarkdown("introduction-to-chemistry.md", setIntroContent);

    setGeneralChemistryLinks([
      { file: "chemical-bonding.md", text: "Chemical Bonding" },
      { file: "stoichiometry.md", text: "Stoichiometry" },
      { file: "states-of-matter.md", text: "State of Matter" },
      { file: "solutions.md", text: "Solutions" },
      { file: "gas-laws.md", text: "Gas Laws" },
      { file: "redox-reactions.md", text: "Redox Reactions" }
    ]);

    setApChemistryLinks([
      { file: "atomic-structure.md", text: "Atomic Structure and Properties" },
      { file: "compound-structure.md", text: "Compound Structure and Properties" },
      { file: "substance-properties.md", text: "Properties of Substances and Mixtures" },
      { file: "chemical-reactions.md", text: "Chemical Reactions" },
      { file: "kinetics.md", text: "Kinetics" },
      { file: "thermochemistry.md", text: "Thermochemistry" },
      { file: "equilibrium.md", text: "Equilibrium" },
      { file: "acids-bases.md", text: "Acids and Bases" },
      { file: "thermodynamics-electrochemistry.md", text: "Thermodynamics and Electrochemistry" }
    ]);
  }, []);

  async function loadMarkdown(file, setContent) {
    try {
      const rawURL = `https://raw.githubusercontent.com/gvbsvv/TheChemistryHub/main/${file}`;
      const response = await fetch(rawURL);
      if (!response.ok) {
        throw new Error(`Error loading ${file}: ${response.status}`);
      }
      const text = await response.text();
      setContent(text);
    } catch (error) {
      console.error(error);
      setContent(`Error loading ${file}.`);
    }
  }

  return (
    <>
      <Head>
        <title>The Chemistry Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <div style={{ display: "flex", fontFamily: "sans-serif" }}>
        <div style={{ width: "50%", padding: "20px" }}>
          <h2>📗 General Chemistry</h2>
          <ul>
            {generalChemistryLinks.map((link, index) => (
              <li key={index}>
                <a href={`/viewer?file=${link.file}`}>{link.text}</a>
              </li>
            ))}
          </ul>

          <h2>📘 AP Chemistry</h2>
          <ul>
            {apChemistryLinks.map((link, index) => (
              <li key={index}>
                <a href={`/viewer?file=${link.file}`}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ width: "50%", padding: "20px" }}>
          <h2>Introduction to Chemistry</h2>
          <div>{introContent}</div>
        </div>
      </div>
    </>
  );
}

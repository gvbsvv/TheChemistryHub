import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="header">The Chemistry Hub</header>

      <div className="content-container">
        {/* AP Chemistry Column */}
        <div className="column">
          <h2>📘 AP Chemistry</h2>
          <div className="subject">
            <Link href="/viewer?file=atomic-structure.md">
              Atomic Structure and Properties
            </Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=compound-structure.md">
              Compound Structure and Properties
            </Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=substance-properties.md">
              Properties of Substances and Mixtures
            </Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=chemical-reactions.md">
              Chemical Reactions
            </Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=kinetics.md">Kinetics</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=thermochemistry.md">Thermochemistry</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=equilibrium.md">Equilibrium</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=acids-bases.md">Acids and Bases</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=thermodynamics-electrochemistry.md">
              Thermodynamics and Electrochemistry
            </Link>
          </div>
        </div>

        {/* General Chemistry Column */}
        <div className="column">
          <h2>📗 General Chemistry</h2>
          <div className="subject">
            <Link href="/viewer?file=introduction-to-chemistry.md">
              Introduction to Chemistry
            </Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=chemical-bonding.md">
              Chemical Bonding
            </Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=stoichiometry.md">Stoichiometry</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=states-of-matter.md">State of Matter</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=solutions.md">Solutions</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=gas-laws.md">Gas Laws</Link>
          </div>
          <div className="subject">
            <Link href="/viewer?file=redox-reactions.md">Redox Reactions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { MapPin, BarChart3, FileText, Database } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"patents" | "growth">("patents");

  // Top 5 by 2015 patent count
  const topPatentsMSAs = [
    { name: "San Jose–Sunnyvale–Santa Clara, CA", cbsa: "41940", patents2015: "14,618" },
    { name: "San Francisco–Oakland–Fremont, CA", cbsa: "41860", patents2015: "9,732" },
    { name: "New York–Northern New Jersey–Long Island, NY–NJ–PA", cbsa: "35620", patents2015: "7,754" },
    { name: "Los Angeles–Long Beach–Anaheim, CA", cbsa: "31080", patents2015: "6,476" },
    { name: "Boston–Cambridge–Quincy, MA–NH", cbsa: "14460", patents2015: "5,949" },
  ];

  // Top 5 (among these major hubs) by growth % 2000–2015
  const topGrowthMSAs = [
    {
      name: "San Francisco–Oakland–Fremont, CA",
      cbsa: "41860",
      patents2000: "3,625",
      patents2015: "9,732",
      growthPct: "168.5%",
    },
    {
      name: "San Jose–Sunnyvale–Santa Clara, CA",
      cbsa: "41940",
      patents2000: "5,812",
      patents2015: "14,618",
      growthPct: "151.5%",
    },
    {
      name: "Boston–Cambridge–Quincy, MA–NH",
      cbsa: "14460",
      patents2000: "2,972",
      patents2015: "5,949",
      growthPct: "100.2%",
    },
    {
      name: "Los Angeles–Long Beach–Anaheim, CA",
      cbsa: "31080",
      patents2000: "3,877",
      patents2015: "6,476",
      growthPct: "67.0%",
    },
    {
      name: "New York–Northern New Jersey–Long Island, NY–NJ–PA",
      cbsa: "35620",
      patents2000: "5,689",
      patents2015: "7,754",
      growthPct: "36.3%",
    },
  ];

  const isPatents = activeTab === "patents";

  return (
    <main className="page-container">
      {/* Header Section */}
      <header className="mb-12 fade-in" style={{ opacity: 0 }}>
        <div className="neu-card text-center">
          <div className="neu-badge mx-auto mb-6">
            <Database className="w-4 h-4 mr-2" />
            USPTO Data 2000–2015
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Patent Activity Across U.S. Metropolitan Statistical Areas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualization of USPTO utility patent counts and long-run growth by MSA
          </p>
        </div>
      </header>

      <div className="section-divider" />

      {/* Visualization Section */}
      <section className="mb-12 fade-in fade-in-delay-1" style={{ opacity: 0 }}>
        <div className="section-header">
          <div className="section-icon">
            <MapPin className="w-5 h-5" />
          </div>
          <span>Interactive Choropleth Maps</span>
        </div>

        {/* Tabs */}
        <div className="neu-card mb-4 flex w-full overflow-hidden">
          <button
            className={
              "flex-1 px-4 py-2 text-sm md:text-base font-medium transition-all " +
              (isPatents
                ? "bg-background text-foreground shadow-inner"
                : "bg-transparent text-muted-foreground hover:text-foreground")
            }
            onClick={() => setActiveTab("patents")}
          >
            2015 Patent Counts
          </button>
          <button
            className={
              "flex-1 px-4 py-2 text-sm md:text-base font-medium border-l border-border transition-all " +
              (!isPatents
                ? "bg-background text-foreground shadow-inner"
                : "bg-transparent text-muted-foreground hover:text-foreground")
            }
            onClick={() => setActiveTab("growth")}
          >
            2000–2015 Growth (%)
          </button>
        </div>

        <p className="text-muted-foreground mb-5 ml-[52px]">
          {isPatents
            ? "Interactive choropleth map of total utility patents granted in 2015 (embedded from Datawrapper)."
            : "Interactive choropleth map of patent growth from 2000 to 2015, highlighting MSAs with the fastest increases or slowdowns in patenting."}
        </p>

        <div className="embed-container">
          {isPatents ? (
            <iframe
              title="Patent Activity Across U.S. Metropolitan Statistical Areas (2015)"
              aria-label="Choropleth map"
              src="https://datawrapper.dwcdn.net/jEUyT/1/"
              scrolling="no"
              frameBorder="0"
              style={{ width: "100%", minWidth: "100%", border: "none" }}
              height="803"
            />
          ) : (
            <iframe
              title="Patent Growth Across U.S. Metropolitan Areas (2000 vs 2015)"
              aria-label="Choropleth map"
              // TODO: replace with your actual growth map URL
              src="https://datawrapper.dwcdn.net/33R5o/1/"
              scrolling="no"
              frameBorder="0"
              style={{ width: "100%", minWidth: "100%", border: "none" }}
              height="803"
            />
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* Top 5 Section */}
      <section className="mb-12 fade-in fade-in-delay-2" style={{ opacity: 0 }}>
        <div className="section-header">
          <div className="section-icon">
            <BarChart3 className="w-5 h-5" />
          </div>
          <span>
            {isPatents
              ? "Top 5 Metropolitan Statistical Areas by 2015 Patent Count"
              : "Top 5 Metropolitan Statistical Areas by Growth (2000–2015)"}
          </span>
        </div>

        <div className="neu-card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            {isPatents ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-16">Rank</th>
                    <th>Metropolitan Statistical Area</th>
                    <th className="w-28">CBSA Code</th>
                    <th className="text-right w-32">Patents (2015)</th>
                  </tr>
                </thead>
                <tbody>
                  {topPatentsMSAs.map((msa, index) => (
                    <tr
                      key={msa.cbsa}
                      className="transition-all duration-200 hover:bg-background/50"
                    >
                      <td>
                        <span className="neu-badge text-xs px-3 py-1">
                          #{index + 1}
                        </span>
                      </td>
                      <td className="font-medium text-foreground">{msa.name}</td>
                      <td className="text-muted-foreground font-mono text-sm">
                        {msa.cbsa}
                      </td>
                      <td className="text-right">
                        <span className="font-bold text-primary text-lg">
                          {msa.patents2015}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="w-16">Rank</th>
                    <th>Metropolitan Statistical Area</th>
                    <th className="w-24">CBSA</th>
                    <th className="w-28 text-right">Patents 2000</th>
                    <th className="w-28 text-right">Patents 2015</th>
                    <th className="w-32 text-right">Growth %</th>
                  </tr>
                </thead>
                <tbody>
                  {topGrowthMSAs.map((msa, index) => (
                    <tr
                      key={msa.cbsa}
                      className="transition-all duration-200 hover:bg-background/50"
                    >
                      <td>
                        <span className="neu-badge text-xs px-3 py-1">
                          #{index + 1}
                        </span>
                      </td>
                      <td className="font-medium text-foreground">{msa.name}</td>
                      <td className="text-muted-foreground font-mono text-sm">
                        {msa.cbsa}
                      </td>
                      <td className="text-right font-mono text-sm">
                        {msa.patents2000}
                      </td>
                      <td className="text-right font-mono text-sm">
                        {msa.patents2015}
                      </td>
                      <td className="text-right font-bold text-primary">
                        {msa.growthPct}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Analysis Section */}
      <section className="mb-12 fade-in fade-in-delay-3" style={{ opacity: 0 }}>
        <div className="section-header">
          <div className="section-icon">
            <FileText className="w-5 h-5" />
          </div>
          <span>
            {isPatents
              ? "Analysis of Regional Patent Levels (2015)"
              : "Analysis of Long-Run Patent Growth (2000–2015)"}
          </span>
        </div>

        <div className="neu-card">
          <div className="space-y-5">
            {isPatents ? (
              <>
                <p className="analysis-text">
                 This webpage presents a choropleth map that visualizes the distribution of U.S. patent activity across Metropolitan Statistical Areas (MSAs) in 2015. Each region is shaded according to the total number of utility patents granted by the United States Patent and Trademark Office, making it easy to identify places with strong innovation output.
                </p>
                <p className="analysis-text">
                 A noticeable pattern emerges on the map, showing that patent activity is highly concentrated in well-known technology and research corridors. The San Jose Sunnyvale Santa Clara region, widely recognized as Silicon Valley, clearly leads the country with 14,618 patents in 2015. Other prominent hubs include San Francisco Oakland Fremont, New York Northern New Jersey Long Island, Los Angeles Long Beach Anaheim, and Boston Cambridge Quincy. These regions thrive due to the presence of major technology companies, top research universities, strong access to capital, and large pools of highly skilled workers, creating powerful innovation ecosystems.
                </p>
                <p className="analysis-text">
                 Compared to these hubs, many areas in the central and southeastern United States have lower patent counts. This suggests fewer knowledge-intensive industries or lower levels of research and development investment within those regions. Even so, several mid-tier MSAs show a growing innovation presence, particularly where local universities and emerging tech clusters are gaining momentum.
                </p>
                                <p className="analysis-text">
                                  Overall, the map highlights that innovation in the United States is not evenly distributed. Instead, it follows a structured geographic pattern where economic specialization, research infrastructure, and talent concentration drive substantial differences in patent generation across the nation.
                                  </p>

              </>
            ) : (
              <>
                <p className="analysis-text">
                  The growth map compares patenting levels in 2015 to their
                  baseline in 2000, highlighting how innovation capacity has
                  evolved over a 15-year period. Rather than just showing where
                  patent counts are currently high, this view emphasizes places
                  that have gained or lost momentum in relative terms.
                </p>
                <p className="analysis-text">
                  Among the major innovation hubs, San Francisco–Oakland–Fremont
                  and San Jose–Sunnyvale–Santa Clara show the strongest growth,
                  with patent volumes increasing by more than 150 percent since
                  2000. Boston–Cambridge–Quincy also roughly doubled its patent
                  output, reflecting the rise of its biotech and software
                  ecosystems. Los Angeles and New York exhibit more moderate but
                  still significant growth, consistent with their diversified,
                  mature economies.
                </p>
                <p className="analysis-text">
                  Many interior and southern MSAs display mixed patterns:
                  university and tech-oriented regions often register strong
                  percentage gains from relatively small starting bases, while
                  some historically industrial metros grow more slowly or even
                  stagnate. Overall, the growth perspective shows that while
                  established coastal hubs continue to dominate in absolute
                  terms, a broader set of regions is gradually increasing its
                  share of U.S. inventive activity.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer */}
      <footer className="fade-in fade-in-delay-4" style={{ opacity: 0 }}>
  <div className="neu-card-inset text-center py-5">
    <p className="text-sm text-muted-foreground">
      Source: USPTO Patent Counts by Metropolitan Area (2000–2015).  
      Visualizations embedded via Datawrapper.
    </p>

    <p className="text-sm text-muted-foreground mt-2">
      GitHub Repository:{" "}
      <a 
        href="https://github.com/Mithileshmishra/msa-patent-insights" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
      >
        View Project on GitHub
      </a>
    </p>
  </div>
</footer>

    </main>
  );
};

export default Index;

const Index = () => {
  const topMSAs = [
    { name: "San Jose–Sunnyvale–Santa Clara, CA", cbsa: "41940", patents: "14,618" },
    { name: "San Francisco–Oakland–Fremont, CA", cbsa: "41860", patents: "9,732" },
    { name: "New York–Northern New Jersey–Long Island, NY–NJ–PA", cbsa: "35620", patents: "7,754" },
    { name: "Los Angeles–Long Beach–Anaheim, CA", cbsa: "31080", patents: "6,476" },
    { name: "Boston–Cambridge–Quincy, MA–NH", cbsa: "14460", patents: "5,949" },
  ];

  return (
    <main className="page-container">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Patent Activity Across U.S. Metropolitan Statistical Areas (2015)
        </h1>
        <p className="text-lg text-subtitle">
          Visualization of USPTO utility patent counts by MSA
        </p>
      </header>

      <div className="section-divider" />

      {/* Visualization Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Interactive Choropleth Map
        </h2>
        <p className="text-muted-foreground mb-4">
          Interactive choropleth map (embedded from Datawrapper):
        </p>
        <div className="embed-container">
          {/* TODO: Embed Datawrapper iframe here */}
          <p className="text-muted-foreground italic">
            Datawrapper visualization will appear here
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Top 5 MSAs Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Top 5 Metropolitan Statistical Areas by Patent Count
        </h2>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Metropolitan Statistical Area</th>
                <th>CBSA Code</th>
                <th className="text-right">Patents (2015)</th>
              </tr>
            </thead>
            <tbody>
              {topMSAs.map((msa, index) => (
                <tr key={msa.cbsa}>
                  <td className="font-medium">{index + 1}</td>
                  <td>{msa.name}</td>
                  <td className="text-muted-foreground">{msa.cbsa}</td>
                  <td className="text-right font-semibold text-primary">{msa.patents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="section-divider" />

      {/* Analysis Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Analysis of Regional Patent Trends
        </h2>
        <div className="space-y-4">
          <p className="analysis-text">
            This webpage presents a choropleth map showing the distribution of U.S. patent activity across Metropolitan Statistical Areas (MSAs) for the year 2015. Each MSA is shaded based on the total number of utility patents granted by the USPTO, making it easy to spot regions with especially high innovation intensity.
          </p>
          <p className="analysis-text">
            The map reveals a clear concentration of patenting along major technology and research corridors. The San Jose–Sunnyvale–Santa Clara MSA (Silicon Valley) stands out as the dominant hub, with 14,618 patents in 2015. Other leading regions include San Francisco–Oakland–Fremont, New York–Northern New Jersey–Long Island, Los Angeles–Long Beach–Anaheim, and Boston–Cambridge–Quincy. These areas combine dense networks of technology companies, research universities, and specialized talent pools, which together create strong innovation ecosystems.
          </p>
          <p className="analysis-text">
            In contrast, many MSAs in the central and southeastern United States show comparatively lower patent counts, suggesting fewer high-tech industries or lower levels of R&D investment. However, some mid-range MSAs—such as emerging tech and university regions—indicate that innovation capacity is gradually spreading beyond traditional coastal hotspots. Overall, the visualization highlights how uneven, yet highly structured, the geography of innovation is in the United States, and how strongly patent activity aligns with regional economic specialization and knowledge-intensive industries.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground">
        <p>
          Source: USPTO Patent Counts by Metropolitan Area (2015). Visualization embedded via Datawrapper.
        </p>
      </footer>
    </main>
  );
};

export default Index;

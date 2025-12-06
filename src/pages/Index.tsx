import { MapPin, BarChart3, FileText, Database } from "lucide-react";

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
      <header className="mb-12 fade-in" style={{ opacity: 0 }}>
        <div className="neu-card text-center">
          <div className="neu-badge mx-auto mb-6">
            <Database className="w-4 h-4 mr-2" />
            USPTO Data 2015
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Patent Activity Across U.S. Metropolitan Statistical Areas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualization of USPTO utility patent counts by MSA
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
          <span>Interactive Choropleth Map</span>
        </div>
        <p className="text-muted-foreground mb-5 ml-[52px]">
          Interactive choropleth map (embedded from Datawrapper):
        </p>
        <div className="embed-container">
          {/* TODO: Embed Datawrapper iframe here */}
          <div className="text-center">
            <div className="neu-button-primary inline-flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              Map Placeholder
            </div>
            <p className="text-muted-foreground text-sm">
              Datawrapper visualization will appear here
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Top 5 MSAs Section */}
      <section className="mb-12 fade-in fade-in-delay-2" style={{ opacity: 0 }}>
        <div className="section-header">
          <div className="section-icon">
            <BarChart3 className="w-5 h-5" />
          </div>
          <span>Top 5 Metropolitan Statistical Areas</span>
        </div>
        <div className="neu-card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="w-16">Rank</th>
                  <th>Metropolitan Statistical Area</th>
                  <th className="w-28">CBSA Code</th>
                  <th className="text-right w-32">Patents</th>
                </tr>
              </thead>
              <tbody>
                {topMSAs.map((msa, index) => (
                  <tr key={msa.cbsa} className="transition-all duration-200 hover:bg-background/50">
                    <td>
                      <span className="neu-badge text-xs px-3 py-1">
                        #{index + 1}
                      </span>
                    </td>
                    <td className="font-medium text-foreground">{msa.name}</td>
                    <td className="text-muted-foreground font-mono text-sm">{msa.cbsa}</td>
                    <td className="text-right">
                      <span className="font-bold text-primary text-lg">{msa.patents}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <span>Analysis of Regional Patent Trends</span>
        </div>
        <div className="neu-card">
          <div className="space-y-5">
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
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer */}
      <footer className="fade-in fade-in-delay-4" style={{ opacity: 0 }}>
        <div className="neu-card-inset text-center py-5">
          <p className="text-sm text-muted-foreground">
            Source: USPTO Patent Counts by Metropolitan Area (2015). Visualization embedded via Datawrapper.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

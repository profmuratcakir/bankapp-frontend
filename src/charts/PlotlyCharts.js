import React from "react";
import Plot from "react-plotly.js";

const PlotlyCharts = ({ data }) => {
  return (
    <Plot
      data={data}
      layout={{
        width: 400,
        height: 300,
        showlegend: false,
        margin: { t: 5, l: 40 },
      }}
      config={{ responsive: true, displayModeBar: true }}
    />
  );
};
export default PlotlyCharts;

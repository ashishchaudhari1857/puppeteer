const fs = require("fs");
const { ChartJSNodeCanvas } = require("chartjs-node-canvas");

const width = 700;
const height = 350;
const backgroundColour = "white";
const chartJSNodeCanvas = new ChartJSNodeCanvas({
  width,
  height,
  backgroundColour,
});

async function run(data) {
  const configuration = {
    type: "bar",
    data: {
      labels: [
        "Open Minded",
        "Agreeable",
        "Conscientious",
        "Extroversion",
        "Emotional Stability",
      ],
      datasets: [
        {
          label: "PCI Score",
          data: data,
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return;
            }
            const gradient = ctx.createLinearGradient(
              0,
              chartArea.bottom,
              0,
              chartArea.top
            );
            gradient.addColorStop(0, "rgba(0, 176, 80, 0.5)");
            gradient.addColorStop(1, "rgba(0, 128, 0, 1)");
            return gradient;
          },
          borderColor: "rgba(72, 201, 176, 1)",
          borderWidth: 1,
          barThickness: 30,
          maxBarThickness: 30,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Percentage",
            color: 'black', // Add this line
          },
          ticks: {
            color: 'black',
            font: {
                size: 16, // Font size for x-axis title
            }, // Add this line
          },
        },
        y: {
          title: {
            display: true,
            text: "Traits",
            color: 'black', 
            font: {
                size: 16, 
              },
          },
          ticks: {
            color: 'black', 
            
            font: {
                size: 16, 
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Preference Clarity Index (PCI)",
          color: 'black', 
          font: {
            size: 18, 
          },
        },
      },
      color: 'black',
    },
  };

  const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration);
  return dataUrl;
}

module.exports = run;
const generateReport = require('./src/generateReport');

(async () => {
  try {
    await generateReport();
  } catch (error) {
    console.error('Error generating report:', error);
  }
})();

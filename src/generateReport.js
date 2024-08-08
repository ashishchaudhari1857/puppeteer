const fs = require('fs');
const puppeteer = require('puppeteer');
const extractData = require('./extractData');
const generateHTML = require('./generateHTML');

async function generateReport() {
  try {
    const data = extractData();
    const html = await generateHTML(data);
    await generatePDF(html);
  } catch (error) {
    console.error('Error generating report:', error);
    throw error;
  }
}
async function generatePDF(html) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'career_report.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0cm', right: '0cm', bottom: '0cm', left: '0cm' },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log('PDF generated successfully!');
}


module.exports = generateReport;
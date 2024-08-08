const fs = require("fs");
const path = require("path");
const run = require("./chart");

async function generateHTML(data) {

  const css = fs.readFileSync(path.join(__dirname, "./styles/styles.css"), "utf8");
  const coverPageCss = fs.readFileSync(path.join(__dirname ,'./styles/CoverPage.css') ,"utf8");
  const personalitySummaryCss = fs.readFileSync(path.join(__dirname ,'./styles/PersonalitySummary.css') ,"utf8");
  const detailContainerCss = fs.readFileSync(path.join(__dirname ,'./styles/DetailContainer.css') ,"utf8");
  const skillContainerCss = fs.readFileSync(path.join(__dirname ,'./styles/SkillContainer.css') ,"utf8");
  const derailsCss = fs.readFileSync(path.join(__dirname ,'./styles/Derails.css') ,"utf8");
  const recommendationsCss = fs.readFileSync(path.join(__dirname ,'./styles/Recommendations.css') ,"utf8");
  const annextureCss = fs.readFileSync(path.join(__dirname ,'./styles/annexture.css') ,"utf8");

  const logoPath = path.join(__dirname, "assets/Pdf_logo.png");
  const CoverImagePath = path.join(__dirname, "assets/coverImage.png");
  const base64Image = getBase64Image(logoPath);
  const CoverImageBase64 = getBase64Image(CoverImagePath);
  const pciSectionHTML = await generatePCISection(data.scores);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Career Report</title>
      <style>
  ${css} 
  ${coverPageCss} 
  ${personalitySummaryCss}
  ${detailContainerCss}
  ${skillContainerCss}
  ${derailsCss}
  ${recommendationsCss}
  ${annextureCss}
</style>
    </head>
    <body>
      <div class="cover-page">
        <div class="circle">
          <h1 class="title">Career<br>Report</h1>
          <h2 class="name">Mr.Tata</h2>
        </div>
        <div class="header">
          <h2 class="FiveFactor">FiveFactor</h2>
          <img src="${base64Image}" alt="FiveFactor Fusion Logo" class="logo">
          <h2 class="FiveFactor">Fusion</h2>
          <h5 class="subTitle">Personality Assessment</h5>
          <div class="quote">"where self discovery meets science"</div>
        </div>
        <div class="content">
          <img src="${CoverImageBase64}" alt="Group Photo" class="group-photo">
          <p class="description">Your report outlines a scientific approach to making smart, informed and practical career choices, custom designed based on your natural capabilities, preferences and success drivers.</p>
        </div>
      </div>
      ${generateSection(data.personalityType, data.Data)}
      ${pciSectionHTML}
      ${generateSkillsSection(data.skills)}
      ${generateDerailersSection(data.derailers)}
      ${generateRecommendations(data.recommendations)}
      ${generateaAnnexture(data.Annexture )}
      ${generateDisclaimer()}
    </body>
    </html>
  `;
}

function generateSection(title, items) {
  const ContainerImgPath = path.join(__dirname, "assets/containerImage.png");
  const ContainerImgBase64 = getBase64Image(ContainerImgPath);
  return `
    <div class="container" style="page-break-before: always;">
      <div class="vertical-text-container">
        <h1 class="personal-summary">Personal Summary</h1>
      </div>
      <div class="header_c">
        <h1 class="title">${title}</h1>
        <div class="number">01</div>
      </div>
      <div class="quote">
        <p>"You add strategic value through your meticulous planning and execution, while fostering harmony and safety for all"</p>
      </div>
      <div class="columns">
        <div class="column">
          <p>Conscientiousness and Agreeableness are areas of your natural and core strengths. Your <span class="title_note">SUPERPOWERS</span> are:</p>
          <ul class="list">
            ${items.SUPERPOWERS.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <h3>Your <span class="title_note">COMBAT TERRITORIES</span> are</h3>
          <ul class="list">
            ${items.COMBAT_TERRITORIES.map((item) => `<li>${item}</li>`).join(
              ""
            )}
          </ul>
        </div>
        <div class="column">
          <img class="image-placeholder" src="${ContainerImgBase64}" alt="loading">
          <div class="Header_Lines">WORDS THAT DESCRIBE YOUR PERSONALITY:</div>
          <ul class="list-wrap">
            ${items.PERSONALITY_WORDS.map(
              (item) => `<li class="list-item">${item}</li>`
            ).join("")}
          </ul>
          <div class="Header_Lines">Roles that will benefit from your superpowers will require:</div>
          <ul class="list">
            ${items.ROLES.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="Header_Lines">Some examples of roles that are in line with your strengths are:</div>
          <ul class="list-wrap">
            ${items.STRENGTHS.map(
              (item) => `<li class="list-item">${item}</li>`
            ).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

async function generatePCISection(scores) {
  try {
    const dataUrl = await run(scores);

    return `
      <div class="Detail-container" style="page-break-before: always;">
        <header class="Detail-header">
          <h1 class="Detail-title">DETAILED <br>REPORT</h1>
          <span class="Detail-pageNumber">02</span>
        </header>
        <h2 class="Detail-subtitle">Preference Clarity Index (PCI)</h2>
        <p class="Detail-description">The Preference Clarity Index (PCI) is a metric used to gauge the consistency and strength of an individual's preferences across various dimensions of personality. It measures how clearly and distinctly a person exhibits traits within each dimension of a personality model, such as the Five-Factor Fusion Model.</p>
        <p class="Detail-description">The bar graph displays your PCI on the 3FPA. A longer bar indicates a strong certainty in your preference, while a shorter bar suggests a lower certainty in your preference.</p>
       <img src="${dataUrl}" alt="chart">
      </div>
    `;
  } catch (error) {
    console.error("Error generating PCI section:", error); 
    return `<div class="Detail-container"><p>Error generating PCI section.</p></div>`;
  }
}

function generateSkillsSection(skills) {
  const SkillSectionImgPath = path.join(__dirname, "assets/SkillSection.png");
  const SkillSectionImg64 = getBase64Image(SkillSectionImgPath);
  return `
  <div class="SkillContainer" style="page-break-before: always;">
  <div class="SkillHeader">
      <div class="number">03</div>    
      <div class="SkillBlackRectangle"></div>
  </div>
  <h1 class="SkillTitle">Skills to Invest In</h1>
  <div class="SkillImgContainer"> <img src=${SkillSectionImg64} alt="Team putting hands together" class="SkillImage"> </div>
  <div class="SkillColumnsContainer">
      <div class="SkillColumn">
          <h2 class="SkillColumnHeader">Technical</h2>
          <ol class="SkillList">
          ${skills.technical
            .map(
              (item) => `
            <li class="SkillItem">
              <span class="SkillItemTitle">${Object.keys(item)[0]}:</span> 
              ${item[Object.keys(item)[0]]}
            </li>
          `
            )
            .join("")}
        </ol>        
      </div>
      <div class="SkillColumn">
          <h2 class="SkillColumnHeader">Behavuioral</h2>
          <ol class="SkillList">
          ${skills.behavioral
            .map(
              (item) => `
            <li class="SkillItem">
              <span class="SkillItemTitle">${Object.keys(item)[0]}:</span> 
              ${item[Object.keys(item)[0]]}
            </li>
          `
            )
            .join("")}
        </ol>        
      </div>
  </div>
</div>
  `;
}

function generateDerailersSection(derailers) {
  const DerailerImagePath_1 = path.join(__dirname, "assets/Derailers1.png");
  const DerailerImagePath_2 = path.join(__dirname, "assets/Derailers2.png");
  const DerailerImage_1 = getBase64Image(DerailerImagePath_1);
  const DerailerImage_2 = getBase64Image(DerailerImagePath_2);

  return `
  <div class="DerailersContainer" style="page-break-before: always;">
  <div class="DerailersHeader">
    <h1 class="DerailersTitle">Potential Derailers</h1>
    <span class="number">04</span>
  </div>
  <div class="DerailersContent">
    <div class="DerailersSection">
      <div class="TechnicalImage">
        <img src=${DerailerImage_1} alt="Technical Image" class="SectionImage">
      </div>
      <div class="TechnicalContent">
        <h2 class="DerailersSubtitle">Technical</h2>
        <ol class="DerailersList">
          ${derailers.technical.map(item => `
            <li class="DerailersListItem"><strong>${item.key}:</strong> ${item.value}</li>
          `).join('')}
        </ol>
      </div>
    </div>
    <div class="DerailersSection">
      <div class="BehaviouralContent">
        <h2 class="DerailersSubtitle">Behavioural</h2>
        <ol class="DerailersList">
          ${derailers.behavioural.map(item => `
            <li class="DerailersListItem"><strong>${item.key}:</strong> ${item.value}</li>
          `).join('')}
        </ol>
      </div>
      <div class="BehaviouralImage">
        <img src=${DerailerImage_2} alt="Behavioural Image" class="SectionImage">
      </div>
    </div>
  </div>
  <div class="DerailersBlackBar"></div>
</div>
  `;
}
function generateRecommendations(Recommendations) {
  const RecommendationsImagePath_1 = path.join(__dirname, "assets/Recommendation1.png");
  const RecommendationsPath_2 = path.join(__dirname, "assets/Recommendation2.png");
  const RecommendationsImage_1 = getBase64Image(RecommendationsImagePath_1);
  const Recommendations_2 = getBase64Image(RecommendationsPath_2);

  return `
  <div class="recommendations-container">
    <div class="recommendations-header">
      <div class="number">05</div>
      <h1 class="recommendations-title">Recommendations</h1>
    </div>
    <div class="recommendations-content">
      <img class="recommendations-background-image" src="${RecommendationsImage_1}" alt="Person with glasses">
      <div class="recommendations-list_block">
        <ul class="recommendations-list">
          ${Recommendations.map((item, index) => `
            <li class="recommendations-item">${index + 1}. <strong>${item.key}:</strong> ${item.value}</li>
          `).join('')}
        </ul>
      </div>
    </div>
    <img class="recommendations-team-image" src="${Recommendations_2}" alt="Team meeting">
    <div class="recommendations-background"></div>
    <div class="recommendationsBlackBar"></div>
  </div>
  `;
}


function generateaAnnexture(Annexture) {
  const AnnextureImagePath_1 = path.join(__dirname, "assets/Annexture.png");
  const AnnextureImage_1 = getBase64Image(AnnextureImagePath_1);

  return `
<div class="annexture-container">
  <header class="annexture-header">
    <h1 class="annexture-title">Annexture</h1>
    <span class="number">06</span>
  </header>
  
  <div class="image-container">
    <img src=${AnnextureImage_1} alt="Ship's Wheel" class="annexture-image">
    <h2 class="annexture-subtitle">3FPA CONSTRUCTS</h2>
  </div>
  
  <div class="annexture-content">
    <ol class="annexture-list">
    ${Annexture.map((item)=>`
       <li class="annexture-item">
        <p class="annexture-item-description">
        <strong class="annexture-item-header">${item.name}:</strong> ${item.description}</p>
        <p class="key-traits"><span>Key Traits:</span> ${item.keyTraits}</p>
      </li>
      `).join("")}
    </ol>
  </div>
  <div class="annextureBlackBar"></div>
  <div class="annextureBlackBar" style="left:100%; top:90%; height:60px; width:30px;"></div>
</div>
  `;
}

function generateDisclaimer() {
  const AnnextureImagePath_1 = path.join(__dirname, "assets/Annexture.png");
  const AnnextureImage_1 = getBase64Image(AnnextureImagePath_1);

  return `
<div class="Disclaimer-container">
   <div class="Disclaimer-header-block">
    <div class="Disclaimer-header">
        To know more
    </div>
    <div class="Disclaimer-contact">
        <p>📞 +123-456-7890</p>
        <p>✉️ hello@reallygreatsite.com</p>
        <p>🌐 www.reallygreatsite.com</p>
    </div>
   </div>
    <div class="Disclaimer-content">
        <h2>Disclaimer</h2>
        <p>This Free Five Factor Personality Assessment is designed to provide insights into your personality traits based on the Five Factor Model. The results of this assessment are intended for personal assessment and informational purposes only. They should not be interpreted as definitive or comprehensive evaluations of your personality or abilities.</p>
        <p>Please note that personality is complex and multifaceted, and this assessment reflects only certain aspects of it. Individual experiences, environmental factors, and personal contexts can significantly influence behaviour and traits. Therefore, use these insights as a general guide rather than a definitive measure of your personality.</p>
        <p>The information provided by this assessment is not intended to replace professional advice, diagnosis, or treatment from qualified mental health or career professionals. If you have any concerns about your mental health or career path, we recommend consulting with a licensed professional.</p>
        <p>By using this assessment, you acknowledge that the results are based on self-reported data and may not capture all nuances of your personality. We encourage you to use the findings as a starting point for self-reflection and growth, and to seek additional perspectives as needed.</p>
        <p>The creators and distributors of the FiveFactor Fusion Personality Assessment are not liable for any actions taken based on the results or interpretations of this assessment. Use the information provided responsibly and in conjunction with other resources such as coaching and professional guidance.</p>
    </div>
    <div class="Disclaimer-blackBar"></div>
</div>
  `;
}


module.exports = generateHTML;

function getBase64Image(filePath) {
  const image = fs.readFileSync(filePath);
  return `data:image/png;base64,${image.toString("base64")}`;
}

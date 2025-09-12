const STORAGE_KEY="portfolioData";
const yearEl=document.getElementById("year");
yearEl.textContent=new Date().getFullYear();
let portfolio=JSON.parse(localStorage.getItem(STORAGE_KEY))||{};

// Render function
function render(){
  document.querySelectorAll("[data-key]").forEach(el=>{
    const key=el.dataset.key;
    if(portfolio[key]){
      if(el.tagName==="A"){el.textContent=portfolio[key]; el.href=portfolio[key];}
      else el.textContent=portfolio[key];
    }
  });

  // Render projects as cards
  const projectsRender=document.getElementById("projectsRender");
  if(projectsRender){
    const projectsRaw=portfolio.projects||document.getElementById("projectsText").innerText;
    projectsRender.innerHTML="";
    if(projectsRaw){
      projectsRaw.split("\n").forEach(line=>{
        const [title,desc]=line.split(" - ");
        const div=document.createElement("div");
        div.className="project-card";
        div.innerHTML=`<h4>${title||""}</h4><p>${desc||""}</p>`;
        projectsRender.appendChild(div);
      });
    }
  }
}
render();

// Editor panel
const openEditor=document.getElementById("openEditor");
const editorPanel=document.getElementById("editorPanel");
const closeEditor=document.getElementById("closeEditor");

openEditor.onclick=()=>{
  inp_name.value=portfolio.name||document.getElementById("name").innerText;
  inp_email.value=portfolio.email||document.getElementById("email").innerText;
  inp_linkedin.value=portfolio.linkedin||"#";
  inp_github.value=portfolio.github||"#";
  inp_contact.value=portfolio.contact||document.getElementById("contact").innerText;
  inp_profile.value=portfolio.profileText||document.getElementById("profileText").innerText;
  inp_education.value=portfolio.education||document.getElementById("educationText").innerText;
  inp_languages.value=portfolio.languages||document.getElementById("languagesText").innerText;
  inp_interests.value=portfolio.interests||document.getElementById("interestsText").innerText;
  inp_skills.value=portfolio.skills||document.getElementById("skillsText").innerText;
  inp_projects.value=portfolio.projects||document.getElementById("projectsText").innerText;
  inp_training.value=portfolio.training||document.getElementById("trainingText").innerText;
  inp_certs.value=portfolio.certifications||document.getElementById("certText").innerText;
  inp_personal.value=portfolio.personalInterests||document.getElementById("personalText").innerText;
  editorPanel.classList.add("open");
};

closeEditor.onclick=()=>editorPanel.classList.remove("open");
cancelBtn.onclick=()=>editorPanel.classList.remove("open");

saveBtn.onclick=()=>{
  portfolio={ 
    name:inp_name.value,email:inp_email.value,linkedin:inp_linkedin.value,github:inp_github.value,
    contact:inp_contact.value,profileText:inp_profile.value,education:inp_education.value,
    languages:inp_languages.value,interests:inp_interests.value,skills:inp_skills.value,
    projects:inp_projects.value,training:inp_training.value,certifications:inp_certs.value,
    personalInterests:inp_personal.value
  };
  localStorage.setItem(STORAGE_KEY,JSON.stringify(portfolio));
  render();
  editorPanel.classList.remove("open");
};

// Reset data
document.getElementById("resetBtn").onclick=()=>{
  if(confirm("Clear all saved data?")){
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
};

// Download HTML (remove buttons before saving)
document.getElementById("downloadBtn").onclick=()=>{
  const clone=document.documentElement.cloneNode(true);
  const btns=clone.querySelector("#downloadButtons");
  if(btns) btns.remove();
  const blob=new Blob([clone.outerHTML],{type:"text/html"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="resume.html"; a.click();
};

// Download PDF (hide buttons while generating)
document.getElementById("downloadPdfBtn").onclick=()=>{
  const btns=document.getElementById("downloadButtons");
  if(btns) btns.style.display="none";
  html2pdf().from(document.body).save("resume.pdf").then(()=>{
    if(btns) btns.style.display="block";
  });
};

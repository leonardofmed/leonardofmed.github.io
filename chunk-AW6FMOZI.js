var Y=["summary","languages","education","skills","experiences","projects","certifications","awards","articles","books","talks"],q=["summary","languages","education","skills","experiences"],N=[...Y];function M(e,r){return e==="customizable"?r?.length?r:[...N]:e==="simplified"?[...q]:[...N]}function F(e){return e==="simplified"?{useSimplifiedExperienceFilter:!0,showExperienceTechnologies:!0}:{showExperienceTechnologies:!0}}function T(e,r){return r?.useSimplifiedExperienceFilter?e.filter(t=>t.includeInSimplified===!0):e}function u(e,r){return e.includes(r)}function te(e,r,t,o){let m=F(e);return{lang:r,sections:M(e,o),limits:m,siteUrl:t}}function se(e){return{person:e.person,experiences:e.experiences,skills:e.skills,education:e.education,languages:e.languages,projects:e.projects,certifications:e.certifications,awards:e.awards,articles:e.articles,books:e.books,talks:e.talks}}var b={summary:{pt:"Resumo",en:"Summary"},languages:{pt:"Idiomas",en:"Languages"},education:{pt:"Forma\xE7\xE3o",en:"Education"},skills:{pt:"Compet\xEAncias",en:"Core Skills"},experience:{pt:"Experi\xEAncia",en:"Work Experience"},projects:{pt:"Projetos",en:"Projects"},certifications:{pt:"Certifica\xE7\xF5es",en:"Certifications"},awards:{pt:"Pr\xEAmios",en:"Awards"},articles:{pt:"Artigos",en:"Articles"},books:{pt:"Livros",en:"Books"},talks:{pt:"Palestras",en:"Talks"},contact:{pt:"Contato",en:"Contact"},current:{pt:"Atual",en:"Current"},generatedBy:{pt:"Curr\xEDculo gerado pela plataforma open-source que desenvolvi",en:"Resume generated with the open-source platform I built"}},C={summary:b.summary,languages:b.languages,education:b.education,skills:b.skills,experiences:b.experience,projects:b.projects,certifications:b.certifications,awards:b.awards,articles:b.articles,books:b.books,talks:b.talks},W={en:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],pt:["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]};var D={expert:{pt:"Especialista",en:"Expert"},advanced:{pt:"Avan\xE7ado",en:"Advanced"},intermediate:{pt:"Intermedi\xE1rio",en:"Intermediate"},beginner:{pt:"B\xE1sico",en:"Beginner"}},B={native:{pt:"Nativo",en:"Native"},fluent:{pt:"Fluente",en:"Fluent"},advanced:{pt:"Avan\xE7ado",en:"Advanced"},intermediate:{pt:"Intermedi\xE1rio",en:"Intermediate"},basic:{pt:"B\xE1sico",en:"Basic"}},$={expert:0,advanced:1,intermediate:2,beginner:3};function p(e,r,t){return e[`${r}_${t}`]??""}function S(e){let r=[];for(let t of e){let o=t.company.trim().toLowerCase(),m=r.at(-1);m&&m.company.trim().toLowerCase()===o?m.roles.push(t):r.push({company:t.company,roles:[t]})}return r}function U(e){if(!e.length)return{startDate:"",endDate:null,current:!1};let r=e[0].startDate,t=e[0].endDate??null,o=!!e[0].current;for(let m of e.slice(1))if(m.startDate<r&&(r=m.startDate),m.current)o=!0,t=null;else if(!o){let s=m.endDate??m.startDate;(!t||s>t)&&(t=s)}return{startDate:r,endDate:t,current:o}}function z(e){return e==="expert"?"tier-advanced":e==="advanced"?"tier-mid":"tier-basic"}function ne(e,r){let t=r.trim().toLowerCase();return e.find(m=>m.name.trim().toLowerCase()===t)?.level??"intermediate"}function G(e,r,t){let o=e.map(s=>s.trim()).filter(Boolean);return o.length?`<div class="skills-pills">${o.map(s=>{let x=ne(r,s),i=z(x),n=D[x]?.[t]??x;return`<span class="skill-pill ${i}" title="${c(n)}">${c(s)}</span>`}).join("")}</div>`:""}function R(e){let r=[];return e.github?.trim()&&r.push({label:"GitHub",url:e.github.trim()}),e.demo?.trim()&&r.push({label:"Demo",url:e.demo.trim()}),r}function Z(e){let r=R(e);return r.length?`<p class="item__meta">${r.map(o=>`<a href="${c(o.url)}">${c(o.label)}: ${c(J(o.url))}</a>`).join(" \xB7 ")}</p>`:""}function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function v(e,r){if(!e)return"";let[t,o]=e.split("-"),m=Number(o)-1,s=W[r][m];return s?`${s} ${t}`:t}function E(e,r){let t=v(e.startDate,r),o=e.current?b.current[r].toUpperCase():v(e.endDate,r);return[t,o].filter(Boolean).join(" \u2014 ")}function O(e,r){return E(U(e),r)}function J(e){return e.replace(/^https?:\/\//i,"").replace(/^www\./i,"").replace(/\/$/,"").toUpperCase()}function K(e){let r=e.trim().split(/\s+/);return r.length===1?{first:r[0],rest:""}:{first:r[0],rest:r.slice(1).join(" ")}}function P(e,r){let t=p(e,"title",r).trim();if(t)return t;let o=p(e,"event",r).trim();return o||(e.title_pt??e.event_pt??"").trim()}function A(e,r){return r==="pt"&&e.status_pt?e.status_pt:r==="en"&&e.status_en?e.status_en:e.status==="read"?r==="pt"?"Lido":"Read":r==="pt"?"Lendo":"Reading"}function I(e){return e.split(/\n{2,}/).map(r=>r.trim()).filter(Boolean).map(r=>`<p>${c(r).replace(/\n/g,"<br>")}</p>`).join("")}function j(e){return e.split(/\n{2,}/).map(r=>r.trim()).filter(Boolean).join(`

`)}function k(e,r,t){return t.trim()?`<section class="${e==="experiences"?"experience":`section-${e}`}"><h2>${C[e][r]}</h2>${t}</section>`:""}function re(e,r){let{lang:t,sections:o,limits:m}=r,s=e.person,x=r.siteUrl??"https://leonardofmed.github.io",i=x.replace(/^https?:\/\//,""),{first:n,rest:a}=K(s.name),h=s.socialLinks.map(g=>`<div class="link">${c(J(g.url))}</div>`).join(""),y=[];if(u(o,"summary")){let g=p(s,"summary",t);g&&y.push(k("summary",t,I(g)))}if(u(o,"languages")&&e.languages.length){let l=[...e.languages].sort((d,f)=>(d.level==="native"?-1:0)-(f.level==="native"?-1:0)).map(d=>{let f=B[d.level]?.[t]??d.level,L=t==="pt"?d.name_pt:d.name_en;return`<div class="row"><span>${c(L)}</span><span class="row__meta">${c(f)}</span></div>`}).join("");y.push(k("languages",t,l))}if(u(o,"education")&&e.education.length){let g=e.education.map(l=>{let d=[l.startDate,l.endDate].filter(Boolean).join(" \u2014 "),f=p(l,"field",t);return`
        <div class="edu">
          <div class="edu__inst">${c(l.institution)}</div>
          <div class="row">
            <span class="edu__degree">${c(p(l,"degree",t)||f)}</span>
            <span class="row__meta">${c(d)}</span>
          </div>
        </div>`}).join("");y.push(k("education",t,g))}if(u(o,"skills")&&e.skills.length){let l=`<div class="skills-pills">${[...e.skills].sort((d,f)=>($[d.level]??9)-($[f.level]??9)).slice(0,m?.skillCount??e.skills.length).map(d=>{let f=z(d.level),L=D[d.level]?.[t]??d.level;return`<span class="skill-pill ${f}" title="${c(L)}">${c(d.name)}</span>`}).join("")}</div>`;y.push(k("skills",t,l))}if(u(o,"experiences")&&e.experiences.length){let g=T(e.experiences,m),d=S(g).map(f=>{let L=(w,H)=>{let V=p(w,"description",t),ee=m?.showExperienceTechnologies!==!1&&w.technologies.length?G(w.technologies,e.skills,t):"";return`
          <div class="exp${H?"":" exp--role"}">
            <div class="exp__head">
              <div>
                <div class="exp__role">${c(p(w,"role",t))}</div>
                ${H?`<div class="exp__company">${c(w.company)}</div>`:""}
              </div>
              <div class="exp__period">${c(E(w,t))}</div>
            </div>
            ${V?I(V):""}
            ${ee}
          </div>`};if(f.roles.length===1)return L(f.roles[0],!0);let X=f.roles.map(w=>L(w,!1)).join("");return`
        <div class="exp-company">
          <div class="exp-company__head">
            <div class="exp-company__name">${c(f.company)}</div>
            <div class="exp-company__period">${c(O(f.roles,t))}</div>
          </div>
          <div class="exp-company__roles">${X}</div>
        </div>`}).join("");y.push(k("experiences",t,d))}if(u(o,"projects")&&e.projects.length){let g=e.projects.map(l=>{let d=p(l,"description",t),f=l.technologies.length?G(l.technologies,e.skills,t):"",L=Z(l);return`
        <div class="exp">
          <div class="exp__role">${c(p(l,"title",t))}</div>
          ${d?I(d):""}
          ${L}
          ${f}
        </div>`}).join("");y.push(k("projects",t,g))}if(u(o,"certifications")&&e.certifications.length){let g=e.certifications.map(l=>{let d=l.date?v(l.date,t):"";return`<div class="row"><span>${c(l.name)}</span><span class="row__meta">${c(l.issuer)}${d?` \xB7 ${d}`:""}</span></div>`}).join("");y.push(k("certifications",t,g))}if(u(o,"awards")&&e.awards.length){let g=e.awards.map(l=>{let d=l.date?v(l.date,t):"",f=p(l,"description",t);return`
        <div class="exp">
          <div class="exp__role">${c(p(l,"title",t))}</div>
          <p class="item__meta">${c(l.issuer)}${d?` \xB7 ${d}`:""}</p>
          ${f?I(f):""}
        </div>`}).join("");y.push(k("awards",t,g))}if(u(o,"articles")&&e.articles.length){let g=e.articles.map(l=>{let d=l.publishedDate?v(l.publishedDate,t):"",f=p(l,"summary",t);return`
        <div class="exp">
          <div class="exp__role">${c(p(l,"title",t))}</div>
          ${d?`<p class="item__meta">${c(d)}</p>`:""}
          ${l.url?`<p class="item__meta">${c(l.url)}</p>`:""}
          ${f?I(f):""}
        </div>`}).join("");y.push(k("articles",t,g))}if(u(o,"books")&&e.books.length){let g=e.books.map(l=>`<div class="row"><span>${c(l.title)}</span><span class="row__meta">${c(l.author)} \xB7 ${c(A(l,t))}</span></div>`).join("");y.push(k("books",t,g))}if(u(o,"talks")&&e.talks.length){let g=e.talks.map(l=>{let d=l.date?v(l.date,t):"",f=p(l,"description",t);return`
        <div class="exp">
          <div class="exp__role">${c(P(l,t))}</div>
          ${d?`<p class="item__meta">${c(d)}</p>`:""}
          ${l.url?`<p class="item__meta">${c(l.url)}</p>`:""}
          ${f?I(f):""}
        </div>`}).join("");y.push(k("talks",t,g))}return`<!DOCTYPE html>
<html lang="${t}">
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>${ie}</style>
</head>
<body>
  <aside class="sidebar">
    <div class="sidebar__top">
      <h1 class="name"><span>${c(n)}</span><span>${c(a)}</span></h1>
      <div class="role-title">${c(p(s,"title",t))}</div>
      <div class="links">${h}</div>
    </div>
    <div class="contact">
      <div class="contact__title">${b.contact[t]}</div>
      <div class="contact__item">${c(s.email)}</div>
      <div class="contact__item">${c(p(s,"location",t))}</div>
    </div>
    <div class="sidebar__footer">
      <span>${b.generatedBy[t]}</span>
      <a href="${c(x)}">${c(i)}</a>
    </div>
  </aside>
  <table class="page-table">
    <thead><tr><td><div class="spacer"></div></td></tr></thead>
    <tfoot><tr><td><div class="spacer"></div></td></tr></tfoot>
    <tbody><tr><td>
  <main class="main">${y.join(`
`)}</main>
    </td></tr></tbody>
  </table>
</body>
</html>`}var ie=`
    :root {
      --navy: #1e2b50;
      --ink: #2c2c2c;
      --muted: #6a6a6a;
      --sidebar-w: 262px;
    }
    * { box-sizing: border-box; }
    @page { size: A4; margin: 0; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: 'EB Garamond', Georgia, 'Times New Roman', serif;
      color: var(--ink);
      font-size: 11.5px;
      line-height: 1.5;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      position: relative;
    }
    @media screen {
      html { background: #c8ccd4; }
      body {
        width: 210mm;
        max-width: calc(100vw - 32px);
        margin: 16px auto;
        background: #fff;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
        min-height: 297mm;
      }
    }
    .sidebar {
      position: absolute;
      top: 0; bottom: 0; left: 0;
      width: var(--sidebar-w);
      background: var(--navy);
      color: #fff;
      padding: 46px 30px 40px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    @media print {
      .sidebar { position: fixed; }
    }
    .page-table { width: 100%; border-collapse: collapse; }
    .page-table > thead .spacer { height: 42px; }
    .page-table > tfoot .spacer { height: 36px; }
    .page-table > tbody > tr > td { padding: 0; }
    .sidebar__top { flex: 1 1 auto; }
    .name {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 600;
      font-size: 30px;
      line-height: 1.12;
      letter-spacing: 0.14em;
      margin: 0;
      text-transform: uppercase;
    }
    .name span { display: block; }
    .role-title {
      margin: 26px 0 0;
      font-size: 11px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #c8d0e4;
      line-height: 1.9;
    }
    .links { margin-top: 30px; }
    .link {
      font-size: 9px;
      letter-spacing: 0.16em;
      color: #aeb8d4;
      margin: 6px 0;
      word-break: break-all;
    }
    .contact { flex: 0 0 auto; }
    .contact__title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 13px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      margin: 0 0 12px;
    }
    .contact__item {
      font-size: 9.5px;
      letter-spacing: 0.12em;
      color: #d5dbec;
      margin: 5px 0;
      word-break: break-all;
      text-transform: uppercase;
    }
    .sidebar__footer {
      flex: 0 0 auto;
      margin-top: 22px;
      padding-top: 16px;
      border-top: 0.5px solid rgba(255, 255, 255, 0.22);
      font-size: 7.5px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #9aa8c8;
      line-height: 1.65;
    }
    .sidebar__footer a {
      display: block;
      margin-top: 5px;
      color: #d5dbec;
      text-decoration: underline;
      word-break: break-all;
    }
    .main {
      margin-left: var(--sidebar-w);
      padding: 0 40px 0 34px;
    }
    h2 {
      font-family: 'Playfair Display', Georgia, serif;
      color: var(--navy);
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin: 26px 0 12px;
      break-after: avoid;
      page-break-after: avoid;
    }
    .main > section:first-child h2 { margin-top: 0; }
    p { margin: 0 0 9px; }
    .main section p { text-align: justify; }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      margin: 3px 0;
    }
    .row__meta { color: var(--muted); white-space: nowrap; letter-spacing: 0.08em; font-size: 10.5px; }
    .edu { margin-bottom: 10px; }
    .edu__inst {
      color: var(--navy);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 500;
    }
    .edu__degree { font-style: italic; }
    .skills-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 5px;
      margin-top: 2px;
    }
    .exp .skills-pills {
      margin-top: 6px;
    }
    .skill-pill {
      display: inline-block;
      padding: 2px 7px;
      border: 1px solid #9aa3b8;
      border-radius: 999px;
      font-size: 9px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      line-height: 1.35;
      white-space: nowrap;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .skill-pill.tier-basic {
      background: #fff;
      border-color: #9aa3b8;
      color: var(--ink);
    }
    .skill-pill.tier-mid {
      background: #e8ecf4;
      border-color: var(--navy);
      color: var(--ink);
    }
    .skill-pill.tier-advanced {
      background: #e8ecf4;
      border: 1.5px solid #c9a227;
      color: var(--ink);
    }
    .exp { margin-bottom: 16px; page-break-inside: avoid; }
    .exp--role { margin-bottom: 12px; }
    .exp-company {
      margin-bottom: 18px;
      page-break-inside: avoid;
    }
    .exp-company__head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 16px;
      margin-bottom: 8px;
    }
    .exp-company__name {
      color: var(--navy);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 600;
    }
    .exp-company__period {
      color: var(--muted);
      white-space: nowrap;
      letter-spacing: 0.1em;
      font-size: 9.5px;
      text-transform: uppercase;
    }
    .exp-company__roles {
      position: relative;
      margin-left: 8px;
      padding-left: 14px;
      border-left: 1.5px solid #c5cad6;
    }
    .exp-company__roles .exp--role {
      position: relative;
    }
    .exp-company__roles .exp--role::before {
      content: '';
      position: absolute;
      left: -18.5px;
      top: 5px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--navy);
      border: 1.5px solid #fff;
      box-shadow: 0 0 0 1px var(--navy);
    }
    .exp-company__roles .exp--role:last-child {
      margin-bottom: 0;
    }
    .exp__head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 16px;
      margin-bottom: 4px;
    }
    .exp__role {
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 600;
      font-size: 12px;
      color: var(--ink);
    }
    .exp__company {
      color: var(--navy);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 10px;
    }
    .exp__period { color: var(--muted); white-space: nowrap; letter-spacing: 0.1em; font-size: 9.5px; text-transform: uppercase; }
    .item__meta { color: var(--muted); font-size: 10px; font-style: italic; }
    .item__meta a {
      color: var(--navy);
      text-decoration: underline;
      font-style: normal;
      word-break: break-all;
    }
    section { page-break-inside: avoid; }
    section.experience, section.section-projects { page-break-inside: auto; }
`;function _(e,r){return`## ${C[e][r]}`}function oe(e,r){let{lang:t,sections:o,limits:m}=r,s=[],x=e.person;s.push(`# ${x.name}`),s.push(`**${p(x,"title",t)}**`),s.push(x.email),(x.location_pt||x.location_en)&&s.push(p(x,"location",t));for(let i of x.socialLinks)s.push(`[${i.platform}](${i.url})`);if(s.push(""),u(o,"summary")){let i=p(x,"summary",t);i&&(s.push(_("summary",t)),s.push(j(i)),s.push(""))}if(u(o,"languages")&&e.languages.length){s.push(_("languages",t));for(let i of e.languages){let n=t==="pt"?i.name_pt:i.name_en,a=B[i.level]?.[t]??i.level;s.push(`- **${n}** \u2014 ${a}`)}s.push("")}if(u(o,"education")&&e.education.length){s.push(_("education",t));for(let i of e.education){let n=[i.startDate,i.endDate].filter(Boolean).join(" \u2014 ");s.push(`### ${i.institution}`),s.push(`*${p(i,"degree",t)||p(i,"field",t)}*${n?` \xB7 ${n}`:""}`)}s.push("")}if(u(o,"skills")&&e.skills.length){s.push(_("skills",t));let i=[...e.skills].sort((n,a)=>($[n.level]??9)-($[a.level]??9)).slice(0,m?.skillCount??e.skills.length);for(let n of i){let a=D[n.level]?.[t]??n.level;s.push(`- **${n.name}** (${a})`)}s.push("")}if(u(o,"experiences")&&e.experiences.length){s.push(_("experiences",t));let i=T(e.experiences,m);for(let n of S(i)){if(n.roles.length>1){s.push(`### ${n.company}`),s.push(`*${O(n.roles,t)}*`),s.push("");for(let y of n.roles){s.push(`#### ${p(y,"role",t)}`),s.push(`*${E(y,t)}*`);let g=p(y,"description",t);g&&s.push(j(g)),m?.showExperienceTechnologies!==!1&&y.technologies.length&&s.push(`*${y.technologies.join(" \xB7 ")}*`),s.push("")}continue}let a=n.roles[0];s.push(`### ${p(a,"role",t)} \u2014 ${a.company}`),s.push(`*${E(a,t)}*`);let h=p(a,"description",t);h&&s.push(j(h)),m?.showExperienceTechnologies!==!1&&a.technologies.length&&s.push(`*${a.technologies.join(" \xB7 ")}*`),s.push("")}}if(u(o,"projects")&&e.projects.length){s.push(_("projects",t));for(let i of e.projects){s.push(`### ${p(i,"title",t)}`);let n=p(i,"description",t);n&&s.push(j(n));let a=R(i);a.length&&s.push(a.map(h=>`[${h.label}](${h.url})`).join(" \xB7 ")),i.technologies.length&&s.push(`*${i.technologies.join(" \xB7 ")}*`),s.push("")}}if(u(o,"certifications")&&e.certifications.length){s.push(_("certifications",t));for(let i of e.certifications){let n=i.date?` \xB7 ${v(i.date,t)}`:"";s.push(`- **${i.name}** \u2014 ${i.issuer}${n}`)}s.push("")}if(u(o,"awards")&&e.awards.length){s.push(_("awards",t));for(let i of e.awards){let n=i.date?` \xB7 ${v(i.date,t)}`:"";s.push(`### ${p(i,"title",t)}`),s.push(`*${i.issuer}${n}*`);let a=p(i,"description",t);a&&s.push(j(a)),s.push("")}}if(u(o,"articles")&&e.articles.length){s.push(_("articles",t));for(let i of e.articles){let n=i.publishedDate?` \xB7 ${v(i.publishedDate,t)}`:"";s.push(`### ${p(i,"title",t)}${n}`),i.url&&s.push(`[${i.url}](${i.url})`);let a=p(i,"summary",t);a&&s.push(j(a)),s.push("")}}if(u(o,"books")&&e.books.length){s.push(_("books",t));for(let i of e.books)s.push(`- **${i.title}** \u2014 ${i.author} (${A(i,t)})`);s.push("")}if(u(o,"talks")&&e.talks.length){s.push(_("talks",t));for(let i of e.talks){let n=i.date?` \xB7 ${v(i.date,t)}`:"";s.push(`### ${P(i,t)}${n}`),i.url&&s.push(`[${i.url}](${i.url})`);let a=p(i,"description",t);a&&s.push(j(a)),s.push("")}}return s.join(`
`).trim()+`
`}function ae(e,r){let{lang:t,sections:o,limits:m}=r,s=[],x=e.person;s.push({type:"heading1",text:x.name}),s.push({type:"paragraph",text:p(x,"title",t)}),s.push({type:"paragraph",text:x.email}),(x.location_pt||x.location_en)&&s.push({type:"paragraph",text:p(x,"location",t)}),s.push({type:"blank",text:""});let i=n=>{s.push({type:"heading2",text:C[n][t]})};if(u(o,"summary")){let n=p(x,"summary",t);n&&(i("summary"),s.push({type:"paragraph",text:n}),s.push({type:"blank",text:""}))}if(u(o,"languages")&&e.languages.length){i("languages");for(let n of e.languages){let a=t==="pt"?n.name_pt:n.name_en,h=B[n.level]?.[t]??n.level;s.push({type:"paragraph",text:`${a} \u2014 ${h}`})}s.push({type:"blank",text:""})}if(u(o,"education")&&e.education.length){i("education");for(let n of e.education){let a=[n.startDate,n.endDate].filter(Boolean).join(" \u2014 ");s.push({type:"paragraph",text:`${p(n,"degree",t)||p(n,"field",t)} \u2014 ${n.institution}${a?` (${a})`:""}`})}s.push({type:"blank",text:""})}if(u(o,"skills")&&e.skills.length){i("skills");let n=[...e.skills].sort((a,h)=>($[a.level]??9)-($[h.level]??9)).slice(0,m?.skillCount??e.skills.length);s.push({type:"paragraph",text:n.map(a=>`${a.name} (${D[a.level]?.[t]??a.level})`).join(" \xB7 ")}),s.push({type:"blank",text:""})}if(u(o,"experiences")&&e.experiences.length){i("experiences");let n=T(e.experiences,m);for(let a of S(n)){if(a.roles.length>1){s.push({type:"paragraph",text:a.company}),s.push({type:"paragraph",text:O(a.roles,t)});for(let g of a.roles){s.push({type:"paragraph",text:p(g,"role",t)}),s.push({type:"paragraph",text:E(g,t)});let l=p(g,"description",t);l&&s.push({type:"paragraph",text:l}),m?.showExperienceTechnologies!==!1&&g.technologies.length&&s.push({type:"paragraph",text:g.technologies.join(" \xB7 ")})}s.push({type:"blank",text:""});continue}let h=a.roles[0];s.push({type:"paragraph",text:`${p(h,"role",t)} \u2014 ${h.company}`}),s.push({type:"paragraph",text:E(h,t)});let y=p(h,"description",t);y&&s.push({type:"paragraph",text:y}),m?.showExperienceTechnologies!==!1&&h.technologies.length&&s.push({type:"paragraph",text:h.technologies.join(" \xB7 ")}),s.push({type:"blank",text:""})}}if(u(o,"projects")&&e.projects.length){i("projects");for(let n of e.projects){s.push({type:"paragraph",text:p(n,"title",t)});let a=p(n,"description",t);a&&s.push({type:"paragraph",text:a});for(let h of R(n))s.push({type:"paragraph",text:`${h.label}: ${h.url}`});s.push({type:"blank",text:""})}}if(u(o,"certifications")&&e.certifications.length){i("certifications");for(let n of e.certifications){let a=n.date?` \xB7 ${v(n.date,t)}`:"";s.push({type:"paragraph",text:`${n.name} \u2014 ${n.issuer}${a}`})}s.push({type:"blank",text:""})}if(u(o,"awards")&&e.awards.length){i("awards");for(let n of e.awards){let a=n.date?` \xB7 ${v(n.date,t)}`:"";s.push({type:"paragraph",text:`${p(n,"title",t)} \u2014 ${n.issuer}${a}`});let h=p(n,"description",t);h&&s.push({type:"paragraph",text:h})}s.push({type:"blank",text:""})}if(u(o,"articles")&&e.articles.length){i("articles");for(let n of e.articles){s.push({type:"paragraph",text:p(n,"title",t)}),n.url&&s.push({type:"paragraph",text:n.url});let a=p(n,"summary",t);a&&s.push({type:"paragraph",text:a}),s.push({type:"blank",text:""})}}if(u(o,"books")&&e.books.length){i("books");for(let n of e.books)s.push({type:"paragraph",text:`${n.title} \u2014 ${n.author} (${A(n,t)})`});s.push({type:"blank",text:""})}if(u(o,"talks")&&e.talks.length){i("talks");for(let n of e.talks){s.push({type:"paragraph",text:P(n,t)}),n.url&&s.push({type:"paragraph",text:n.url});let a=p(n,"description",t);a&&s.push({type:"paragraph",text:a}),s.push({type:"blank",text:""})}}return s}function Q(e){let{person:r,experiences:t,skills:o,education:m,languages:s,projects:x,certifications:i}=e;return{$schema:"https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",basics:{name:r.name,email:r.email,label:r.title_en,summary:r.summary_en,profiles:r.socialLinks.map(n=>({network:n.platform,url:n.url}))},work:t.map(n=>({name:n.company,position:n.role_en,startDate:n.startDate,endDate:n.endDate??void 0,summary:n.description_en,highlights:n.achievements_en??[]})),education:m.map(n=>({institution:n.institution,area:n.field_en,studyType:n.degree_en,startDate:n.startDate,endDate:n.endDate})),skills:o.map(n=>({name:n.name,level:n.level})),languages:s.map(n=>({language:n.name_en,fluency:n.level})),projects:x.map(n=>({name:n.title_en,description:n.description_en,keywords:n.technologies,url:n.demo??n.github??void 0})),certificates:i.map(n=>({name:n.name,issuer:n.issuer,date:n.date}))}}function pe(e){return JSON.stringify(Q(e),null,2)}function le(e){let r='<script>(function(){function p(){window.focus();window.print();}if(document.fonts&&document.fonts.ready){document.fonts.ready.then(p);}else{window.addEventListener("load",p,{once:true});}})();<\/script>';return e.includes("</body>")?e.replace("</body>",`${r}</body>`):e+r}export{Y as a,te as b,se as c,S as d,U as e,re as f,oe as g,ae as h,pe as i,le as j};

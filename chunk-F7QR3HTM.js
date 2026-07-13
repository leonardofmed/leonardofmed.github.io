var b={summary:{pt:"Resumo",en:"Summary"},languages:{pt:"Idiomas",en:"Languages"},education:{pt:"Forma\xE7\xE3o",en:"Education"},skills:{pt:"Compet\xEAncias",en:"Core Skills"},experience:{pt:"Experi\xEAncia",en:"Work Experience"},projects:{pt:"Projetos",en:"Projects"},certifications:{pt:"Certifica\xE7\xF5es",en:"Certifications"},awards:{pt:"Pr\xEAmios",en:"Awards"},articles:{pt:"Artigos",en:"Articles"},books:{pt:"Livros",en:"Books"},talks:{pt:"Palestras",en:"Talks"},contact:{pt:"Contato",en:"Contact"},current:{pt:"Atual",en:"Current"},generatedBy:{pt:"Curr\xEDculo gerado pela plataforma open-source que desenvolvi",en:"Resume generated with the open-source platform I built"}},L={summary:b.summary,languages:b.languages,education:b.education,skills:b.skills,experiences:b.experience,projects:b.projects,certifications:b.certifications,awards:b.awards,articles:b.articles,books:b.books,talks:b.talks},re={en:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],pt:["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]};var D={expert:{pt:"Especialista",en:"Expert"},advanced:{pt:"Avan\xE7ado",en:"Advanced"},intermediate:{pt:"Intermedi\xE1rio",en:"Intermediate"},beginner:{pt:"B\xE1sico",en:"Beginner"}},R={native:{pt:"Nativo",en:"Native"},fluent:{pt:"Fluente",en:"Fluent"},advanced:{pt:"Avan\xE7ado",en:"Advanced"},intermediate:{pt:"Intermedi\xE1rio",en:"Intermediate"},basic:{pt:"B\xE1sico",en:"Basic"}},C={expert:0,advanced:1,intermediate:2,beginner:3},oe=["cloud","data","backend","frontend","mobile","database","devops","other"],j={cloud:{pt:"Cloud",en:"Cloud"},data:{pt:"Dados",en:"Data"},backend:{pt:"Backend",en:"Backend"},frontend:{pt:"Frontend",en:"Frontend"},mobile:{pt:"Mobile",en:"Mobile"},database:{pt:"Banco de dados",en:"Database"},devops:{pt:"DevOps",en:"DevOps"},other:{pt:"Outros",en:"Other"}};var ne=["summary","languages","education","skills","experiences","projects","certifications","awards","articles","books","talks"],ie=["summary","languages","education","skills","experiences"],J=ne.filter(e=>e!=="books");function Y(e,o){return e==="customizable"?o?.length?o:[...J]:e==="simplified"?[...ie]:[...J]}function V(e){return e==="simplified"?{useSimplifiedExperienceFilter:!0,useSimplifiedSkillFilter:!0,showExperienceTechnologies:!0}:{showExperienceTechnologies:!0}}function B(e,o){return o?.useSimplifiedExperienceFilter?e.filter(t=>t.includeInSimplified===!0):e}function I(e,o){let t=o?.useSimplifiedSkillFilter?e.filter(i=>i.includeInSimplified===!0):[...e];return t=[...t].sort((i,l)=>(C[i.level]??9)-(C[l.level]??9)),o?.skillCount!=null&&(t=t.slice(0,o.skillCount)),t}function T(e){let o=new Map;for(let l of e){let s=l.category?.trim()||"other",m=o.get(s);m?m.push(l):o.set(s,[l])}let t=[];for(let l of oe){let s=o.get(l);s?.length&&(t.push({category:l,skills:[...s].sort((m,n)=>(C[m.level]??9)-(C[n.level]??9))}),o.delete(l))}let i=[...o.keys()].sort();for(let l of i){let s=o.get(l);t.push({category:l,skills:[...s].sort((m,n)=>(C[m.level]??9)-(C[n.level]??9))})}return t}function d(e,o){return e.includes(o)}function xe(e,o,t,i){let l=V(e);return{lang:o,sections:Y(e,i),limits:l,siteUrl:t}}function he(e){return{person:e.person,experiences:e.experiences,skills:e.skills,education:e.education,languages:e.languages,projects:e.projects,certifications:e.certifications,awards:e.awards,articles:e.articles,books:e.books,talks:e.talks}}function p(e,o,t){return e[`${o}_${t}`]??""}function O(e){let o=[];for(let t of e){let i=t.company.trim().toLowerCase(),l=o.at(-1);l&&l.company.trim().toLowerCase()===i?l.roles.push(t):o.push({company:t.company,roles:[t]})}return o}function K(e){if(!e.length)return{startDate:"",endDate:null,current:!1};let o=e[0].startDate,t=e[0].endDate??null,i=!!e[0].current;for(let l of e.slice(1))if(l.startDate<o&&(o=l.startDate),l.current)i=!0,t=null;else if(!i){let s=l.endDate??l.startDate;(!t||s>t)&&(t=s)}return{startDate:o,endDate:t,current:i}}function q(e){return e==="expert"?"tier-advanced":e==="advanced"?"tier-mid":"tier-basic"}function ye(e,o){let t=o.trim().toLowerCase();return e.find(l=>l.name.trim().toLowerCase()===t)?.level??"intermediate"}function W(e,o,t){let i=e.map(s=>s.trim()).filter(Boolean);return i.length?`<div class="skills-pills">${i.map(s=>{let m=ye(o,s),n=q(m),r=D[m]?.[t]??m;return`<span class="skill-pill ${n}" title="${u(r)}">${u(s)}</span>`}).join("")}</div>`:""}function z(e){let o=[];return e.github?.trim()&&o.push({label:"GitHub",url:e.github.trim()}),e.demo?.trim()&&o.push({label:"Demo",url:e.demo.trim()}),o}function pe(e){let o=z(e);return o.length?`<p class="item__meta">${o.map(i=>`<a href="${u(i.url)}">${u(i.label)}: ${u(Z(i.url))}</a>`).join(" \xB7 ")}</p>`:""}function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function k(e,o){if(!e)return"";let[t,i]=e.split("-"),l=Number(i)-1,s=re[o][l];return s?`${s} ${t}`:t}function E(e,o){let t=k(e.startDate,o),i=e.current?b.current[o].toUpperCase():k(e.endDate,o);return[t,i].filter(Boolean).join(" \u2014 ")}function F(e,o){return E(K(e),o)}function Z(e){return e.replace(/^https?:\/\//i,"").replace(/^www\./i,"").replace(/\/$/,"").toUpperCase()}function le(e){let o=e.trim().split(/\s+/);return o.length===1?{first:o[0],rest:""}:{first:o[0],rest:o.slice(1).join(" ")}}function P(e,o){let t=p(e,"title",o).trim();if(t)return t;let i=p(e,"event",o).trim();return i||(e.title_pt??e.event_pt??"").trim()}function M(e,o){return o==="pt"&&e.status_pt?e.status_pt:o==="en"&&e.status_en?e.status_en:e.status==="read"?o==="pt"?"Lido":"Read":o==="pt"?"Lendo":"Reading"}function N(e){return e.split(/\n{2,}/).map(o=>o.trim()).filter(Boolean).map(o=>`<p>${u(o).replace(/\n/g,"<br>")}</p>`).join("")}function G(e){return e.split(/\n{2,}/).map(o=>o.trim()).filter(Boolean).join(`

`)}var ae=/^[-•*]\s+/;function H(e){if(!e?.trim())return[];let o=e.replace(/\r\n/g,`
`).split(`
`),t=[],i=[],l=[],s=()=>{let n=i.join(`
`).trim();n&&t.push({type:"paragraph",text:n}),i=[]},m=()=>{l.length&&t.push({type:"bullets",items:l}),l=[]};for(let n of o){let r=n.trim();if(!r){s(),m();continue}ae.test(r)?(s(),l.push(r.replace(ae,""))):(m(),i.push(r))}return s(),m(),t}function ce(e){return H(e).map(o=>o.type==="bullets"?`<ul class="desc-list">${o.items.map(i=>`<li>${u(i)}</li>`).join("")}</ul>`:`<p>${u(o.text).replace(/\n/g,"<br>")}</p>`).join("")}function Q(e){return H(e).map(o=>o.type==="bullets"?o.items.map(t=>`- ${t}`).join(`
`):o.text).join(`

`)}function _(e,o,t){return t.trim()?`<section class="${e==="experiences"?"experience":`section-${e}`}"><h2>${L[e][o]}</h2>${t}</section>`:""}function ke(e,o){let{lang:t,sections:i,limits:l}=o,s=e.person,m=o.siteUrl??"https://leonardofmed.github.io",n=m.replace(/^https?:\/\//,""),{first:r,rest:a}=le(s.name),g=s.socialLinks.map(f=>`<div class="link">${u(Z(f.url))}</div>`).join(""),x=[];if(d(i,"summary")){let f=p(s,"summary",t);f&&x.push(_("summary",t,N(f)))}if(d(i,"languages")&&e.languages.length){let c=[...e.languages].sort((h,y)=>(h.level==="native"?-1:0)-(y.level==="native"?-1:0)).map(h=>{let y=R[h.level]?.[t]??h.level,S=t==="pt"?h.name_pt:h.name_en;return`<div class="row"><span>${u(S)}</span><span class="row__meta">${u(y)}</span></div>`}).join("");x.push(_("languages",t,c))}if(d(i,"education")&&e.education.length){let f=e.education.map(c=>{let h=[c.startDate,c.endDate].filter(Boolean).join(" \u2014 "),y=p(c,"field",t);return`
        <div class="edu">
          <div class="edu__inst">${u(c.institution)}</div>
          <div class="row">
            <span class="edu__degree">${u(p(c,"degree",t)||y)}</span>
            <span class="row__meta">${u(h)}</span>
          </div>
        </div>`}).join("");x.push(_("education",t,f))}if(d(i,"skills")&&e.skills.length){let f=I(e.skills,l),h=T(f).map(y=>{let S=j[y.category]?.[t]??y.category,X=y.skills.map(A=>{let w=q(A.level),U=D[A.level]?.[t]??A.level;return`<span class="skill-pill ${w}" title="${u(U)}">${u(A.name)}</span>`}).join("");return`<div class="skills-group"><div class="skills-group__label">${u(S)}</div><div class="skills-pills">${X}</div></div>`}).join("");h&&x.push(_("skills",t,h))}if(d(i,"experiences")&&e.experiences.length){let f=B(e.experiences,l),h=O(f).map(w=>{let U=($,te)=>{let se=p($,"description",t),fe=l?.showExperienceTechnologies!==!1&&$.technologies.length?W($.technologies,e.skills,t):"";return`
          <div class="exp${te?"":" exp--role"}">
            <div class="exp__head">
              <div>
                <div class="exp__role">${u(p($,"role",t))}</div>
                ${te?`<div class="exp__company">${u($.company)}</div>`:""}
              </div>
              <div class="exp__period">${u(E($,t))}</div>
            </div>
            ${se?ce(se):""}
            ${fe}
          </div>`};if(w.roles.length===1)return U(w.roles[0],!0);let[de,...ge]=w.roles,ee=ge.map($=>U($,!1)).join("");return`
        <div class="exp-company">
          <div class="exp-company__anchor">
            <div class="exp-company__head">
              <div class="exp-company__name">${u(w.company)}</div>
              <div class="exp-company__tenure">${u(F(w.roles,t))}</div>
            </div>
            <div class="exp-company__roles">
              ${U(de,!1)}
            </div>
          </div>
          ${ee?`<div class="exp-company__roles exp-company__roles--more">${ee}</div>`:""}
        </div>`}),[y,...S]=h,A=`
      <div class="section-lead">
        <h2>${L.experiences[t]}</h2>
        ${y??""}
      </div>
      ${S.join("")}`;x.push(`<section class="experience">${A}</section>`)}if(d(i,"projects")&&e.projects.length){let f=e.projects.map(c=>{let h=p(c,"description",t),y=c.technologies.length?W(c.technologies,e.skills,t):"",S=pe(c);return`
        <div class="exp">
          <div class="exp__role">${u(p(c,"title",t))}</div>
          ${h?N(h):""}
          ${S}
          ${y}
        </div>`}).join("");x.push(_("projects",t,f))}if(d(i,"certifications")&&e.certifications.length){let f=e.certifications.map(c=>{let h=c.date?k(c.date,t):"";return`<div class="row"><span>${u(c.name)}</span><span class="row__meta">${u(c.issuer)}${h?` \xB7 ${h}`:""}</span></div>`}).join("");x.push(_("certifications",t,f))}if(d(i,"awards")&&e.awards.length){let f=e.awards.map(c=>{let h=c.date?k(c.date,t):"",y=p(c,"description",t);return`
        <div class="exp">
          <div class="exp__role">${u(p(c,"title",t))}</div>
          <p class="item__meta">${u(c.issuer)}${h?` \xB7 ${h}`:""}</p>
          ${y?N(y):""}
        </div>`}).join("");x.push(_("awards",t,f))}if(d(i,"articles")&&e.articles.length){let f=e.articles.map(c=>{let h=c.publishedDate?k(c.publishedDate,t):"",y=p(c,"summary",t);return`
        <div class="exp">
          <div class="exp__role">${u(p(c,"title",t))}</div>
          ${h?`<p class="item__meta">${u(h)}</p>`:""}
          ${c.url?`<p class="item__meta">${u(c.url)}</p>`:""}
          ${y?N(y):""}
        </div>`}).join("");x.push(_("articles",t,f))}if(d(i,"books")&&e.books.length){let f=e.books.map(c=>`<div class="row"><span>${u(c.title)}</span><span class="row__meta">${u(c.author)} \xB7 ${u(M(c,t))}</span></div>`).join("");x.push(_("books",t,f))}if(d(i,"talks")&&e.talks.length){let f=e.talks.map(c=>{let h=c.date?k(c.date,t):"",y=p(c,"description",t);return`
        <div class="exp">
          <div class="exp__role">${u(P(c,t))}</div>
          ${h?`<p class="item__meta">${u(h)}</p>`:""}
          ${c.url?`<p class="item__meta">${u(c.url)}</p>`:""}
          ${y?N(y):""}
        </div>`}).join("");x.push(_("talks",t,f))}return`<!DOCTYPE html>
<html lang="${t}">
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>${be}</style>
</head>
<body>
  <aside class="sidebar">
    <div class="sidebar__top">
      <h1 class="name"><span>${u(r)}</span><span>${u(a)}</span></h1>
      <div class="role-title">${u(p(s,"title",t))}</div>
      <div class="links">${g}</div>
    </div>
    <div class="contact">
      <div class="contact__title">${b.contact[t]}</div>
      <div class="contact__item">${u(s.email)}</div>
      <div class="contact__item">${u(p(s,"location",t))}</div>
    </div>
    <div class="sidebar__footer">
      <span>${b.generatedBy[t]}</span>
      <a href="${u(m)}">${u(n)}</a>
    </div>
  </aside>
  <table class="page-table">
    <thead><tr><td><div class="spacer"></div></td></tr></thead>
    <tfoot><tr><td><div class="spacer"></div></td></tr></tfoot>
    <tbody><tr><td>
  <main class="main">${x.join(`
`)}</main>
    </td></tr></tbody>
  </table>
</body>
</html>`}var be=`
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
      break-after: avoid-page;
      page-break-after: avoid;
    }
    /* Keep section titles with the first block so they are not left alone on a page. */
    h2 + * {
      break-before: avoid-page;
      page-break-before: avoid;
    }
    /* Experience: title + first company/role travel together across page breaks. */
    .section-lead {
      break-inside: avoid-page;
      page-break-inside: avoid;
    }
    .section-lead > h2 {
      margin-top: 26px;
    }
    .main > section.experience:first-child .section-lead > h2,
    .main > section:first-child h2 {
      margin-top: 0;
    }
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
    .skills-group {
      margin-bottom: 8px;
    }
    .skills-group:last-child {
      margin-bottom: 0;
    }
    .skills-group__label {
      color: var(--navy);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 600;
      margin-bottom: 4px;
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
    .exp {
      margin-bottom: 16px;
      break-inside: avoid-page;
      page-break-inside: avoid;
    }
    .exp .desc-list {
      margin: 4px 0 0;
      padding-left: 1.15em;
    }
    .exp .desc-list li {
      margin: 0 0 3px;
    }
    .exp--role { margin-bottom: 14px; }
    /* Multi-role company: keep name+tenure with the first role; later roles may continue. */
    .exp-company {
      margin-bottom: 18px;
      break-inside: auto;
      page-break-inside: auto;
    }
    .exp-company__anchor {
      break-inside: avoid-page;
      page-break-inside: avoid;
      break-after: avoid-page;
      page-break-after: avoid;
    }
    .exp-company__head {
      display: block;
      margin-bottom: 10px;
    }
    .exp-company__name {
      color: var(--navy);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 600;
    }
    /* Tenure under the company name (left) so it does not stack with role dates on the right. */
    .exp-company__tenure {
      margin-top: 2px;
      color: var(--muted);
      letter-spacing: 0.08em;
      font-size: 9.5px;
      text-transform: uppercase;
    }
    .exp-company__roles {
      position: relative;
      margin-left: 8px;
      padding-left: 14px;
      border-left: 1.5px solid #c5cad6;
    }
    .exp-company__roles--more {
      margin-top: 0;
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
    .exp-company__anchor .exp--role {
      margin-bottom: 14px;
    }
    .exp-company__roles--more .exp--role:last-child {
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
`;function v(e,o){return`## ${L[e][o]}`}function ve(e,o){let{lang:t,sections:i,limits:l}=o,s=[],m=e.person;s.push(`# ${m.name}`),s.push(`**${p(m,"title",t)}**`),s.push(m.email),(m.location_pt||m.location_en)&&s.push(p(m,"location",t));for(let n of m.socialLinks)s.push(`[${n.platform}](${n.url})`);if(s.push(""),d(i,"summary")){let n=p(m,"summary",t);n&&(s.push(v("summary",t)),s.push(G(n)),s.push(""))}if(d(i,"languages")&&e.languages.length){s.push(v("languages",t));for(let n of e.languages){let r=t==="pt"?n.name_pt:n.name_en,a=R[n.level]?.[t]??n.level;s.push(`- **${r}** \u2014 ${a}`)}s.push("")}if(d(i,"education")&&e.education.length){s.push(v("education",t));for(let n of e.education){let r=[n.startDate,n.endDate].filter(Boolean).join(" \u2014 ");s.push(`### ${n.institution}`),s.push(`*${p(n,"degree",t)||p(n,"field",t)}*${r?` \xB7 ${r}`:""}`)}s.push("")}if(d(i,"skills")&&e.skills.length){s.push(v("skills",t));let n=I(e.skills,l);for(let r of T(n)){let a=j[r.category]?.[t]??r.category;s.push(`### ${a}`);for(let g of r.skills){let x=D[g.level]?.[t]??g.level;s.push(`- **${g.name}** (${x})`)}s.push("")}}if(d(i,"experiences")&&e.experiences.length){s.push(v("experiences",t));let n=B(e.experiences,l);for(let r of O(n)){if(r.roles.length>1){s.push(`### ${r.company}`),s.push(`*${F(r.roles,t)}*`),s.push("");for(let x of r.roles){s.push(`#### ${p(x,"role",t)}`),s.push(`*${E(x,t)}*`);let f=p(x,"description",t);f&&s.push(Q(f)),l?.showExperienceTechnologies!==!1&&x.technologies.length&&s.push(`*${x.technologies.join(" \xB7 ")}*`),s.push("")}continue}let a=r.roles[0];s.push(`### ${p(a,"role",t)} \u2014 ${a.company}`),s.push(`*${E(a,t)}*`);let g=p(a,"description",t);g&&s.push(Q(g)),l?.showExperienceTechnologies!==!1&&a.technologies.length&&s.push(`*${a.technologies.join(" \xB7 ")}*`),s.push("")}}if(d(i,"projects")&&e.projects.length){s.push(v("projects",t));for(let n of e.projects){s.push(`### ${p(n,"title",t)}`);let r=p(n,"description",t);r&&s.push(G(r));let a=z(n);a.length&&s.push(a.map(g=>`[${g.label}](${g.url})`).join(" \xB7 ")),n.technologies.length&&s.push(`*${n.technologies.join(" \xB7 ")}*`),s.push("")}}if(d(i,"certifications")&&e.certifications.length){s.push(v("certifications",t));for(let n of e.certifications){let r=n.date?` \xB7 ${k(n.date,t)}`:"";s.push(`- **${n.name}** \u2014 ${n.issuer}${r}`)}s.push("")}if(d(i,"awards")&&e.awards.length){s.push(v("awards",t));for(let n of e.awards){let r=n.date?` \xB7 ${k(n.date,t)}`:"";s.push(`### ${p(n,"title",t)}`),s.push(`*${n.issuer}${r}*`);let a=p(n,"description",t);a&&s.push(G(a)),s.push("")}}if(d(i,"articles")&&e.articles.length){s.push(v("articles",t));for(let n of e.articles){let r=n.publishedDate?` \xB7 ${k(n.publishedDate,t)}`:"";s.push(`### ${p(n,"title",t)}${r}`),n.url&&s.push(`[${n.url}](${n.url})`);let a=p(n,"summary",t);a&&s.push(G(a)),s.push("")}}if(d(i,"books")&&e.books.length){s.push(v("books",t));for(let n of e.books)s.push(`- **${n.title}** \u2014 ${n.author} (${M(n,t)})`);s.push("")}if(d(i,"talks")&&e.talks.length){s.push(v("talks",t));for(let n of e.talks){let r=n.date?` \xB7 ${k(n.date,t)}`:"";s.push(`### ${P(n,t)}${r}`),n.url&&s.push(`[${n.url}](${n.url})`);let a=p(n,"description",t);a&&s.push(G(a)),s.push("")}}return s.join(`
`).trim()+`
`}function ue(e,o){for(let t of H(o))if(t.type==="bullets")for(let i of t.items)e.push({type:"bullet",text:i});else e.push({type:"paragraph",text:t.text})}function _e(e,o){let{lang:t,sections:i,limits:l}=o,s=[],m=e.person;s.push({type:"heading1",text:m.name}),s.push({type:"paragraph",text:p(m,"title",t)}),s.push({type:"paragraph",text:m.email}),(m.location_pt||m.location_en)&&s.push({type:"paragraph",text:p(m,"location",t)});for(let r of m.socialLinks)s.push({type:"paragraph",text:`${r.platform}: ${r.url}`});s.push({type:"blank",text:""});let n=r=>{s.push({type:"heading2",text:L[r][t]})};if(d(i,"summary")){let r=p(m,"summary",t);if(r){n("summary");for(let a of r.split(/\n{2,}/).map(g=>g.trim()).filter(Boolean))s.push({type:"paragraph",text:a.replace(/\n/g," ")});s.push({type:"blank",text:""})}}if(d(i,"languages")&&e.languages.length){n("languages");let r=[...e.languages].sort((a,g)=>(a.level==="native"?-1:0)-(g.level==="native"?-1:0));for(let a of r){let g=t==="pt"?a.name_pt:a.name_en,x=R[a.level]?.[t]??a.level;s.push({type:"paragraph",text:`${g} \u2014 ${x}`})}s.push({type:"blank",text:""})}if(d(i,"education")&&e.education.length){n("education");for(let r of e.education){let a=[r.startDate,r.endDate].filter(Boolean).join(" \u2014 ");s.push({type:"paragraph",text:`${p(r,"degree",t)||p(r,"field",t)} \u2014 ${r.institution}${a?` (${a})`:""}`})}s.push({type:"blank",text:""})}if(d(i,"skills")&&e.skills.length){n("skills");let r=I(e.skills,l);for(let a of T(r)){let g=j[a.category]?.[t]??a.category;s.push({type:"paragraph",text:g}),s.push({type:"paragraph",text:a.skills.map(x=>`${x.name} (${D[x.level]?.[t]??x.level})`).join(" \xB7 ")})}s.push({type:"blank",text:""})}if(d(i,"experiences")&&e.experiences.length){n("experiences");let r=B(e.experiences,l);for(let a of O(r)){if(a.roles.length>1){s.push({type:"paragraph",text:a.company}),s.push({type:"paragraph",text:F(a.roles,t)});for(let f of a.roles){s.push({type:"paragraph",text:p(f,"role",t)}),s.push({type:"paragraph",text:E(f,t)});let c=p(f,"description",t);c&&ue(s,c),l?.showExperienceTechnologies!==!1&&f.technologies.length&&s.push({type:"paragraph",text:f.technologies.join(" \xB7 ")})}s.push({type:"blank",text:""});continue}let g=a.roles[0];s.push({type:"paragraph",text:`${p(g,"role",t)} \u2014 ${g.company}`}),s.push({type:"paragraph",text:E(g,t)});let x=p(g,"description",t);x&&ue(s,x),l?.showExperienceTechnologies!==!1&&g.technologies.length&&s.push({type:"paragraph",text:g.technologies.join(" \xB7 ")}),s.push({type:"blank",text:""})}}if(d(i,"projects")&&e.projects.length){n("projects");for(let r of e.projects){s.push({type:"paragraph",text:p(r,"title",t)});let a=p(r,"description",t);a&&s.push({type:"paragraph",text:a});for(let g of z(r))s.push({type:"paragraph",text:`${g.label}: ${g.url}`});r.technologies.length&&s.push({type:"paragraph",text:r.technologies.join(" \xB7 ")}),s.push({type:"blank",text:""})}}if(d(i,"certifications")&&e.certifications.length){n("certifications");for(let r of e.certifications){let a=r.date?` \xB7 ${k(r.date,t)}`:"";s.push({type:"paragraph",text:`${r.name} \u2014 ${r.issuer}${a}`})}s.push({type:"blank",text:""})}if(d(i,"awards")&&e.awards.length){n("awards");for(let r of e.awards){let a=r.date?` \xB7 ${k(r.date,t)}`:"";s.push({type:"paragraph",text:`${p(r,"title",t)} \u2014 ${r.issuer}${a}`});let g=p(r,"description",t);g&&s.push({type:"paragraph",text:g})}s.push({type:"blank",text:""})}if(d(i,"articles")&&e.articles.length){n("articles");for(let r of e.articles){s.push({type:"paragraph",text:p(r,"title",t)}),r.publishedDate&&s.push({type:"paragraph",text:k(r.publishedDate,t)}),r.url&&s.push({type:"paragraph",text:r.url});let a=p(r,"summary",t);a&&s.push({type:"paragraph",text:a}),s.push({type:"blank",text:""})}}if(d(i,"books")&&e.books.length){n("books");for(let r of e.books)s.push({type:"paragraph",text:`${r.title} \u2014 ${r.author} (${M(r,t)})`});s.push({type:"blank",text:""})}if(d(i,"talks")&&e.talks.length){n("talks");for(let r of e.talks){s.push({type:"paragraph",text:P(r,t)}),r.date&&s.push({type:"paragraph",text:k(r.date,t)}),r.url&&s.push({type:"paragraph",text:r.url});let a=p(r,"description",t);a&&s.push({type:"paragraph",text:a}),s.push({type:"blank",text:""})}}return s}function me(e){let{person:o,experiences:t,skills:i,education:l,languages:s,projects:m,certifications:n}=e;return{$schema:"https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",basics:{name:o.name,email:o.email,label:o.title_en,summary:o.summary_en,profiles:o.socialLinks.map(r=>({network:r.platform,url:r.url}))},work:t.map(r=>({name:r.company,position:r.role_en,startDate:r.startDate,endDate:r.endDate??void 0,summary:r.description_en,highlights:r.achievements_en??[]})),education:l.map(r=>({institution:r.institution,area:r.field_en,studyType:r.degree_en,startDate:r.startDate,endDate:r.endDate})),skills:i.map(r=>({name:r.name,level:r.level})),languages:s.map(r=>({language:r.name_en,fluency:r.level})),projects:m.map(r=>({name:r.title_en,description:r.description_en,keywords:r.technologies,url:r.demo??r.github??void 0})),certificates:n.map(r=>({name:r.name,issuer:r.issuer,date:r.date}))}}function Ee(e){return JSON.stringify(me(e),null,2)}function $e(e){let o='<script>(function(){function p(){window.focus();window.print();}if(document.fonts&&document.fonts.ready){document.fonts.ready.then(p);}else{window.addEventListener("load",p,{once:true});}})();<\/script>';return e.includes("</body>")?e.replace("</body>",`${o}</body>`):e+o}export{j as a,ne as b,J as c,T as d,xe as e,he as f,O as g,K as h,H as i,ke as j,ve as k,_e as l,Ee as m,$e as n};

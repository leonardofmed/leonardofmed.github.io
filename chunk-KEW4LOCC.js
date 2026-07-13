var b={summary:{pt:"Resumo",en:"Summary"},languages:{pt:"Idiomas",en:"Languages"},education:{pt:"Forma\xE7\xE3o",en:"Education"},skills:{pt:"Compet\xEAncias",en:"Core Skills"},experience:{pt:"Experi\xEAncia",en:"Work Experience"},projects:{pt:"Projetos",en:"Projects"},certifications:{pt:"Certifica\xE7\xF5es",en:"Certifications"},awards:{pt:"Pr\xEAmios",en:"Awards"},articles:{pt:"Artigos",en:"Articles"},books:{pt:"Livros",en:"Books"},talks:{pt:"Palestras",en:"Talks"},contact:{pt:"Contato",en:"Contact"},current:{pt:"Atual",en:"Current"},generatedBy:{pt:"Curr\xEDculo gerado pela plataforma open-source que desenvolvi",en:"Resume generated with the open-source platform I built"}},S={summary:b.summary,languages:b.languages,education:b.education,skills:b.skills,experiences:b.experience,projects:b.projects,certifications:b.certifications,awards:b.awards,articles:b.articles,books:b.books,talks:b.talks},te={en:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],pt:["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]};var D={expert:{pt:"Especialista",en:"Expert"},advanced:{pt:"Avan\xE7ado",en:"Advanced"},intermediate:{pt:"Intermedi\xE1rio",en:"Intermediate"},beginner:{pt:"B\xE1sico",en:"Beginner"}},A={native:{pt:"Nativo",en:"Native"},fluent:{pt:"Fluente",en:"Fluent"},advanced:{pt:"Avan\xE7ado",en:"Advanced"},intermediate:{pt:"Intermedi\xE1rio",en:"Intermediate"},basic:{pt:"B\xE1sico",en:"Basic"}},w={expert:0,advanced:1,intermediate:2,beginner:3},se=["cloud","data","backend","frontend","mobile","database","devops","other"],C={cloud:{pt:"Cloud",en:"Cloud"},data:{pt:"Dados",en:"Data"},backend:{pt:"Backend",en:"Backend"},frontend:{pt:"Frontend",en:"Frontend"},mobile:{pt:"Mobile",en:"Mobile"},database:{pt:"Banco de dados",en:"Database"},devops:{pt:"DevOps",en:"DevOps"},other:{pt:"Outros",en:"Other"}};var re=["summary","languages","education","skills","experiences","projects","certifications","awards","articles","books","talks"],oe=["summary","languages","education","skills","experiences"],J=re.filter(e=>e!=="books");function Y(e,o){return e==="customizable"?o?.length?o:[...J]:e==="simplified"?[...oe]:[...J]}function V(e){return e==="simplified"?{useSimplifiedExperienceFilter:!0,useSimplifiedSkillFilter:!0,showExperienceTechnologies:!0}:{showExperienceTechnologies:!0}}function j(e,o){return o?.useSimplifiedExperienceFilter?e.filter(t=>t.includeInSimplified===!0):e}function B(e,o){let t=o?.useSimplifiedSkillFilter?e.filter(i=>i.includeInSimplified===!0):[...e];return t=[...t].sort((i,l)=>(w[i.level]??9)-(w[l.level]??9)),o?.skillCount!=null&&(t=t.slice(0,o.skillCount)),t}function I(e){let o=new Map;for(let l of e){let s=l.category?.trim()||"other",m=o.get(s);m?m.push(l):o.set(s,[l])}let t=[];for(let l of se){let s=o.get(l);s?.length&&(t.push({category:l,skills:[...s].sort((m,n)=>(w[m.level]??9)-(w[n.level]??9))}),o.delete(l))}let i=[...o.keys()].sort();for(let l of i){let s=o.get(l);t.push({category:l,skills:[...s].sort((m,n)=>(w[m.level]??9)-(w[n.level]??9))})}return t}function d(e,o){return e.includes(o)}function me(e,o,t,i){let l=V(e);return{lang:o,sections:Y(e,i),limits:l,siteUrl:t}}function de(e){return{person:e.person,experiences:e.experiences,skills:e.skills,education:e.education,languages:e.languages,projects:e.projects,certifications:e.certifications,awards:e.awards,articles:e.articles,books:e.books,talks:e.talks}}function p(e,o,t){return e[`${o}_${t}`]??""}function T(e){let o=[];for(let t of e){let i=t.company.trim().toLowerCase(),l=o.at(-1);l&&l.company.trim().toLowerCase()===i?l.roles.push(t):o.push({company:t.company,roles:[t]})}return o}function K(e){if(!e.length)return{startDate:"",endDate:null,current:!1};let o=e[0].startDate,t=e[0].endDate??null,i=!!e[0].current;for(let l of e.slice(1))if(l.startDate<o&&(o=l.startDate),l.current)i=!0,t=null;else if(!i){let s=l.endDate??l.startDate;(!t||s>t)&&(t=s)}return{startDate:o,endDate:t,current:i}}function q(e){return e==="expert"?"tier-advanced":e==="advanced"?"tier-mid":"tier-basic"}function ge(e,o){let t=o.trim().toLowerCase();return e.find(l=>l.name.trim().toLowerCase()===t)?.level??"intermediate"}function W(e,o,t){let i=e.map(s=>s.trim()).filter(Boolean);return i.length?`<div class="skills-pills">${i.map(s=>{let m=ge(o,s),n=q(m),r=D[m]?.[t]??m;return`<span class="skill-pill ${n}" title="${u(r)}">${u(s)}</span>`}).join("")}</div>`:""}function G(e){let o=[];return e.github?.trim()&&o.push({label:"GitHub",url:e.github.trim()}),e.demo?.trim()&&o.push({label:"Demo",url:e.demo.trim()}),o}function ie(e){let o=G(e);return o.length?`<p class="item__meta">${o.map(i=>`<a href="${u(i.url)}">${u(i.label)}: ${u(Z(i.url))}</a>`).join(" \xB7 ")}</p>`:""}function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function k(e,o){if(!e)return"";let[t,i]=e.split("-"),l=Number(i)-1,s=te[o][l];return s?`${s} ${t}`:t}function L(e,o){let t=k(e.startDate,o),i=e.current?b.current[o].toUpperCase():k(e.endDate,o);return[t,i].filter(Boolean).join(" \u2014 ")}function R(e,o){return L(K(e),o)}function Z(e){return e.replace(/^https?:\/\//i,"").replace(/^www\./i,"").replace(/\/$/,"").toUpperCase()}function ae(e){let o=e.trim().split(/\s+/);return o.length===1?{first:o[0],rest:""}:{first:o[0],rest:o.slice(1).join(" ")}}function F(e,o){let t=p(e,"title",o).trim();if(t)return t;let i=p(e,"event",o).trim();return i||(e.title_pt??e.event_pt??"").trim()}function P(e,o){return o==="pt"&&e.status_pt?e.status_pt:o==="en"&&e.status_en?e.status_en:e.status==="read"?o==="pt"?"Lido":"Read":o==="pt"?"Lendo":"Reading"}function M(e){return e.split(/\n{2,}/).map(o=>o.trim()).filter(Boolean).map(o=>`<p>${u(o).replace(/\n/g,"<br>")}</p>`).join("")}function N(e){return e.split(/\n{2,}/).map(o=>o.trim()).filter(Boolean).join(`

`)}var ne=/^[-•*]\s+/;function U(e){if(!e?.trim())return[];let o=e.replace(/\r\n/g,`
`).split(`
`),t=[],i=[],l=[],s=()=>{let n=i.join(`
`).trim();n&&t.push({type:"paragraph",text:n}),i=[]},m=()=>{l.length&&t.push({type:"bullets",items:l}),l=[]};for(let n of o){let r=n.trim();if(!r){s(),m();continue}ne.test(r)?(s(),l.push(r.replace(ne,""))):(m(),i.push(r))}return s(),m(),t}function pe(e){return U(e).map(o=>o.type==="bullets"?`<ul class="desc-list">${o.items.map(i=>`<li>${u(i)}</li>`).join("")}</ul>`:`<p>${u(o.text).replace(/\n/g,"<br>")}</p>`).join("")}function Q(e){return U(e).map(o=>o.type==="bullets"?o.items.map(t=>`- ${t}`).join(`
`):o.text).join(`

`)}function v(e,o,t){return t.trim()?`<section class="${e==="experiences"?"experience":`section-${e}`}"><h2>${S[e][o]}</h2>${t}</section>`:""}function fe(e,o){let{lang:t,sections:i,limits:l}=o,s=e.person,m=o.siteUrl??"https://leonardofmed.github.io",n=m.replace(/^https?:\/\//,""),{first:r,rest:a}=ae(s.name),g=s.socialLinks.map(f=>`<div class="link">${u(Z(f.url))}</div>`).join(""),x=[];if(d(i,"summary")){let f=p(s,"summary",t);f&&x.push(v("summary",t,M(f)))}if(d(i,"languages")&&e.languages.length){let c=[...e.languages].sort((h,y)=>(h.level==="native"?-1:0)-(y.level==="native"?-1:0)).map(h=>{let y=A[h.level]?.[t]??h.level,$=t==="pt"?h.name_pt:h.name_en;return`<div class="row"><span>${u($)}</span><span class="row__meta">${u(y)}</span></div>`}).join("");x.push(v("languages",t,c))}if(d(i,"education")&&e.education.length){let f=e.education.map(c=>{let h=[c.startDate,c.endDate].filter(Boolean).join(" \u2014 "),y=p(c,"field",t);return`
        <div class="edu">
          <div class="edu__inst">${u(c.institution)}</div>
          <div class="row">
            <span class="edu__degree">${u(p(c,"degree",t)||y)}</span>
            <span class="row__meta">${u(h)}</span>
          </div>
        </div>`}).join("");x.push(v("education",t,f))}if(d(i,"skills")&&e.skills.length){let f=B(e.skills,l),h=I(f).map(y=>{let $=C[y.category]?.[t]??y.category,H=y.skills.map(O=>{let z=q(O.level),E=D[O.level]?.[t]??O.level;return`<span class="skill-pill ${z}" title="${u(E)}">${u(O.name)}</span>`}).join("");return`<div class="skills-group"><div class="skills-group__label">${u($)}</div><div class="skills-pills">${H}</div></div>`}).join("");h&&x.push(v("skills",t,h))}if(d(i,"experiences")&&e.experiences.length){let f=j(e.experiences,l),h=T(f).map(y=>{let $=(E,X)=>{let ee=p(E,"description",t),ue=l?.showExperienceTechnologies!==!1&&E.technologies.length?W(E.technologies,e.skills,t):"";return`
          <div class="exp${X?"":" exp--role"}">
            <div class="exp__head">
              <div>
                <div class="exp__role">${u(p(E,"role",t))}</div>
                ${X?`<div class="exp__company">${u(E.company)}</div>`:""}
              </div>
              <div class="exp__period">${u(L(E,t))}</div>
            </div>
            ${ee?pe(ee):""}
            ${ue}
          </div>`};if(y.roles.length===1)return $(y.roles[0],!0);let[H,...O]=y.roles,z=O.map(E=>$(E,!1)).join("");return`
        <div class="exp-company">
          <div class="exp-company__anchor">
            <div class="exp-company__head">
              <div class="exp-company__name">${u(y.company)}</div>
              <div class="exp-company__tenure">${u(R(y.roles,t))}</div>
            </div>
            <div class="exp-company__roles">
              ${$(H,!1)}
            </div>
          </div>
          ${z?`<div class="exp-company__roles exp-company__roles--more">${z}</div>`:""}
        </div>`}).join("");x.push(v("experiences",t,h))}if(d(i,"projects")&&e.projects.length){let f=e.projects.map(c=>{let h=p(c,"description",t),y=c.technologies.length?W(c.technologies,e.skills,t):"",$=ie(c);return`
        <div class="exp">
          <div class="exp__role">${u(p(c,"title",t))}</div>
          ${h?M(h):""}
          ${$}
          ${y}
        </div>`}).join("");x.push(v("projects",t,f))}if(d(i,"certifications")&&e.certifications.length){let f=e.certifications.map(c=>{let h=c.date?k(c.date,t):"";return`<div class="row"><span>${u(c.name)}</span><span class="row__meta">${u(c.issuer)}${h?` \xB7 ${h}`:""}</span></div>`}).join("");x.push(v("certifications",t,f))}if(d(i,"awards")&&e.awards.length){let f=e.awards.map(c=>{let h=c.date?k(c.date,t):"",y=p(c,"description",t);return`
        <div class="exp">
          <div class="exp__role">${u(p(c,"title",t))}</div>
          <p class="item__meta">${u(c.issuer)}${h?` \xB7 ${h}`:""}</p>
          ${y?M(y):""}
        </div>`}).join("");x.push(v("awards",t,f))}if(d(i,"articles")&&e.articles.length){let f=e.articles.map(c=>{let h=c.publishedDate?k(c.publishedDate,t):"",y=p(c,"summary",t);return`
        <div class="exp">
          <div class="exp__role">${u(p(c,"title",t))}</div>
          ${h?`<p class="item__meta">${u(h)}</p>`:""}
          ${c.url?`<p class="item__meta">${u(c.url)}</p>`:""}
          ${y?M(y):""}
        </div>`}).join("");x.push(v("articles",t,f))}if(d(i,"books")&&e.books.length){let f=e.books.map(c=>`<div class="row"><span>${u(c.title)}</span><span class="row__meta">${u(c.author)} \xB7 ${u(P(c,t))}</span></div>`).join("");x.push(v("books",t,f))}if(d(i,"talks")&&e.talks.length){let f=e.talks.map(c=>{let h=c.date?k(c.date,t):"",y=p(c,"description",t);return`
        <div class="exp">
          <div class="exp__role">${u(F(c,t))}</div>
          ${h?`<p class="item__meta">${u(h)}</p>`:""}
          ${c.url?`<p class="item__meta">${u(c.url)}</p>`:""}
          ${y?M(y):""}
        </div>`}).join("");x.push(v("talks",t,f))}return`<!DOCTYPE html>
<html lang="${t}">
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>${xe}</style>
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
</html>`}var xe=`
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
`;function _(e,o){return`## ${S[e][o]}`}function he(e,o){let{lang:t,sections:i,limits:l}=o,s=[],m=e.person;s.push(`# ${m.name}`),s.push(`**${p(m,"title",t)}**`),s.push(m.email),(m.location_pt||m.location_en)&&s.push(p(m,"location",t));for(let n of m.socialLinks)s.push(`[${n.platform}](${n.url})`);if(s.push(""),d(i,"summary")){let n=p(m,"summary",t);n&&(s.push(_("summary",t)),s.push(N(n)),s.push(""))}if(d(i,"languages")&&e.languages.length){s.push(_("languages",t));for(let n of e.languages){let r=t==="pt"?n.name_pt:n.name_en,a=A[n.level]?.[t]??n.level;s.push(`- **${r}** \u2014 ${a}`)}s.push("")}if(d(i,"education")&&e.education.length){s.push(_("education",t));for(let n of e.education){let r=[n.startDate,n.endDate].filter(Boolean).join(" \u2014 ");s.push(`### ${n.institution}`),s.push(`*${p(n,"degree",t)||p(n,"field",t)}*${r?` \xB7 ${r}`:""}`)}s.push("")}if(d(i,"skills")&&e.skills.length){s.push(_("skills",t));let n=B(e.skills,l);for(let r of I(n)){let a=C[r.category]?.[t]??r.category;s.push(`### ${a}`);for(let g of r.skills){let x=D[g.level]?.[t]??g.level;s.push(`- **${g.name}** (${x})`)}s.push("")}}if(d(i,"experiences")&&e.experiences.length){s.push(_("experiences",t));let n=j(e.experiences,l);for(let r of T(n)){if(r.roles.length>1){s.push(`### ${r.company}`),s.push(`*${R(r.roles,t)}*`),s.push("");for(let x of r.roles){s.push(`#### ${p(x,"role",t)}`),s.push(`*${L(x,t)}*`);let f=p(x,"description",t);f&&s.push(Q(f)),l?.showExperienceTechnologies!==!1&&x.technologies.length&&s.push(`*${x.technologies.join(" \xB7 ")}*`),s.push("")}continue}let a=r.roles[0];s.push(`### ${p(a,"role",t)} \u2014 ${a.company}`),s.push(`*${L(a,t)}*`);let g=p(a,"description",t);g&&s.push(Q(g)),l?.showExperienceTechnologies!==!1&&a.technologies.length&&s.push(`*${a.technologies.join(" \xB7 ")}*`),s.push("")}}if(d(i,"projects")&&e.projects.length){s.push(_("projects",t));for(let n of e.projects){s.push(`### ${p(n,"title",t)}`);let r=p(n,"description",t);r&&s.push(N(r));let a=G(n);a.length&&s.push(a.map(g=>`[${g.label}](${g.url})`).join(" \xB7 ")),n.technologies.length&&s.push(`*${n.technologies.join(" \xB7 ")}*`),s.push("")}}if(d(i,"certifications")&&e.certifications.length){s.push(_("certifications",t));for(let n of e.certifications){let r=n.date?` \xB7 ${k(n.date,t)}`:"";s.push(`- **${n.name}** \u2014 ${n.issuer}${r}`)}s.push("")}if(d(i,"awards")&&e.awards.length){s.push(_("awards",t));for(let n of e.awards){let r=n.date?` \xB7 ${k(n.date,t)}`:"";s.push(`### ${p(n,"title",t)}`),s.push(`*${n.issuer}${r}*`);let a=p(n,"description",t);a&&s.push(N(a)),s.push("")}}if(d(i,"articles")&&e.articles.length){s.push(_("articles",t));for(let n of e.articles){let r=n.publishedDate?` \xB7 ${k(n.publishedDate,t)}`:"";s.push(`### ${p(n,"title",t)}${r}`),n.url&&s.push(`[${n.url}](${n.url})`);let a=p(n,"summary",t);a&&s.push(N(a)),s.push("")}}if(d(i,"books")&&e.books.length){s.push(_("books",t));for(let n of e.books)s.push(`- **${n.title}** \u2014 ${n.author} (${P(n,t)})`);s.push("")}if(d(i,"talks")&&e.talks.length){s.push(_("talks",t));for(let n of e.talks){let r=n.date?` \xB7 ${k(n.date,t)}`:"";s.push(`### ${F(n,t)}${r}`),n.url&&s.push(`[${n.url}](${n.url})`);let a=p(n,"description",t);a&&s.push(N(a)),s.push("")}}return s.join(`
`).trim()+`
`}function le(e,o){for(let t of U(o))if(t.type==="bullets")for(let i of t.items)e.push({type:"bullet",text:i});else e.push({type:"paragraph",text:t.text})}function ye(e,o){let{lang:t,sections:i,limits:l}=o,s=[],m=e.person;s.push({type:"heading1",text:m.name}),s.push({type:"paragraph",text:p(m,"title",t)}),s.push({type:"paragraph",text:m.email}),(m.location_pt||m.location_en)&&s.push({type:"paragraph",text:p(m,"location",t)});for(let r of m.socialLinks)s.push({type:"paragraph",text:`${r.platform}: ${r.url}`});s.push({type:"blank",text:""});let n=r=>{s.push({type:"heading2",text:S[r][t]})};if(d(i,"summary")){let r=p(m,"summary",t);if(r){n("summary");for(let a of r.split(/\n{2,}/).map(g=>g.trim()).filter(Boolean))s.push({type:"paragraph",text:a.replace(/\n/g," ")});s.push({type:"blank",text:""})}}if(d(i,"languages")&&e.languages.length){n("languages");let r=[...e.languages].sort((a,g)=>(a.level==="native"?-1:0)-(g.level==="native"?-1:0));for(let a of r){let g=t==="pt"?a.name_pt:a.name_en,x=A[a.level]?.[t]??a.level;s.push({type:"paragraph",text:`${g} \u2014 ${x}`})}s.push({type:"blank",text:""})}if(d(i,"education")&&e.education.length){n("education");for(let r of e.education){let a=[r.startDate,r.endDate].filter(Boolean).join(" \u2014 ");s.push({type:"paragraph",text:`${p(r,"degree",t)||p(r,"field",t)} \u2014 ${r.institution}${a?` (${a})`:""}`})}s.push({type:"blank",text:""})}if(d(i,"skills")&&e.skills.length){n("skills");let r=B(e.skills,l);for(let a of I(r)){let g=C[a.category]?.[t]??a.category;s.push({type:"paragraph",text:g}),s.push({type:"paragraph",text:a.skills.map(x=>`${x.name} (${D[x.level]?.[t]??x.level})`).join(" \xB7 ")})}s.push({type:"blank",text:""})}if(d(i,"experiences")&&e.experiences.length){n("experiences");let r=j(e.experiences,l);for(let a of T(r)){if(a.roles.length>1){s.push({type:"paragraph",text:a.company}),s.push({type:"paragraph",text:R(a.roles,t)});for(let f of a.roles){s.push({type:"paragraph",text:p(f,"role",t)}),s.push({type:"paragraph",text:L(f,t)});let c=p(f,"description",t);c&&le(s,c),l?.showExperienceTechnologies!==!1&&f.technologies.length&&s.push({type:"paragraph",text:f.technologies.join(" \xB7 ")})}s.push({type:"blank",text:""});continue}let g=a.roles[0];s.push({type:"paragraph",text:`${p(g,"role",t)} \u2014 ${g.company}`}),s.push({type:"paragraph",text:L(g,t)});let x=p(g,"description",t);x&&le(s,x),l?.showExperienceTechnologies!==!1&&g.technologies.length&&s.push({type:"paragraph",text:g.technologies.join(" \xB7 ")}),s.push({type:"blank",text:""})}}if(d(i,"projects")&&e.projects.length){n("projects");for(let r of e.projects){s.push({type:"paragraph",text:p(r,"title",t)});let a=p(r,"description",t);a&&s.push({type:"paragraph",text:a});for(let g of G(r))s.push({type:"paragraph",text:`${g.label}: ${g.url}`});r.technologies.length&&s.push({type:"paragraph",text:r.technologies.join(" \xB7 ")}),s.push({type:"blank",text:""})}}if(d(i,"certifications")&&e.certifications.length){n("certifications");for(let r of e.certifications){let a=r.date?` \xB7 ${k(r.date,t)}`:"";s.push({type:"paragraph",text:`${r.name} \u2014 ${r.issuer}${a}`})}s.push({type:"blank",text:""})}if(d(i,"awards")&&e.awards.length){n("awards");for(let r of e.awards){let a=r.date?` \xB7 ${k(r.date,t)}`:"";s.push({type:"paragraph",text:`${p(r,"title",t)} \u2014 ${r.issuer}${a}`});let g=p(r,"description",t);g&&s.push({type:"paragraph",text:g})}s.push({type:"blank",text:""})}if(d(i,"articles")&&e.articles.length){n("articles");for(let r of e.articles){s.push({type:"paragraph",text:p(r,"title",t)}),r.publishedDate&&s.push({type:"paragraph",text:k(r.publishedDate,t)}),r.url&&s.push({type:"paragraph",text:r.url});let a=p(r,"summary",t);a&&s.push({type:"paragraph",text:a}),s.push({type:"blank",text:""})}}if(d(i,"books")&&e.books.length){n("books");for(let r of e.books)s.push({type:"paragraph",text:`${r.title} \u2014 ${r.author} (${P(r,t)})`});s.push({type:"blank",text:""})}if(d(i,"talks")&&e.talks.length){n("talks");for(let r of e.talks){s.push({type:"paragraph",text:F(r,t)}),r.date&&s.push({type:"paragraph",text:k(r.date,t)}),r.url&&s.push({type:"paragraph",text:r.url});let a=p(r,"description",t);a&&s.push({type:"paragraph",text:a}),s.push({type:"blank",text:""})}}return s}function ce(e){let{person:o,experiences:t,skills:i,education:l,languages:s,projects:m,certifications:n}=e;return{$schema:"https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",basics:{name:o.name,email:o.email,label:o.title_en,summary:o.summary_en,profiles:o.socialLinks.map(r=>({network:r.platform,url:r.url}))},work:t.map(r=>({name:r.company,position:r.role_en,startDate:r.startDate,endDate:r.endDate??void 0,summary:r.description_en,highlights:r.achievements_en??[]})),education:l.map(r=>({institution:r.institution,area:r.field_en,studyType:r.degree_en,startDate:r.startDate,endDate:r.endDate})),skills:i.map(r=>({name:r.name,level:r.level})),languages:s.map(r=>({language:r.name_en,fluency:r.level})),projects:m.map(r=>({name:r.title_en,description:r.description_en,keywords:r.technologies,url:r.demo??r.github??void 0})),certificates:n.map(r=>({name:r.name,issuer:r.issuer,date:r.date}))}}function ke(e){return JSON.stringify(ce(e),null,2)}function be(e){let o='<script>(function(){function p(){window.focus();window.print();}if(document.fonts&&document.fonts.ready){document.fonts.ready.then(p);}else{window.addEventListener("load",p,{once:true});}})();<\/script>';return e.includes("</body>")?e.replace("</body>",`${o}</body>`):e+o}export{C as a,re as b,J as c,I as d,me as e,de as f,T as g,K as h,U as i,fe as j,he as k,ye as l,ke as m,be as n};

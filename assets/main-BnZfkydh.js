import{t as e}from"./bootstrap.bundle.min-Bev_N_v2.js";e();var t=Object.freeze({RED:`red`,GOLD:`gold`,TEAL:`teal`,VIOLET:`violet`,BLUE:`blue`,ROSE:`rose`,GREEN:`green`,SLATE:`slate`,SAVAGE:`savage`,TREASURE_MAPS:`treasure-maps`,MOUNT_FARMING:`mount-farming`,HIDE_AND_SEEK:`hide-and-seek`,DEEP_DUNGEONS:`deep-dungeons`,SEASONAL:`seasonal`}),n=[{title:`D&D Halloween Event`,kind:`Seasonal event`,serverTime:`2026-10-24T16:00:00Z`,themes:[t.RED,t.SEASONAL],runBy:`The FC Team`,hidden:!1,guideUrl:`./events/halloween.html`,guideLabel:`View event details`,description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,requirements:[{icon:`fa-arrow-up-9-1`,label:`Level`,value:`Any`},{icon:`fa-book-open`,label:`Expansion`,value:`No completion requirement`},{icon:`fa-shirt`,label:`Other`,value:`Costumes are optional`}]},{title:`Hide and seek`,kind:`Irregular Sunday event`,serverTime:`2026-10-18T18:00:00Z`,themes:[t.HIDE_AND_SEEK],runBy:`Tosha`,hidden:!1,guideUrl:`./games/hide-and-seek.html`,description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,requirements:[{icon:`fa-arrow-up-9-1`,label:`Level`,value:`Any`},{icon:`fa-book-open`,label:`Expansion`,value:`No completion requirement`},{icon:`fa-clipboard-check`,label:`Other`,value:`No`}]},{title:`Mount farming`,kind:`Irregular Sunday event`,serverTime:`2026-11-08T19:00:00Z`,themes:[t.TEAL,t.MOUNT_FARMING],runBy:`Fractal Pigeon`,hidden:!0,description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,requirements:[{icon:`fa-arrow-up-9-1`,label:`Level`,value:`Varies by duty`},{icon:`fa-book-open`,label:`Expansion`,value:`Varies by target`},{icon:`fa-door-open`,label:`Other`,value:`Join or leave between duties`}]},{title:`Current-tier map night`,kind:`Treasure maps`,serverTime:`2026-11-15T19:00:00Z`,themes:[t.GOLD,t.TREASURE_MAPS],runBy:`Kamila Bloodwolf`,hidden:!0,description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,requirements:[{icon:`fa-arrow-up-9-1`,label:`Level`,value:`100`},{icon:`fa-book-open`,label:`Expansion`,value:`Dawntrail zones unlocked`},{icon:`fa-map`,label:`Other`,value:`Bringing a map is optional`}]}],r=new Intl.DateTimeFormat(void 0,{weekday:`short`,day:`numeric`,month:`short`,hour:`2-digit`,minute:`2-digit`,timeZoneName:`short`}),i=new Intl.DateTimeFormat(void 0,{hour:`2-digit`,minute:`2-digit`,timeZoneName:`short`}),a=new Intl.DateTimeFormat(`en-GB`,{day:`2-digit`,timeZone:`UTC`}),o=new Intl.DateTimeFormat(`en-GB`,{month:`short`,timeZone:`UTC`}),s=new Intl.DateTimeFormat(`en-GB`,{weekday:`short`,timeZone:`UTC`}),c=new Intl.DateTimeFormat(`en-GB`,{hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`,timeZone:`UTC`}),l=Intl.DateTimeFormat().resolvedOptions().timeZone||`Your time zone`;function u(e){return`
    <div>
      <dt><i class="fa-solid ${e.icon}"></i>${e.label}</dt>
      <dd>${e.value}</dd>
    </div>
  `}function d(e){let t=new Date(e.serverTime);if(Number.isNaN(t.getTime()))throw Error(`Invalid event date for "${e.title}": ${e.serverTime}`);let n=e.themes.map(e=>`event-${e}`).join(` `),i=t.toISOString(),d=e.runBy?`<div class="event-runner"><i class="fa-solid fa-user-group"></i><span>Run by <strong>${e.runBy}</strong></span></div>`:``,f=e.guideUrl?`<a class="event-guide-link" href="${e.guideUrl}">${e.guideLabel??`View rules`} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>`:``;return`
    <article class="schedule-row ${n}" data-server-time="${i}">
      <div class="event-date">
        <strong>${a.format(t)}</strong>
        <span>${o.format(t)} · ${s.format(t)}</span>
      </div>
      <div class="event-main">
        <div class="event-kind">${e.kind}</div>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        ${d}
        ${f}
      </div>
      <div class="event-times">
        <div class="time-block">
          <i class="fa-solid fa-server"></i>
          <div>
            <b>Server Time</b>
            <time datetime="${i}">${c.format(t)} UTC</time>
          </div>
        </div>
        <div class="time-block">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <b>Your Local Time</b>
            <time class="local-time" datetime="${i}">${r.format(t)}</time>
            <span class="local-zone">${l}</span>
          </div>
        </div>
      </div>
      <dl class="requirements">
        ${e.requirements.map(u).join(``)}
      </dl>
    </article>
  `}var f=document.querySelector(`#event-schedule`);if(f){let e=n.filter(e=>!e.hidden).sort((e,t)=>new Date(e.serverTime).getTime()-new Date(t.serverTime).getTime());f.innerHTML=e.length?e.map(d).join(``):`<p class="schedule-empty">No upcoming events are currently scheduled.</p>`}document.querySelectorAll(`.schedule-local-time`).forEach(e=>{let t=new Date(e.closest(`time`).dateTime);Number.isNaN(t.getTime())||(e.textContent=`Local: ${i.format(t)}`)});async function p(e){if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(e);return}let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(`copy`);if(t.remove(),!n)throw Error(`The command could not be copied.`)}document.querySelectorAll(`[data-copy-command]`).forEach(e=>{let t;e.addEventListener(`click`,async()=>{let n=e.querySelector(`span`);try{await p(e.dataset.copyCommand),e.dataset.copyState=`copied`,n&&(n.textContent=`Copied`),window.clearTimeout(t),t=window.setTimeout(()=>{delete e.dataset.copyState,n&&(n.textContent=`Copy`)},1600)}catch{n&&(n.textContent=`Copy failed`)}})});
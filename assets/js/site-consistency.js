(function(){
  const path=location.pathname.toLowerCase();
  const page=document.body?.dataset?.page||'';
  const navMarkup=`
    <li><a data-main-nav="journey" href="index.html#journey">Journey</a></li>
    <li><a data-main-nav="book" href="index.html#book">Book</a></li>
    <li><a data-main-nav="research" href="index.html#research">Research</a></li>
    <li><a data-main-nav="now" href="index.html#now">Now</a></li>
    <li><a data-main-nav="leadership" href="index.html#leadership">Leadership</a></li>
    <li><a data-main-nav="contact" href="index.html#contact">Contact</a></li>`;

  const standardizeNav=()=>{
    const normalNav=document.querySelector('.nav .nav-links');
    if(normalNav){
      normalNav.innerHTML=navMarkup;
    }
    const legacyNav=document.querySelector('.site-nav ul');
    if(legacyNav){
      legacyNav.innerHTML=navMarkup;
      document.querySelector('.site-nav')?.classList.add('unified-nav');
    }
    const activeKey=page==='writing'?'book':page==='research'?'research':page==='leadership'?'leadership':page==='contact'?'contact':'journey';
    document.querySelectorAll('[data-main-nav]').forEach(a=>a.classList.toggle('active',a.dataset.mainNav===activeKey));
  };

  const injectStyles=()=>{
    if(document.getElementById('unified-site-style')) return;
    const s=document.createElement('style');s.id='unified-site-style';
    s.textContent=`
      .nav .nav-links,.site-nav ul{display:flex;align-items:center;gap:24px;list-style:none}
      .nav .nav-links a,.site-nav ul a{font-family:Inter,system-ui,sans-serif!important;font-size:.78rem!important;font-weight:400!important;letter-spacing:0!important;color:var(--muted)!important;text-decoration:none;transition:.25s}
      .nav .nav-links a:hover,.nav .nav-links a.active,.site-nav ul a:hover,.site-nav ul a.active{color:var(--ink)!important}
      .nav .brand,.site-nav .brand{font-family:Fraunces,Georgia,serif!important;font-size:1.05rem!important;font-weight:500!important}
      .site-nav .in{width:min(1120px,calc(100% - 48px));max-width:none;margin:0 auto;padding:0;display:flex;align-items:center;justify-content:space-between;gap:24px}
      .site-nav{padding:14px 0!important}
      .unified-nav{background:rgba(243,239,231,.86)!important;border-bottom:1px solid rgba(32,42,37,.07)!important;backdrop-filter:blur(10px)!important}
      @media(max-width:760px){.nav .nav-links,.site-nav ul{gap:14px}.nav .nav-links a,.site-nav ul a{font-size:.74rem!important}.nav .nav-links li:nth-child(4),.site-nav ul li:nth-child(4){display:none}.site-nav .in{width:calc(100% - 32px)}}
      .unified-preview{padding:110px 0;border-top:1px solid var(--line);position:relative}
      .unified-preview .preview-head{display:grid;grid-template-columns:1.15fr .85fr;gap:70px;align-items:end;margin-bottom:48px}
      .unified-preview .preview-head h2{font-size:clamp(2.7rem,5vw,5.2rem);line-height:1.02;margin-top:14px}
      .unified-preview .preview-head p{color:var(--muted);max-width:460px;font-size:1.03rem}
      .unified-preview .preview-chapter{display:grid;grid-template-columns:110px 1fr;gap:46px;padding:60px 0;border-top:1px solid var(--line)}
      .unified-preview .preview-no{font-family:Fraunces,Georgia,serif;font-style:italic;font-size:4.5rem;color:transparent;-webkit-text-stroke:1px rgba(32,42,37,.20);line-height:.9}
      .unified-preview .preview-meta{font-family:"IBM Plex Mono",monospace;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
      .unified-preview h3{font-family:Fraunces,Georgia,serif;font-weight:500;font-size:clamp(2rem,3.2vw,3.4rem);line-height:1.06;margin-bottom:20px}
      .unified-preview .preview-chapter p{color:var(--muted);max-width:760px;font-size:1.02rem;margin-bottom:18px}
      .unified-preview .preview-card{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:26px;margin-top:24px}
      @media(max-width:760px){.unified-preview{padding:80px 0}.unified-preview .preview-head{grid-template-columns:1fr;gap:24px}.unified-preview .preview-chapter{grid-template-columns:1fr;gap:18px;padding:48px 0}.unified-preview .preview-no{font-size:3.2rem}}
    `;document.head.appendChild(s);
  };

  const addIndexPreviews=()=>{
    if(page!=='index') return;
    const footer=document.querySelector('footer.footer');
    if(!footer) return;
    if(!document.getElementById('leadership')){
      footer.insertAdjacentHTML('beforebegin',`<section id="leadership" class="unified-preview"><div class="wrap"><div class="preview-head"><div><div class="eyebrow mono">04 — People &amp; making</div><h2>Leadership grew out of games, rehearsals, pressure and learning with other people.</h2></div><p>I learned that leadership is not about walking ahead of everyone. It is about finding common ground, adapting when plans fail, and eventually learning how to move together.</p></div><div class="preview-chapter"><div class="preview-no">04</div><div><div class="preview-meta">Leadership</div><h3>From the volleyball wall to School President.</h3><p>Volleyball taught me repetition and respect for the person across the net. School programmes taught me how chaos can become synchronisation. Being School President taught me how to work under pressure, handle contradictions, organise, contribute and walk with peers rather than ahead of them.</p><div class="preview-card"><strong>People &amp; Making</strong><p style="margin:8px 0 0">The fuller chapter contains the volleyball journey, chess, school programmes, creative work, and my first formal experience of leadership.</p><a class="btn" href="leadership.html">Enter the full Leadership chapter →</a></div></div></div></div></section>`);
    }
    if(!document.getElementById('contact')){
      footer.insertAdjacentHTML('beforebegin',`<section id="contact" class="unified-preview"><div class="wrap"><div class="preview-head"><div><div class="eyebrow mono">05 — Contact</div><h2>The archive can become a conversation.</h2></div><p>Questions, thoughtful feedback, research conversations, writing, collaboration, or simply an idea worth continuing — this is the doorway.</p></div><div class="preview-chapter"><div class="preview-no">05</div><div><div class="preview-meta">A way in</div><h3>Continue the story with a conversation.</h3><p>The full Contact page keeps the same quiet editorial language as the rest of the archive, with separate paths for research, the book, and everything else.</p><div class="preview-card"><strong>Research · Writing · Ideas · Conversation</strong><p style="margin:8px 0 0">No formal reason is required. A good question is enough.</p><a class="btn" href="contact.html">Open the full Contact page →</a></div></div></div></div></section>`);
    }
  };

  injectStyles();
  standardizeNav();
  addIndexPreviews();
})();

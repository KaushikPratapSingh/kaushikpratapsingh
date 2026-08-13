(function(){
  if(document.body.dataset.page!=='index') return;

  const style=document.createElement('style');
  style.textContent=`
    .quickfacts-shell{position:relative;width:min(1120px,calc(100% - 48px));margin:-22px auto 28px;z-index:10}
    .quickfacts{position:sticky;top:72px;float:right;width:292px;margin:0 0 28px 34px;padding:22px;border:1px solid var(--line);border-radius:16px;background:rgba(255,253,248,.94);box-shadow:0 20px 55px -35px rgba(0,0,0,.45);backdrop-filter:blur(12px)}
    .quickfacts h2{font-size:1.65rem;line-height:1.05;margin-bottom:18px}
    .quickfacts dl{margin:0}.quickfacts dt{font-family:IBM Plex Mono,monospace;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);margin-top:14px}.quickfacts dt:first-child{margin-top:0}.quickfacts dd{margin:.18rem 0 0;color:var(--muted);font-size:.82rem;line-height:1.55}.quickfacts a{color:var(--teal);text-decoration:none}.quickfacts a:hover{color:var(--ink)}
    .quickfacts-cta{display:inline-flex;margin-top:18px;padding:10px 14px;border:1px solid var(--line);border-radius:7px;font-size:.82rem;font-weight:600;color:var(--ink)!important;text-decoration:none}.quickfacts-cta:hover{border-color:var(--gold);color:var(--gold)!important}
    .quickfacts-clear{clear:both}
    .abstract-box{margin:-42px 0 52px;padding:16px 18px;border:1px solid rgba(85,118,107,.25);border-left:3px solid var(--teal);border-radius:10px;background:rgba(85,118,107,.065);color:var(--muted);font-size:.86rem;line-height:1.7}.abstract-box strong{font-family:IBM Plex Mono,monospace;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-right:.3rem}.abstract-box a{color:var(--teal);font-weight:600;text-decoration:none}
    .now-status{display:inline-flex;margin-top:14px;font-family:IBM Plex Mono,monospace;font-size:.66rem;letter-spacing:.06em;text-transform:uppercase;color:var(--teal);text-decoration:none}.now-status:hover{color:var(--gold)}
    .contact-nudge{margin:0 0 18px!important;color:var(--muted)!important;font-style:italic}
    @media(max-width:900px){.quickfacts-shell{width:min(100% - 48px,760px);margin:0 auto 10px}.quickfacts{position:static;float:none;width:auto;margin:0 0 34px}.quickfacts-clear{clear:none}.abstract-box{margin:-26px 0 42px}}
    @media(max-width:760px){.quickfacts-shell{width:min(100% - 32px,640px)}.quickfacts{padding:20px}}
  `;document.head.appendChild(style);

  const journey=document.querySelector('#journey .wrap');
  if(journey && !document.querySelector('.quickfacts')){
    const shell=document.createElement('div');shell.className='quickfacts-shell';
    shell.innerHTML=`<aside class="quickfacts" aria-label="At a glance"><h2>At a glance</h2><dl>
      <dt>Now</dt><dd>Independent student, writer &amp; builder · Gorakhpur, India</dd>
      <dt>Research</dt><dd>BCI signal-processing pipeline with a verification-first approach. <a href="research.html">Read the research →</a></dd>
      <dt>Book</dt><dd><em>The Quietest Rebellion</em> · 45 poems · 2025. <a href="writing.html">Explore the book →</a></dd>
      <dt>Build</dt><dd>Exploring software, mathematics, AI and experiments that begin with questions.</dd>
      <dt>Verify</dt><dd><a href="https://github.com/KaushikPratapSingh/bci-riemannian-verification" target="_blank" rel="noreferrer">Research GitHub ↗</a></dd>
    </dl><a class="quickfacts-cta" href="contact.html">Get in touch →</a></aside>`;
    journey.parentNode.insertBefore(shell,journey);

    const chapters=[...journey.querySelectorAll('.chapter')];
    if(chapters[4]) chapters[4].classList.add('quickfacts-clear');
  }

  const research=document.querySelector('#research .wrap');
  if(research && !research.querySelector('.abstract-box')){
    const head=research.querySelector('.section-head');
    if(head){
      const box=document.createElement('div');box.className='abstract-box';box.innerHTML='<strong>Abstract:</strong> A self-directed BCI signal-processing pipeline developed from a question about continuous brain-state tracking, with software/ML verification across simulated and real EEG data, independent cross-checking, and hardware deferred to future work. <a href="research.html">Open the full research archive →</a>';
      head.insertAdjacentElement('afterend',box);
    }
  }

  const now=document.querySelector('#now .now');
  if(now){
    const cards=now.querySelectorAll('.now-card');
    if(cards[0] && !cards[0].querySelector('.now-status')) cards[0].insertAdjacentHTML('beforeend','<a class="now-status" href="research.html">Current research →</a>');
    if(cards[1] && !cards[1].querySelector('.now-status')) cards[1].insertAdjacentHTML('beforeend','<a class="now-status" href="writing.html">Read the writing →</a>');
    if(cards[2] && !cards[2].querySelector('.now-status')) cards[2].insertAdjacentHTML('beforeend','<a class="now-status" href="https://github.com/KaushikPratapSingh" target="_blank" rel="noreferrer">View the build archive ↗</a>');
    if(cards[3] && !cards[3].querySelector('.now-status')) cards[3].insertAdjacentHTML('beforeend','<a class="now-status" href="#top">Back to the beginning ↑</a>');
  }

  const footer=document.querySelector('.footer .wrap');
  if(footer && !footer.querySelector('.contact-nudge')){
    const p=footer.querySelector('p');
    if(p){const n=document.createElement('p');n.className='contact-nudge';n.textContent='If any of this resonated — mentors, collaborators, and fellow researchers are welcome to reach out.';p.insertAdjacentElement('afterend',n);}
  }
})();

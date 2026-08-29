---
layout: default
title: "Zoheir's Portfolio"
---

# Welcome! 
My name is Zoheir Shaikh. 
I am a Master’s student in Cybersecurity at the University of Houston with hands-on experience in security testing and automation, alert triage, and threat research.  
My current focus is Blue Team / SOC Analysis. Long-term, I'm working towards OT/ICS Security, using hands-on labs to bridge IT security fundamentals into industrial control environments.

Feel free to explore my Portfolio Website via the CLI or Navigation.

<div class="zsterm" id="zsterm">
  <div class="zsterm-bar">
    <span class="zsterm-dot"></span><span class="zsterm-dot"></span><span class="zsterm-dot"></span>
    <span class="zsterm-title">guest@zoheir — zsh</span>
  </div>
  <div class="zsterm-body" id="zsterm-body">
    <p>Welcome. Type <b>help</b> to see available commands, or use the nav above.</p>
  </div>
  <div class="zsterm-inputline">
    <span class="zsterm-prompt">guest@zoheir:~$</span>
    <input id="zsterm-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command input" />
  </div>
</div>

<style>
  :root{
    --term-bg:#15171c; --term-bg-2:#1b1e24; --term-border:#2a2d35;
    --term-amber:#e8a33d; --term-amber-bright:#ffbf5c;
    --term-text:#d7d2c8; --term-dim:#7c8089;
  }
  .zsterm{max-width:640px;margin:2rem auto;background:var(--term-bg);border:1px solid var(--term-border);border-radius:8px;overflow:hidden;font-family:"JetBrains Mono","Fira Code",ui-monospace,Menlo,Consolas,monospace;font-size:14px;box-shadow:0 20px 50px -20px rgba(0,0,0,.6);}
  .zsterm-bar{display:flex;align-items:center;gap:6px;padding:10px 12px;background:var(--term-bg-2);border-bottom:1px solid var(--term-border);}
  .zsterm-dot{width:10px;height:10px;border-radius:50%;background:#3a3d45;}
  .zsterm-title{margin-left:8px;color:var(--term-dim);font-size:12px;}
  .zsterm-body{padding:14px 16px;color:var(--term-text);max-height:280px;overflow-y:auto;line-height:1.55;white-space:pre-wrap;}
  .zsterm-body p{margin:0 0 8px;}
  .zsterm-body b{color:var(--term-amber-bright);font-weight:600;}
  .zsterm-cmd{color:var(--term-amber-bright);}
  .zsterm-err{color:#d97757;}
  .zsterm-inputline{display:flex;align-items:center;gap:8px;padding:10px 16px 16px;}
  .zsterm-prompt{color:var(--term-amber);white-space:nowrap;}
  #zsterm-input{flex:1;background:transparent;border:none;outline:none;color:var(--term-amber-bright);font:inherit;caret-color:var(--term-amber-bright);}
  .zsterm-body::-webkit-scrollbar{width:8px;}
  .zsterm-body::-webkit-scrollbar-thumb{background:var(--term-border);border-radius:4px;}
</style>

<script>
(function(){
  var body = document.getElementById('zsterm-body');
  var input = document.getElementById('zsterm-input');
  var term = document.getElementById('zsterm');
  var history = []; var historyPos = 0;

  var pages = {
    experience: '/subsites/experience.html',
    projects: '/subsites/projects.html',
    skills: '/subsites/skills.html',
    extracurricular: '/subsites/extracurricular.html'
  };

  var commands = {
    help: function(){
      return 'Available commands:\n' +
        '  experience       view work experience\n' +
        '  projects         view projects\n' +
        '  skills           view skills\n' +
        '  extracurricular  view extracurricular activities\n' +
        '  resume           open resume (PDF)\n' +
        '  whoami           short bio\n' +
        '  clear            clear the screen';
    },
    whoami: function(){
      return "Zoheir Shaikh — Master's student in Cybersecurity @ University of Houston.\n" +
             'Current focus: Blue Teaming/ SOC Analysis\n' +
             'Long-term: OT/ICS Security';
    },
    resume: function(){ window.open('/assets/files/Resume.pdf', '_blank'); return 'Opening resume in a new tab...'; },
    clear: function(){ body.innerHTML = ''; return null; },
    sudo: function(){ return "Nice try. Permission denied: you're not root here."; }
  };

  Object.keys(pages).forEach(function(name){
    commands[name] = function(){
      print('Opening ' + name + '...');
      setTimeout(function(){ window.location.href = pages[name]; }, 350);
      return null;
    };
  });

  function print(text){ var p=document.createElement('p'); p.textContent=text; body.appendChild(p); body.scrollTop=body.scrollHeight; }
  function printCmd(text){ var p=document.createElement('p'); p.className='zsterm-cmd'; p.textContent='guest@zoheir:~$ '+text; body.appendChild(p); body.scrollTop=body.scrollHeight; }

  function run(raw){
    var cmd = raw.trim().toLowerCase();
    printCmd(raw);
    if(cmd === '') return;
    if(commands[cmd]){ var out = commands[cmd](); if(out) print(out); }
    else { var p=document.createElement('p'); p.className='zsterm-err'; p.textContent="command not found: "+raw+"  (type 'help')"; body.appendChild(p); body.scrollTop=body.scrollHeight; }
  }

  input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      var val = input.value; run(val);
      if(val.trim() !== ''){ history.push(val); historyPos = history.length; }
      input.value = '';
    } else if(e.key === 'ArrowUp'){
      if(historyPos > 0){ historyPos--; input.value = history[historyPos]; }
      e.preventDefault();
    } else if(e.key === 'ArrowDown'){
      if(historyPos < history.length - 1){ historyPos++; input.value = history[historyPos]; }
      else { historyPos = history.length; input.value = ''; }
      e.preventDefault();
    }
  });

  term.addEventListener('click', function(){ input.focus(); });
})();
</script>

<div id="command-output" aria-live="polite">
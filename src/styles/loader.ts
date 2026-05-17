export const loader = `
.tc-loader { display:inline-flex; align-items:center; gap:7px; }
@keyframes tc-typing { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-10px)} }
.tc-loader-typing .b { width:9px;height:9px;border-radius:50%;background:currentColor;animation:tc-typing 1.2s infinite; }
.tc-loader-typing .b:nth-child(2){animation-delay:.2s}
.tc-loader-typing .b:nth-child(3){animation-delay:.4s}

@keyframes tc-ripple { 0%{transform:scale(.6);opacity:1} 100%{transform:scale(1.6);opacity:0} }
.tc-loader-ripple .b { width:9px;height:9px;border-radius:50%;background:currentColor;animation:tc-ripple 1.4s infinite; }
.tc-loader-ripple .b:nth-child(2){animation-delay:.35s}
.tc-loader-ripple .b:nth-child(3){animation-delay:.7s}

@keyframes tc-bounce { 0%,100%{transform:translateY(0);animation-timing-function:ease-in} 50%{transform:translateY(-18px);animation-timing-function:ease-out} }
.tc-loader-bounce .b { width:9px;height:9px;border-radius:50%;background:currentColor;animation:tc-bounce 1s infinite; }
.tc-loader-bounce .b:nth-child(2){animation-delay:.15s}
.tc-loader-bounce .b:nth-child(3){animation-delay:.3s}
.tc-loader-bounce .b:nth-child(4){animation-delay:.45s}

@keyframes tc-morph { 0%,100%{border-radius:50%;transform:scale(1)} 50%{border-radius:30%;transform:scale(.7) rotate(45deg)} }
.tc-loader-morph .b { width:12px;height:12px;background:currentColor;animation:tc-morph 1.4s ease-in-out infinite; }
.tc-loader-morph .b:nth-child(2){animation-delay:.25s}
.tc-loader-morph .b:nth-child(3){animation-delay:.5s}

@keyframes tc-fade { 0%,100%{opacity:.15;transform:scale(.75)} 50%{opacity:1;transform:scale(1)} }
.tc-loader-fade .b { width:11px;height:11px;border-radius:50%;background:currentColor;animation:tc-fade 1.4s ease-in-out infinite; }
.tc-loader-fade .b:nth-child(2){animation-delay:.2s}
.tc-loader-fade .b:nth-child(3){animation-delay:.4s}
.tc-loader-fade .b:nth-child(4){animation-delay:.6s}
.tc-loader-fade .b:nth-child(5){animation-delay:.8s}

@keyframes tc-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
.tc-loader-spinner { display:inline-flex;position:relative;width:40px;height:40px;animation:tc-spin 1s linear infinite; }
.tc-loader-spinner .b { position:absolute;width:9px;height:9px;border-radius:50%;background:currentColor; }
.tc-loader-spinner .b:nth-child(1){top:0;left:50%;margin-left:-4.5px;opacity:1}
.tc-loader-spinner .b:nth-child(2){top:14%;right:14%;opacity:.8}
.tc-loader-spinner .b:nth-child(3){top:50%;right:0;margin-top:-4.5px;opacity:.6}
.tc-loader-spinner .b:nth-child(4){bottom:14%;right:14%;opacity:.4}
.tc-loader-spinner .b:nth-child(5){bottom:0;left:50%;margin-left:-4.5px;opacity:.25}
.tc-loader-spinner .b:nth-child(6){bottom:14%;left:14%;opacity:.15}
.tc-loader-spinner .b:nth-child(7){top:50%;left:0;margin-top:-4.5px;opacity:.08}
.tc-loader-spinner .b:nth-child(8){top:14%;left:14%;opacity:.04}

@keyframes tc-spring { 0%{transform:scale(1,1)} 30%{transform:scale(1.3,.7)} 55%{transform:scale(.8,1.2)} 75%{transform:scale(1.1,.9)} 90%{transform:scale(.97,1.04)} 100%{transform:scale(1,1)} }
.tc-loader-spring .b { width:12px;height:12px;border-radius:50%;background:currentColor;animation:tc-spring 1.2s ease infinite; }
.tc-loader-spring .b:nth-child(2){animation-delay:.2s}
.tc-loader-spring .b:nth-child(3){animation-delay:.4s}

@keyframes tc-dna { 0%,100%{transform:translateY(0) scale(1);opacity:1} 25%{transform:translateY(-10px) scale(.6);opacity:.5} 50%{transform:translateY(0) scale(.3);opacity:.2} 75%{transform:translateY(10px) scale(.6);opacity:.5} }
.tc-loader-dna { display:inline-flex;align-items:center;gap:5px; }
.tc-loader-dna .strand { display:inline-flex;flex-direction:column;gap:5px; }
.tc-loader-dna .strand .b { width:9px;height:9px;border-radius:50%;background:currentColor;animation:tc-dna 1.6s ease-in-out infinite; }
.tc-loader-dna .s1 .b:nth-child(1){animation-delay:0s}
.tc-loader-dna .s1 .b:nth-child(2){animation-delay:.2s}
.tc-loader-dna .s1 .b:nth-child(3){animation-delay:.4s}
.tc-loader-dna .s2 .b { opacity:.6; }
.tc-loader-dna .s2 .b:nth-child(1){animation-delay:.8s}
.tc-loader-dna .s2 .b:nth-child(2){animation-delay:1s}
.tc-loader-dna .s2 .b:nth-child(3){animation-delay:1.2s}
`;

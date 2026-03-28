const chapters = [
  // ===== KAPITEL 1: TAL & BERÄKNINGAR =====
  {
    id: 1,
    title: "Tal & Beräkningar",
    points: "Snitt 10,3 p/prov",
    tags: ["Utan hjälpmedel"],
    videos: [],
    theory: `
      <h3>Tal och beräkningar</h3>

      <h4>Prioriteringsregler</h4>
      <p>När ett uttryck innehåller flera räknesteg gäller följande ordning:</p>
      <div class="formula-box">
        <p>1. Parenteser</p>
        <p>2. Potenser och rötter</p>
        <p>3. Multiplikation och division (vänster till höger)</p>
        <p>4. Addition och subtraktion (vänster till höger)</p>
      </div>
      <p>Exempel: \\( 3 + 2 \\cdot 4 = 3 + 8 = 11 \\) (inte \\(20\\)).</p>

      <h4>Potenser</h4>
      <p>En potens är upprepad multiplikation:</p>
      <div class="formula-box">
        \\[ a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ faktorer}} \\]
      </div>
      <p>Viktiga potensregler:</p>
      <div class="formula-box">
        <p>\\( a^m \\cdot a^n = a^{m+n} \\)</p>
        <p>\\( \\dfrac{a^m}{a^n} = a^{m-n} \\)</p>
        <p>\\( (a^m)^n = a^{m \\cdot n} \\)</p>
        <p>\\( a^0 = 1 \\quad (a \\neq 0) \\)</p>
        <p>\\( a^{-n} = \\dfrac{1}{a^n} \\)</p>
      </div>

      <h4>Kvadratrötter</h4>
      <p>Kvadratroten ur ett tal \\(a\\) är det positiva tal som multiplicerat med sig självt ger \\(a\\):</p>
      <div class="formula-box">
        \\[ \\sqrt{a} = b \\quad \\Leftrightarrow \\quad b^2 = a, \\; b \\geq 0 \\]
      </div>
      <p>Exempel: \\(\\sqrt{25} = 5\\) eftersom \\(5^2 = 25\\).</p>

      <h4>Grundpotensform</h4>
      <p>Ett tal i grundpotensform skrivs som:</p>
      <div class="formula-box">
        \\[ a \\cdot 10^n \\quad \\text{dar } 1 \\leq a < 10 \\]
      </div>
      <p>Exempel: \\(4\\,500\\,000 = 4{,}5 \\cdot 10^6\\) och \\(0{,}0032 = 3{,}2 \\cdot 10^{-3}\\).</p>

      <h4>Enhetsomvandling</h4>
      <p>Vanliga omvandlingar:</p>
      <div class="formula-box">
        <p>\\(1 \\text{ km} = 1\\,000 \\text{ m}\\), \\(1 \\text{ m} = 10 \\text{ dm} = 100 \\text{ cm}\\)</p>
        <p>\\(1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2\\), \\(1 \\text{ dm}^3 = 1 \\text{ liter}\\)</p>
        <p>\\(1 \\text{ h} = 60 \\text{ min}\\), \\(1 \\text{ min} = 60 \\text{ s}\\)</p>
      </div>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "Beräkna \\( 5 + 3 \\cdot 2 - 4 \\).",
        solution: `
          <div class="solution-step">Enligt prioriteringsreglerna utför vi multiplikation före addition och subtraktion:</div>
          <div class="solution-step">\\( 5 + 3 \\cdot 2 - 4 = 5 + 6 - 4 = 7 \\)</div>
          <div class="solution-step"><strong>Svar: 7</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Beräkna \\( 8 - 2 \\cdot 3 + 1 \\).",
            solution: `
              <div class="solution-step">Multiplikation först: \\( 2 \\cdot 3 = 6 \\)</div>
              <div class="solution-step">\\( 8 - 6 + 1 = 3 \\)</div>
              <div class="solution-step"><strong>Svar: 3</strong></div>
            `
          },
          {
            text: "Beräkna \\( 12 \\div 4 + 3 \\cdot 2 - 5 \\).",
            solution: `
              <div class="solution-step">Division och multiplikation före addition och subtraktion:</div>
              <div class="solution-step">\\( 12 \\div 4 = 3 \\) och \\( 3 \\cdot 2 = 6 \\)</div>
              <div class="solution-step">\\( 3 + 6 - 5 = 4 \\)</div>
              <div class="solution-step"><strong>Svar: 4</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Beräkna \\( 2^5 \\).",
        solution: `
          <div class="solution-step">En potens betyder upprepad multiplikation. \\( 2^5 \\) betyder att vi multiplicerar 2 med sig självt 5 gånger:</div>
          <div class="solution-step">\\( 2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32 \\)</div>
          <div class="solution-step"><strong>Svar: 32</strong></div>
        `,
        videos: ["g1AjBNk95po&t=82"],
        variants: [
          {
            text: "Beräkna \\( 3^4 \\).",
            solution: `
              <div class="solution-step">Potensen \\( 3^4 \\) betyder att vi multiplicerar 3 med sig självt 4 gånger:</div>
              <div class="solution-step">\\( 3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 9 \\cdot 9 = 81 \\)</div>
              <div class="solution-step"><strong>Svar: 81</strong></div>
            `
          },
          {
            text: "En bakterie delar sig i två var timme. Hur många bakterier finns det efter 6 timmar om man börjar med en enda bakterie?",
            solution: `
              <div class="solution-step">Antalet fördubblas varje timme: \\( 2^6 \\)</div>
              <div class="solution-step">\\( 2^6 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 64 \\)</div>
              <div class="solution-step"><strong>Svar: 64 bakterier</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Beräkna \\( \\sqrt{144} \\).",
        solution: `
          <div class="solution-step">Vi söker ett tal som multiplicerat med sig självt ger 144.</div>
          <div class="solution-step">\\( 12 \\cdot 12 = 144 \\)</div>
          <div class="solution-step"><strong>Svar: 12</strong></div>
        `,
        videos: ["yZ5CSlSOguo"],
        variants: [
          {
            text: "Beräkna \\( \\sqrt{196} \\).",
            solution: `
              <div class="solution-step">Vi söker ett tal som multiplicerat med sig självt ger 196.</div>
              <div class="solution-step">\\( 14 \\cdot 14 = 196 \\)</div>
              <div class="solution-step"><strong>Svar: 14</strong></div>
            `
          },
          {
            text: "En kvadratisk trädgård har arean \\( 225 \\text{ m}^2 \\). Hur lång är varje sida?",
            solution: `
              <div class="solution-step">En kvadrats area = sida · sida = sida²</div>
              <div class="solution-step">Sidan = \\( \\sqrt{225} = 15 \\)</div>
              <div class="solution-step"><strong>Svar: 15 m</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "Förenkla \\( \\dfrac{3^5 \\cdot 3^2}{3^4} \\).",
        solution: `
          <div class="solution-step">Vi använder potenslagarna \\( a^m \\cdot a^n = a^{m+n} \\) och \\( \\dfrac{a^m}{a^n} = a^{m-n} \\).</div>
          <div class="solution-step">\\( \\dfrac{3^5 \\cdot 3^2}{3^4} = \\dfrac{3^{5+2}}{3^4} = \\dfrac{3^7}{3^4} = 3^{7-4} = 3^3 = 27 \\)</div>
          <div class="solution-step"><strong>Svar: 27</strong></div>
        `,
        videos: ["ybEBnW-r9rY", "sAUCHhqC9yo"],
        variants: [
          {
            text: "Förenkla \\( \\dfrac{2^4 \\cdot 2^3}{2^5} \\).",
            solution: `
              <div class="solution-step">Vi använder potenslagarna: vid multiplikation adderas exponenterna, vid division subtraheras de.</div>
              <div class="solution-step">\\( \\dfrac{2^4 \\cdot 2^3}{2^5} = \\dfrac{2^{4+3}}{2^5} = \\dfrac{2^7}{2^5} = 2^{7-5} = 2^2 = 4 \\)</div>
              <div class="solution-step"><strong>Svar: 4</strong></div>
            `
          },
          {
            text: "Förenkla \\( \\dfrac{5^6}{5^4} \\).",
            solution: `
              <div class="solution-step">Vi använder potenslagen \\( \\dfrac{a^m}{a^n} = a^{m-n} \\).</div>
              <div class="solution-step">\\( \\dfrac{5^6}{5^4} = 5^{6-4} = 5^2 = 25 \\)</div>
              <div class="solution-step"><strong>Svar: 25</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "Skriv talet \\( 0{,}000\\,045 \\) i grundpotensform.",
        solution: `
          <div class="solution-step">Vi flyttar decimalkommat så att vi får ett tal mellan 1 och 10.</div>
          <div class="solution-step">\\( 0{,}000\\,045 = 4{,}5 \\cdot 10^{-5} \\)</div>
          <div class="solution-step">Vi flyttade kommat 5 steg åt höger, därför är exponenten \\(-5\\).</div>
          <div class="solution-step"><strong>Svar: \\( 4{,}5 \\cdot 10^{-5} \\)</strong></div>
        `,
        videos: ["YRF3wph3mEU"],
        variants: [
          {
            text: "Skriv talet \\( 3\\,200\\,000 \\) i grundpotensform.",
            solution: `
              <div class="solution-step">Vi flyttar decimalkommat så att vi får ett tal mellan 1 och 10.</div>
              <div class="solution-step">\\( 3\\,200\\,000 = 3{,}2 \\cdot 10^{6} \\)</div>
              <div class="solution-step">Vi flyttade kommat 6 steg åt vänster, därför är exponenten 6.</div>
              <div class="solution-step"><strong>Svar: \\( 3{,}2 \\cdot 10^{6} \\)</strong></div>
            `
          },
          {
            text: "Skriv \\( 7{,}5 \\cdot 10^{-4} \\) som ett vanligt decimaltal.",
            solution: `
              <div class="solution-step">Exponenten \\(-4\\) betyder att vi flyttar kommat 4 steg åt vänster.</div>
              <div class="solution-step">\\( 7{,}5 \\cdot 10^{-4} = 0{,}000\\,75 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 0{,}000\\,75 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "Beräkna \\( (2 + 3)^2 - \\sqrt{81} \\cdot 2 \\).",
        solution: `
          <div class="solution-step">Vi börjar med parentesen: \\( (2+3)^2 = 5^2 = 25 \\)</div>
          <div class="solution-step">Sedan roten: \\( \\sqrt{81} = 9 \\)</div>
          <div class="solution-step">Multiplikation före subtraktion: \\( 25 - 9 \\cdot 2 = 25 - 18 = 7 \\)</div>
          <div class="solution-step"><strong>Svar: 7</strong></div>
        `,
        videos: ["AHyKAgzQJuY"],
        variants: [
          {
            text: "Beräkna \\( \\sqrt{49} \\cdot 3 + 4^2 - 10 \\).",
            solution: `
              <div class="solution-step">Vi beräknar först rötter och potenser enligt prioriteringsreglerna:</div>
              <div class="solution-step">\\( \\sqrt{49} = 7 \\) och \\( 4^2 = 16 \\)</div>
              <div class="solution-step">Sedan multiplikation före addition och subtraktion: \\( 7 \\cdot 3 + 16 - 10 = 21 + 16 - 10 = 27 \\)</div>
              <div class="solution-step"><strong>Svar: 27</strong></div>
            `
          },
          {
            text: "Beräkna \\( (10 - \\sqrt{36})^2 + 2^3 \\).",
            solution: `
              <div class="solution-step">Vi börjar med att beräkna roten och lösa parentesen först:</div>
              <div class="solution-step">\\( \\sqrt{36} = 6 \\), så parentesen: \\( (10-6)^2 = 4^2 = 16 \\)</div>
              <div class="solution-step">Sedan beräknar vi potensen: \\( 2^3 = 8 \\)</div>
              <div class="solution-step">Till sist adderar vi: \\( 16 + 8 = 24 \\)</div>
              <div class="solution-step"><strong>Svar: 24</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "Ljusets hastighet är ungefär \\( 3{,}0 \\cdot 10^8 \\) m/s. Hur lång tid tar det för ljuset att färdas från solen till jorden, om avståndet är \\( 1{,}5 \\cdot 10^{11} \\) m? Svara i minuter.",
        solution: `
          <div class="solution-step">Tid = sträcka / hastighet:</div>
          <div class="solution-step">\\( t = \\dfrac{1{,}5 \\cdot 10^{11}}{3{,}0 \\cdot 10^8} = \\dfrac{1{,}5}{3{,}0} \\cdot 10^{11-8} = 0{,}5 \\cdot 10^3 = 500 \\text{ s} \\)</div>
          <div class="solution-step">Omvandla till minuter: \\( \\dfrac{500}{60} \\approx 8{,}3 \\text{ min} \\)</div>
          <div class="solution-step"><strong>Svar: Ungefär 8 minuter och 20 sekunder</strong></div>
        `,
        videos: ["kiDp0r5qhWQ"],
        variants: [
          {
            text: "Jordens befolkning är ungefär \\( 8{,}0 \\cdot 10^9 \\). Om alla ställde sig i en kö med \\( 0{,}5 \\) meter mellan varje person, hur lång skulle kön bli? Svara i kilometer i grundpotensform.",
            solution: `
              <div class="solution-step">Total längd = antal · avstånd:</div>
              <div class="solution-step">\\( 8{,}0 \\cdot 10^9 \\cdot 0{,}5 = 4{,}0 \\cdot 10^9 \\text{ m} \\)</div>
              <div class="solution-step">Omvandla till km: \\( \\dfrac{4{,}0 \\cdot 10^9}{1000} = 4{,}0 \\cdot 10^6 \\text{ km} \\)</div>
              <div class="solution-step"><strong>Svar: \\( 4{,}0 \\cdot 10^6 \\) km</strong></div>
            `
          },
          {
            text: "En röd blodkropp har diametern \\( 7 \\cdot 10^{-6} \\) m. Hur många blodkroppar ryms i rad på en sträcka av 1 mm?",
            solution: `
              <div class="solution-step">Omvandla 1 mm till meter: \\( 1 \\text{ mm} = 10^{-3} \\text{ m} \\)</div>
              <div class="solution-step">Antal = \\( \\dfrac{10^{-3}}{7 \\cdot 10^{-6}} = \\dfrac{1}{7} \\cdot 10^{-3-(-6)} = \\dfrac{1}{7} \\cdot 10^3 \\approx 143 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 143 blodkroppar</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 8,
        text: "Visa att \\( \\dfrac{2^{10} \\cdot 4^3}{8^2} = 2^{10} \\).",
        solution: `
          <div class="solution-step">Vi skriver om allt med basen 2:</div>
          <div class="solution-step">\\( 4^3 = (2^2)^3 = 2^6 \\)</div>
          <div class="solution-step">\\( 8^2 = (2^3)^2 = 2^6 \\)</div>
          <div class="solution-step">\\( \\dfrac{2^{10} \\cdot 2^6}{2^6} = 2^{10+6-6} = 2^{10} \\)</div>
          <div class="solution-step"><strong>VSB (vilket skulle bevisas)</strong></div>
        `,
        videos: ["FDsJ16UeDGA", "sAUCHhqC9yo"],
        variants: [
          {
            text: "Visa att \\( \\dfrac{3^6 \\cdot 9^2}{27^2} = 3^4 \\).",
            solution: `
              <div class="solution-step">Vi skriver om allt med basen 3:</div>
              <div class="solution-step">\\( 9^2 = (3^2)^2 = 3^4 \\)</div>
              <div class="solution-step">\\( 27^2 = (3^3)^2 = 3^6 \\)</div>
              <div class="solution-step">\\( \\dfrac{3^6 \\cdot 3^4}{3^6} = 3^{6+4-6} = 3^4 \\)</div>
              <div class="solution-step"><strong>VSB (vilket skulle bevisas)</strong></div>
            `
          },
          {
            text: "Förenkla \\( \\dfrac{2^a \\cdot 4^b}{8^b} \\) och skriv svaret som en potens av 2.",
            solution: `
              <div class="solution-step">Vi skriver om med basen 2:</div>
              <div class="solution-step">\\( 4^b = (2^2)^b = 2^{2b} \\)</div>
              <div class="solution-step">\\( 8^b = (2^3)^b = 2^{3b} \\)</div>
              <div class="solution-step">\\( \\dfrac{2^a \\cdot 2^{2b}}{2^{3b}} = 2^{a+2b-3b} = 2^{a-b} \\)</div>
              <div class="solution-step"><strong>Svar: \\( 2^{a-b} \\)</strong></div>
            `
          }
        ]
      },
      // --- NYA UPPGIFTER Kap 1 ---
      {
        level: "E",
        num: 9,
        text: "Beräkna \\( 13{,}9 - 8{,}85 \\).",
        solution: `
          <div class="solution-step">Vi ställer upp subtraktionen med lika många decimaler:</div>
          <div class="solution-step">\\( 13{,}90 - 8{,}85 = 5{,}05 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 5{,}05 \\)</strong></div>
        `,
        videos: ["zNLYvCUCfJs"],
        variants: [
          {
            text: "Beräkna \\( 7{,}3 \\cdot 0{,}4 \\).",
            solution: `
              <div class="solution-step">Vi kan multiplicera decimaltal genom att först ta bort kommatecknen och sedan placera kommat rätt i svaret:</div>
              <div class="solution-step">\\( 73 \\cdot 4 = 292 \\). Totalt 2 decimaler, så vi flyttar kommat 2 steg: \\( 2{,}92 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 2{,}92 \\)</strong></div>
            `
          },
          {
            text: "Erik köper tre varor som kostar \\( 29{,}50 \\) kr, \\( 14{,}90 \\) kr och \\( 5{,}60 \\) kr. Hur mycket kostar varorna tillsammans?",
            solution: `
              <div class="solution-step">Vi adderar priserna steg för steg:</div>
              <div class="solution-step">\\( 29{,}50 + 14{,}90 = 44{,}40 \\)</div>
              <div class="solution-step">\\( 44{,}40 + 5{,}60 = 50{,}00 \\)</div>
              <div class="solution-step"><strong>Svar: 50 kr</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 10,
        text: "Hur många centimeter är \\( 3{,}5 \\) meter?",
        solution: `
          <div class="solution-step">Vi vet att 1 meter = 100 centimeter, så vi multiplicerar med 100:</div>
          <div class="solution-step">\\( 3{,}5 \\cdot 100 = 350 \\text{ cm} \\)</div>
          <div class="solution-step"><strong>Svar: 350 cm</strong></div>
        `,
        videos: ["9WWzaZdvlKE"],
        variants: [
          {
            text: "Omvandla \\( 4\\,500 \\) gram till kilogram.",
            solution: `
              <div class="solution-step">Vi vet att 1 kg = 1 000 g, så vi dividerar med 1 000:</div>
              <div class="solution-step">\\( \\dfrac{4\\,500}{1\\,000} = 4{,}5 \\text{ kg} \\)</div>
              <div class="solution-step"><strong>Svar: \\( 4{,}5 \\) kg</strong></div>
            `
          },
          {
            text: "En löparbana är 400 m lång. Kalle springer 5 varv. Hur många kilometer springer han?",
            solution: `
              <div class="solution-step">Först beräknar vi den totala sträckan i meter:</div>
              <div class="solution-step">\\( 400 \\cdot 5 = 2\\,000 \\text{ m} \\)</div>
              <div class="solution-step">Sedan omvandlar vi till kilometer genom att dela med 1 000:</div>
              <div class="solution-step">\\( \\dfrac{2\\,000}{1\\,000} = 2 \\text{ km} \\)</div>
              <div class="solution-step"><strong>Svar: 2 km</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 11,
        text: "Vilket av följande svar är rimligast för beräkningen \\( 49{,}8 \\cdot 3{,}02 \\)? <br>a) 15 &emsp; b) 150 &emsp; c) 1 500 &emsp; d) 15 000 <br>Motivera ditt svar med överslagsräkning.",
        solution: `
          <div class="solution-step">Vi avrundar: \\( 49{,}8 \\approx 50 \\) och \\( 3{,}02 \\approx 3 \\)</div>
          <div class="solution-step">Överslagsräkning: \\( 50 \\cdot 3 = 150 \\)</div>
          <div class="solution-step"><strong>Svar: b) 150</strong></div>
        `,
        videos: ["zY6EAzRYBUk"],
        variants: [
          {
            text: "Uppskatta \\( \\sqrt{48} \\) utan miniräknare. <br>a) 5 &emsp; b) 7 &emsp; c) 10 &emsp; d) 25 <br>Motivera ditt svar.",
            solution: `
              <div class="solution-step">Vi vet att \\( 7^2 = 49 \\), alltså \\( \\sqrt{49} = 7 \\).</div>
              <div class="solution-step">Eftersom 48 ligger strax under 49 måste \\( \\sqrt{48} \\approx 7 \\).</div>
              <div class="solution-step"><strong>Svar: b) 7</strong></div>
            `
          },
          {
            text: "Sara beräknar \\( 312 \\cdot 19 \\) och får svaret \\( 62\\,280 \\). Kan det stämma? Använd överslagsräkning.",
            solution: `
              <div class="solution-step">Överslagsräkning: \\( 300 \\cdot 20 = 6\\,000 \\)</div>
              <div class="solution-step">Saras svar \\( 62\\,280 \\) är ungefär 10 gånger för stort.</div>
              <div class="solution-step">Korrekt: \\( 312 \\cdot 19 = 312 \\cdot 20 - 312 = 6\\,240 - 312 = 5\\,928 \\)</div>
              <div class="solution-step"><strong>Svar: Nej, det stämmer inte. Svaret borde vara ungefär 6 000.</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 2: BRÅK & NEGATIVA TAL =====
  {
    id: 2,
    title: "Bråk & Negativa tal",
    points: "Snitt 3,0 p/prov",
    tags: ["Utan hjälpmedel"],
    videos: [],
    theory: `
      <h3>Bråk och negativa tal</h3>

      <h4>Bråkräkning - Grunder</h4>
      <p>Ett bråk bestar av en täljare (overst) och en nämnäre (underst): \\( \\dfrac{\\text{täljare}}{\\text{nämnäre}} \\)</p>

      <h4>Addition och subtraktion av bråk</h4>
      <p>For att addera eller subtrahera bråk maste de ha samma nämnäre:</p>
      <div class="formula-box">
        \\[ \\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c} \\]
        \\[ \\frac{a}{b} + \\frac{c}{d} = \\frac{a \\cdot d + c \\cdot b}{b \\cdot d} \\]
      </div>
      <p>Exempel: \\( \\dfrac{2}{3} + \\dfrac{1}{4} = \\dfrac{8}{12} + \\dfrac{3}{12} = \\dfrac{11}{12} \\)</p>

      <h4>Multiplikation av bråk</h4>
      <div class="formula-box">
        \\[ \\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} \\]
      </div>
      <p>Exempel: \\( \\dfrac{2}{3} \\cdot \\dfrac{3}{5} = \\dfrac{6}{15} = \\dfrac{2}{5} \\)</p>

      <h4>Division av bråk</h4>
      <p>Division med ett bråk är detsamma som multiplikation med det inverterade bråket:</p>
      <div class="formula-box">
        \\[ \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} \\]
      </div>
      <p>Exempel: \\( \\dfrac{3}{4} \\div \\dfrac{2}{3} = \\dfrac{3}{4} \\cdot \\dfrac{3}{2} = \\dfrac{9}{8} = 1\\dfrac{1}{8} \\)</p>

      <h4>Negativa tal</h4>
      <p>Regler för räkning med negativa tal:</p>
      <div class="formula-box">
        <p>\\( (+) \\cdot (+) = (+) \\) och \\( (-) \\cdot (-) = (+) \\)</p>
        <p>\\( (+) \\cdot (-) = (-) \\) och \\( (-) \\cdot (+) = (-) \\)</p>
        <p>Samma regler gäller för division.</p>
        <p>\\( a - (-b) = a + b \\)</p>
      </div>
      <p>Exempel: \\( (-3) \\cdot (-4) = 12 \\) och \\( 5 - (-2) = 5 + 2 = 7 \\).</p>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "Beräkna \\( \\dfrac{2}{5} + \\dfrac{1}{5} \\).",
        solution: `
          <div class="solution-step">Bråken har redan samma nämnare (5).</div>
          <div class="solution-step">\\( \\dfrac{2}{5} + \\dfrac{1}{5} = \\dfrac{2+1}{5} = \\dfrac{3}{5} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{3}{5} \\)</strong></div>
        `,
        videos: ["EtZ6VBXyrhY"],
        variants: [
          {
            text: "Beräkna \\( \\dfrac{1}{3} + \\dfrac{1}{6} \\).",
            solution: `
              <div class="solution-step">Bråken har olika nämnare, så vi behöver gemensam nämnare. Minsta gemensamma nämnare för 3 och 6 är 6.</div>
              <div class="solution-step">Vi skriver om \\( \\dfrac{1}{3} \\) med nämnaren 6: \\( \\dfrac{1}{3} = \\dfrac{2}{6} \\)</div>
              <div class="solution-step">Nu kan vi addera: \\( \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{2} \\)</strong></div>
            `
          },
          {
            text: "Beräkna \\( \\dfrac{3}{8} + \\dfrac{1}{4} \\).",
            solution: `
              <div class="solution-step">Vi behöver gemensam nämnare. Minsta gemensamma nämnare för 8 och 4 är 8.</div>
              <div class="solution-step">Vi skriver om \\( \\dfrac{1}{4} \\) med nämnaren 8: \\( \\dfrac{1}{4} = \\dfrac{2}{8} \\)</div>
              <div class="solution-step">Nu kan vi addera: \\( \\dfrac{3}{8} + \\dfrac{2}{8} = \\dfrac{5}{8} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{5}{8} \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Beräkna \\( (-3) + (-5) \\).",
        solution: `
          <div class="solution-step">När vi adderar två negativa tal får vi ett negativt tal:</div>
          <div class="solution-step">\\( (-3) + (-5) = -(3+5) = -8 \\)</div>
          <div class="solution-step"><strong>Svar: \\( -8 \\)</strong></div>
        `,
        videos: ["MJ3wtw9yr44"],
        variants: [
          {
            text: "Beräkna \\( (-7) - (-3) \\).",
            solution: `
              <div class="solution-step">Minus och minus ger plus: \\( (-7) - (-3) = -7 + 3 = -4 \\)</div>
              <div class="solution-step"><strong>Svar: \\( -4 \\)</strong></div>
            `
          },
          {
            text: "Beräkna \\( 4 - (-6) + (-2) \\).",
            solution: `
              <div class="solution-step">Minus och minus ger plus: \\( 4 - (-6) = 4 + 6 = 10 \\)</div>
              <div class="solution-step">Att addera ett negativt tal är samma som att subtrahera: \\( 10 + (-2) = 10 - 2 = 8 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 8 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Beräkna \\( \\dfrac{3}{4} \\cdot \\dfrac{2}{3} \\).",
        solution: `
          <div class="solution-step">Vi multiplicerar täljarna och nämnarna var för sig:</div>
          <div class="solution-step">\\( \\dfrac{3}{4} \\cdot \\dfrac{2}{3} = \\dfrac{3 \\cdot 2}{4 \\cdot 3} = \\dfrac{6}{12} = \\dfrac{1}{2} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{2} \\)</strong></div>
        `,
        videos: ["Ou1B8l-vyDY"],
        variants: [
          {
            text: "Beräkna \\( \\dfrac{5}{6} \\cdot \\dfrac{3}{10} \\).",
            solution: `
              <div class="solution-step">Vi multiplicerar täljare med täljare och nämnare med nämnare, sedan förkortar vi:</div>
              <div class="solution-step">\\( \\dfrac{5}{6} \\cdot \\dfrac{3}{10} = \\dfrac{15}{60} = \\dfrac{1}{4} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{4} \\)</strong></div>
            `
          },
          {
            text: "Beräkna \\( \\dfrac{2}{7} \\div \\dfrac{4}{7} \\).",
            solution: `
              <div class="solution-step">Division med bråk = multiplikation med det inverterade:</div>
              <div class="solution-step">\\( \\dfrac{2}{7} \\div \\dfrac{4}{7} = \\dfrac{2}{7} \\cdot \\dfrac{7}{4} = \\dfrac{14}{28} = \\dfrac{1}{2} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{2} \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "Beräkna \\( \\dfrac{3}{4} - \\dfrac{2}{3} \\).",
        solution: `
          <div class="solution-step">Vi behöver gemensam nämnare. MGN för 4 och 3 är 12.</div>
          <div class="solution-step">Vi skriver om bråken: \\( \\dfrac{3}{4} = \\dfrac{9}{12} \\quad \\text{och} \\quad \\dfrac{2}{3} = \\dfrac{8}{12} \\)</div>
          <div class="solution-step">Nu subtraherar vi: \\( \\dfrac{9}{12} - \\dfrac{8}{12} = \\dfrac{1}{12} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{12} \\)</strong></div>
        `,
        videos: ["ZPwU50R6BmA"],
        variants: [
          {
            text: "Beräkna \\( \\dfrac{5}{6} - \\dfrac{3}{8} \\).",
            solution: `
              <div class="solution-step">Vi behöver gemensam nämnare för att kunna subtrahera. MGN för 6 och 8 är 24.</div>
              <div class="solution-step">Vi skriver om bråken: \\( \\dfrac{5}{6} = \\dfrac{20}{24} \\quad \\text{och} \\quad \\dfrac{3}{8} = \\dfrac{9}{24} \\)</div>
              <div class="solution-step">Nu subtraherar vi täljarna: \\( \\dfrac{20}{24} - \\dfrac{9}{24} = \\dfrac{11}{24} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{11}{24} \\)</strong></div>
            `
          },
          {
            text: "Beräkna \\( \\dfrac{7}{10} + \\dfrac{2}{3} - \\dfrac{1}{5} \\).",
            solution: `
              <div class="solution-step">Alla tre bråk behöver samma nämnare. MGN för 10, 3 och 5 är 30.</div>
              <div class="solution-step">Vi skriver om alla bråk med nämnaren 30: \\( \\dfrac{7}{10} = \\dfrac{21}{30}, \\quad \\dfrac{2}{3} = \\dfrac{20}{30}, \\quad \\dfrac{1}{5} = \\dfrac{6}{30} \\)</div>
              <div class="solution-step">Nu räknar vi ut: \\( \\dfrac{21}{30} + \\dfrac{20}{30} - \\dfrac{6}{30} = \\dfrac{35}{30} = \\dfrac{7}{6} = 1\\dfrac{1}{6} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{7}{6} = 1\\dfrac{1}{6} \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "Beräkna \\( (-4) \\cdot 3 - (-2) \\cdot (-5) \\).",
        solution: `
          <div class="solution-step">Vi beräknar varje multiplikation för sig:</div>
          <div class="solution-step">Negativt gånger positivt ger negativt: \\( (-4) \\cdot 3 = -12 \\)</div>
          <div class="solution-step">Minus gånger minus ger plus: \\( (-2) \\cdot (-5) = 10 \\)</div>
          <div class="solution-step">Till sist subtraherar vi: \\( -12 - 10 = -22 \\)</div>
          <div class="solution-step"><strong>Svar: \\( -22 \\)</strong></div>
        `,
        videos: ["MJ3wtw9yr44"],
        variants: [
          {
            text: "Beräkna \\( (-6) \\div 2 + (-3)^2 \\).",
            solution: `
              <div class="solution-step">Vi beräknar division och potens före addition:</div>
              <div class="solution-step">Divisionen: \\( (-6) \\div 2 = -3 \\)</div>
              <div class="solution-step">Potensen (minus gånger minus ger plus): \\( (-3)^2 = (-3) \\cdot (-3) = 9 \\)</div>
              <div class="solution-step">Till sist adderar vi: \\( -3 + 9 = 6 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 6 \\)</strong></div>
            `
          },
          {
            text: "Beräkna \\( (-2)^3 + 5 \\cdot (-3) + 10 \\).",
            solution: `
              <div class="solution-step">Vi beräknar potens och multiplikation först enligt prioriteringsreglerna:</div>
              <div class="solution-step">Potensen (udda exponent ger negativt): \\( (-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8 \\)</div>
              <div class="solution-step">Multiplikationen (plus gånger minus ger minus): \\( 5 \\cdot (-3) = -15 \\)</div>
              <div class="solution-step">Till sist adderar vi allt: \\( -8 + (-15) + 10 = -8 - 15 + 10 = -13 \\)</div>
              <div class="solution-step"><strong>Svar: \\( -13 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "Ordna följande bråk i storleksordning från minst till störst: \\( \\dfrac{2}{3}, \\; \\dfrac{3}{5}, \\; \\dfrac{5}{8} \\).",
        solution: `
          <div class="solution-step">För att jämföra bråk behöver vi gemensam nämnare. MGN för 3, 5 och 8 är 120.</div>
          <div class="solution-step">Vi skriver om alla bråk: \\( \\dfrac{2}{3} = \\dfrac{80}{120}, \\quad \\dfrac{3}{5} = \\dfrac{72}{120}, \\quad \\dfrac{5}{8} = \\dfrac{75}{120} \\)</div>
          <div class="solution-step">Ordning från minst till störst: \\( \\dfrac{72}{120} < \\dfrac{75}{120} < \\dfrac{80}{120} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{3}{5} < \\dfrac{5}{8} < \\dfrac{2}{3} \\)</strong></div>
        `,
        videos: ["kDcPQsKls7k"],
        variants: [
          {
            text: "Ordna bråken \\( \\dfrac{1}{2}, \\; \\dfrac{3}{7}, \\; \\dfrac{4}{9} \\) i storleksordning från minst till störst.",
            solution: `
              <div class="solution-step">För att jämföra bråk skriver vi om dem med gemensam nämnare. MGN för 2, 7 och 9 är 126.</div>
              <div class="solution-step">Vi skriver om bråken: \\( \\dfrac{1}{2} = \\dfrac{63}{126}, \\quad \\dfrac{3}{7} = \\dfrac{54}{126}, \\quad \\dfrac{4}{9} = \\dfrac{56}{126} \\)</div>
              <div class="solution-step">Nu jämför vi täljarna: 54 < 56 < 63, så ordningen blir:</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{3}{7} < \\dfrac{4}{9} < \\dfrac{1}{2} \\)</strong></div>
            `
          },
          {
            text: "Vilket bråk är störst: \\( \\dfrac{7}{12} \\) eller \\( \\dfrac{5}{9} \\)? Motivera ditt svar.",
            solution: `
              <div class="solution-step">Vi skriver om bråken med gemensam nämnare för att kunna jämföra. MGN för 12 och 9 är 36.</div>
              <div class="solution-step">Vi skriver om bråken: \\( \\dfrac{7}{12} = \\dfrac{21}{36} \\quad \\text{och} \\quad \\dfrac{5}{9} = \\dfrac{20}{36} \\)</div>
              <div class="solution-step">Eftersom \\( \\dfrac{21}{36} > \\dfrac{20}{36} \\) är \\( \\dfrac{7}{12} \\) störst.</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{7}{12} \\) är störst</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "Beräkna \\( \\dfrac{2}{3} \\div \\dfrac{4}{9} + \\dfrac{1}{2} \\cdot \\dfrac{3}{5} \\).",
        solution: `
          <div class="solution-step">Enligt prioriteringsreglerna beräknar vi multiplikation/division före addition:</div>
          <div class="solution-step">Divisionen (vi multiplicerar med det inverterade): \\( \\dfrac{2}{3} \\div \\dfrac{4}{9} = \\dfrac{2}{3} \\cdot \\dfrac{9}{4} = \\dfrac{18}{12} = \\dfrac{3}{2} \\)</div>
          <div class="solution-step">Multiplikationen: \\( \\dfrac{1}{2} \\cdot \\dfrac{3}{5} = \\dfrac{3}{10} \\)</div>
          <div class="solution-step">Till sist adderar vi med gemensam nämnare 10: \\( \\dfrac{3}{2} + \\dfrac{3}{10} = \\dfrac{15}{10} + \\dfrac{3}{10} = \\dfrac{18}{10} = \\dfrac{9}{5} = 1\\dfrac{4}{5} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{9}{5} = 1\\dfrac{4}{5} \\)</strong></div>
        `,
        videos: ["hcwD9-RoQf4"],
        variants: [
          {
            text: "Beräkna \\( \\left(\\dfrac{3}{4} - \\dfrac{1}{3}\\right) \\cdot \\dfrac{6}{5} \\).",
            solution: `
              <div class="solution-step">Vi börjar med parentesen och hittar gemensam nämnare 12: \\( \\dfrac{3}{4} - \\dfrac{1}{3} = \\dfrac{9}{12} - \\dfrac{4}{12} = \\dfrac{5}{12} \\)</div>
              <div class="solution-step">Sedan multiplicerar vi resultatet med \\( \\dfrac{6}{5} \\): \\( \\dfrac{5}{12} \\cdot \\dfrac{6}{5} = \\dfrac{30}{60} = \\dfrac{1}{2} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{2} \\)</strong></div>
            `
          },
          {
            text: "Beräkna \\( \\dfrac{5}{6} \\div \\left(\\dfrac{2}{3} + \\dfrac{1}{4}\\right) \\).",
            solution: `
              <div class="solution-step">Vi börjar med parentesen och hittar gemensam nämnare 12: \\( \\dfrac{2}{3} + \\dfrac{1}{4} = \\dfrac{8}{12} + \\dfrac{3}{12} = \\dfrac{11}{12} \\)</div>
              <div class="solution-step">Sedan dividerar vi, dvs. multiplicerar med det inverterade bråket: \\( \\dfrac{5}{6} \\div \\dfrac{11}{12} = \\dfrac{5}{6} \\cdot \\dfrac{12}{11} = \\dfrac{60}{66} = \\dfrac{10}{11} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{10}{11} \\)</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 3: PROCENT =====
  {
    id: 3,
    title: "Procent",
    points: "Snitt 6,3 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Procent</h3>

      <h4>Grundläggande procentberäkningar</h4>
      <p>Procent betyder hundradel: \\( 1\\% = \\dfrac{1}{100} = 0{,}01 \\)</p>
      <div class="formula-box">
        <p><strong>Beräkna delen:</strong> \\( \\text{delen} = \\text{procentsatsen} \\cdot \\text{det hela} \\)</p>
        <p><strong>Beräkna procentsatsen:</strong> \\( \\text{procentsats} = \\dfrac{\\text{delen}}{\\text{det hela}} \\)</p>
        <p><strong>Beräkna det hela:</strong> \\( \\text{det hela} = \\dfrac{\\text{delen}}{\\text{procentsatsen}} \\)</p>
      </div>
      <p>Exempel: 30 % av 250 = \\( 0{,}30 \\cdot 250 = 75 \\).</p>

      <h4>Procentuell förändring</h4>
      <div class="formula-box">
        \\[ \\text{förändring i procent} = \\frac{\\text{nytt värde} - \\text{gammalt värde}}{\\text{gammalt värde}} \\cdot 100 \\]
      </div>
      <p>Exempel: Ett pris ökar från 200 kr till 250 kr. Förändringen är \\( \\dfrac{250-200}{200} \\cdot 100 = 25\\% \\).</p>

      <h4>Förändringsfaktor</h4>
      <p>Förändringsfaktorn beskriver förhållandet mellan nytt och gammalt värde:</p>
      <div class="formula-box">
        <p><strong>Okning med \\(p\\%\\):</strong> förändringsfaktor \\( = 1 + \\dfrac{p}{100} \\)</p>
        <p><strong>Minskning med \\(p\\%\\):</strong> förändringsfaktor \\( = 1 - \\dfrac{p}{100} \\)</p>
        <p><strong>Nytt värde:</strong> \\( \\text{nytt} = \\text{gammalt} \\cdot \\text{förändringsfaktor} \\)</p>
      </div>
      <p>Exempel: En vara kostar 400 kr och priset ökar med 15 %. Förändringsfaktor = \\(1{,}15\\). Nytt pris = \\(400 \\cdot 1{,}15 = 460\\) kr.</p>

      <h4>Upprepad procentuell förändring</h4>
      <p>Om en förändring upprepas flera gånger multiplicerar man med förändringsfaktorn lika många gånger:</p>
      <div class="formula-box">
        \\[ \\text{slutvärde} = \\text{startvärde} \\cdot (\\text{förändringsfaktor})^n \\]
      </div>
      <p>dar \\(n\\) är antalet förändringar.</p>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "Beräkna 25 % av 480 kr.",
        solution: `
          <div class="solution-step">Vi skriver om procentsatsen som ett decimaltal:</div>
          <div class="solution-step">\\( 25\\% = 0{,}25 \\)</div>
          <div class="solution-step">Vi multiplicerar decimaltalet med beloppet:</div>
          <div class="solution-step">\\( 0{,}25 \\cdot 480 = 120 \\)</div>
          <div class="solution-step"><strong>Svar: 120 kr</strong></div>
        `,
        videos: ["CGS8Y1U9r-M"],
        variants: [
          {
            text: "Beräkna 35 % av 600 kr.",
            solution: `
              <div class="solution-step">Vi skriver om procentsatsen som ett decimaltal:</div>
              <div class="solution-step">\\( 35\\% = 0{,}35 \\)</div>
              <div class="solution-step">Vi multiplicerar decimaltalet med beloppet:</div>
              <div class="solution-step">\\( 0{,}35 \\cdot 600 = 210 \\)</div>
              <div class="solution-step"><strong>Svar: 210 kr</strong></div>
            `
          },
          {
            text: "I ett paket finns 24 kakor. Emma äter 75 % av kakorna. Hur många kakor äter Emma?",
            solution: `
              <div class="solution-step">Vi räknar ut 75 % av 24 genom att skriva om procenten som decimaltal:</div>
              <div class="solution-step">\\( 75\\% = 0{,}75 \\)</div>
              <div class="solution-step">Sedan multiplicerar vi med antalet kakor:</div>
              <div class="solution-step">\\( 0{,}75 \\cdot 24 = 18 \\)</div>
              <div class="solution-step"><strong>Svar: 18 kakor</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "I en klass med 30 elever är 18 flickor. Hur många procent av klassen är flickor?",
        solution: `
          <div class="solution-step">Vi dividerar delen (18 flickor) med det hela (30 elever):</div>
          <div class="solution-step">\\( \\dfrac{18}{30} = 0{,}60 = 60\\% \\)</div>
          <div class="solution-step"><strong>Svar: 60 %</strong></div>
        `,
        videos: ["vmcJbJVFHN8"],
        variants: [
          {
            text: "I en undersökning svarade 45 av 60 elever att de gillar fotboll. Hur stor andel i procent är det?",
            solution: `
              <div class="solution-step">Vi dividerar delen (45) med det hela (60) för att få andelen:</div>
              <div class="solution-step">\\( \\dfrac{45}{60} = 0{,}75 = 75\\% \\)</div>
              <div class="solution-step"><strong>Svar: 75 %</strong></div>
            `
          },
          {
            text: "En bok har 250 sidor. Hugo har läst 80 sidor. Hur stor del har han läst i procent?",
            solution: `
              <div class="solution-step">Vi dividerar antalet lästa sidor med det totala antalet sidor:</div>
              <div class="solution-step">\\( \\dfrac{80}{250} = 0{,}32 = 32\\% \\)</div>
              <div class="solution-step"><strong>Svar: 32 %</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "En jacka kostar 600 kr. Priset sänks med 20 %. Vad kostar jackan efter nedsättningen?",
        solution: `
          <div class="solution-step">Vi börjar med att räkna ut rabatten (20 % av 600 kr):</div>
          <div class="solution-step">Rabatten är \\( 0{,}20 \\cdot 600 = 120 \\) kr.</div>
          <div class="solution-step">Vi drar av rabatten från priset:</div>
          <div class="solution-step">Nytt pris: \\( 600 - 120 = 480 \\) kr.</div>
          <div class="solution-step">Alternativt kan man använda förändringsfaktorn direkt: \\( 600 \\cdot 0{,}80 = 480 \\) kr.</div>
          <div class="solution-step"><strong>Svar: 480 kr</strong></div>
        `,
        videos: ["5ypZ7Z4FLoY"],
        variants: [
          {
            text: "En cykel kostar 3 500 kr. Priset höjs med 12 %. Vad kostar cykeln efter prishöjningen?",
            solution: `
              <div class="solution-step">Vid en ökning med 12 % multiplicerar vi med förändringsfaktorn 1,12:</div>
              <div class="solution-step">\\( 3\\,500 \\cdot 1{,}12 = 3\\,920 \\) kr</div>
              <div class="solution-step"><strong>Svar: 3 920 kr</strong></div>
            `
          },
          {
            text: "En liter mjölk kostar 14 kr. Priset sänks med 15 %. Vad kostar mjölken efter sänkningen?",
            solution: `
              <div class="solution-step">Vid en sänkning med 15 % blir förändringsfaktorn: \\( 1 - 0{,}15 = 0{,}85 \\)</div>
              <div class="solution-step">Vi multiplicerar priset med förändringsfaktorn: \\( 14 \\cdot 0{,}85 = 11{,}90 \\) kr</div>
              <div class="solution-step"><strong>Svar: 11,90 kr</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "En bil kostade 180 000 kr när den var ny. Efter tre år har den minskat i värde med 15 % per år. Vad är bilen värd efter tre år?",
        solution: `
          <div class="solution-step">Bilen minskar med 15 % per år, så förändringsfaktorn blir: \\( 1 - 0{,}15 = 0{,}85 \\)</div>
          <div class="solution-step">Eftersom minskningen sker 3 år i rad använder vi upprepad förändring:</div>
          <div class="solution-step">\\( 180\\,000 \\cdot 0{,}85^3 \\)</div>
          <div class="solution-step">Vi beräknar \\( 0{,}85^3 = 0{,}614\\,125 \\)</div>
          <div class="solution-step">\\( 180\\,000 \\cdot 0{,}614\\,125 \\approx 110\\,543 \\) kr</div>
          <div class="solution-step"><strong>Svar: Ungefär 110 500 kr</strong></div>
        `,
        videos: ["seXbH8QXwxw"],
        variants: [
          {
            text: "Karin sätter in 10 000 kr på ett sparkonto med 3 % årlig ränta. Hur mycket har hon på kontot efter 4 år? Avrunda till hela kr.",
            solution: `
              <div class="solution-step">Räntan är 3 %, så förändringsfaktorn blir: \\( 1 + 0{,}03 = 1{,}03 \\)</div>
              <div class="solution-step">Efter 4 år med samma ränta använder vi upprepad förändring:</div>
              <div class="solution-step">\\( 10\\,000 \\cdot 1{,}03^4 \\)</div>
              <div class="solution-step">Vi beräknar \\( 1{,}03^4 = 1{,}03^2 \\cdot 1{,}03^2 = 1{,}0609 \\cdot 1{,}0609 \\approx 1{,}1255 \\)</div>
              <div class="solution-step">\\( 10\\,000 \\cdot 1{,}1255 \\approx 11\\,255 \\) kr</div>
              <div class="solution-step"><strong>Svar: Ungefär 11 255 kr</strong></div>
            `
          },
          {
            text: "En bys befolkning minskar med 5 % per år. Byn har 8 000 invånare. Hur många invånare finns det om 3 år? Avrunda till hela.",
            solution: `
              <div class="solution-step">Befolkningen minskar med 5 % per år, så förändringsfaktorn blir: \\( 1 - 0{,}05 = 0{,}95 \\)</div>
              <div class="solution-step">Vi multiplicerar med faktorn 3 gånger (ett per år):</div>
              <div class="solution-step">\\( 8\\,000 \\cdot 0{,}95^3 \\)</div>
              <div class="solution-step">Vi beräknar \\( 0{,}95^3 = 0{,}95 \\cdot 0{,}95 \\cdot 0{,}95 = 0{,}857\\,375 \\)</div>
              <div class="solution-step">\\( 8\\,000 \\cdot 0{,}857\\,375 = 6\\,859 \\)</div>
              <div class="solution-step"><strong>Svar: 6 859 invånare</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "En vara ökade i pris från 350 kr till 413 kr. Hur stor var den procentuella ökningen?",
        solution: `
          <div class="solution-step">Först räknar vi ut hur mycket priset ökade:</div>
          <div class="solution-step">Ökning: \\( 413 - 350 = 63 \\) kr</div>
          <div class="solution-step">Sedan dividerar vi ökningen med det ursprungliga priset:</div>
          <div class="solution-step">Procentuell ökning: \\( \\dfrac{63}{350} \\cdot 100 = 18\\% \\)</div>
          <div class="solution-step"><strong>Svar: 18 %</strong></div>
        `,
        videos: ["suit3XKWwa4"],
        variants: [
          {
            text: "En aktie gick från 125 kr till 90 kr. Beräkna den procentuella förändringen.",
            solution: `
              <div class="solution-step">Vi beräknar skillnaden mellan nytt och gammalt värde:</div>
              <div class="solution-step">Förändring: \\( 90 - 125 = -35 \\) kr</div>
              <div class="solution-step">Vi dividerar förändringen med det ursprungliga värdet:</div>
              <div class="solution-step">Procentuell förändring: \\( \\dfrac{-35}{125} \\cdot 100 = -28\\% \\)</div>
              <div class="solution-step"><strong>Svar: Aktien minskade med 28 %</strong></div>
            `
          },
          {
            text: "En hyra höjdes från 6 200 kr till 6 572 kr per månad. Hur stor var den procentuella höjningen?",
            solution: `
              <div class="solution-step">Vi räknar ut hur mycket hyran ökade:</div>
              <div class="solution-step">Ökning: \\( 6\\,572 - 6\\,200 = 372 \\) kr</div>
              <div class="solution-step">Vi dividerar ökningen med den ursprungliga hyran:</div>
              <div class="solution-step">Procentuell ökning: \\( \\dfrac{372}{6\\,200} \\cdot 100 = 6\\% \\)</div>
              <div class="solution-step"><strong>Svar: 6 %</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "Axel har satt in pengar på ett sparkonto med 2 % årlig ränta. Efter ett år har kontot 5 100 kr. Hur mycket satte han in från början?",
        solution: `
          <div class="solution-step">Med 2 % ränta blir förändringsfaktorn: \\( 1{,}02 \\)</div>
          <div class="solution-step">Vi vet att insättningen gånger faktorn ger slutbeloppet:</div>
          <div class="solution-step">\\( \\text{insättning} \\cdot 1{,}02 = 5\\,100 \\)</div>
          <div class="solution-step">Vi löser ut insättningen genom att dividera:</div>
          <div class="solution-step">\\( \\text{insättning} = \\dfrac{5\\,100}{1{,}02} = 5\\,000 \\)</div>
          <div class="solution-step"><strong>Svar: 5 000 kr</strong></div>
        `,
        videos: ["NIn9a4qZUvg"],
        variants: [
          {
            text: "En vara kostar 414 kr efter att priset har höjts med 15 %. Vad kostade varan innan höjningen?",
            solution: `
              <div class="solution-step">En höjning med 15 % ger förändringsfaktorn: \\( 1{,}15 \\)</div>
              <div class="solution-step">Vi vet att ursprungspriset gånger faktorn ger det nya priset:</div>
              <div class="solution-step">\\( \\text{ursprungspris} \\cdot 1{,}15 = 414 \\)</div>
              <div class="solution-step">Vi dividerar för att få ursprungspriset:</div>
              <div class="solution-step">\\( \\text{ursprungspris} = \\dfrac{414}{1{,}15} = 360 \\) kr</div>
              <div class="solution-step"><strong>Svar: 360 kr</strong></div>
            `
          },
          {
            text: "Efter en rea med 25 % rabatt kostar en tröja 270 kr. Vad var ordinarie priset?",
            solution: `
              <div class="solution-step">Vid 25 % rabatt blir förändringsfaktorn: \\( 1 - 0{,}25 = 0{,}75 \\)</div>
              <div class="solution-step">Vi vet att ordinarie pris gånger faktorn ger reapriset:</div>
              <div class="solution-step">\\( \\text{ordinarie} \\cdot 0{,}75 = 270 \\)</div>
              <div class="solution-step">Vi dividerar för att få ordinarie priset:</div>
              <div class="solution-step">\\( \\text{ordinarie} = \\dfrac{270}{0{,}75} = 360 \\) kr</div>
              <div class="solution-step"><strong>Svar: 360 kr</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "En butik sänker priset på en vara med 30 %. Nästa dag ökar de priset med 30 % igen. Är det nya priset samma som det ursprungliga? Förklara med beräkning.",
        solution: `
          <div class="solution-step">Låt det ursprungliga priset vara \\( P \\).</div>
          <div class="solution-step">Efter sänkning med 30 %: \\( P \\cdot 0{,}70 \\)</div>
          <div class="solution-step">Efter ökning med 30 % på det nya priset: \\( P \\cdot 0{,}70 \\cdot 1{,}30 = P \\cdot 0{,}91 \\)</div>
          <div class="solution-step">Priset är 91 % av ursprungspriset, alltså 9 % lägre.</div>
          <div class="solution-step"><strong>Svar: Nej, det nya priset är 9 % lägre än det ursprungliga.</strong></div>
        `,
        videos: ["rdbdWF1gpjQ"],
        variants: [
          {
            text: "En aktie stiger med 20 % en dag och sjunker med 20 % nästa dag. Visa att aktien inte har samma värde som innan.",
            solution: `
              <div class="solution-step">Låt startvärdet vara \\( P \\).</div>
              <div class="solution-step">Efter ökning med 20 %: \\( P \\cdot 1{,}20 \\)</div>
              <div class="solution-step">Efter minskning med 20 %: \\( P \\cdot 1{,}20 \\cdot 0{,}80 = P \\cdot 0{,}96 \\)</div>
              <div class="solution-step"><strong>Svar: Aktien är värd 96 % av startvärdet, alltså 4 % lägre.</strong></div>
            `
          },
          {
            text: "Lisa säger: 'Om jag först sänker priset med 50 % och sedan höjer med 50 % så är priset oförändrat.' Har Lisa rätt? Visa med beräkning.",
            solution: `
              <div class="solution-step">Låt priset vara \\( P \\).</div>
              <div class="solution-step">Efter sänkning med 50 %: \\( P \\cdot 0{,}50 \\)</div>
              <div class="solution-step">Efter höjning med 50 %: \\( P \\cdot 0{,}50 \\cdot 1{,}50 = P \\cdot 0{,}75 \\)</div>
              <div class="solution-step"><strong>Svar: Nej, Lisa har fel. Priset är 75 % av det ursprungliga, alltså 25 % lägre.</strong></div>
            `
          }
        ]
      },
      // --- E4 (NY): Förändringsfaktor ---
      {
        level: "E",
        num: 8,
        text: "Priset på en biobiljett höjs med 8 %. Biljetten kostade 120 kr. Bestäm förändringsfaktorn och beräkna det nya priset.",
        solution: `
          <div class="solution-step">Priset höjs med 8 %, så vi beräknar förändringsfaktorn: \\( 1 + 0{,}08 = 1{,}08 \\)</div>
          <div class="solution-step">Vi multiplicerar det gamla priset med faktorn för att få det nya:</div>
          <div class="solution-step">Nytt pris: \\( 120 \\cdot 1{,}08 = 129{,}60 \\) kr</div>
          <div class="solution-step"><strong>Svar: Förändringsfaktorn är 1,08 och det nya priset är 129,60 kr</strong></div>
        `,
        videos: ["5qJXN_L7k9A"],
        variants: [
          {
            text: "En butik sänker priset på en jacka med 35 %. Jackan kostade 800 kr. Bestäm förändringsfaktorn och beräkna det nya priset.",
            solution: `
              <div class="solution-step">Priset sänks med 35 %, så vi beräknar förändringsfaktorn: \\( 1 - 0{,}35 = 0{,}65 \\)</div>
              <div class="solution-step">Vi multiplicerar det gamla priset med faktorn:</div>
              <div class="solution-step">Nytt pris: \\( 800 \\cdot 0{,}65 = 520 \\) kr</div>
              <div class="solution-step"><strong>Svar: Förändringsfaktorn är 0,65 och det nya priset är 520 kr</strong></div>
            `
          },
          {
            text: "En vara kostar 450 kr. Förändringsfaktorn är 1,12. Beräkna det nya priset och hur stor procentuell ökning det motsvarar.",
            solution: `
              <div class="solution-step">Vi multiplicerar priset med förändringsfaktorn:</div>
              <div class="solution-step">Nytt pris: \\( 450 \\cdot 1{,}12 = 504 \\) kr</div>
              <div class="solution-step">För att se hur stor ökningen är tar vi faktorn minus 1:</div>
              <div class="solution-step">Förändringsfaktor 1,12 motsvarar en ökning med \\( 1{,}12 - 1 = 0{,}12 = 12\\% \\)</div>
              <div class="solution-step"><strong>Svar: Det nya priset är 504 kr, vilket motsvarar en ökning med 12 %</strong></div>
            `
          }
        ]
      },
      // --- C4 (NY): Tvåstegs textuppgift ---
      {
        level: "C",
        num: 9,
        text: "I en butik är det 20 % rabatt på alla kläder. Maja har dessutom ett stamkundskort som ger ytterligare 10 % rabatt på det redan nedsatta priset. Hon köper en tröja som ordinarie kostar 400 kr. Vad betalar hon?",
        solution: `
          <div class="solution-step">Vi tar en rabatt i taget. Först 20 % rabatt: \\( 400 \\cdot 0{,}80 = 320 \\) kr</div>
          <div class="solution-step">Sedan räknar vi ytterligare 10 % rabatt på det nya priset: \\( 320 \\cdot 0{,}90 = 288 \\) kr</div>
          <div class="solution-step">(OBS: Det är inte samma sak som 30 % rabatt! \\( 400 \\cdot 0{,}70 = 280 \\neq 288 \\))</div>
          <div class="solution-step"><strong>Svar: 288 kr</strong></div>
        `,
        videos: ["rdbdWF1gpjQ"],
        variants: [
          {
            text: "En bil kostar 200 000 kr. Första året minskar värdet med 20 %. Andra året minskar det med 15 %. Vad är bilen värd efter två år?",
            solution: `
              <div class="solution-step">Första året minskar värdet med 20 % (faktor 0,80):</div>
              <div class="solution-step">År 1: \\( 200\\,000 \\cdot 0{,}80 = 160\\,000 \\) kr</div>
              <div class="solution-step">Andra året minskar värdet med 15 % (faktor 0,85):</div>
              <div class="solution-step">År 2: \\( 160\\,000 \\cdot 0{,}85 = 136\\,000 \\) kr</div>
              <div class="solution-step"><strong>Svar: 136 000 kr</strong></div>
            `
          },
          {
            text: "Adam sätter in 5 000 kr på ett konto. Första året får han 4 % ränta. Andra året höjs räntan till 5 %. Hur mycket har Adam efter 2 år? Avrunda till hela kr.",
            solution: `
              <div class="solution-step">Första året får han 4 % ränta (faktor 1,04):</div>
              <div class="solution-step">År 1: \\( 5\\,000 \\cdot 1{,}04 = 5\\,200 \\) kr</div>
              <div class="solution-step">Andra året höjs räntan till 5 % (faktor 1,05):</div>
              <div class="solution-step">År 2: \\( 5\\,200 \\cdot 1{,}05 = 5\\,460 \\) kr</div>
              <div class="solution-step"><strong>Svar: 5 460 kr</strong></div>
            `
          }
        ]
      },
      // --- A2 (NY): Baklänges sammansatt förändring ---
      {
        level: "A",
        num: 10,
        text: "Efter att priset på en vara har höjts med 25 % och sedan sänkts med 10 % kostar varan 675 kr. Vad var det ursprungliga priset?",
        solution: `
          <div class="solution-step">Låt ursprungspriset vara \\( P \\).</div>
          <div class="solution-step">Vi sätter upp ekvationen med förändringsfaktorerna för +25 % och -10 %: \\( P \\cdot 1{,}25 \\cdot 0{,}90 = 675 \\)</div>
          <div class="solution-step">Vi förenklar vänsterledet: \\( P \\cdot 1{,}125 = 675 \\)</div>
          <div class="solution-step">Vi löser ut P genom att dividera: \\( P = \\dfrac{675}{1{,}125} = 600 \\) kr</div>
          <div class="solution-step"><strong>Svar: Det ursprungliga priset var 600 kr</strong></div>
        `,
        videos: ["j7uUqM2-8DY"],
        variants: [
          {
            text: "En akties värde ökade med 40 % under ett år och minskade sedan med 20 % under nästa år. Nu är aktien värd 560 kr. Vad var aktiens ursprungsvärde?",
            solution: `
              <div class="solution-step">Låt ursprungsvärdet vara \\( P \\).</div>
              <div class="solution-step">Vi sätter upp ekvationen med faktorerna för +40 % och -20 %:</div>
              <div class="solution-step">\\( P \\cdot 1{,}40 \\cdot 0{,}80 = 560 \\)</div>
              <div class="solution-step">Vi förenklar vänsterledet: \\( P \\cdot 1{,}12 = 560 \\)</div>
              <div class="solution-step">Vi löser ut P: \\( P = \\dfrac{560}{1{,}12} = 500 \\) kr</div>
              <div class="solution-step"><strong>Svar: Aktiens ursprungsvärde var 500 kr</strong></div>
            `
          },
          {
            text: "Befolkningen i en stad ökade med 10 % under 2024 och minskade med 5 % under 2025. Staden har nu 20 900 invånare. Hur stor var befolkningen i början av 2024?",
            solution: `
              <div class="solution-step">Låt den ursprungliga befolkningen vara \\( P \\).</div>
              <div class="solution-step">Vi sätter upp ekvationen med faktorerna för +10 % och -5 %:</div>
              <div class="solution-step">\\( P \\cdot 1{,}10 \\cdot 0{,}95 = 20\\,900 \\)</div>
              <div class="solution-step">Vi förenklar vänsterledet: \\( P \\cdot 1{,}045 = 20\\,900 \\)</div>
              <div class="solution-step">Vi löser ut P: \\( P = \\dfrac{20\\,900}{1{,}045} = 20\\,000 \\)</div>
              <div class="solution-step"><strong>Svar: Befolkningen var 20 000 i början av 2024</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 4: ALGEBRA: UTTRYCK & EKVATIONER =====
  {
    id: 4,
    title: "Algebra: Uttryck & Ekvationer",
    points: "Snitt 11,0 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Algebra: Uttryck och ekvationer</h3>

      <h4>Algebraiska uttryck</h4>
      <p>I algebraiska uttryck använder vi bokstaver (variabler) för att representera tal. Man kan förenkla uttryck genom att samla lika termer.</p>
      <div class="formula-box">
        <p>\\( 3x + 2x = 5x \\)</p>
        <p>\\( 4a + 3b - 2a + b = 2a + 4b \\)</p>
        <p>\\( 2 \\cdot 3x = 6x \\) och \\( x \\cdot x = x^2 \\)</p>
      </div>

      <h4>Multiplicera med parentes</h4>
      <div class="formula-box">
        <p>\\( a(b + c) = ab + ac \\)</p>
        <p>\\( 3(2x - 4) = 6x - 12 \\)</p>
      </div>

      <h4>Losa ekvationer</h4>
      <p>En ekvation är en likhet med en okänd. Vi löser den genom att isolera den okända:</p>
      <div class="formula-box">
        <p>Vi får gora samma sak på bada sidor av likhetstecknet:</p>
        <p>- Addera/subtrahera samma tal på bada sidor</p>
        <p>- Multiplicera/dividera med samma tal på bada sidor</p>
      </div>
      <p>Exempel: \\( 3x + 5 = 20 \\Rightarrow 3x = 15 \\Rightarrow x = 5 \\)</p>

      <h4>Ekvationssystem</h4>
      <p>Tva ekvationer med två obekanta löser man med substitutions- eller additionsmetoden.</p>
      <div class="formula-box">
        <p><strong>Substitutionsmetoden:</strong> Los ut en variabel ur en ekvation och sätt in i den andra.</p>
        <p><strong>Additionsmetoden:</strong> Addera/subtrahera ekvationerna för att eliminera en variabel.</p>
      </div>
      <p>Exempel med substitution:</p>
      <p>\\( y = 2x + 1 \\) och \\( 3x + y = 11 \\)</p>
      <p>Satt in: \\( 3x + (2x + 1) = 11 \\Rightarrow 5x = 10 \\Rightarrow x = 2 \\), \\( y = 5 \\)</p>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "Förenkla uttrycket \\( 5x + 3 - 2x + 7 \\).",
        solution: `
          <div class="solution-step">Samla x-termerna: \\( 5x - 2x = 3x \\)</div>
          <div class="solution-step">Samla konstanterna: \\( 3 + 7 = 10 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 3x + 10 \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Förenkla uttrycket \\( 4a + 3b - a + 2b \\).",
            solution: `
              <div class="solution-step">Samla a-termerna: \\( 4a - a = 3a \\)</div>
              <div class="solution-step">Samla b-termerna: \\( 3b + 2b = 5b \\)</div>
              <div class="solution-step"><strong>Svar: \\( 3a + 5b \\)</strong></div>
            `
          },
          {
            text: "Förenkla uttrycket \\( -2y + 8 + 5y - 3 \\).",
            solution: `
              <div class="solution-step">Samla y-termerna: \\( -2y + 5y = 3y \\)</div>
              <div class="solution-step">Samla konstanterna: \\( 8 - 3 = 5 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 3y + 5 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Lös ekvationen \\( 4x - 3 = 13 \\).",
        solution: `
          <div class="solution-step">Vi vill isolera \\( x \\). Börja med att flytta konstanten till höger:</div>
          <div class="solution-step">\\( 4x - 3 = 13 \\)</div>
          <div class="solution-step">Addera 3 på båda sidor: \\( 4x = 13 + 3 = 16 \\)</div>
          <div class="solution-step">Dividera med 4: \\( x = \\dfrac{16}{4} = 4 \\)</div>
          <div class="solution-step"><strong>Svar: \\( x = 4 \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Lös ekvationen \\( 7 - 2x = 1 \\).",
            solution: `
              <div class="solution-step">Vi vill isolera \\( x \\). Flytta 7 till höger sida:</div>
              <div class="solution-step">\\( 7 - 2x = 1 \\)</div>
              <div class="solution-step">Subtrahera 7 från båda sidor: \\( -2x = 1 - 7 = -6 \\)</div>
              <div class="solution-step">Dividera med \\(-2\\): \\( x = \\dfrac{-6}{-2} = 3 \\)</div>
              <div class="solution-step"><strong>Svar: \\( x = 3 \\)</strong></div>
            `
          },
          {
            text: "Fem lika stora påsar väger tillsammans 35 kg. Ställ upp en ekvation och beräkna vikten av en påse.",
            solution: `
              <div class="solution-step">Låt vikten av en påse vara \\( x \\) kg.</div>
              <div class="solution-step">Ekvation: \\( 5x = 35 \\)</div>
              <div class="solution-step">Dividera med 5: \\( x = \\dfrac{35}{5} = 7 \\)</div>
              <div class="solution-step"><strong>Svar: En påse väger 7 kg</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Utveckla och förenkla \\( 3(2x + 4) \\).",
        solution: `
          <div class="solution-step">Multiplicera in 3 i parentesen (distributiva lagen):</div>
          <div class="solution-step">\\( 3(2x + 4) = 3 \\cdot 2x + 3 \\cdot 4 = 6x + 12 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 6x + 12 \\)</strong></div>
        `,
        videos: ["HD7vdiPiOCA&t=238"],
        variants: [
          {
            text: "Utveckla och förenkla \\( -2(x - 5) \\).",
            solution: `
              <div class="solution-step">Multiplicera in \\(-2\\) i parentesen (tänk på teckenreglerna):</div>
              <div class="solution-step">\\( -2(x - 5) = -2 \\cdot x + (-2) \\cdot (-5) = -2x + 10 \\)</div>
              <div class="solution-step"><strong>Svar: \\( -2x + 10 \\)</strong></div>
            `
          },
          {
            text: "Utveckla och förenkla \\( 4(3a - 2) + 1 \\).",
            solution: `
              <div class="solution-step">Multiplicera in 4 i parentesen och förenkla sedan:</div>
              <div class="solution-step">\\( 4(3a - 2) + 1 = 12a - 8 + 1 = 12a - 7 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 12a - 7 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "Lös ekvationen \\( 3(x - 2) = 2(x + 3) \\).",
        solution: `
          <div class="solution-step">Utveckla parenteserna:</div>
          <div class="solution-step">\\( 3x - 6 = 2x + 6 \\)</div>
          <div class="solution-step">Flytta x-termerna till vänster och konstanterna till höger: \\( 3x - 2x = 6 + 6 \\)</div>
          <div class="solution-step">Förenkla: \\( x = 12 \\)</div>
          <div class="solution-step"><strong>Svar: \\( x = 12 \\)</strong></div>
        `,
        videos: ["HD7vdiPiOCA&t=238"],
        variants: [
          {
            text: "Lös ekvationen \\( 5(x + 1) = 3(x + 7) \\).",
            solution: `
              <div class="solution-step">Utveckla parenteserna: \\( 5x + 5 = 3x + 21 \\)</div>
              <div class="solution-step">Flytta x-termerna till vänster och konstanterna till höger: \\( 5x - 3x = 21 - 5 \\)</div>
              <div class="solution-step">Förenkla: \\( 2x = 16 \\)</div>
              <div class="solution-step">Dividera med 2: \\( x = 8 \\)</div>
              <div class="solution-step"><strong>Svar: \\( x = 8 \\)</strong></div>
            `
          },
          {
            text: "Lös ekvationen \\( 2(3x + 1) = 4(x + 3) - 2 \\).",
            solution: `
              <div class="solution-step">Utveckla parenteserna: \\( 6x + 2 = 4x + 12 - 2 \\)</div>
              <div class="solution-step">Förenkla högerledet: \\( 6x + 2 = 4x + 10 \\)</div>
              <div class="solution-step">Samla x-termerna till vänster och konstanter till höger: \\( 2x = 8 \\)</div>
              <div class="solution-step">Dividera med 2: \\( x = 4 \\)</div>
              <div class="solution-step"><strong>Svar: \\( x = 4 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "Alma tänker på ett tal. När hon multiplicerar talet med 4 och sedan adderar 7 får hon samma resultat som om hon multiplicerar talet med 2 och adderar 19. Vilket tal tänker Alma på? Ställ upp en ekvation och lös den.",
        solution: `
          <div class="solution-step">Låt talet vara \\( x \\).</div>
          <div class="solution-step">Ekvation: \\( 4x + 7 = 2x + 19 \\)</div>
          <div class="solution-step">Flytta x-termerna till vänster och konstanterna till höger: \\( 4x - 2x = 19 - 7 \\)</div>
          <div class="solution-step">Förenkla: \\( 2x = 12 \\)</div>
          <div class="solution-step">Dividera med 2: \\( x = 6 \\)</div>
          <div class="solution-step"><strong>Svar: Alma tänker på talet 6</strong></div>
        `,
        videos: ["HD7vdiPiOCA&t=238"],
        variants: [
          {
            text: "Lina är 3 år äldre än Max. Tillsammans är de 27 år. Hur gammal är Max? Ställ upp en ekvation.",
            solution: `
              <div class="solution-step">Låt Max ålder vara \\( x \\) år. Linas ålder: \\( x + 3 \\).</div>
              <div class="solution-step">Ekvation: \\( x + (x + 3) = 27 \\)</div>
              <div class="solution-step">Förenkla vänsterledet: \\( 2x + 3 = 27 \\)</div>
              <div class="solution-step">Subtrahera 3 och dividera med 2: \\( 2x = 24 \\Rightarrow x = 12 \\)</div>
              <div class="solution-step"><strong>Svar: Max är 12 år</strong></div>
            `
          },
          {
            text: "En rektangels längd är 5 cm mer än bredden. Omkretsen är 46 cm. Beräkna rektangelns mått.",
            solution: `
              <div class="solution-step">Låt bredden vara \\( b \\) cm. Längden: \\( b + 5 \\) cm.</div>
              <div class="solution-step">Ställ upp ekvation för omkretsen: \\( 2(b + b + 5) = 46 \\)</div>
              <div class="solution-step">Utveckla: \\( 2(2b + 5) = 46 \\Rightarrow 4b + 10 = 46 \\)</div>
              <div class="solution-step">Subtrahera 10 och dividera med 4: \\( 4b = 36 \\Rightarrow b = 9 \\)</div>
              <div class="solution-step"><strong>Svar: Bredden är 9 cm och längden är 14 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "Lös ekvationssystemet: \\[ \\begin{cases} x + y = 10 \\\\ 2x - y = 5 \\end{cases} \\]",
        solution: `
          <div class="solution-step">Additionsmetoden: Addera ekvationerna för att eliminera \\(y\\):</div>
          <div class="solution-step">\\( (x + y) + (2x - y) = 10 + 5 \\)</div>
          <div class="solution-step">\\( 3x = 15 \\Rightarrow x = 5 \\)</div>
          <div class="solution-step">Sätt in i första ekvationen: \\( 5 + y = 10 \\Rightarrow y = 5 \\)</div>
          <div class="solution-step"><strong>Svar: \\( x = 5, \\; y = 5 \\)</strong></div>
        `,
        videos: ["urrNKd-N_x8"],
        variants: [
          {
            text: "Lös ekvationssystemet: \\[ \\begin{cases} 3x + y = 11 \\\\ x - y = 1 \\end{cases} \\]",
            solution: `
              <div class="solution-step">Addera ekvationerna: \\( 3x + y + x - y = 11 + 1 \\)</div>
              <div class="solution-step">y-termerna tar ut varandra: \\( 4x = 12 \\Rightarrow x = 3 \\)</div>
              <div class="solution-step">Sätt in: \\( 3 - y = 1 \\Rightarrow y = 2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( x = 3, \\; y = 2 \\)</strong></div>
            `
          },
          {
            text: "Lös ekvationssystemet med substitution: \\[ \\begin{cases} 2x + 3y = 12 \\\\ x + y = 5 \\end{cases} \\]",
            solution: `
              <div class="solution-step">Från andra ekvationen: \\( x = 5 - y \\)</div>
              <div class="solution-step">Sätt in i första: \\( 2(5 - y) + 3y = 12 \\)</div>
              <div class="solution-step">Utveckla och förenkla: \\( 10 - 2y + 3y = 12 \\Rightarrow y = 2 \\)</div>
              <div class="solution-step">Beräkna x: \\( x = 5 - 2 = 3 \\)</div>
              <div class="solution-step"><strong>Svar: \\( x = 3, \\; y = 2 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "På ett café kostar 3 bullar och 2 koppar kaffe 115 kr. 2 bullar och 3 koppar kaffe kostar 110 kr. Vad kostar en bulle respektive en kopp kaffe?",
        solution: `
          <div class="solution-step">Låt en bulle kosta \\( b \\) kr och en kopp kaffe kosta \\( k \\) kr.</div>
          <div class="solution-step">Ekvationssystem:
          \\[ \\begin{cases} 3b + 2k = 115 \\\\ 2b + 3k = 110 \\end{cases} \\]</div>
          <div class="solution-step">Multiplicera första med 3 och andra med 2:</div>
          <div class="solution-step">\\( 9b + 6k = 345 \\) och \\( 4b + 6k = 220 \\)</div>
          <div class="solution-step">Subtrahera: \\( 5b = 125 \\Rightarrow b = 25 \\)</div>
          <div class="solution-step">Sätt in: \\( 3 \\cdot 25 + 2k = 115 \\Rightarrow 2k = 40 \\Rightarrow k = 20 \\)</div>
          <div class="solution-step"><strong>Svar: En bulle kostar 25 kr och en kopp kaffe kostar 20 kr</strong></div>
        `,
        videos: ["urrNKd-N_x8"],
        variants: [
          {
            text: "På en bio kostar 2 vuxenbiljetter och 3 barnbiljetter 290 kr. 1 vuxenbiljett och 4 barnbiljetter kostar 260 kr. Vad kostar varje biljetttyp?",
            solution: `
              <div class="solution-step">Låt vuxenbiljett = \\( v \\) kr, barnbiljett = \\( b \\) kr.</div>
              <div class="solution-step">\\[ \\begin{cases} 2v + 3b = 290 \\\\ v + 4b = 260 \\end{cases} \\]</div>
              <div class="solution-step">Från andra: \\( v = 260 - 4b \\)</div>
              <div class="solution-step">Sätt in: \\( 2(260 - 4b) + 3b = 290 \\Rightarrow 520 - 8b + 3b = 290 \\)</div>
              <div class="solution-step">Förenkla: \\( -5b = -230 \\Rightarrow b = 46 \\)</div>
              <div class="solution-step">Beräkna v: \\( v = 260 - 4 \\cdot 46 = 76 \\)</div>
              <div class="solution-step"><strong>Svar: En vuxenbiljett kostar 76 kr och en barnbiljett kostar 46 kr</strong></div>
            `
          },
          {
            text: "Lisa köper 4 kg äpplen och 2 kg päron för 116 kr. Erik köper 2 kg äpplen och 5 kg päron för 130 kr. Vad kostar 1 kg äpplen respektive 1 kg päron?",
            solution: `
              <div class="solution-step">Låt äpplen = \\( a \\) kr/kg, päron = \\( p \\) kr/kg.</div>
              <div class="solution-step">\\[ \\begin{cases} 4a + 2p = 116 \\\\ 2a + 5p = 130 \\end{cases} \\]</div>
              <div class="solution-step">Multiplicera andra med 2: \\( 4a + 10p = 260 \\)</div>
              <div class="solution-step">Subtrahera första: \\( 8p = 144 \\Rightarrow p = 18 \\)</div>
              <div class="solution-step">Sätt in p = 18 i första ekvationen: \\( 4a + 36 = 116 \\Rightarrow 4a = 80 \\Rightarrow a = 20 \\)</div>
              <div class="solution-step"><strong>Svar: 1 kg äpplen kostar 20 kr och 1 kg päron kostar 18 kr</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 8,
        text: "Förenkla uttrycket \\( 2(3x - 1) - 3(x - 4) + 5 \\) och beräkna värdet när \\( x = -2 \\).",
        solution: `
          <div class="solution-step">Utveckla parenteserna:</div>
          <div class="solution-step">\\( 6x - 2 - 3x + 12 + 5 \\)</div>
          <div class="solution-step">Samla termer: \\( 3x + 15 \\)</div>
          <div class="solution-step">Sätt in \\( x = -2 \\): \\( 3(-2) + 15 = -6 + 15 = 9 \\)</div>
          <div class="solution-step"><strong>Svar: Uttrycket förenklas till \\( 3x + 15 \\), och värdet är 9 när \\( x = -2 \\)</strong></div>
        `,
        videos: ["RfHOiQSPmO0", "3C7oXomfuaY"],
        variants: [
          {
            text: "Visa att uttrycken \\( 3(2x + 4) - 2(x - 1) \\) och \\( 4(x + 3) + 2 \\) alltid har samma värde.",
            solution: `
              <div class="solution-step">Förenkla första uttrycket: \\( 6x + 12 - 2x + 2 = 4x + 14 \\)</div>
              <div class="solution-step">Förenkla andra uttrycket: \\( 4x + 12 + 2 = 4x + 14 \\)</div>
              <div class="solution-step">Båda ger \\( 4x + 14 \\), alltså har de alltid samma värde.</div>
              <div class="solution-step"><strong>VSB (vilket skulle bevisas)</strong></div>
            `
          },
          {
            text: "Förenkla \\( (x + 3)^2 - (x + 1)(x + 5) \\).",
            solution: `
              <div class="solution-step">Utveckla första parentesen med kvadreringsregeln: \\( (x + 3)^2 = x^2 + 6x + 9 \\)</div>
              <div class="solution-step">Utveckla andra parentesen: \\( (x + 1)(x + 5) = x^2 + 6x + 5 \\)</div>
              <div class="solution-step">Beräkna differensen: \\( x^2 + 6x + 9 - x^2 - 6x - 5 = 4 \\)</div>
              <div class="solution-step"><strong>Svar: 4 (uttrycket har alltid värdet 4 oavsett x)</strong></div>
            `
          }
        ]
      },
      // --- NYA UPPGIFTER Kap 4 ---
      {
        level: "E",
        num: 9,
        text: "Beräkna värdet av \\( 2x^2 - 3x + 1 \\) när \\( x = 3 \\).",
        solution: `
          <div class="solution-step">Sätt in \\( x = 3 \\):</div>
          <div class="solution-step">\\( 2 \\cdot 3^2 - 3 \\cdot 3 + 1 = 2 \\cdot 9 - 9 + 1 = 18 - 9 + 1 = 10 \\)</div>
          <div class="solution-step"><strong>Svar: 10</strong></div>
        `,
        videos: ["3C7oXomfuaY"],
        variants: [
          {
            text: "Beräkna \\( 5a - 2b \\) när \\( a = 4 \\) och \\( b = -3 \\).",
            solution: `
              <div class="solution-step">Sätt in \\( a = 4 \\) och \\( b = -3 \\):</div>
              <div class="solution-step">\\( 5 \\cdot 4 - 2 \\cdot (-3) = 20 + 6 = 26 \\)</div>
              <div class="solution-step"><strong>Svar: 26</strong></div>
            `
          },
          {
            text: "Kostnaden för att hyra en bil beräknas med formeln \\( K = 250 + 3d \\), där \\( d \\) är antalet körda kilometer. Beräkna kostnaden för 80 km.",
            solution: `
              <div class="solution-step">Sätt in \\( d = 80 \\):</div>
              <div class="solution-step">\\( K = 250 + 3 \\cdot 80 = 250 + 240 = 490 \\)</div>
              <div class="solution-step"><strong>Svar: 490 kr</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 10,
        text: "Lös ekvationen \\( \\dfrac{x}{3} + 2 = 5 \\).",
        solution: `
          <div class="solution-step">Subtrahera 2 från båda sidor: \\( \\dfrac{x}{3} = 5 - 2 = 3 \\)</div>
          <div class="solution-step">Multiplicera med 3: \\( x = 3 \\cdot 3 = 9 \\)</div>
          <div class="solution-step"><strong>Svar: \\( x = 9 \\)</strong></div>
        `,
        videos: ["cOgz7prXQW4&t=125"],
        variants: [
          {
            text: "Lös ekvationen \\( \\dfrac{x}{4} - 1 = \\dfrac{x}{6} + 1 \\).",
            solution: `
              <div class="solution-step">Multiplicera alla termer med MGN = 12:</div>
              <div class="solution-step">Då får vi: \\( 3x - 12 = 2x + 12 \\)</div>
              <div class="solution-step">Flytta x-termerna till vänster och konstanterna till höger: \\( 3x - 2x = 12 + 12 \\)</div>
              <div class="solution-step">Förenkla: \\( x = 24 \\)</div>
              <div class="solution-step"><strong>Svar: \\( x = 24 \\)</strong></div>
            `
          },
          {
            text: "Hälften av ett tal minskat med 3 är 7. Ställ upp en ekvation och beräkna talet.",
            solution: `
              <div class="solution-step">Låt talet vara \\( x \\).</div>
              <div class="solution-step">Ekvation: \\( \\dfrac{x}{2} - 3 = 7 \\)</div>
              <div class="solution-step">Addera 3 på båda sidor och multiplicera med 2: \\( \\dfrac{x}{2} = 10 \\Rightarrow x = 20 \\)</div>
              <div class="solution-step"><strong>Svar: Talet är 20</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 11,
        text: "Faktorisera uttrycket \\( 6x + 12 \\).",
        solution: `
          <div class="solution-step">Båda termerna är delbara med 6:</div>
          <div class="solution-step">\\( 6x + 12 = 6(x + 2) \\)</div>
          <div class="solution-step"><strong>Svar: \\( 6(x + 2) \\)</strong></div>
        `,
        videos: ["Q6mozEOOlgI&t=318"],
        variants: [
          {
            text: "Faktorisera uttrycket \\( 15a - 10b \\).",
            solution: `
              <div class="solution-step">Båda termerna är delbara med 5:</div>
              <div class="solution-step">\\( 15a - 10b = 5(3a - 2b) \\)</div>
              <div class="solution-step"><strong>Svar: \\( 5(3a - 2b) \\)</strong></div>
            `
          },
          {
            text: "Faktorisera uttrycket \\( 4x^2 + 8x \\).",
            solution: `
              <div class="solution-step">Båda termerna är delbara med \\( 4x \\):</div>
              <div class="solution-step">\\( 4x^2 + 8x = 4x(x + 2) \\)</div>
              <div class="solution-step"><strong>Svar: \\( 4x(x + 2) \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 12,
        text: "En rektangels längd är dubbelt så stor som bredden. Omkretsen är 42 cm. Beräkna rektangelns area.",
        solution: `
          <div class="solution-step">Låt bredden vara \\( b \\). Längden: \\( 2b \\).</div>
          <div class="solution-step">Ställ upp ekvation för omkretsen: \\( 2(b + 2b) = 2 \\cdot 3b = 6b = 42 \\)</div>
          <div class="solution-step">Dividera med 6: \\( b = 7 \\) cm, längden \\( = 14 \\) cm.</div>
          <div class="solution-step">Beräkna arean: \\( 7 \\cdot 14 = 98 \\text{ cm}^2 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 98 \\text{ cm}^2 \\)</strong></div>
        `,
        videos: ["nhrNheLH5qU"],
        variants: [
          {
            text: "En likbent triangel har omkretsen 32 cm. Basen är 4 cm kortare än var och en av de lika långa sidorna. Hur långa är sidorna?",
            solution: `
              <div class="solution-step">Låt de lika sidorna vara \\( s \\) cm. Basen: \\( s - 4 \\) cm.</div>
              <div class="solution-step">Ställ upp ekvation för omkretsen: \\( s + s + (s - 4) = 32 \\)</div>
              <div class="solution-step">Förenkla och lös: \\( 3s - 4 = 32 \\Rightarrow 3s = 36 \\Rightarrow s = 12 \\)</div>
              <div class="solution-step">Bas: \\( 12 - 4 = 8 \\) cm.</div>
              <div class="solution-step"><strong>Svar: De lika sidorna är 12 cm och basen är 8 cm</strong></div>
            `
          },
          {
            text: "Summan av tre på varandra följande udda tal är 81. Vilka är talen?",
            solution: `
              <div class="solution-step">Låt det minsta udda talet vara \\( x \\). De tre talen: \\( x, \\; x+2, \\; x+4 \\).</div>
              <div class="solution-step">Ställ upp ekvation för summan: \\( x + (x+2) + (x+4) = 81 \\)</div>
              <div class="solution-step">Förenkla och lös: \\( 3x + 6 = 81 \\Rightarrow 3x = 75 \\Rightarrow x = 25 \\)</div>
              <div class="solution-step"><strong>Svar: Talen är 25, 27 och 29</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 5: MONSTER & GENERALISERING =====
  {
    id: 5,
    title: "Mönster & Generalisering",
    points: "Snitt 14,0 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Mönster och generalisering</h3>

      <h4>Talföljer</h4>
      <p>En talfolj är en rad av tal som följer ett mönster. For att kunna fortsätta en talfolj maste man forst första mönstret.</p>
      <div class="formula-box">
        <p>Aritmetisk talfolj: skillnaden mellan varje par av intilliggande tal är konstant.</p>
        <p>Exempel: \\( 3, 7, 11, 15, 19, \\ldots \\) (ökar med 4)</p>
        <p>Allman term: \\( a_n = a_1 + (n-1) \\cdot d \\), där \\(d\\) är differensen.</p>
      </div>

      <h4>Visuella mönster</h4>
      <p>Visuella mönster kan beskrivas med figurer som växer. Man beskriver mönstret med ett algebraiskt uttryck.</p>
      <div class="formula-box">
        <p>Strategi:</p>
        <p>1. Rita figur 1, 2, 3 och eventuellt 4.</p>
        <p>2. Räkna element i varje figur (gärna i en tabell).</p>
        <p>3. Se vad som ändras och vad som är konstant.</p>
        <p>4. Formulera ett uttryck för figur \\(n\\).</p>
      </div>
      <p>Exempel: Om figur 1 har 4 prickar, figur 2 har 7, figur 3 har 10... Da ökar det med 3 per figur. Uttrycket är \\(3n + 1\\).</p>

      <h4>Algebraiska bevis</h4>
      <p>Pa A-niva kraver nationella provet ibland att man visar (bevisar) att ett mönster alltid fungerar. Man använder algebra för detta:</p>
      <div class="formula-box">
        <p>Jamnt tal: \\( 2n \\) (dar \\(n\\) är ett heltal)</p>
        <p>Udda tal: \\( 2n + 1 \\)</p>
        <p>Tva på varandra följande heltal: \\( n \\) och \\( n + 1 \\)</p>
      </div>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "Fortsätt talmönstret med två tal: \\( 2, 5, 8, 11, \\ldots \\)",
        solution: `
          <div class="solution-step">Skillnaden mellan varje tal är \\( 5-2=3 \\), \\( 8-5=3 \\), \\( 11-8=3 \\).</div>
          <div class="solution-step">Nästa två tal: \\( 11+3=14 \\) och \\( 14+3=17 \\).</div>
          <div class="solution-step"><strong>Svar: 14, 17</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Fortsätt talmönstret med två tal: \\( 50, 43, 36, 29, \\ldots \\)",
            solution: `
              <div class="solution-step">Skillnaden: \\( 43-50=-7 \\), \\( 36-43=-7 \\). Minskar med 7.</div>
              <div class="solution-step">Nästa: \\( 29-7=22 \\) och \\( 22-7=15 \\).</div>
              <div class="solution-step"><strong>Svar: 22, 15</strong></div>
            `
          },
          {
            text: "Mia sparar pengar. Vecka 1 sparar hon 10 kr, vecka 2 sparar hon 15 kr, vecka 3 sparar hon 20 kr. Hur mycket sparar hon vecka 6 om mönstret fortsätter?",
            solution: `
              <div class="solution-step">Ökningen är 5 kr per vecka: 10, 15, 20, 25, 30, 35...</div>
              <div class="solution-step"><strong>Svar: 35 kr</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Figur 1 består av 1 ruta, figur 2 av 4 rutor, figur 3 av 9 rutor. Hur många rutor har figur 5?",
        solution: `
          <div class="solution-step">Vi ser ett mönster: \\(1 = 1^2\\), \\(4 = 2^2\\), \\(9 = 3^2\\).</div>
          <div class="solution-step">Antalet rutor i figur \\(n\\) är \\(n^2\\).</div>
          <div class="solution-step">Figur 5: \\(5^2 = 25\\) rutor.</div>
          <div class="solution-step"><strong>Svar: 25 rutor</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Figur 1 har 2 prickar, figur 2 har 6, figur 3 har 12, figur 4 har 20. Hur många prickar har figur 6?",
            solution: `
              <div class="solution-step">Vi letar efter ett mönster genom att skriva om varje tal som en produkt:</div>
              <div class="solution-step">\\(2 = 1 \\cdot 2\\), \\(6 = 2 \\cdot 3\\), \\(12 = 3 \\cdot 4\\), \\(20 = 4 \\cdot 5\\).</div>
              <div class="solution-step">Varje figurnummer multipliceras med nästa tal, så figur \\(n\\) har \\(n(n+1)\\) prickar.</div>
              <div class="solution-step">Vi sätter in \\(n = 6\\): \\(6 \\cdot 7 = 42\\).</div>
              <div class="solution-step"><strong>Svar: 42 prickar</strong></div>
            `
          },
          {
            text: "En trappa byggs av klossar. Steg 1 har 1 kloss, steg 2 har 3 klossar, steg 3 har 6 klossar, steg 4 har 10. Hur många klossar behövs för steg 7?",
            solution: `
              <div class="solution-step">Vi ser ett mönster: \\(1, 3, 6, 10, \\ldots\\) — varje steg lägger till sitt stegnummer.</div>
              <div class="solution-step">Det här kallas triangeltal och formeln är: \\(\\dfrac{n(n+1)}{2}\\)</div>
              <div class="solution-step">Vi sätter in \\(n = 7\\): \\(\\dfrac{7 \\cdot 8}{2} = 28\\)</div>
              <div class="solution-step"><strong>Svar: 28 klossar</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "I en talföljd är det första talet 5 och varje följande tal är 3 större än det föregående. Skriv ner de fem första talen.",
        solution: `
          <div class="solution-step">Vi börjar med 5 och adderar 3 varje gång:</div>
          <div class="solution-step">\\( 5, \\; 8, \\; 11, \\; 14, \\; 17 \\)</div>
          <div class="solution-step"><strong>Svar: 5, 8, 11, 14, 17</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "I en talföljd är det första talet 100 och varje följande tal är 7 mindre. Skriv ner de fem första talen.",
            solution: `
              <div class="solution-step">Vi börjar med 100 och subtraherar 7 varje gång:</div>
              <div class="solution-step">\\( 100, \\; 93, \\; 86, \\; 79, \\; 72 \\)</div>
              <div class="solution-step"><strong>Svar: 100, 93, 86, 79, 72</strong></div>
            `
          },
          {
            text: "Sofia sätter in 50 kr på sitt konto den första veckan. Varje vecka sätter hon in 25 kr mer. Hur mycket sätter hon in vecka 1 till 5?",
            solution: `
              <div class="solution-step">Vecka 1: 50 kr, vecka 2: 75 kr, vecka 3: 100 kr...</div>
              <div class="solution-step">\\( 50, \\; 75, \\; 100, \\; 125, \\; 150 \\)</div>
              <div class="solution-step"><strong>Svar: 50, 75, 100, 125, 150 kr</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "Figur 1 består av 5 tändstickor, figur 2 av 9 och figur 3 av 13 (sammankopplade fyrkanter). Skriv ett uttryck för antalet tändstickor i figur \\(n\\).",
        solution: `
          <div class="solution-step">Tabell: Figur 1: 5, Figur 2: 9, Figur 3: 13</div>
          <div class="solution-step">Ökning per figur: \\(9-5=4\\), \\(13-9=4\\). Konstant ökning med 4.</div>
          <div class="solution-step">Uttrycket: \\(4n + b\\). För \\(n=1\\): \\(4 + b = 5 \\Rightarrow b = 1\\).</div>
          <div class="solution-step">Kontroll: \\(n=2\\): \\(4 \\cdot 2 + 1 = 9\\). Stämmer!</div>
          <div class="solution-step"><strong>Svar: \\(4n + 1\\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Figur 1 har 6 stickor, figur 2 har 11, figur 3 har 16 (sammankopplade sexhörningar). Skriv ett uttryck för figur \\(n\\).",
            solution: `
              <div class="solution-step">Vi beräknar ökningen mellan figurerna: \\(11-6=5\\), \\(16-11=5\\). Konstant ökning med 5.</div>
              <div class="solution-step">Eftersom ökningen är konstant använder vi ett linjärt uttryck \\(5n + b\\). För \\(n=1\\): \\(5 + b = 6 \\Rightarrow b = 1\\).</div>
              <div class="solution-step">Vi kontrollerar med figur 3: \\(5 \\cdot 3 + 1 = 16\\) \\(\\checkmark\\)</div>
              <div class="solution-step"><strong>Svar: \\(5n + 1\\)</strong></div>
            `
          },
          {
            text: "Ett T-format mönster: Figur 1 har 4 rutor, figur 2 har 7, figur 3 har 10. Skriv ett uttryck för figur \\(n\\).",
            solution: `
              <div class="solution-step">Vi beräknar ökningen: \\(7-4=3\\), \\(10-7=3\\). Konstant ökning med 3.</div>
              <div class="solution-step">Med konstant ökning testar vi \\(3n + b\\). För \\(n=1\\): \\(3 + b = 4 \\Rightarrow b = 1\\).</div>
              <div class="solution-step"><strong>Svar: \\(3n + 1\\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "En talföljd börjar: \\( 100, 94, 88, 82, \\ldots \\). Vilket är det första negativa talet i följden?",
        solution: `
          <div class="solution-step">Differensen: \\(94-100=-6\\). Följden minskar med 6 per steg.</div>
          <div class="solution-step">Allmän term: \\(a_n = 100 + (n-1)(-6) = 106 - 6n\\).</div>
          <div class="solution-step">\\(106 - 6n < 0 \\Rightarrow n > 17{,}\\overline{6}\\), så \\(n = 18\\).</div>
          <div class="solution-step">\\(a_{18} = 106 - 108 = -2\\)</div>
          <div class="solution-step"><strong>Svar: \\(-2\\) (det 18:e talet)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En talföljd börjar: \\( 75, 68, 61, 54, \\ldots \\). Vilket är det första negativa talet?",
            solution: `
              <div class="solution-step">Följden minskar med 7 varje steg, så differensen är \\(-7\\).</div>
              <div class="solution-step">Vi skriver upp den allmänna termen: \\(a_n = 75 - 7(n-1) = 82 - 7n\\).</div>
              <div class="solution-step">Vi söker det första negativa talet, alltså när \\(82 - 7n < 0 \\Rightarrow n > 11{,}7\\), så \\(n = 12\\).</div>
              <div class="solution-step">Vi beräknar: \\(a_{12} = 82 - 84 = -2\\)</div>
              <div class="solution-step"><strong>Svar: \\(-2\\) (det 12:e talet)</strong></div>
            `
          },
          {
            text: "En talföljd börjar på 200 och minskar med 13 varje steg. Vilket nummer i följden är det första som understiger 50?",
            solution: `
              <div class="solution-step">Följden minskar med 13 per steg, så vi skriver en formel: \\(a_n = 200 - 13(n-1) = 213 - 13n\\)</div>
              <div class="solution-step">Vi vill hitta när värdet understiger 50: \\(213 - 13n < 50 \\Rightarrow 13n > 163 \\Rightarrow n > 12{,}5\\), så \\(n = 13\\).</div>
              <div class="solution-step">Vi beräknar det 13:e talet: \\(a_{13} = 213 - 169 = 44\\)</div>
              <div class="solution-step"><strong>Svar: Det 13:e talet (44) är det första under 50</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "Figur 1 har 3 prickar, figur 2 har 6 prickar, figur 3 har 10, figur 4 har 15. Beskriv mönstret och bestäm hur många prickar figur 8 har.",
        solution: `
          <div class="solution-step">Ökningarna: \\(+3, +4, +5\\). Ökningen ökar med 1 varje gång.</div>
          <div class="solution-step">Formel: \\(a_n = \\dfrac{(n+1)(n+2)}{2}\\)</div>
          <div class="solution-step">Kontroll: \\(a_1 = \\frac{2 \\cdot 3}{2} = 3\\) \\(\\checkmark\\), \\(a_2 = \\frac{3 \\cdot 4}{2} = 6\\) \\(\\checkmark\\)</div>
          <div class="solution-step">Figur 8: \\(\\dfrac{9 \\cdot 10}{2} = 45\\)</div>
          <div class="solution-step"><strong>Svar: 45 prickar</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Figur 1 har 2, figur 2 har 6, figur 3 har 12, figur 4 har 20. Hitta mönstret och bestäm figur 6.",
            solution: `
              <div class="solution-step">Vi skriver om varje tal som en produkt av två på varandra följande tal:</div>
              <div class="solution-step">\\(2=1 \\cdot 2\\), \\(6=2 \\cdot 3\\), \\(12=3 \\cdot 4\\), \\(20=4 \\cdot 5\\).</div>
              <div class="solution-step">Formeln blir: \\(a_n = n(n+1)\\)</div>
              <div class="solution-step">Vi sätter in \\(n = 6\\): \\(6 \\cdot 7 = 42\\)</div>
              <div class="solution-step"><strong>Svar: 42</strong></div>
            `
          },
          {
            text: "I ett mönster har figur 1 noll cirklar, figur 2 har 3, figur 3 har 8, figur 4 har 15. Hitta mönstret och bestäm figur 7.",
            solution: `
              <div class="solution-step">Vi undersöker talen och ser att varje tal är en kvadrat minus 1:</div>
              <div class="solution-step">\\(0=1^2-1\\), \\(3=2^2-1\\), \\(8=3^2-1\\), \\(15=4^2-1\\).</div>
              <div class="solution-step">Formeln blir: \\(a_n = n^2 - 1\\)</div>
              <div class="solution-step">Vi sätter in \\(n = 7\\): \\(7^2 - 1 = 48\\)</div>
              <div class="solution-step"><strong>Svar: 48</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "Visa med algebra att summan av tre på varandra följande heltal alltid är delbar med 3.",
        solution: `
          <div class="solution-step">Låt de tre heltalen vara \\(n\\), \\(n+1\\) och \\(n+2\\).</div>
          <div class="solution-step">Summan: \\(n + (n+1) + (n+2) = 3n + 3 = 3(n+1)\\)</div>
          <div class="solution-step">Eftersom \\(3(n+1)\\) innehåller faktorn 3 är summan alltid delbar med 3.</div>
          <div class="solution-step"><strong>VSB</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Visa att summan av fem på varandra följande heltal alltid är delbar med 5.",
            solution: `
              <div class="solution-step">Låt talen vara \\(n, n+1, n+2, n+3, n+4\\).</div>
              <div class="solution-step">Vi beräknar summan: \\(n+(n+1)+(n+2)+(n+3)+(n+4) = 5n + 10 = 5(n + 2)\\)</div>
              <div class="solution-step">Eftersom \\(5(n+2)\\) innehåller faktorn 5 är summan alltid delbar med 5.</div>
              <div class="solution-step"><strong>VSB</strong></div>
            `
          },
          {
            text: "Visa att skillnaden mellan kvadraten av två på varandra följande heltal alltid är ett udda tal.",
            solution: `
              <div class="solution-step">Låt heltalen vara \\(n\\) och \\(n+1\\).</div>
              <div class="solution-step">\\((n+1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1\\)</div>
              <div class="solution-step">\\(2n + 1\\) är alltid udda (jämnt tal + 1).</div>
              <div class="solution-step"><strong>VSB</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 8,
        text: "Visa att produkten av två på varandra följande jämna tal alltid är delbar med 8.",
        solution: `
          <div class="solution-step">Låt de jämna talen vara \\(2n\\) och \\(2(n+1) = 2n+2\\).</div>
          <div class="solution-step">Produkten: \\(2n \\cdot 2(n+1) = 4n(n+1)\\)</div>
          <div class="solution-step">Av \\(n\\) och \\(n+1\\) är alltid ett jämnt, alltså \\(n(n+1) = 2k\\).</div>
          <div class="solution-step">Produkten: \\(4 \\cdot 2k = 8k\\), delbar med 8.</div>
          <div class="solution-step"><strong>VSB</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Visa att summan av två udda tal alltid är ett jämnt tal.",
            solution: `
              <div class="solution-step">Låt de udda talen vara \\(2a+1\\) och \\(2b+1\\).</div>
              <div class="solution-step">Summa: \\((2a+1)+(2b+1) = 2a+2b+2 = 2(a+b+1)\\)</div>
              <div class="solution-step">Eftersom \\(2(a+b+1)\\) innehåller faktorn 2 är summan alltid jämn.</div>
              <div class="solution-step"><strong>VSB</strong></div>
            `
          },
          {
            text: "Visa att kvadraten av ett udda tal minus 1 alltid är delbar med 8.",
            solution: `
              <div class="solution-step">Låt det udda talet vara \\(2n+1\\).</div>
              <div class="solution-step">\\((2n+1)^2 - 1 = 4n^2 + 4n + 1 - 1 = 4n^2 + 4n = 4n(n+1)\\)</div>
              <div class="solution-step">Av \\(n\\) och \\(n+1\\) är ett jämnt, så \\(n(n+1) = 2k\\).</div>
              <div class="solution-step">Alltså blir produkten: \\(4 \\cdot 2k = 8k\\), som är delbar med 8.</div>
              <div class="solution-step"><strong>VSB</strong></div>
            `
          }
        ]
      },
      // --- NYA UPPGIFTER Kap 5 ---
      {
        level: "E",
        num: 9,
        text: "Tabellen visar ett mönster:<br>\\(n\\): 1, 2, 3, 4<br>Värde: 4, 7, 10, 13<br>Vad är värdet för \\(n = 5\\)?",
        solution: `
          <div class="solution-step">Ökningen mellan varje värde: \\(7-4=3\\), \\(10-7=3\\), \\(13-10=3\\).</div>
          <div class="solution-step">Mönstret ökar med 3 varje steg.</div>
          <div class="solution-step">\\(n=5\\): \\(13+3=16\\)</div>
          <div class="solution-step"><strong>Svar: 16</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Tabellen visar ett mönster:<br>\\(n\\): 1, 2, 3, 4<br>Värde: 3, 8, 13, 18<br>Vad är värdet för \\(n = 6\\)?",
            solution: `
              <div class="solution-step">Vi beräknar ökningen: \\(8-3=5\\), \\(13-8=5\\), \\(18-13=5\\). Mönstret ökar med 5 varje steg.</div>
              <div class="solution-step">Vi fortsätter mönstret: \\(n=5\\): \\(23\\), \\(n=6\\): \\(28\\).</div>
              <div class="solution-step"><strong>Svar: 28</strong></div>
            `
          },
          {
            text: "Olle lägger till 4 nya tegelstenar till en mur varje dag. Dag 1 har muren 6 stenar. Hur många stenar har muren dag 10?",
            solution: `
              <div class="solution-step">Dag 1: 6, dag 2: 10, dag 3: 14... Ökar med 4.</div>
              <div class="solution-step">Dag \\(n\\): \\(6 + 4(n-1) = 4n + 2\\)</div>
              <div class="solution-step">Dag 10: \\(4 \\cdot 10 + 2 = 42\\)</div>
              <div class="solution-step"><strong>Svar: 42 stenar</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 10,
        text: "Talmönstret \\( 1, 4, 9, 16, 25, \\ldots \\). Beskriv mönstret och skriv nästa två tal.",
        solution: `
          <div class="solution-step">Vi undersöker talen och ser att varje tal är en kvadrat:</div>
          <div class="solution-step">\\(1=1^2\\), \\(4=2^2\\), \\(9=3^2\\), \\(16=4^2\\), \\(25=5^2\\).</div>
          <div class="solution-step">Mönstret är alltså kvadrattalen.</div>
          <div class="solution-step">Nästa: \\(6^2 = 36\\) och \\(7^2 = 49\\).</div>
          <div class="solution-step"><strong>Svar: 36, 49</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Talmönstret \\( 2, 4, 8, 16, 32, \\ldots \\). Beskriv mönstret och skriv nästa två tal.",
            solution: `
              <div class="solution-step">Varje tal är dubbelt så stort som föregående: \\( \\cdot 2 \\) varje gång.</div>
              <div class="solution-step">Mönstret: \\(2^1, 2^2, 2^3, 2^4, 2^5, \\ldots\\)</div>
              <div class="solution-step">Nästa: \\(2^6 = 64\\) och \\(2^7 = 128\\).</div>
              <div class="solution-step"><strong>Svar: 64, 128</strong></div>
            `
          },
          {
            text: "Talmönstret \\( 1, 1, 2, 3, 5, 8, \\ldots \\). Beskriv mönstret och skriv nästa två tal.",
            solution: `
              <div class="solution-step">Varje tal är summan av de två föregående: \\(1+1=2\\), \\(1+2=3\\), \\(2+3=5\\), \\(3+5=8\\).</div>
              <div class="solution-step">Nästa: \\(5+8=13\\) och \\(8+13=21\\).</div>
              <div class="solution-step"><strong>Svar: 13, 21</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 11,
        text: "Person A har 500 kr och sparar 50 kr per vecka. Person B har 200 kr och sparar 80 kr per vecka. Efter hur många veckor har de lika mycket?",
        solution: `
          <div class="solution-step">Vi ställer upp uttryck för varje persons sparande:</div>
          <div class="solution-step">A:s pengar vecka \\(v\\): \\(500 + 50v\\)</div>
          <div class="solution-step">B:s pengar vecka \\(v\\): \\(200 + 80v\\)</div>
          <div class="solution-step">Vi sätter uttrycken lika för att hitta när de har lika mycket: \\(500 + 50v = 200 + 80v\\)</div>
          <div class="solution-step">Vi löser ekvationen: \\(300 = 30v \\Rightarrow v = 10\\)</div>
          <div class="solution-step">Kontroll: A = \\(500 + 500 = 1000\\), B = \\(200 + 800 = 1000\\) \\(\\checkmark\\)</div>
          <div class="solution-step"><strong>Svar: Efter 10 veckor (båda har 1 000 kr)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Telefonabonnemang X kostar 100 kr/månad plus 2 kr per minut. Abonnemang Y kostar 250 kr/månad plus 0,50 kr per minut. Vid hur många minuters samtal per månad kostar de lika mycket?",
            solution: `
              <div class="solution-step">Vi ställer upp kostnaden för varje abonnemang:</div>
              <div class="solution-step">X: \\(100 + 2m\\), Y: \\(250 + 0{,}5m\\)</div>
              <div class="solution-step">Vi sätter dem lika: \\(100 + 2m = 250 + 0{,}5m\\)</div>
              <div class="solution-step">Vi löser ekvationen: \\(1{,}5m = 150 \\Rightarrow m = 100\\)</div>
              <div class="solution-step"><strong>Svar: 100 minuter</strong></div>
            `
          },
          {
            text: "Talföljd A: \\(5, 8, 11, 14, \\ldots\\) Talföljd B: \\(30, 28, 26, 24, \\ldots\\) Vid vilken position har A och B samma värde?",
            solution: `
              <div class="solution-step">Vi skriver en formel för varje talföljd:</div>
              <div class="solution-step">A: \\(a_n = 3n + 2\\). B: \\(b_n = 32 - 2n\\)</div>
              <div class="solution-step">Vi sätter dem lika: \\(3n + 2 = 32 - 2n \\Rightarrow 5n = 30 \\Rightarrow n = 6\\)</div>
              <div class="solution-step">Kontroll: A(6) = 20, B(6) = 20 \\(\\checkmark\\)</div>
              <div class="solution-step"><strong>Svar: Vid position 6 (värdet 20)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 12,
        text: "Visa att uttrycken \\( 3(n+2) - 1 \\) och \\( 2n + (n + 5) \\) alltid har samma värde.",
        solution: `
          <div class="solution-step">Förenkla första: \\(3(n+2) - 1 = 3n + 6 - 1 = 3n + 5\\)</div>
          <div class="solution-step">Förenkla andra: \\(2n + n + 5 = 3n + 5\\)</div>
          <div class="solution-step">Båda förenklas till \\(3n + 5\\), alltså har de alltid samma värde.</div>
          <div class="solution-step"><strong>VSB</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Ett mönster har \\(4(n+1) - 2\\) element i figur \\(n\\). Visa att detta kan skrivas som \\(4n + 2\\).",
            solution: `
              <div class="solution-step">Vi utvecklar parentesen och förenklar:</div>
              <div class="solution-step">\\(4(n+1) - 2 = 4n + 4 - 2 = 4n + 2\\)</div>
              <div class="solution-step">Uttrycket förenklas till \\(4n + 2\\), precis som vi ville visa.</div>
              <div class="solution-step"><strong>VSB</strong></div>
            `
          },
          {
            text: "Ett T-format mönster kan beskrivas som 'en rad med \\(n\\) rutor plus en kolumn med \\(n-1\\) rutor'. Skriv ett uttryck och förenkla.",
            solution: `
              <div class="solution-step">Rad: \\(n\\) rutor. Kolumn: \\(n-1\\) rutor.</div>
              <div class="solution-step">Totalt: \\(n + (n-1) = 2n - 1\\)</div>
              <div class="solution-step"><strong>Svar: \\(2n - 1\\)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 13,
        text: "Undersök mönstret: \\(1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\ldots + n(n+1)\\). Beräkna summan för \\(n = 1, 2, 3, 4, 5\\) och föreslå en formel.",
        solution: `
          <div class="solution-step">Vi beräknar summan steg för steg:</div>
          <div class="solution-step">\\(n=1\\): \\(1 \\cdot 2 = 2\\)</div>
          <div class="solution-step">\\(n=2\\): \\(2 + 2 \\cdot 3 = 2 + 6 = 8\\)</div>
          <div class="solution-step">\\(n=3\\): \\(8 + 3 \\cdot 4 = 20\\), \\(n=4\\): \\(20 + 20 = 40\\), \\(n=5\\): \\(40 + 30 = 70\\)</div>
          <div class="solution-step">Vi letar efter en formel som stämmer med alla värden. Vi testar: \\(\\dfrac{n(n+1)(n+2)}{3}\\). \\(n=1\\): \\(\\frac{6}{3}=2\\) \\(\\checkmark\\), \\(n=3\\): \\(\\frac{60}{3}=20\\) \\(\\checkmark\\), \\(n=5\\): \\(\\frac{210}{3}=70\\) \\(\\checkmark\\)</div>
          <div class="solution-step"><strong>Svar: \\(\\dfrac{n(n+1)(n+2)}{3}\\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Undersök summan \\(1 + 3 + 5 + \\ldots + (2n-1)\\) för \\(n = 1, 2, 3, 4, 5\\). Formulera en hypotes.",
            solution: `
              <div class="solution-step">Vi beräknar summan för varje \\(n\\):</div>
              <div class="solution-step">\\(n=1\\): 1, \\(n=2\\): \\(1+3=4\\), \\(n=3\\): \\(4+5=9\\), \\(n=4\\): \\(9+7=16\\), \\(n=5\\): \\(16+9=25\\)</div>
              <div class="solution-step">Vi känner igen summorna som kvadrattal: \\(1, 4, 9, 16, 25 = 1^2, 2^2, 3^2, 4^2, 5^2\\)</div>
              <div class="solution-step"><strong>Svar: Summan av de \\(n\\) första udda talen är \\(n^2\\)</strong></div>
            `
          },
          {
            text: "Beräkna \\(1^2-0^2\\), \\(2^2-1^2\\), \\(3^2-2^2\\), \\(4^2-3^2\\), \\(5^2-4^2\\). Beskriv mönstret och bevisa att det gäller.",
            solution: `
              <div class="solution-step">Vi räknar ut differenserna: \\(1, 3, 5, 7, 9\\) — det verkar alltid bli udda tal.</div>
              <div class="solution-step">Vi bevisar detta med algebra: \\((n+1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1\\)</div>
              <div class="solution-step">Eftersom \\(2n+1\\) alltid är udda (jämnt tal plus 1) stämmer mönstret för alla \\(n\\).</div>
              <div class="solution-step"><strong>VSB: Skillnaden är alltid \\(2n+1\\)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 14,
        text: "Sexhörningar kopplas ihop i rad. 1 sexhörning har 6 yttre sidor, 2 sammankopplade har 11, 3 har 16. Skriv en formel för \\(n\\) sexhörningar och beräkna för \\(n = 10\\).",
        solution: `
          <div class="solution-step">Vi ser att antalet yttre sidor bildar mönstret: 6, 11, 16... Ökningen är +5 per sexhörning.</div>
          <div class="solution-step">Eftersom ökningen är konstant testar vi en linjär formel: \\(5n + 1\\). Kontroll: \\(n=1\\): 6 \\(\\checkmark\\), \\(n=2\\): 11 \\(\\checkmark\\)</div>
          <div class="solution-step">Vi sätter in \\(n = 10\\): \\(5 \\cdot 10 + 1 = 51\\)</div>
          <div class="solution-step"><strong>Svar: \\(5n + 1\\); för 10 sexhörningar behövs 51 yttre sidor</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Trianglar kopplas ihop i rad (delar en sida vardera). 1 triangel: 3 stickor, 2 trianglar: 5, 3: 7. Formel? Hur många stickor för 20 trianglar?",
            solution: `
              <div class="solution-step">Vi ser mönstret: 3, 5, 7... Ökningen är +2 för varje ny triangel.</div>
              <div class="solution-step">Vi testar en linjär formel: \\(2n + 1\\). Kontroll: \\(n=1\\): 3 \\(\\checkmark\\)</div>
              <div class="solution-step">Vi sätter in \\(n = 20\\): \\(2 \\cdot 20 + 1 = 41\\)</div>
              <div class="solution-step"><strong>Svar: \\(2n+1\\); 41 stickor</strong></div>
            `
          },
          {
            text: "I ett rutnät med \\(n \\times n\\) rutor, hur många linjesegment (streck) behövs? Beräkna för \\(n=1,2,3,4\\) och formulera.",
            solution: `
              <div class="solution-step">Vi räknar linjesegmenten för varje rutnät:</div>
              <div class="solution-step">\\(n=1\\): 4, \\(n=2\\): 12, \\(n=3\\): 24, \\(n=4\\): 40</div>
              <div class="solution-step">Vi tänker på det som horisontella och vertikala streck: \\(n\\) rader × \\((n+1)\\) streck = \\(n(n+1)\\). Vertikala: lika många.</div>
              <div class="solution-step">Totalt: \\(2n(n+1)\\). Kontroll: \\(n=2\\): \\(2 \\cdot 2 \\cdot 3 = 12\\) \\(\\checkmark\\)</div>
              <div class="solution-step"><strong>Svar: \\(2n(n+1)\\)</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 6: PROPORTIONALITET & SKALA =====
  {
    id: 6,
    title: "Proportionalitet & Skala",
    points: "Snitt 5,3 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Proportionalitet och skala</h3>

      <h4>Proportionalitet</h4>
      <p>Tva storheter är proportionella om förhållandet (kvoten) mellan dem alltid är detsamma.</p>
      <div class="formula-box">
        <p>\\( y \\) är proportionell mot \\( x \\) om \\( \\dfrac{y}{x} = k \\) (konstant)</p>
        <p>eller \\( y = k \\cdot x \\)</p>
        <p>dar \\(k\\) kallas proportionalitetskonstant.</p>
      </div>
      <p>En proportionell graf är en rät linje genom origo.</p>

      <h4>Forhallanden</h4>
      <p>Ett förhållande beskriver hur två eller flera storheter forHaller sig till varandra.</p>
      <div class="formula-box">
        <p>Forhallandet \\( 3:5 \\) betyder att för varje 3 enheter av det ena finns 5 enheter av det andra.</p>
        <p>For att dela 400 kr i förhållandet \\( 3:5 \\): summa delar = \\( 3+5=8 \\), en del = \\( 400/8 = 50 \\) kr.</p>
        <p>Andelarna: \\( 3 \\cdot 50 = 150 \\) kr och \\( 5 \\cdot 50 = 250 \\) kr.</p>
      </div>

      <h4>Skala</h4>
      <p>Skala anger förhållandet mellan en avbildning och verkligheten.</p>
      <div class="formula-box">
        <p>\\( \\text{Skala} = \\dfrac{\\text{längd på bild/karta}}{\\text{längd i verkligheten}} \\)</p>
        <p>Skala \\( 1:100 \\) betyder att 1 cm på bilden är 100 cm = 1 m i verkligheten.</p>
        <p>Skala \\( 1:50\\,000 \\) betyder att 1 cm på kartan är 50 000 cm = 500 m i verkligheten.</p>
      </div>

      <h4>Enhetspris</h4>
      <p>Enhetspriset är priset per enhet (t.ex. per kg, per liter, per styck) och används för att jämföra priser.</p>
      <div class="formula-box">
        \\[ \\text{enhetspris} = \\frac{\\text{totalpris}}{\\text{antal enheter}} \\]
      </div>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "På en karta med skala \\( 1:50\\,000 \\) är avståndet mellan två städer 6 cm. Hur långt är det verkliga avståndet?",
        solution: `
          <div class="solution-step">Skala \\( 1:50\\,000 \\) betyder att 1 cm på kartan = 50 000 cm i verkligheten.</div>
          <div class="solution-step">\\( 6 \\cdot 50\\,000 = 300\\,000 \\text{ cm} = 3\\,000 \\text{ m} = 3 \\text{ km} \\)</div>
          <div class="solution-step"><strong>Svar: 3 km</strong></div>
        `,
        videos: ["Oh6Cz5drTeo"],
        variants: [
          {
            text: "På en karta med skala \\( 1:100\\,000 \\) mäter Anna att det är 4,5 cm mellan två orter. Hur långt är det i verkligheten?",
            solution: `
              <div class="solution-step">Skala \\( 1:100\\,000 \\) betyder att 1 cm på kartan = 100 000 cm i verkligheten. Vi multiplicerar kartavståndet med skalfaktorn:</div>
              <div class="solution-step">\\( 4{,}5 \\cdot 100\\,000 = 450\\,000 \\text{ cm} = 4\\,500 \\text{ m} = 4{,}5 \\text{ km} \\)</div>
              <div class="solution-step"><strong>Svar: 4,5 km</strong></div>
            `
          },
          {
            text: "Det verkliga avståndet mellan två platser är 8 km. Hur långt blir det på en karta med skala \\( 1:200\\,000 \\)?",
            solution: `
              <div class="solution-step">Först omvandlar vi det verkliga avståndet till cm:</div>
              <div class="solution-step">\\( 8 \\text{ km} = 800\\,000 \\text{ cm} \\)</div>
              <div class="solution-step">Sedan dividerar vi med skalfaktorn för att få kartavståndet:</div>
              <div class="solution-step">\\( \\dfrac{800\\,000}{200\\,000} = 4 \\text{ cm} \\)</div>
              <div class="solution-step"><strong>Svar: 4 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Ett paket med 750 g muesli kostar 45 kr. Vad är kilopriset?",
        solution: `
          <div class="solution-step">Vi omvandlar först till kg: 750 g = 0,75 kg</div>
          <div class="solution-step">Kilopriset beräknas genom att dela totalpriset med vikten i kg:</div>
          <div class="solution-step">Kilopris = \\( \\dfrac{45}{0{,}75} = 60 \\) kr/kg</div>
          <div class="solution-step"><strong>Svar: 60 kr/kg</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Vilket erbjudande är billigast: 2 liter mjölk för 25 kr eller 3 liter mjölk för 36 kr?",
            solution: `
              <div class="solution-step">Vi jämför genom att beräkna literpriset för varje erbjudande:</div>
              <div class="solution-step">Literpris A: \\( \\dfrac{25}{2} = 12{,}50 \\) kr/l</div>
              <div class="solution-step">Literpris B: \\( \\dfrac{36}{3} = 12{,}00 \\) kr/l</div>
              <div class="solution-step"><strong>Svar: 3-literspaketet (12 kr/l) är billigast</strong></div>
            `
          },
          {
            text: "Oscar köper apelsiner. I butik A kostar 4 apelsiner 28 kr. I butik B kostar 6 apelsiner 39 kr. Vilken butik har lägst styckepris?",
            solution: `
              <div class="solution-step">Vi beräknar styckepriset i varje butik genom att dela totalpriset med antalet:</div>
              <div class="solution-step">Butik A: \\( \\dfrac{28}{4} = 7{,}00 \\) kr/st</div>
              <div class="solution-step">Butik B: \\( \\dfrac{39}{6} = 6{,}50 \\) kr/st</div>
              <div class="solution-step"><strong>Svar: Butik B har lägst styckepris (6,50 kr/st)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Dela 240 kr mellan Ali och Bella i förhållandet \\( 3:5 \\).",
        solution: `
          <div class="solution-step">Förhållandet 3:5 betyder att vi delar summan i 3 + 5 = 8 lika stora delar:</div>
          <div class="solution-step">En del: \\( 240 \\div 8 = 30 \\) kr</div>
          <div class="solution-step">Ali får 3 delar: \\( 3 \\cdot 30 = 90 \\) kr</div>
          <div class="solution-step">Bella får 5 delar: \\( 5 \\cdot 30 = 150 \\) kr</div>
          <div class="solution-step"><strong>Svar: Ali får 90 kr och Bella får 150 kr</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Tre vänner delar vinsten 1 200 kr i förhållandet \\( 2:3:5 \\). Hur mycket får var och en?",
            solution: `
              <div class="solution-step">Förhållandet 2:3:5 ger totalt \\( 2 + 3 + 5 = 10 \\) delar:</div>
              <div class="solution-step">En del: \\( 1\\,200 \\div 10 = 120 \\) kr</div>
              <div class="solution-step">Sedan multiplicerar vi varje persons andel med värdet per del:</div>
              <div class="solution-step">Person 1: \\( 2 \\cdot 120 = 240 \\) kr, Person 2: \\( 3 \\cdot 120 = 360 \\) kr, Person 3: \\( 5 \\cdot 120 = 600 \\) kr</div>
              <div class="solution-step"><strong>Svar: 240 kr, 360 kr och 600 kr</strong></div>
            `
          },
          {
            text: "En blandning av betong görs med cement, sand och grus i förhållandet \\( 1:2:4 \\). Hur mycket sand behövs för att göra 140 kg betong?",
            solution: `
              <div class="solution-step">Förhållandet 1:2:4 ger totalt \\( 1 + 2 + 4 = 7 \\) delar:</div>
              <div class="solution-step">En del väger: \\( 140 \\div 7 = 20 \\) kg</div>
              <div class="solution-step">Sand motsvarar 2 delar: \\( 2 \\cdot 20 = 40 \\) kg</div>
              <div class="solution-step"><strong>Svar: 40 kg sand</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "En ritning av ett rum är gjord i skala \\( 1:20 \\). På ritningen är rummet \\( 15 \\) cm långt och \\( 12 \\) cm brett. Beräkna rummets verkliga area i \\( \\text{m}^2 \\).",
        solution: `
          <div class="solution-step">Skala 1:20 betyder att varje cm på ritningen = 20 cm i verkligheten. Vi räknar ut de verkliga måtten:</div>
          <div class="solution-step">Verklig längd: \\( 15 \\cdot 20 = 300 \\text{ cm} = 3 \\text{ m} \\)</div>
          <div class="solution-step">Verklig bredd: \\( 12 \\cdot 20 = 240 \\text{ cm} = 2{,}4 \\text{ m} \\)</div>
          <div class="solution-step">Sedan beräknar vi arean med de verkliga måtten:</div>
          <div class="solution-step">Area: \\( 3 \\cdot 2{,}4 = 7{,}2 \\text{ m}^2 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 7{,}2 \\text{ m}^2 \\)</strong></div>
        `,
        videos: ["ztiawcuyG2g"],
        variants: [
          {
            text: "En arkitekt ritar ett rum i skala \\( 1:50 \\). På ritningen är rummet 8 cm × 6 cm. Beräkna rummets verkliga area i \\( \\text{m}^2 \\).",
            solution: `
              <div class="solution-step">Vi multiplicerar ritningens mått med skalfaktorn 50 för att få verkliga mått:</div>
              <div class="solution-step">Verklig längd: \\( 8 \\cdot 50 = 400 \\text{ cm} = 4 \\text{ m} \\)</div>
              <div class="solution-step">Verklig bredd: \\( 6 \\cdot 50 = 300 \\text{ cm} = 3 \\text{ m} \\)</div>
              <div class="solution-step">Sedan beräknar vi arean:</div>
              <div class="solution-step">Area: \\( 4 \\cdot 3 = 12 \\text{ m}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 12 \\text{ m}^2 \\)</strong></div>
            `
          },
          {
            text: "På en ritning i skala \\( 1:100 \\) är en tomt 7 cm × 5 cm. Beräkna tomtens verkliga area i \\( \\text{m}^2 \\).",
            solution: `
              <div class="solution-step">Vi multiplicerar ritningens mått med skalfaktorn 100 för att få verkliga mått:</div>
              <div class="solution-step">Verklig längd: \\( 7 \\cdot 100 = 700 \\text{ cm} = 7 \\text{ m} \\)</div>
              <div class="solution-step">Verklig bredd: \\( 5 \\cdot 100 = 500 \\text{ cm} = 5 \\text{ m} \\)</div>
              <div class="solution-step">Sedan beräknar vi arean:</div>
              <div class="solution-step">Area: \\( 7 \\cdot 5 = 35 \\text{ m}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 35 \\text{ m}^2 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "En bil förbrukar 0,6 liter bensin per mil. Hur långt kan bilen köra på en full tank med 45 liter?",
        solution: `
          <div class="solution-step">Sträcka = total mängd / förbrukning per mil:</div>
          <div class="solution-step">\\( \\dfrac{45}{0{,}6} = 75 \\text{ mil} \\)</div>
          <div class="solution-step"><strong>Svar: 75 mil</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En bil drar 0,8 liter per mil. Hur mycket bensin går åt vid en resa på 35 mil?",
            solution: `
              <div class="solution-step">Vi multiplicerar förbrukningen per mil med antalet mil:</div>
              <div class="solution-step">\\( 0{,}8 \\cdot 35 = 28 \\text{ liter} \\)</div>
              <div class="solution-step"><strong>Svar: 28 liter</strong></div>
            `
          },
          {
            text: "En elbil förbrukar 1,8 kWh per mil. Batteriet rymmer 60 kWh. Hur långt kan bilen köra? Avrunda till hela mil.",
            solution: `
              <div class="solution-step">Vi dividerar batteriets kapacitet med förbrukningen per mil:</div>
              <div class="solution-step">\\( \\dfrac{60}{1{,}8} = 33{,}3\\ldots \\approx 33 \\text{ mil} \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 33 mil</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 6,
        text: "En modell av ett hus är byggt i skala \\( 1:50 \\). Taket på modellen har en area av \\( 32 \\text{ cm}^2 \\). Hur stor är takets area i verkligheten? Svara i \\( \\text{m}^2 \\).",
        solution: `
          <div class="solution-step">Vid skala \\(1:50\\) för längder gäller för areor att skalfaktorn är \\(50^2 = 2\\,500\\).</div>
          <div class="solution-step">Verklig area: \\( 32 \\cdot 2\\,500 = 80\\,000 \\text{ cm}^2 \\)</div>
          <div class="solution-step">Omvandla: \\( 80\\,000 \\text{ cm}^2 = \\dfrac{80\\,000}{10\\,000} = 8 \\text{ m}^2 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 8 \\text{ m}^2 \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En modell av en fotbollsplan är gjord i skala \\( 1:200 \\). Modellens area är \\( 175 \\text{ cm}^2 \\). Beräkna den verkliga arean i \\( \\text{m}^2 \\).",
            solution: `
              <div class="solution-step">För areor kvadrerar vi skalfaktorn:</div>
              <div class="solution-step">Areaskala: \\( 200^2 = 40\\,000 \\)</div>
              <div class="solution-step">Vi multiplicerar modellens area med areaskalan:</div>
              <div class="solution-step">Verklig area: \\( 175 \\cdot 40\\,000 = 7\\,000\\,000 \\text{ cm}^2 \\)</div>
              <div class="solution-step">Omvandla till \\(\\text{m}^2\\) (1 \\(\\text{m}^2\\) = 10 000 \\(\\text{cm}^2\\)):</div>
              <div class="solution-step">\\( \\dfrac{7\\,000\\,000}{10\\,000} = 700 \\text{ m}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 700 \\text{ m}^2 \\)</strong></div>
            `
          },
          {
            text: "En byggherre ritar en tomt i skala \\( 1:500 \\). Tomten på ritningen har arean \\( 12 \\text{ cm}^2 \\). Beräkna den verkliga arean i \\( \\text{m}^2 \\).",
            solution: `
              <div class="solution-step">För areor kvadrerar vi skalfaktorn:</div>
              <div class="solution-step">Areaskala: \\( 500^2 = 250\\,000 \\)</div>
              <div class="solution-step">Vi multiplicerar ritningens area med areaskalan:</div>
              <div class="solution-step">Verklig area: \\( 12 \\cdot 250\\,000 = 3\\,000\\,000 \\text{ cm}^2 \\)</div>
              <div class="solution-step">Omvandla till \\(\\text{m}^2\\): \\( \\dfrac{3\\,000\\,000}{10\\,000} = 300 \\text{ m}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 300 \\text{ m}^2 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "På en karta med skala \\(1:25\\,000\\) mäter Sofia att en sjö har en area på ungefär \\(3{,}2 \\text{ cm}^2\\). Beräkna sjöns verkliga area i \\(\\text{m}^2\\).",
        solution: `
          <div class="solution-step">Skalfaktor för längd: 25 000. För area: \\(25\\,000^2 = 625\\,000\\,000\\).</div>
          <div class="solution-step">Verklig area: \\(3{,}2 \\cdot 625\\,000\\,000 = 2\\,000\\,000\\,000 \\text{ cm}^2\\)</div>
          <div class="solution-step">Omvandla till \\(\\text{m}^2\\): \\(\\dfrac{2\\,000\\,000\\,000}{10\\,000} = 200\\,000 \\text{ m}^2 = 0{,}2 \\text{ km}^2\\)</div>
          <div class="solution-step"><strong>Svar: \\(200\\,000 \\text{ m}^2\\) (eller \\(0{,}2 \\text{ km}^2\\))</strong></div>
        `,
        videos: ["vjmkj-YebCk"],
        variants: [
          {
            text: "En ö på en karta i skala \\(1:50\\,000\\) har arean \\(4{,}8 \\text{ cm}^2\\). Beräkna öns verkliga area i \\(\\text{km}^2\\).",
            solution: `
              <div class="solution-step">För areor kvadrerar vi skalfaktorn:</div>
              <div class="solution-step">Areaskala: \\(50\\,000^2 = 2{,}5 \\cdot 10^9\\)</div>
              <div class="solution-step">Vi multiplicerar kartarean med areaskalan:</div>
              <div class="solution-step">Verklig area: \\(4{,}8 \\cdot 2{,}5 \\cdot 10^9 = 12 \\cdot 10^9 \\text{ cm}^2\\)</div>
              <div class="solution-step">Omvandla till \\(\\text{m}^2\\) och sedan \\(\\text{km}^2\\):</div>
              <div class="solution-step">\\(\\dfrac{12 \\cdot 10^9}{10^4} = 1\\,200\\,000 \\text{ m}^2 = 1{,}2 \\text{ km}^2\\)</div>
              <div class="solution-step"><strong>Svar: \\(1{,}2 \\text{ km}^2\\)</strong></div>
            `
          },
          {
            text: "Sofia mäter att en park på en karta med skala \\(1:10\\,000\\) har arean \\(5 \\text{ cm}^2\\). Beräkna parkens verkliga area i \\(\\text{m}^2\\).",
            solution: `
              <div class="solution-step">För areor kvadrerar vi skalfaktorn:</div>
              <div class="solution-step">Areaskala: \\(10\\,000^2 = 10^8\\)</div>
              <div class="solution-step">Vi multiplicerar kartarean med areaskalan:</div>
              <div class="solution-step">Verklig area: \\(5 \\cdot 10^8 \\text{ cm}^2\\)</div>
              <div class="solution-step">Omvandla till \\(\\text{m}^2\\): \\(\\dfrac{5 \\cdot 10^8}{10^4} = 50\\,000 \\text{ m}^2\\)</div>
              <div class="solution-step"><strong>Svar: \\(50\\,000 \\text{ m}^2\\)</strong></div>
            `
          }
        ]
      },
      // --- E4 (NY): Känn igen proportionalitet ---
      {
        level: "E",
        num: 8,
        text: "Avgör om sambandet är proportionellt: När \\( x = 2 \\) är \\( y = 6 \\), när \\( x = 4 \\) är \\( y = 12 \\) och när \\( x = 6 \\) är \\( y = 18 \\). Motivera.",
        solution: `
          <div class="solution-step">Beräkna kvoten \\( \\dfrac{y}{x} \\) för varje par:</div>
          <div class="solution-step">\\( \\dfrac{6}{2} = 3 \\), \\( \\dfrac{12}{4} = 3 \\), \\( \\dfrac{18}{6} = 3 \\)</div>
          <div class="solution-step">Kvoten är konstant (= 3), alltså är sambandet proportionellt: \\( y = 3x \\).</div>
          <div class="solution-step"><strong>Svar: Ja, sambandet är proportionellt med \\( y = 3x \\)</strong></div>
        `,
        videos: ["vjmkj-YebCk"],
        variants: [
          {
            text: "Avgör om sambandet är proportionellt: När \\( x = 1 \\) är \\( y = 5 \\), när \\( x = 3 \\) är \\( y = 11 \\) och när \\( x = 5 \\) är \\( y = 17 \\). Motivera.",
            solution: `
              <div class="solution-step">Beräkna kvoten: \\( \\dfrac{5}{1} = 5 \\), \\( \\dfrac{11}{3} \\approx 3{,}67 \\), \\( \\dfrac{17}{5} = 3{,}4 \\)</div>
              <div class="solution-step">Kvoten är inte konstant, alltså är sambandet inte proportionellt.</div>
              <div class="solution-step">(Sambandet är linjärt: \\( y = 3x + 2 \\), men passerar inte origo.)</div>
              <div class="solution-step"><strong>Svar: Nej, sambandet är inte proportionellt</strong></div>
            `
          },
          {
            text: "En taxi kostar 40 kr i startavgift plus 15 kr per km. Är priset proportionellt mot antalet km? Motivera.",
            solution: `
              <div class="solution-step">Pris: \\( P = 40 + 15 \\cdot x \\) (där \\( x \\) = antal km)</div>
              <div class="solution-step">Vid 0 km kostar det 40 kr (inte 0 kr). Grafen passerar inte origo.</div>
              <div class="solution-step"><strong>Svar: Nej, priset är inte proportionellt mot antalet km (det finns en fast startavgift)</strong></div>
            `
          }
        ]
      },
      // --- C3 (NY): Omvänd proportionalitet ---
      {
        level: "C",
        num: 9,
        text: "Tre arbetare kan bygga en mur på 12 dagar. Hur lång tid tar det om man sätter in 4 arbetare istället? (Alla arbetar lika snabbt.)",
        solution: `
          <div class="solution-step">Detta är omvänd proportionalitet: fler arbetare ger kortare tid. Vi beräknar först det totala arbetet:</div>
          <div class="solution-step">Totalt arbete: \\( 3 \\cdot 12 = 36 \\) arbetardagar</div>
          <div class="solution-step">Sedan fördelar vi arbetet på 4 arbetare:</div>
          <div class="solution-step">Med 4 arbetare: \\( \\dfrac{36}{4} = 9 \\) dagar</div>
          <div class="solution-step"><strong>Svar: 9 dagar</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En resa tar 3 timmar med hastigheten 80 km/h. Hur lång tid tar samma resa med hastigheten 60 km/h?",
            solution: `
              <div class="solution-step">Först beräknar vi sträckan med den ursprungliga hastigheten:</div>
              <div class="solution-step">Sträcka: \\( 80 \\cdot 3 = 240 \\text{ km} \\)</div>
              <div class="solution-step">Sedan beräknar vi tiden med den nya hastigheten:</div>
              <div class="solution-step">Tid med 60 km/h: \\( \\dfrac{240}{60} = 4 \\text{ timmar} \\)</div>
              <div class="solution-step"><strong>Svar: 4 timmar</strong></div>
            `
          },
          {
            text: "Sex kranar kan fylla en pool på 5 timmar. Hur lång tid tar det med 10 kranar?",
            solution: `
              <div class="solution-step">Vi beräknar först det totala arbetet (omvänd proportionalitet):</div>
              <div class="solution-step">Totalt arbete: \\( 6 \\cdot 5 = 30 \\) krantimmar</div>
              <div class="solution-step">Sedan fördelar vi arbetet på 10 kranar:</div>
              <div class="solution-step">Med 10 kranar: \\( \\dfrac{30}{10} = 3 \\text{ timmar} \\)</div>
              <div class="solution-step"><strong>Svar: 3 timmar</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 7: FUNKTIONER & SAMBAND =====
  {
    id: 7,
    title: "Funktioner & Samband",
    points: "Snitt 3,3 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Funktioner och samband</h3>

      <h4>Vad är en funktion?</h4>
      <p>En funktion är en regel som till varje värde på \\(x\\) ger exakt ett värde på \\(y\\).</p>

      <h4>Linjara funktioner</h4>
      <p>En linjar funktion har ekvationen:</p>
      <div class="formula-box">
        \\[ y = kx + m \\]
        <p>\\( k \\) = riktningskoefficient (lutning) = hur mycket \\(y\\) ändras när \\(x\\) ökar med 1</p>
        <p>\\( m \\) = y-värde där linjen skar y-axeln (när \\(x = 0\\))</p>
      </div>
      <p>Om \\(k > 0\\) är linjen stigande, om \\(k < 0\\) är den fallande, om \\(k = 0\\) är den horisontal.</p>

      <h4>Beräkna k från två punkter</h4>
      <div class="formula-box">
        \\[ k = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x} \\]
      </div>

      <h4>Proportionella samband</h4>
      <p>Om \\( m = 0 \\) har vi \\( y = kx \\), ett proportionellt samband. Grafen går genom origo.</p>

      <h4>Tolka grafer</h4>
      <p>När man tolkar en graf bor man notera:</p>
      <div class="formula-box">
        <p>- Vad axlarna representerar (enheter)</p>
        <p>- Startvärdet (var börjar grafen)</p>
        <p>- Om grafen är stigande, fallande eller konstant</p>
        <p>- Eventuella knapunkter</p>
      </div>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "En linjär funktion har ekvationen \\( y = 2x + 3 \\). Vad är \\( y \\) när \\( x = 4 \\)?",
        solution: `
          <div class="solution-step">Sätt in \\( x = 4 \\):</div>
          <div class="solution-step">\\( y = 2 \\cdot 4 + 3 = 8 + 3 = 11 \\)</div>
          <div class="solution-step"><strong>Svar: \\( y = 11 \\)</strong></div>
        `,
        videos: ["PrNkdKSVhnE"],
        variants: [
          {
            text: "Om \\( y = -3x + 10 \\), vad är \\( y \\) när \\( x = 2 \\)?",
            solution: `
              <div class="solution-step">Sätt in \\( x = 2 \\):</div>
              <div class="solution-step">\\( y = -3 \\cdot 2 + 10 = -6 + 10 = 4 \\)</div>
              <div class="solution-step"><strong>Svar: \\( y = 4 \\)</strong></div>
            `
          },
          {
            text: "Om \\( y = 0{,}5x - 4 \\), för vilket \\( x \\)-värde blir \\( y = 0 \\)?",
            solution: `
              <div class="solution-step">Sätt \\( y = 0 \\):</div>
              <div class="solution-step">\\( 0{,}5x - 4 = 0 \\Rightarrow 0{,}5x = 4 \\Rightarrow x = 8 \\)</div>
              <div class="solution-step"><strong>Svar: \\( x = 8 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "En rät linje går genom punkterna \\( (0, 5) \\) och \\( (2, 11) \\). Bestäm riktningskoefficienten \\( k \\).",
        solution: `
          <div class="solution-step">Använd formeln för riktningskoefficienten med de två punkterna:</div>
          <div class="solution-step">\\( k = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{11 - 5}{2 - 0} = \\dfrac{6}{2} = 3 \\)</div>
          <div class="solution-step"><strong>Svar: \\( k = 3 \\)</strong></div>
        `,
        videos: ["wUDp5ODq98U"],
        variants: [
          {
            text: "En rät linje går genom \\( (2, 1) \\) och \\( (6, 9) \\). Bestäm riktningskoefficienten \\( k \\).",
            solution: `
              <div class="solution-step">Beräkna riktningskoefficienten med formeln:</div>
              <div class="solution-step">\\( k = \\dfrac{9 - 1}{6 - 2} = \\dfrac{8}{4} = 2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( k = 2 \\)</strong></div>
            `
          },
          {
            text: "En rät linje går genom \\( (-1, 5) \\) och \\( (3, -3) \\). Bestäm riktningskoefficienten \\( k \\).",
            solution: `
              <div class="solution-step">Beräkna riktningskoefficienten med formeln:</div>
              <div class="solution-step">\\( k = \\dfrac{-3 - 5}{3 - (-1)} = \\dfrac{-8}{4} = -2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( k = -2 \\) (linjen är fallande)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "En linje har ekvationen \\( y = -x + 8 \\). Var skär linjen x-axeln?",
        solution: `
          <div class="solution-step">På x-axeln är \\( y = 0 \\):</div>
          <div class="solution-step">\\( 0 = -x + 8 \\Rightarrow x = 8 \\)</div>
          <div class="solution-step"><strong>Svar: Linjen skär x-axeln i \\( (8, 0) \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En linje har ekvationen \\( y = 3x - 12 \\). Var skär linjen y-axeln? Var skär den x-axeln?",
            solution: `
              <div class="solution-step">Linjen skär y-axeln där \\( x = 0 \\): \\( y = 3 \\cdot 0 - 12 = -12 \\). Punkt: \\( (0, -12) \\)</div>
              <div class="solution-step">Linjen skär x-axeln där \\( y = 0 \\): \\( 0 = 3x - 12 \\Rightarrow x = 4 \\). Punkt: \\( (4, 0) \\)</div>
              <div class="solution-step"><strong>Svar: y-axeln i (0, −12) och x-axeln i (4, 0)</strong></div>
            `
          },
          {
            text: "En linje har ekvationen \\( y = 2x + 6 \\). I vilken punkt skär linjen x-axeln?",
            solution: `
              <div class="solution-step">På x-axeln är \\( y = 0 \\):</div>
              <div class="solution-step">\\( 0 = 2x + 6 \\Rightarrow 2x = -6 \\Rightarrow x = -3 \\)</div>
              <div class="solution-step"><strong>Svar: Linjen skär x-axeln i \\( (-3, 0) \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "En linje går genom punkterna \\( (1, 4) \\) och \\( (5, 12) \\). Bestäm linjens ekvation på formen \\( y = kx + m \\).",
        solution: `
          <div class="solution-step">Beräkna \\( k \\): \\( k = \\dfrac{12-4}{5-1} = \\dfrac{8}{4} = 2 \\)</div>
          <div class="solution-step">Använd en punkt för att beräkna \\( m \\). Med \\( (1, 4) \\):</div>
          <div class="solution-step">\\( 4 = 2 \\cdot 1 + m \\Rightarrow m = 2 \\)</div>
          <div class="solution-step"><strong>Svar: \\( y = 2x + 2 \\)</strong></div>
        `,
        videos: ["wUDp5ODq98U"],
        variants: [
          {
            text: "En linje går genom \\( (0, -2) \\) och \\( (4, 6) \\). Bestäm linjens ekvation.",
            solution: `
              <div class="solution-step">Beräkna lutningen med de två punkterna:</div>
              <div class="solution-step">\\( k = \\dfrac{6 - (-2)}{4 - 0} = \\dfrac{8}{4} = 2 \\)</div>
              <div class="solution-step">Linjen skär y-axeln i \\( (0, -2) \\), så \\( m = -2 \\).</div>
              <div class="solution-step"><strong>Svar: \\( y = 2x - 2 \\)</strong></div>
            `
          },
          {
            text: "En linje går genom \\( (3, 7) \\) och \\( (9, -5) \\). Bestäm linjens ekvation.",
            solution: `
              <div class="solution-step">Beräkna lutningen med de två punkterna:</div>
              <div class="solution-step">\\( k = \\dfrac{-5 - 7}{9 - 3} = \\dfrac{-12}{6} = -2 \\)</div>
              <div class="solution-step">Sätt in en av punkterna för att beräkna \\( m \\). Med \\( (3, 7) \\):</div>
              <div class="solution-step">\\( 7 = -2 \\cdot 3 + m \\Rightarrow m = 13 \\)</div>
              <div class="solution-step"><strong>Svar: \\( y = -2x + 13 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "En taxifärd kostar 40 kr i startavgift plus 15 kr per kilometer. Skriv en formel för kostnaden \\( y \\) kr om man kör \\( x \\) kilometer. Hur långt kan man köra för 250 kr?",
        solution: `
          <div class="solution-step">Startavgiften är 40 kr och varje km kostar 15 kr, så formeln blir:</div>
          <div class="solution-step">\\( y = 15x + 40 \\)</div>
          <div class="solution-step">För att ta reda på hur långt man kan köra för 250 kr, sätt \\( y = 250 \\) och lös ut \\( x \\):</div>
          <div class="solution-step">\\( 15x + 40 = 250 \\)</div>
          <div class="solution-step">\\( 15x = 210 \\)</div>
          <div class="solution-step">\\( x = 14 \\)</div>
          <div class="solution-step"><strong>Svar: \\( y = 15x + 40 \\). Man kan köra 14 km för 250 kr.</strong></div>
        `,
        videos: ["D0a1UCmX0D8"],
        variants: [
          {
            text: "Ett gym kostar 200 kr i inskrivningsavgift plus 150 kr per månad. Skriv en formel för kostnaden \\( y \\) kr efter \\( m \\) månader. Hur lång tid tar det innan totalkostnaden blir 1 700 kr?",
            solution: `
              <div class="solution-step">Inskrivningsavgiften är 200 kr och månadsavgiften är 150 kr, så formeln blir:</div>
              <div class="solution-step">\\( y = 150m + 200 \\)</div>
              <div class="solution-step">Sätt \\( y = 1\\,700 \\) för att hitta antal månader: \\( 150m + 200 = 1\\,700 \\)</div>
              <div class="solution-step">\\( 150m = 1\\,500 \\Rightarrow m = 10 \\)</div>
              <div class="solution-step"><strong>Svar: \\( y = 150m + 200 \\). Det tar 10 månader.</strong></div>
            `
          },
          {
            text: "En uthyrningsfirma hyr ut cyklar för 50 kr i grundavgift plus 30 kr per timme. Skriv en formel för kostnaden \( y \) kr efter \( t \) timmar och beräkna kostnaden för 5 timmar.",
            solution: `
              <div class="solution-step">Grundavgiften är 50 kr och varje timme kostar 30 kr, så formeln blir:</div>
              <div class="solution-step">\\( y = 30t + 50 \\)</div>
              <div class="solution-step">Sätt in \\( t = 5 \\) för att beräkna kostnaden för 5 timmar:</div>
              <div class="solution-step">\\( y = 30 \\cdot 5 + 50 = 150 + 50 = 200 \\) kr</div>
              <div class="solution-step"><strong>Svar: \\( y = 30t + 50 \\). Kostnaden för 5 timmar är 200 kr.</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 6,
        text: "Två mobilabonnemang jämförs. Abonnemang A kostar 99 kr/månad plus 1,50 kr per samtalsminut. Abonnemang B kostar 199 kr/månad och inkluderar 100 fria minuter, därefter 0,50 kr per minut. För hur många minuters samtal per månad är abonnemangen lika dyra?",
        solution: `
          <div class="solution-step">Låt \\( x \\) vara antalet samtalsminuter (\\( x \\leq 100 \\), då \\(K_B = 199\\)).</div>
          <div class="solution-step">Kostnad A: \\( K_A = 99 + 1{,}5x \\)</div>
          <div class="solution-step">\\( K_A = K_B \\): \\( 99 + 1{,}5x = 199 \\)</div>
          <div class="solution-step">\\( 1{,}5x = 100 \\Rightarrow x \\approx 66{,}7 \\)</div>
          <div class="solution-step">Eftersom \\( 66{,}7 < 100 \\) är detta inom intervallet där B:s kostnad är fast 199 kr.</div>
          <div class="solution-step"><strong>Svar: Vid ungefär 67 minuters samtal per månad kostar de lika mycket.</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En streamingtjänst A kostar 79 kr/mån med obegränsad data. Tjänst B kostar 0 kr/mån men 2 kr per GB. Hur mycket data per månad krävs för att A ska vara det billigare alternativet?",
            solution: `
              <div class="solution-step">Ställ upp kostnaderna för de två tjänsterna:</div>
              <div class="solution-step">\\( K_A = 79 \\), \\( K_B = 2x \\) (där \\( x \\) = antal GB)</div>
              <div class="solution-step">A blir billigare när B kostar mer, dvs. \\( 79 < 2x \\Rightarrow x > 39{,}5 \\)</div>
              <div class="solution-step"><strong>Svar: A är billigare om man använder minst 40 GB per månad.</strong></div>
            `
          },
          {
            text: "En bilfirma hyr ut bilar. Alternativ 1: 400 kr/dag. Alternativ 2: 200 kr/dag + 2 kr/km. Hur långt kan man köra per dag innan alternativ 1 blir det billigare valet?",
            solution: `
              <div class="solution-step">Ställ upp kostnaderna för de två alternativen:</div>
              <div class="solution-step">\\( K_1 = 400 \\), \\( K_2 = 200 + 2x \\) (\\( x \\) = km)</div>
              <div class="solution-step">Sätt kostnaderna lika för att hitta brytpunkten: \\( 400 = 200 + 2x \\Rightarrow 2x = 200 \\Rightarrow x = 100 \\)</div>
              <div class="solution-step"><strong>Svar: Vid mer än 100 km/dag är alternativ 1 billigare.</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "Linjen \\( y = 2x - 1 \\) och linjen \\( y = -x + 8 \\) skär varandra i en punkt. Bestäm koordinaterna för skärningspunkten.",
        solution: `
          <div class="solution-step">I skärningspunkten är \\( y \\)-värdena lika, så vi sätter högerleden lika:</div>
          <div class="solution-step">\\( 2x - 1 = -x + 8 \\)</div>
          <div class="solution-step">Samla \\( x \\) på ena sidan:</div>
          <div class="solution-step">\\( 3x = 9 \\)</div>
          <div class="solution-step">\\( x = 3 \\)</div>
          <div class="solution-step">Sätt in \\( x = 3 \\) i ena ekvationen för att få \\( y \\):</div>
          <div class="solution-step">\\( y = 2 \\cdot 3 - 1 = 5 \\)</div>
          <div class="solution-step"><strong>Svar: Skärningspunkten är \\( (3, 5) \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Bestäm skärningspunkten mellan linjerna \\( y = 3x + 1 \\) och \\( y = -x + 9 \\).",
            solution: `
              <div class="solution-step">Sätt de två uttrycken för \\( y \\) lika:</div>
              <div class="solution-step">\\( 3x + 1 = -x + 9 \\)</div>
              <div class="solution-step">Lös ut \\( x \\): \\( 4x = 8 \\Rightarrow x = 2 \\)</div>
              <div class="solution-step">Sätt in \\( x = 2 \\) i ena ekvationen: \\( y = 3 \\cdot 2 + 1 = 7 \\)</div>
              <div class="solution-step"><strong>Svar: \\( (2, 7) \\)</strong></div>
            `
          },
          {
            text: "Bestäm skärningspunkten mellan \\( y = 0{,}5x + 3 \\) och \\( y = -2x + 8 \\).",
            solution: `
              <div class="solution-step">Sätt de två uttrycken för \\( y \\) lika:</div>
              <div class="solution-step">\\( 0{,}5x + 3 = -2x + 8 \\)</div>
              <div class="solution-step">Lös ut \\( x \\): \\( 2{,}5x = 5 \\Rightarrow x = 2 \\)</div>
              <div class="solution-step">Sätt in \\( x = 2 \\) i ena ekvationen: \\( y = 0{,}5 \\cdot 2 + 3 = 4 \\)</div>
              <div class="solution-step"><strong>Svar: \\( (2, 4) \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 8,
        text: "Ella tjänar 80 kr/timme på sitt extrajobb. Fadi tjänar 50 kr/timme men har redan 600 kr sparat. Skriv formler för Ellas pengar \\( y_E \\) och Fadis pengar \\( y_F \\) efter \\( t \\) timmars arbete. Efter hur många timmar har de lika mycket pengar?",
        solution: `
          <div class="solution-step">Ella tjänar 80 kr/timme utan sparade pengar, och Fadi tjänar 50 kr/timme men har 600 kr sparat:</div>
          <div class="solution-step">\\( y_E = 80t \\) och \\( y_F = 50t + 600 \\)</div>
          <div class="solution-step">Sätt formlerna lika för att hitta när de har lika mycket: \\( 80t = 50t + 600 \\)</div>
          <div class="solution-step">\\( 30t = 600 \\Rightarrow t = 20 \\)</div>
          <div class="solution-step"><strong>Svar: \\( y_E = 80t \\), \\( y_F = 50t + 600 \\). De har lika mycket efter 20 timmar.</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Företag A hyr ut bilar för 50 kr/dag plus 3 kr/km. Företag B tar 5 kr/km utan dagavgift. Skriv formler för kostnaden \\( y \\) och bestäm vid hur många km per dag de kostar lika mycket.",
            solution: `
              <div class="solution-step">Ställ upp formler för kostnaden hos varje företag:</div>
              <div class="solution-step">Företag A: \\( y = 3x + 50 \\), Företag B: \\( y = 5x \\)</div>
              <div class="solution-step">Sätt formlerna lika för att hitta brytpunkten: \\( 3x + 50 = 5x \\Rightarrow 50 = 2x \\Rightarrow x = 25 \\)</div>
              <div class="solution-step"><strong>Svar: Vid 25 km kostar de lika. Under 25 km är B billigare, över 25 km är A billigare.</strong></div>
            `
          },
          {
            text: "Maria och Omar springer. Maria springer med 8 km/h. Omar startar 2 km före Maria och springer med 6 km/h. Skriv formler för sträckan \\( y \\) i km efter \\( t \\) timmar. När hinner Maria ikapp Omar?",
            solution: `
              <div class="solution-step">Ställ upp formler för sträckan. Maria startar vid 0 km och Omar vid 2 km:</div>
              <div class="solution-step">Maria: \\( y = 8t \\), Omar: \\( y = 6t + 2 \\)</div>
              <div class="solution-step">Maria hinner ikapp när de sprungit lika långt, sätt formlerna lika: \\( 8t = 6t + 2 \\Rightarrow 2t = 2 \\Rightarrow t = 1 \\)</div>
              <div class="solution-step"><strong>Svar: Maria hinner ikapp efter 1 timme (vid 8 km).</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 8: GEOMETRI: AREA, OMKRETS & VOLYM =====
  {
    id: 8,
    title: "Geometri: Area, Omkrets & Volym",
    points: "Snitt 10,6 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Geometri: Area, omkrets och volym</h3>

      <h4>Areaformler</h4>
      <div class="formula-box">
        <p><strong>Rektangel:</strong> \\( A = b \\cdot h \\)</p>
        <p><strong>Triangel:</strong> \\( A = \\dfrac{b \\cdot h}{2} \\)</p>
        <p><strong>Parallellogram:</strong> \\( A = b \\cdot h \\)</p>
        <p><strong>Trapets:</strong> \\( A = \\dfrac{(a + b) \\cdot h}{2} \\) där \\(a\\) och \\(b\\) är de parallella sidorna</p>
        <p><strong>Cirkel:</strong> \\( A = \\pi r^2 \\)</p>
      </div>

      <h4>Omkrets</h4>
      <div class="formula-box">
        <p><strong>Rektangel:</strong> \\( O = 2(b + h) \\)</p>
        <p><strong>Cirkel:</strong> \\( O = 2\\pi r = \\pi d \\) där \\(d\\) är diametern</p>
        <p><strong>Övriga figurer:</strong> summera alla sidor</p>
      </div>

      <h4>Volymformler</h4>
      <div class="formula-box">
        <p><strong>Rätblock:</strong> \\( V = l \\cdot b \\cdot h \\)</p>
        <p><strong>Cylinder:</strong> \\( V = \\pi r^2 h \\)</p>
        <p><strong>Kon:</strong> \\( V = \\dfrac{\\pi r^2 h}{3} \\)</p>
        <p><strong>Klot:</strong> \\( V = \\dfrac{4\\pi r^3}{3} \\)</p>
      </div>

      <h4>Begreppsförklaring</h4>
      <p><strong>Basen</strong> (\\(b\\)) är den sida man mäter höjden vinkelrättt mot. <strong>Höjden</strong> (\\(h\\)) är det vinkelrätta avståndet från basen till motstående sida/punkt.</p>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "Beräkna arean av en triangel med basen 8 cm och höjden 5 cm.",
        solution: `
          <div class="solution-step">Vi använder formeln för en triangels area, basen gånger höjden delat med 2:</div>
          <div class="solution-step">\\( A = \\dfrac{b \\cdot h}{2} = \\dfrac{8 \\cdot 5}{2} = \\dfrac{40}{2} = 20 \\text{ cm}^2 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 20 \\text{ cm}^2 \\)</strong></div>
        `,
        videos: ["5KZ4yrkzGj0"],
        variants: [
          {
            text: "Beräkna arean av en parallellogram med basen 12 cm och höjden 6 cm.",
            solution: `
              <div class="solution-step">En parallellogram har samma areaformel som en rektangel, bas gånger höjd:</div>
              <div class="solution-step">\\( A = b \\cdot h = 12 \\cdot 6 = 72 \\text{ cm}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 72 \\text{ cm}^2 \\)</strong></div>
            `
          },
          {
            text: "En segelduk har formen av en triangel med basen 14 dm och höjden 9 dm. Beräkna segeldukets area.",
            solution: `
              <div class="solution-step">Segeldukens form är en triangel, så vi använder triangelns areaformel:</div>
              <div class="solution-step">\\( A = \\dfrac{b \\cdot h}{2} = \\dfrac{14 \\cdot 9}{2} = \\dfrac{126}{2} = 63 \\text{ dm}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 63 \\text{ dm}^2 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Beräkna volymen av ett rätblock med längden 10 cm, bredden 4 cm och höjden 3 cm.",
        solution: `
          <div class="solution-step">Volymen av ett rätblock beräknas med längd gånger bredd gånger höjd:</div>
          <div class="solution-step">\\( V = l \\cdot b \\cdot h = 10 \\cdot 4 \\cdot 3 = 120 \\text{ cm}^3 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 120 \\text{ cm}^3 \\)</strong></div>
        `,
        videos: ["aj0qZRLokK4"],
        variants: [
          {
            text: "En förvaringslåda har längden 15 cm, bredden 8 cm och höjden 6 cm. Beräkna lådans volym.",
            solution: `
              <div class="solution-step">Lådan är ett rätblock, så vi multiplicerar längd, bredd och höjd:</div>
              <div class="solution-step">\\( V = l \\cdot b \\cdot h = 15 \\cdot 8 \\cdot 6 = 720 \\text{ cm}^3 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 720 \\text{ cm}^3 \\)</strong></div>
            `
          },
          {
            text: "En akvarielåda utan lock har botten 20 cm × 12 cm och höjden 5 cm. Beräkna volymen i liter. (\\( 1 \\text{ dm}^3 = 1 \\text{ liter} \\))",
            solution: `
              <div class="solution-step">Först beräknar vi volymen med längd gånger bredd gånger höjd:</div>
              <div class="solution-step">\\( V = 20 \\cdot 12 \\cdot 5 = 1\\,200 \\text{ cm}^3 \\)</div>
              <div class="solution-step">Sedan omvandlar vi till liter (1 000 cm³ = 1 dm³ = 1 liter):</div>
              <div class="solution-step">\\( 1\\,200 \\text{ cm}^3 = 1{,}2 \\text{ dm}^3 = 1{,}2 \\text{ liter} \\)</div>
              <div class="solution-step"><strong>Svar: 1,2 liter</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Beräkna omkretsen av en cirkel med radien 7 cm. Avrunda till en decimal.",
        solution: `
          <div class="solution-step">Omkretsen av en cirkel beräknas med formeln 2 gånger pi gånger radien:</div>
          <div class="solution-step">\\( O = 2\\pi r = 2 \\cdot \\pi \\cdot 7 = 14\\pi \\approx 44{,}0 \\text{ cm} \\)</div>
          <div class="solution-step"><strong>Svar: Ungefär 44,0 cm</strong></div>
        `,
        videos: ["45EdPeJrCEg"],
        variants: [
          {
            text: "En cirkel har diametern 18 cm. Beräkna omkretsen. Avrunda till en decimal.",
            solution: `
              <div class="solution-step">När vi har diametern kan vi använda formeln pi gånger diametern:</div>
              <div class="solution-step">\\( O = \\pi d = \\pi \\cdot 18 = 18\\pi \\approx 56{,}5 \\text{ cm} \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 56,5 cm</strong></div>
            `
          },
          {
            text: "Ett runt bord har radien 60 cm. Lisa vill sätta en spetskant runt hela bordets kant. Hur lång spetskant behöver hon? Avrunda till hela cm.",
            solution: `
              <div class="solution-step">Bordets kant är en cirkel, så vi beräknar omkretsen:</div>
              <div class="solution-step">\\( O = 2\\pi r = 2 \\cdot \\pi \\cdot 60 = 120\\pi \\approx 377 \\text{ cm} \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 377 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "En cylinder har radien 5 cm och höjden 12 cm. Beräkna volymen. Avrunda till hela \\( \\text{cm}^3 \\).",
        solution: `
          <div class="solution-step">Volymen av en cylinder beräknas med pi gånger radien i kvadrat gånger höjden:</div>
          <div class="solution-step">\\( V = \\pi r^2 h = \\pi \\cdot 5^2 \\cdot 12 = 300\\pi \\approx 942 \\text{ cm}^3 \\)</div>
          <div class="solution-step"><strong>Svar: Ungefär \\( 942 \\text{ cm}^3 \\)</strong></div>
        `,
        videos: ["OegMuCN4KcM"],
        variants: [
          {
            text: "En cylinderformad vas har diametern 8 cm och höjden 20 cm. Beräkna volymen. Avrunda till hela \\( \\text{cm}^3 \\).",
            solution: `
              <div class="solution-step">Vi har diametern, så vi börjar med att ta fram radien:</div>
              <div class="solution-step">Radien: \\( r = \\dfrac{8}{2} = 4 \\) cm</div>
              <div class="solution-step">Nu beräknar vi cylinderns volym:</div>
              <div class="solution-step">\\( V = \\pi r^2 h = \\pi \\cdot 4^2 \\cdot 20 = 320\\pi \\approx 1\\,005 \\text{ cm}^3 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär \\( 1\\,005 \\text{ cm}^3 \\)</strong></div>
            `
          },
          {
            text: "En konservburk har radien 3,5 cm och höjden 11 cm. Hur många deciliter rymmer burken? Avrunda till hela dl. (\\( 1 \\text{ dl} = 100 \\text{ cm}^3 \\))",
            solution: `
              <div class="solution-step">Burken är en cylinder, så vi beräknar volymen med cylinderformeln:</div>
              <div class="solution-step">\\( V = \\pi r^2 h = \\pi \\cdot 3{,}5^2 \\cdot 11 = \\pi \\cdot 12{,}25 \\cdot 11 = 134{,}75\\pi \\approx 423 \\text{ cm}^3 \\)</div>
              <div class="solution-step">Vi omvandlar till deciliter (1 dl = 100 cm³):</div>
              <div class="solution-step">\\( \\dfrac{423}{100} \\approx 4 \\text{ dl} \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 4 dl</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "En trapets har parallella sidor 6 cm och 10 cm samt höjden 4 cm. Beräkna arean.",
        solution: `
          <div class="solution-step">Vi använder trapetsens areaformel, summan av de parallella sidorna gånger höjden delat med 2:</div>
          <div class="solution-step">\\( A = \\dfrac{(a + b) \\cdot h}{2} = \\dfrac{(6 + 10) \\cdot 4}{2} = \\dfrac{16 \\cdot 4}{2} = \\dfrac{64}{2} = 32 \\text{ cm}^2 \\)</div>
          <div class="solution-step"><strong>Svar: \\( 32 \\text{ cm}^2 \\)</strong></div>
        `,
        videos: ["pneKu3qmh8o"],
        variants: [
          {
            text: "En trapets har parallella sidor 9 cm och 15 cm. Höjden är 7 cm. Beräkna arean.",
            solution: `
              <div class="solution-step">Vi sätter in de parallella sidorna och höjden i trapetsens areaformel:</div>
              <div class="solution-step">\\( A = \\dfrac{(a + b) \\cdot h}{2} = \\dfrac{(9 + 15) \\cdot 7}{2} = \\dfrac{24 \\cdot 7}{2} = \\dfrac{168}{2} = 84 \\text{ cm}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 84 \\text{ cm}^2 \\)</strong></div>
            `
          },
          {
            text: "Ett bord har formen av en trapets med de parallella sidorna 80 cm och 120 cm. Avståndet mellan de parallella sidorna är 50 cm. Beräkna bordets area i \\( \\text{cm}^2 \\).",
            solution: `
              <div class="solution-step">Bordet har formen av en trapets, så vi använder trapetsens areaformel:</div>
              <div class="solution-step">\\( A = \\dfrac{(a + b) \\cdot h}{2} = \\dfrac{(80 + 120) \\cdot 50}{2} = \\dfrac{200 \\cdot 50}{2} = \\dfrac{10\\,000}{2} = 5\\,000 \\text{ cm}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 5\\,000 \\text{ cm}^2 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "Ett klot har diametern 12 cm. Beräkna klotets volym. Avrunda till hela \\( \\text{cm}^3 \\).",
        solution: `
          <div class="solution-step">Vi har diametern, så vi börjar med att beräkna radien:</div>
          <div class="solution-step">Radien: \\( r = \\dfrac{12}{2} = 6 \\) cm</div>
          <div class="solution-step">Nu använder vi formeln för ett klots volym:</div>
          <div class="solution-step">\\( V = \\dfrac{4\\pi r^3}{3} = \\dfrac{4\\pi \\cdot 6^3}{3} = \\dfrac{4\\pi \\cdot 216}{3} = \\dfrac{864\\pi}{3} = 288\\pi \\approx 905 \\text{ cm}^3 \\)</div>
          <div class="solution-step"><strong>Svar: Ungefär \\( 905 \\text{ cm}^3 \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Ett klot har radien 4 cm. Beräkna klotets volym. Avrunda till hela \\( \\text{cm}^3 \\).",
            solution: `
              <div class="solution-step">Vi sätter in radien i klotets volymformel:</div>
              <div class="solution-step">\\( V = \\dfrac{4\\pi r^3}{3} = \\dfrac{4\\pi \\cdot 4^3}{3} = \\dfrac{4\\pi \\cdot 64}{3} = \\dfrac{256\\pi}{3} \\approx 268 \\text{ cm}^3 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär \\( 268 \\text{ cm}^3 \\)</strong></div>
            `
          },
          {
            text: "En kula har volymen \\( 36\\pi \\text{ cm}^3 \\). Beräkna kulans radie.",
            solution: `
              <div class="solution-step">Vi ställer upp klotets volymformel och sätter in den givna volymen:</div>
              <div class="solution-step">\\( V = \\dfrac{4\\pi r^3}{3} = 36\\pi \\)</div>
              <div class="solution-step">Nu löser vi ut radien steg för steg. Dela båda led med \\( \\pi \\): \\( \\dfrac{4r^3}{3} = 36 \\)</div>
              <div class="solution-step">Multiplicera med 3: \\( 4r^3 = 108 \\)</div>
              <div class="solution-step">Dividera med 4: \\( r^3 = 27 \\)</div>
              <div class="solution-step">Dra kubikroten: \\( r = \\sqrt[3]{27} = 3 \\) cm</div>
              <div class="solution-step"><strong>Svar: Radien är 3 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "En glasstrut har formen av en kon med radien 3 cm och höjden 12 cm. Ovanpå strutten läggs ett halvt klot glass med samma radie. Beräkna den totala volymen glass (kon + halvklot).",
        solution: `
          <div class="solution-step">Vi beräknar varje del för sig. Först konens volym:</div>
          <div class="solution-step">Volym kon: \\( V_{\\text{kon}} = \\dfrac{\\pi r^2 h}{3} = \\dfrac{\\pi \\cdot 3^2 \\cdot 12}{3} = \\dfrac{108\\pi}{3} = 36\\pi \\)</div>
          <div class="solution-step">Sedan halvklotets volym (halva klotformeln):</div>
          <div class="solution-step">Volym halvklot: \\( V_{\\text{halvklot}} = \\dfrac{1}{2} \\cdot \\dfrac{4\\pi r^3}{3} = \\dfrac{2\\pi \\cdot 27}{3} = 18\\pi \\)</div>
          <div class="solution-step">Till sist adderar vi de två delarna:</div>
          <div class="solution-step">Total volym: \\( 36\\pi + 18\\pi = 54\\pi \\approx 170 \\text{ cm}^3 \\)</div>
          <div class="solution-step"><strong>Svar: Ungefär \\( 170 \\text{ cm}^3 \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En pelare har formen av en cylinder med en kon på toppen. Cylindern har radien 4 cm och höjden 10 cm. Konen har samma radie och höjden 6 cm. Beräkna den totala volymen. Avrunda till hela \\( \\text{cm}^3 \\).",
            solution: `
              <div class="solution-step">Vi beräknar varje del för sig. Först cylinderns volym:</div>
              <div class="solution-step">Volym cylinder: \\( V_{\\text{cyl}} = \\pi r^2 h = \\pi \\cdot 4^2 \\cdot 10 = 160\\pi \\)</div>
              <div class="solution-step">Sedan konens volym (en tredjedel av cylinderns formel):</div>
              <div class="solution-step">Volym kon: \\( V_{\\text{kon}} = \\dfrac{\\pi r^2 h}{3} = \\dfrac{\\pi \\cdot 4^2 \\cdot 6}{3} = \\dfrac{96\\pi}{3} = 32\\pi \\)</div>
              <div class="solution-step">Vi adderar de två delarna:</div>
              <div class="solution-step">Total volym: \\( 160\\pi + 32\\pi = 192\\pi \\approx 603 \\text{ cm}^3 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär \\( 603 \\text{ cm}^3 \\)</strong></div>
            `
          },
          {
            text: "En tärningslåda har formen av ett rätblock med måtten 6 cm × 6 cm × 4 cm. I lådan ligger en boll med radien 2 cm. Beräkna den volym i lådan som inte upptas av bollen. Avrunda till hela \\( \\text{cm}^3 \\).",
            solution: `
              <div class="solution-step">Vi beräknar först lådans volym:</div>
              <div class="solution-step">Volym rätblock: \\( V_{\\text{låda}} = 6 \\cdot 6 \\cdot 4 = 144 \\text{ cm}^3 \\)</div>
              <div class="solution-step">Sedan beräknar vi bollens volym med klotformeln:</div>
              <div class="solution-step">Volym boll: \\( V_{\\text{boll}} = \\dfrac{4\\pi r^3}{3} = \\dfrac{4\\pi \\cdot 2^3}{3} = \\dfrac{32\\pi}{3} \\approx 34 \\text{ cm}^3 \\)</div>
              <div class="solution-step">Den lediga volymen är skillnaden:</div>
              <div class="solution-step">Kvar: \\( 144 - 34 = 110 \\text{ cm}^3 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär \\( 110 \\text{ cm}^3 \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 8,
        text: "En rektangulär bassäng är 25 m lång, 10 m bred och 1,8 m djup. Bassängen ska fyllas med vatten med hjälp av en slang som levererar 50 liter per minut. Hur många timmar tar det att fylla bassängen?",
        solution: `
          <div class="solution-step">Först beräknar vi bassängens volym (längd gånger bredd gånger djup):</div>
          <div class="solution-step">Volym: \\( V = 25 \\cdot 10 \\cdot 1{,}8 = 450 \\text{ m}^3 \\)</div>
          <div class="solution-step">Vi omvandlar till liter (1 m³ = 1 000 liter):</div>
          <div class="solution-step">\\( 450 \\text{ m}^3 = 450 \\cdot 1\\,000 = 450\\,000 \\text{ liter} \\)</div>
          <div class="solution-step">Sedan beräknar vi tiden genom att dela volymen med flödet:</div>
          <div class="solution-step">Tid i minuter: \\( \\dfrac{450\\,000}{50} = 9\\,000 \\text{ min} \\)</div>
          <div class="solution-step">Omvandla till timmar:</div>
          <div class="solution-step">Tid i timmar: \\( \\dfrac{9\\,000}{60} = 150 \\text{ timmar} \\)</div>
          <div class="solution-step"><strong>Svar: 150 timmar</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En vattentank har formen av ett rätblock med måtten 1,2 m × 0,8 m × 1,5 m. Tanken är full och läcker med 15 liter per timme. Hur lång tid tar det innan tanken är tom?",
            solution: `
              <div class="solution-step">Först beräknar vi tankens volym:</div>
              <div class="solution-step">Volym: \\( V = 1{,}2 \\cdot 0{,}8 \\cdot 1{,}5 = 1{,}44 \\text{ m}^3 \\)</div>
              <div class="solution-step">Vi omvandlar till liter (1 m³ = 1 000 liter):</div>
              <div class="solution-step">\\( 1{,}44 \\text{ m}^3 = 1\\,440 \\text{ liter} \\)</div>
              <div class="solution-step">Tiden fås genom att dela volymen med läckhastigheten:</div>
              <div class="solution-step">Tid: \\( \\dfrac{1\\,440}{15} = 96 \\text{ timmar} \\)</div>
              <div class="solution-step"><strong>Svar: 96 timmar</strong></div>
            `
          },
          {
            text: "En sandhög har formen av en kon med basradien 3 m och höjden 2 m. Sanden väger \\( 1\\,600 \\) kg per \\( \\text{m}^3 \\). Hur tungt väger sandhögen i ton? Avrunda till en decimal.",
            solution: `
              <div class="solution-step">Sandhögen har formen av en kon, så vi beräknar volymen med konformeln:</div>
              <div class="solution-step">Volym: \\( V = \\dfrac{\\pi r^2 h}{3} = \\dfrac{\\pi \\cdot 3^2 \\cdot 2}{3} = \\dfrac{18\\pi}{3} = 6\\pi \\approx 18{,}85 \\text{ m}^3 \\)</div>
              <div class="solution-step">Vi multiplicerar volymen med sandens densitet och omvandlar till ton:</div>
              <div class="solution-step">Vikt: \\( 18{,}85 \\cdot 1\\,600 \\approx 30\\,159 \\text{ kg} \\approx 30{,}2 \\text{ ton} \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 30,2 ton</strong></div>
            `
          }
        ]
      },
      // --- E4 (NY): Rektangel area & omkrets ---
      {
        level: "E",
        num: 9,
        text: "En rektangel har längden 12 cm och bredden 7 cm. Beräkna arean och omkretsen.",
        solution: `
          <div class="solution-step">Arean av en rektangel är bas gånger höjd:</div>
          <div class="solution-step">Area: \\( A = b \\cdot h = 12 \\cdot 7 = 84 \\text{ cm}^2 \\)</div>
          <div class="solution-step">Omkretsen är summan av alla sidor, alltså 2 gånger (bas + höjd):</div>
          <div class="solution-step">Omkrets: \\( O = 2(b + h) = 2(12 + 7) = 2 \\cdot 19 = 38 \\text{ cm} \\)</div>
          <div class="solution-step"><strong>Svar: Arean är \\( 84 \\text{ cm}^2 \\) och omkretsen är 38 cm</strong></div>
        `,
        videos: ["7L_gp0m5Jzs"],
        variants: [
          {
            text: "En rektangulär trädgård är 18 m lång och 9 m bred. Beräkna arean och omkretsen.",
            solution: `
              <div class="solution-step">Arean av en rektangel är längd gånger bredd:</div>
              <div class="solution-step">Area: \\( A = 18 \\cdot 9 = 162 \\text{ m}^2 \\)</div>
              <div class="solution-step">Omkretsen är alla sidor summerade:</div>
              <div class="solution-step">Omkrets: \\( O = 2(18 + 9) = 2 \\cdot 27 = 54 \\text{ m} \\)</div>
              <div class="solution-step"><strong>Svar: Arean är \\( 162 \\text{ m}^2 \\) och omkretsen är 54 m</strong></div>
            `
          },
          {
            text: "En sida av en rektangel är 15 cm. Omkretsen är 46 cm. Beräkna rektangelns area.",
            solution: `
              <div class="solution-step">Vi utgår från omkretsen för att hitta den okända sidan:</div>
              <div class="solution-step">Omkretsen: \\( O = 2(a + b) = 46 \\), dvs \\( a + b = 23 \\)</div>
              <div class="solution-step">Andra sidan: \\( b = 23 - 15 = 8 \\) cm</div>
              <div class="solution-step">Nu kan vi beräkna arean:</div>
              <div class="solution-step">Area: \\( A = 15 \\cdot 8 = 120 \\text{ cm}^2 \\)</div>
              <div class="solution-step"><strong>Svar: \\( 120 \\text{ cm}^2 \\)</strong></div>
            `
          }
        ]
      },
      // --- C4 (NY): Cirkelarea ---
      {
        level: "C",
        num: 10,
        text: "Beräkna arean av en cirkel med radien 6 cm. Avrunda till en decimal.",
        solution: `
          <div class="solution-step">Arean av en cirkel beräknas med pi gånger radien i kvadrat:</div>
          <div class="solution-step">\\( A = \\pi r^2 = \\pi \\cdot 6^2 = 36\\pi \\approx 113{,}1 \\text{ cm}^2 \\)</div>
          <div class="solution-step"><strong>Svar: Ungefär \\( 113{,}1 \\text{ cm}^2 \\)</strong></div>
        `,
        videos: ["45EdPeJrCEg"],
        variants: [
          {
            text: "En cirkelformad fontän har diametern 5 m. Beräkna fontänens area. Avrunda till en decimal.",
            solution: `
              <div class="solution-step">Vi har diametern, så vi börjar med att beräkna radien:</div>
              <div class="solution-step">Radien: \\( r = \\dfrac{5}{2} = 2{,}5 \\) m</div>
              <div class="solution-step">Nu beräknar vi cirkelns area:</div>
              <div class="solution-step">\\( A = \\pi r^2 = \\pi \\cdot 2{,}5^2 = 6{,}25\\pi \\approx 19{,}6 \\text{ m}^2 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär \\( 19{,}6 \\text{ m}^2 \\)</strong></div>
            `
          },
          {
            text: "En cirkelformad rabatt har arean \\( 120 \\text{ m}^2 \\). Beräkna radien. Avrunda till en decimal.",
            solution: `
              <div class="solution-step">Vi ställer upp cirkelns areaformel och sätter in den givna arean:</div>
              <div class="solution-step">\\( A = \\pi r^2 = 120 \\)</div>
              <div class="solution-step">Löser ut radien genom att dela med pi:</div>
              <div class="solution-step">\\( r^2 = \\dfrac{120}{\\pi} \\approx 38{,}2 \\)</div>
              <div class="solution-step">Drar roten ur:</div>
              <div class="solution-step">\\( r = \\sqrt{38{,}2} \\approx 6{,}2 \\) m</div>
              <div class="solution-step"><strong>Svar: Ungefär 6,2 m</strong></div>
            `
          }
        ]
      },
      // --- C5 (NY): Sammansatt area ---
      {
        level: "C",
        num: 11,
        text: "En figur består av en rektangel med sidorna 10 cm och 6 cm, och en halvcirkel på ena kortsidan (diametern = 6 cm). Beräkna den totala arean. Avrunda till en decimal.",
        solution: `
          <div class="solution-step">Figuren består av två delar, så vi beräknar varje del för sig. Först rektangeln:</div>
          <div class="solution-step">Rektangelns area: \\( A_{\\text{rekt}} = 10 \\cdot 6 = 60 \\text{ cm}^2 \\)</div>
          <div class="solution-step">Sedan halvcirkeln. Vi tar fram radien från diametern:</div>
          <div class="solution-step">Halvcirkelns radie: \\( r = \\dfrac{6}{2} = 3 \\) cm</div>
          <div class="solution-step">Halvcirkelns area är halva cirkelarean:</div>
          <div class="solution-step">Halvcirkelns area: \\( A_{\\text{halv}} = \\dfrac{\\pi r^2}{2} = \\dfrac{\\pi \\cdot 9}{2} = 4{,}5\\pi \\approx 14{,}1 \\text{ cm}^2 \\)</div>
          <div class="solution-step">Vi adderar de två delarna:</div>
          <div class="solution-step">Total area: \\( 60 + 14{,}1 = 74{,}1 \\text{ cm}^2 \\)</div>
          <div class="solution-step"><strong>Svar: Ungefär \\( 74{,}1 \\text{ cm}^2 \\)</strong></div>
        `,
        videos: ["y0s0Az402LQ"],
        variants: [
          {
            text: "Ett fönster har formen av en rektangel med en halvcirkel ovanpå. Rektangeln är 60 cm bred och 100 cm hög. Beräkna fönstrets totala area. Avrunda till hela \\( \\text{cm}^2 \\).",
            solution: `
              <div class="solution-step">Vi beräknar varje del för sig. Först rektangeln:</div>
              <div class="solution-step">Rektangelns area: \\( 60 \\cdot 100 = 6\\,000 \\text{ cm}^2 \\)</div>
              <div class="solution-step">Sedan halvcirkeln. Radien är halva bredden:</div>
              <div class="solution-step">Halvcirkelns radie: \\( r = \\dfrac{60}{2} = 30 \\) cm</div>
              <div class="solution-step">Halvcirkelns area är halva cirkelarean:</div>
              <div class="solution-step">Halvcirkelns area: \\( \\dfrac{\\pi \\cdot 30^2}{2} = \\dfrac{900\\pi}{2} = 450\\pi \\approx 1\\,414 \\text{ cm}^2 \\)</div>
              <div class="solution-step">Vi adderar rektangeln och halvcirkeln:</div>
              <div class="solution-step">Total area: \\( 6\\,000 + 1\\,414 = 7\\,414 \\text{ cm}^2 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär \\( 7\\,414 \\text{ cm}^2 \\)</strong></div>
            `
          },
          {
            text: "En rektangulär gräsmatta är 12 m × 8 m. I mitten finns en cirkulär damm med radien 2 m. Beräkna den gröna ytan (gräsmattan minus dammen). Avrunda till en decimal.",
            solution: `
              <div class="solution-step">Först beräknar vi hela gräsmattans area:</div>
              <div class="solution-step">Gräsmattans area: \\( 12 \\cdot 8 = 96 \\text{ m}^2 \\)</div>
              <div class="solution-step">Sedan beräknar vi dammens area med cirkelns areaformel:</div>
              <div class="solution-step">Dammens area: \\( \\pi r^2 = \\pi \\cdot 2^2 = 4\\pi \\approx 12{,}6 \\text{ m}^2 \\)</div>
              <div class="solution-step">Den gröna ytan får vi genom att subtrahera dammens area:</div>
              <div class="solution-step">Grön yta: \\( 96 - 12{,}6 = 83{,}4 \\text{ m}^2 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär \\( 83{,}4 \\text{ m}^2 \\)</strong></div>
            `
          }
        ]
      },
      // --- A3 (NY): Optimering ---
      {
        level: "A",
        num: 12,
        text: "Sara har 24 m stängsel och vill hägna in en rektangulär yta mot en vägg (stängslet behövs bara på tre sidor). Vilka mått ger störst area? Beräkna den största möjliga arean.",
        solution: `
          <div class="solution-step">Låt sidan längs väggen vara \\( x \\) m och de två andra sidorna vara \\( y \\) m.</div>
          <div class="solution-step">Stängsel: \\( x + 2y = 24 \\), dvs \\( x = 24 - 2y \\)</div>
          <div class="solution-step">Area: \\( A = x \\cdot y = (24 - 2y) \\cdot y = 24y - 2y^2 \\)</div>
          <div class="solution-step">Vi provar olika värden:
            \\( y = 4 \\Rightarrow A = 64 \\), \\( y = 5 \\Rightarrow A = 70 \\), \\( y = 6 \\Rightarrow A = 72 \\), \\( y = 7 \\Rightarrow A = 70 \\)</div>
          <div class="solution-step">Arean är störst när \\( y = 6 \\) m och \\( x = 24 - 12 = 12 \\) m.</div>
          <div class="solution-step"><strong>Svar: Måtten 12 m × 6 m ger störst area: \\( 72 \\text{ m}^2 \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En bonde har 40 m stängsel och vill hägna in en rektangulär hage (alla fyra sidor). Vilka mått ger störst area?",
            solution: `
              <div class="solution-step">Låt sidorna vara \\( l \\) m och \\( b \\) m.</div>
              <div class="solution-step">Omkrets: \\( 2(l + b) = 40 \\), dvs \\( l + b = 20 \\), alltså \\( b = 20 - l \\)</div>
              <div class="solution-step">Area: \\( A = l \\cdot b = l(20 - l) = 20l - l^2 \\)</div>
              <div class="solution-step">Vi provar:
                \\( l = 8 \\Rightarrow A = 96 \\), \\( l = 9 \\Rightarrow A = 99 \\), \\( l = 10 \\Rightarrow A = 100 \\), \\( l = 11 \\Rightarrow A = 99 \\)</div>
              <div class="solution-step">Arean är störst när \\( l = b = 10 \\) m (en kvadrat).</div>
              <div class="solution-step"><strong>Svar: En kvadrat med sidan 10 m ger störst area: \\( 100 \\text{ m}^2 \\)</strong></div>
            `
          },
          {
            text: "En bonde har 30 m stängsel och vill göra två lika stora rektangulära fållor som delar en gemensam längdsida (en rektangel delad på mitten med ett stängsel). Vilka mått ger störst total area?",
            solution: `
              <div class="solution-step">Låt bredden vara \\( b \\) m och längden \\( l \\) m. Stängslet går runt hela rektangeln plus ett tvärsnitt: \\( 2l + 3b = 30 \\).</div>
              <div class="solution-step">\\( l = \\dfrac{30 - 3b}{2} \\)</div>
              <div class="solution-step">Area: \\( A = l \\cdot b = \\dfrac{(30 - 3b) \\cdot b}{2} = \\dfrac{30b - 3b^2}{2} \\)</div>
              <div class="solution-step">Vi provar:
                \\( b = 3 \\Rightarrow A = 31{,}5 \\), \\( b = 4 \\Rightarrow A = 36 \\), \\( b = 5 \\Rightarrow A = 37{,}5 \\), \\( b = 6 \\Rightarrow A = 36 \\)</div>
              <div class="solution-step">Störst area vid \\( b = 5 \\) m och \\( l = \\dfrac{30 - 15}{2} = 7{,}5 \\) m.</div>
              <div class="solution-step"><strong>Svar: Bredden 5 m och längden 7,5 m ger störst area: \\( 37{,}5 \\text{ m}^2 \\)</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 9: GEOMETRI: VINKLAR, SYMMETRI & LIKFORMIGHET =====
  {
    id: 9,
    title: "Geometri: Vinklar, Symmetri & Likformighet",
    points: "Snitt 4,6 p/prov",
    tags: ["Utan hjälpmedel"],
    videos: [],
    theory: `
      <h3>Geometri: Vinklar, symmetri och likformighet</h3>

      <h4>Vinklar</h4>
      <div class="formula-box">
        <p><strong>Vinkelsumma i en triangel:</strong> \\( \\alpha + \\beta + \\gamma = 180° \\)</p>
        <p><strong>Vinkelsumma i en fyrhoning:</strong> \\( 360° \\)</p>
        <p><strong>Vinkelsumma i en n-horning:</strong> \\( (n-2) \\cdot 180° \\)</p>
      </div>

      <h4>Vinkeltyper</h4>
      <div class="formula-box">
        <p><strong>Vertikalvinklar:</strong> två vinklar som bildas där två linjer skar varandra. De är lika stora.</p>
        <p><strong>Supplementvinklar:</strong> två vinklar som tillsammans bildar \\(180°\\) (en rak vinkel).</p>
        <p><strong>Komplementvinklar:</strong> två vinklar som tillsammans bildar \\(90°\\).</p>
      </div>

      <h4>Symmetri</h4>
      <p>En figur har en <strong>symmetrilinje</strong> om man kan vika den långs linjen och de två halvorna passar exakt. En liksidig triangel har 3 symmetrilinjer, en kvadrat har 4, en cirkel har oändligt många.</p>

      <h4>Likformighet</h4>
      <p>Tva figurer är <strong>likformiga</strong> om de har samma form men kan vara olika stora. For likformiga trianglar gäller:</p>
      <div class="formula-box">
        <p>Alla motsvårande vinklar är lika.</p>
        <p>Forhallandet mellan motsvårande sidor är konstant (skalfaktorn).</p>
        \\[ \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} = k \\]
      </div>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "I en triangel är två av vinklarna \\( 55° \\) och \\( 70° \\). Hur stor är den tredje vinkeln?",
        solution: `
          <div class="solution-step">Vinkelsumman i en triangel är alltid \\( 180° \\). Vi drar bort de kända vinklarna:</div>
          <div class="solution-step">Tredje vinkeln: \\( 180° - 55° - 70° = 55° \\)</div>
          <div class="solution-step"><strong>Svar: \\( 55° \\)</strong></div>
        `,
        videos: ["092SXnF9Ur4"],
        variants: [
          {
            text: "I en likbent triangel är den ena vinkeln \\( 40° \\). De andra två vinklarna är lika stora. Hur stora är de?",
            solution: `
              <div class="solution-step">Vinkelsumman i en triangel är alltid \\( 180° \\). Eftersom triangeln är likbent delar vi det som blir kvar efter den udda vinkeln lika:</div>
              <div class="solution-step">De lika vinklarna: \\( \\dfrac{180° - 40°}{2} = \\dfrac{140°}{2} = 70° \\)</div>
              <div class="solution-step"><strong>Svar: \\( 70° \\) vardera</strong></div>
            `
          },
          {
            text: "I en rätvinklig triangel är en av de spetsiga vinklarna \\( 35° \\). Hur stor är den andra spetsiga vinkeln?",
            solution: `
              <div class="solution-step">Vinkelsumman i en triangel är \\( 180° \\). I en rätvinklig triangel är en vinkel alltid \\( 90° \\), så vi drar bort den och den kända spetsiga vinkeln:</div>
              <div class="solution-step">Den andra spetsiga vinkeln: \\( 180° - 90° - 35° = 55° \\)</div>
              <div class="solution-step"><strong>Svar: \\( 55° \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Två räta linjer skär varandra. En av vinklarna är \\( 65° \\). Bestäm de övriga tre vinklarna.",
        solution: `
          <div class="solution-step">Vertikalvinkeln är också \\( 65° \\) (vertikalvinklar är lika stora).</div>
          <div class="solution-step">De intilliggande vinklarna är supplementvinklar (ger tillsammans \\( 180° \\)): \\( 180° - 65° = 115° \\)</div>
          <div class="solution-step">De fyra vinklarna är: \\( 65°, 115°, 65°, 115° \\)</div>
          <div class="solution-step"><strong>Svar: \\( 65°, 115°, 65°, 115° \\)</strong></div>
        `,
        videos: ["vuDCC1bCk9s"],
        variants: [
          {
            text: "Två räta linjer skär varandra. En av de fyra vinklarna är \\( 112° \\). Bestäm de övriga tre vinklarna.",
            solution: `
              <div class="solution-step">Vertikalvinkeln mitt emot är lika stor: \\( 112° \\)</div>
              <div class="solution-step">De andra två vinklarna är supplementvinklar (bildar tillsammans \\( 180° \\)): \\( 180° - 112° = 68° \\)</div>
              <div class="solution-step"><strong>Svar: \\( 112°, 68°, 112°, 68° \\)</strong></div>
            `
          },
          {
            text: "Två räta linjer skär varandra. En av vinklarna är dubbelt så stor som en annan. Bestäm alla fyra vinklarna.",
            solution: `
              <div class="solution-step">Två intilliggande vinklar är supplementvinklar och ger tillsammans \\( 180° \\). Låt den mindre vara \\( x \\), då är den större \\( 2x \\):</div>
              <div class="solution-step">\\( x + 2x = 180° \\Rightarrow 3x = 180° \\Rightarrow x = 60° \\)</div>
              <div class="solution-step">Vertikalvinklarna ger att de fyra vinklarna blir \\( 60°, 120°, 60°, 120° \\).</div>
              <div class="solution-step"><strong>Svar: \\( 120°, 60°, 120°, 60° \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Hur många symmetrilinjer har en rektangel (som inte är en kvadrat)?",
        solution: `
          <div class="solution-step">En rektangel har 2 symmetrilinjer: en vertikal och en horisontell som delar rektangeln på mitten.</div>
          <div class="solution-step"><strong>Svar: 2 symmetrilinjer</strong></div>
        `,
        videos: ["G2mcmafF9O8"],
        variants: [
          {
            text: "Hur många symmetrilinjer har en liksidig triangel?",
            solution: `
              <div class="solution-step">En liksidig triangel har 3 symmetrilinjer: en från varje hörn till mittpunkten av motstående sida.</div>
              <div class="solution-step"><strong>Svar: 3 symmetrilinjer</strong></div>
            `
          },
          {
            text: "Hur många symmetrilinjer har en regelbunden femhörning?",
            solution: `
              <div class="solution-step">En regelbunden n-hörning har \\( n \\) symmetrilinjer.</div>
              <div class="solution-step">En regelbunden femhörning har alltså 5 symmetrilinjer.</div>
              <div class="solution-step"><strong>Svar: 5 symmetrilinjer</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "Två trianglar är likformiga. Den första triangeln har sidor 3 cm, 4 cm och 5 cm. Den andra triangelns längsta sida är 15 cm. Beräkna den andra triangelns övriga sidor.",
        solution: `
          <div class="solution-step">Likformiga trianglar har samma förhållande mellan motsvarande sidor. Längsta sidan i första triangeln är 5 cm, i den andra 15 cm.</div>
          <div class="solution-step">Skalfaktor: \\( k = \\dfrac{15}{5} = 3 \\)</div>
          <div class="solution-step">Vi multiplicerar de övriga sidorna med skalfaktorn: \\( 3 \\cdot 3 = 9 \\) cm och \\( 4 \\cdot 3 = 12 \\) cm.</div>
          <div class="solution-step"><strong>Svar: 9 cm och 12 cm</strong></div>
        `,
        videos: ["xn4QyFU3Blg"],
        variants: [
          {
            text: "Två likformiga rektanglar har sidorna 6 cm × 4 cm respektive ? × 10 cm. Beräkna den okända sidan.",
            solution: `
              <div class="solution-step">Likformiga figurer har samma förhållande mellan motsvarande sidor. Vi räknar ut skalfaktorn med kortsidorna:</div>
              <div class="solution-step">Skalfaktor: \\( k = \\dfrac{10}{4} = 2{,}5 \\)</div>
              <div class="solution-step">Vi multiplicerar den kända långsidan med samma faktor: \\( 6 \\cdot 2{,}5 = 15 \\) cm</div>
              <div class="solution-step"><strong>Svar: 15 cm</strong></div>
            `
          },
          {
            text: "En triangel har sidorna 5 cm, 8 cm och 10 cm. En likformig triangel har den längsta sidan 25 cm. Beräkna de övriga sidorna.",
            solution: `
              <div class="solution-step">Vi jämför de längsta sidorna för att hitta skalfaktorn:</div>
              <div class="solution-step">Skalfaktor: \\( k = \\dfrac{25}{10} = 2{,}5 \\)</div>
              <div class="solution-step">Vi multiplicerar varje sida med skalfaktorn: \\( 5 \\cdot 2{,}5 = 12{,}5 \\) cm och \\( 8 \\cdot 2{,}5 = 20 \\) cm</div>
              <div class="solution-step"><strong>Svar: 12,5 cm och 20 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "I en regelbunden sexhörning, hur stor är varje vinkel?",
        solution: `
          <div class="solution-step">Vinkelsumman i en n-hörning: \\( (n-2) \\cdot 180° \\)</div>
          <div class="solution-step">För \\( n = 6 \\): \\( (6-2) \\cdot 180° = 4 \\cdot 180° = 720° \\)</div>
          <div class="solution-step">Eftersom sexhörningen är regelbunden delar vi lika: \\( \\dfrac{720°}{6} = 120° \\)</div>
          <div class="solution-step"><strong>Svar: \\( 120° \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Beräkna vinkelsumman i en åttahörning. Hur stor är varje vinkel om den är regelbunden?",
            solution: `
              <div class="solution-step">Vi använder formeln för vinkelsumman i en n-hörning: \\( (n-2) \\cdot 180° \\)</div>
              <div class="solution-step">Vinkelsumma: \\( (8-2) \\cdot 180° = 6 \\cdot 180° = 1\\,080° \\)</div>
              <div class="solution-step">I en regelbunden åttahörning är alla vinklar lika, så vi delar med antalet hörn: \\( \\dfrac{1\\,080°}{8} = 135° \\)</div>
              <div class="solution-step"><strong>Svar: Vinkelsumman är 1 080° och varje vinkel är 135°</strong></div>
            `
          },
          {
            text: "I en regelbunden polygon är varje vinkel \\( 144° \\). Hur många sidor har polygonen?",
            solution: `
              <div class="solution-step">Vi ställer upp formeln för varje vinkel i en regelbunden n-hörning och sätter den lika med \\( 144° \\):</div>
              <div class="solution-step">\\( \\dfrac{(n-2) \\cdot 180°}{n} = 144° \\)</div>
              <div class="solution-step">Vi multiplicerar båda led med \\( n \\): \\( (n-2) \\cdot 180 = 144n \\)</div>
              <div class="solution-step">Utvecklar vänsterledet: \\( 180n - 360 = 144n \\)</div>
              <div class="solution-step">Samlar alla n på ena sidan: \\( 36n = 360 \\Rightarrow n = 10 \\)</div>
              <div class="solution-step"><strong>Svar: 10 sidor (en tiohörning)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "En flaggstång kastar en skugga som är 6 m lång. Samtidigt kastar en person som är 1,7 m lång en skugga som är 2 m lång. Hur hög är flaggstången?",
        solution: `
          <div class="solution-step">Flaggstången och dess skugga bildar en triangel som är likformig med personens triangel. Förhållandet mellan höjd och skugga är samma för båda:</div>
          <div class="solution-step">\\( \\dfrac{\\text{flaggstångens höjd}}{6} = \\dfrac{1{,}7}{2} \\)</div>
          <div class="solution-step">Flaggstångens höjd: \\( \\dfrac{1{,}7 \\cdot 6}{2} = \\dfrac{10{,}2}{2} = 5{,}1 \\) m</div>
          <div class="solution-step"><strong>Svar: Flaggstången är 5,1 m hög</strong></div>
        `,
        videos: ["VKs9c-P8Pis&t=155"],
        variants: [
          {
            text: "Ett torn kastar en skugga som är 15 m lång. Samtidigt kastar en 2 m lång stolpe en skugga som är 3 m lång. Hur högt är tornet?",
            solution: `
              <div class="solution-step">Tornet och stolpen bildar likformiga trianglar med sina skuggor. Förhållandet mellan höjd och skugga är samma:</div>
              <div class="solution-step">\\( \\dfrac{h}{15} = \\dfrac{2}{3} \\)</div>
              <div class="solution-step">Vi löser ut \\( h \\): \\( h = \\dfrac{2 \\cdot 15}{3} = \\dfrac{30}{3} = 10 \\) m</div>
              <div class="solution-step"><strong>Svar: Tornet är 10 m högt</strong></div>
            `
          },
          {
            text: "Ett träd kastar en skugga som är 12 m lång. Samtidigt kastar en 1,5 m lång pinne en skugga som är 2,4 m lång. Hur högt är trädet?",
            solution: `
              <div class="solution-step">Trädet och pinnen bildar likformiga trianglar med sina skuggor. Förhållandet mellan höjd och skugga är samma:</div>
              <div class="solution-step">\\( \\dfrac{h}{12} = \\dfrac{1{,}5}{2{,}4} \\)</div>
              <div class="solution-step">Vi löser ut \\( h \\): \\( h = \\dfrac{1{,}5 \\cdot 12}{2{,}4} = \\dfrac{18}{2{,}4} = 7{,}5 \\) m</div>
              <div class="solution-step"><strong>Svar: Trädet är 7,5 m högt</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "I en triangel ABC är vinkel A dubbelt så stor som vinkel B, och vinkel C är 20 grader större än vinkel B. Beräkna alla tre vinklarna.",
        solution: `
          <div class="solution-step">Låt vinkel B = \\( x \\).</div>
          <div class="solution-step">Då är vinkel A = \\( 2x \\) och vinkel C = \\( x + 20° \\).</div>
          <div class="solution-step">Vinkelsumma: \\( 2x + x + (x + 20°) = 180° \\)</div>
          <div class="solution-step">\\( 4x + 20° = 180° \\)</div>
          <div class="solution-step">\\( 4x = 160° \\Rightarrow x = 40° \\)</div>
          <div class="solution-step">Vinkel A = \\( 80° \\), vinkel B = \\( 40° \\), vinkel C = \\( 60° \\).</div>
          <div class="solution-step"><strong>Svar: Vinkel A = 80°, vinkel B = 40°, vinkel C = 60°</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "I en fyrhörning ABCD är vinkel A tre gånger så stor som vinkel B. Vinkel C och vinkel D är båda dubbelt så stora som vinkel B. Bestäm alla vinklar.",
            solution: `
              <div class="solution-step">Vi kallar vinkel B för \\( x \\) och uttrycker de andra vinklarna med \\( x \\): A = \\( 3x \\), C = \\( 2x \\), D = \\( 2x \\).</div>
              <div class="solution-step">Vinkelsumman i en fyrhörning är alltid \\( 360° \\): \\( 3x + x + 2x + 2x = 360° \\)</div>
              <div class="solution-step">Vi förenklar och löser ekvationen: \\( 8x = 360° \\Rightarrow x = 45° \\)</div>
              <div class="solution-step">Nu sätter vi in \\( x = 45° \\) i varje vinkel.</div>
              <div class="solution-step"><strong>Svar: A = 135°, B = 45°, C = 90°, D = 90°</strong></div>
            `
          },
          {
            text: "I en triangel är vinkel B 30° större än vinkel A, och vinkel C är 30° större än vinkel B. Bestäm alla tre vinklarna.",
            solution: `
              <div class="solution-step">Vi kallar vinkel A för \\( x \\) och uttrycker de andra med \\( x \\): B = \\( x + 30° \\), C = \\( x + 60° \\).</div>
              <div class="solution-step">Vinkelsumman i en triangel är \\( 180° \\): \\( x + (x + 30°) + (x + 60°) = 180° \\)</div>
              <div class="solution-step">Vi förenklar och löser: \\( 3x + 90° = 180° \\Rightarrow 3x = 90° \\Rightarrow x = 30° \\)</div>
              <div class="solution-step"><strong>Svar: A = 30°, B = 60°, C = 90°</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 8,
        text: "I triangel ABC dras en linje DE parallellt med BC, där D ligger på AB och E på AC. Om AD = 6 cm, DB = 4 cm och arean av triangel ADE är 18 cm², beräkna arean av triangel ABC.",
        solution: `
          <div class="solution-step">Triangel ADE är likformig med triangel ABC (DE ∥ BC).</div>
          <div class="solution-step">Skalfaktor (sidor): \\( k = \\dfrac{AD}{AB} = \\dfrac{6}{6+4} = \\dfrac{6}{10} = \\dfrac{3}{5} \\)</div>
          <div class="solution-step">Arean skalas med skalfaktorn i kvadrat: \\( k^2 = \\left(\\dfrac{3}{5}\\right)^2 = \\dfrac{9}{25} \\)</div>
          <div class="solution-step">Vi sätter in den kända arean och löser ut den okända: \\( \\dfrac{\\text{Area ADE}}{\\text{Area ABC}} = \\dfrac{9}{25} \\Rightarrow \\text{Area ABC} = 18 \\cdot \\dfrac{25}{9} = 50 \\) cm²</div>
          <div class="solution-step"><strong>Svar: 50 cm²</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Två likformiga trianglar har sidförhållandet 2:3. Den mindre triangelns area är 20 cm². Beräkna den större triangelns area.",
            solution: `
              <div class="solution-step">För likformiga figurer gäller att arean skalas med skalfaktorn i kvadrat. Skalfaktorn från liten till stor:</div>
              <div class="solution-step">Skalfaktor (sidor): \\( k = \\dfrac{3}{2} \\)</div>
              <div class="solution-step">Areafaktorn är skalfaktorn upphöjd till 2: \\( k^2 = \\left(\\dfrac{3}{2}\\right)^2 = \\dfrac{9}{4} \\)</div>
              <div class="solution-step">Större area: \\( 20 \\cdot \\dfrac{9}{4} = 45 \\) cm²</div>
              <div class="solution-step"><strong>Svar: 45 cm²</strong></div>
            `
          },
          {
            text: "Två likformiga figurer har skalfaktorn 3:5. Omkretsen av den mindre figuren är 36 cm. Beräkna omkretsen av den större figuren.",
            solution: `
              <div class="solution-step">Omkretsen skalas med samma faktor som sidorna. Skalfaktorn från liten till stor figur:</div>
              <div class="solution-step">Skalfaktor: \\( \\dfrac{5}{3} \\)</div>
              <div class="solution-step">Vi multiplicerar den kända omkretsen med skalfaktorn: \\( 36 \\cdot \\dfrac{5}{3} = 60 \\) cm</div>
              <div class="solution-step"><strong>Svar: 60 cm</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 10: GEOMETRI: PYTHAGORAS SATS & KOORDINATER =====
  {
    id: 10,
    title: "Geometri: Pythagoras sats & Koordinater",
    points: "Snitt 2,7 p/prov",
    tags: ["Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Pythagoras sats och koordinater</h3>

      <h4>Pythagoras sats</h4>
      <p>I en ratvinkling triangel gäller:</p>
      <div class="formula-box">
        \\[ c^2 = a^2 + b^2 \\]
        <p>dar \\(c\\) är hypotenusan (långsta sidan, mittemot rata vinkeln) och \\(a\\) och \\(b\\) är kateterna.</p>
      </div>
      <p>Man kan även beräkna en katet: \\( a = \\sqrt{c^2 - b^2} \\)</p>

      <h4>Användningsomraden</h4>
      <p>Pythagoras sats används bland annat för att:</p>
      <div class="formula-box">
        <p>- Beräkna diagonalen i en rektangel</p>
        <p>- Beräkna höjden i en liksidig triangel</p>
        <p>- Kontrollera om en triangel är ratvinkling</p>
        <p>- Beräkna avstånd i verkligheten</p>
      </div>

      <h4>Avstånd i koordinatsystem</h4>
      <p>Avståndet mellan två punkter \\( (x_1, y_1) \\) och \\( (x_2, y_2) \\) beräknas med Pythagoras sats:</p>
      <div class="formula-box">
        \\[ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\]
      </div>

      <h4>Kontrollera ratvinkling triangel</h4>
      <p>Om \\( a^2 + b^2 = c^2 \\) (dar \\(c\\) är långsta sidan) så är triangeln ratvinkling.</p>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "En rätvinklig triangel har kateter 3 cm och 4 cm. Beräkna hypotenusan.",
        solution: `
          <div class="solution-step">Vi använder Pythagoras sats för att beräkna hypotenusan. Kateterna är 3 cm och 4 cm:</div>
          <div class="solution-step">\\( c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25 \\)</div>
          <div class="solution-step">Vi drar roten ur:</div>
          <div class="solution-step">\\( c = \\sqrt{25} = 5 \\) cm</div>
          <div class="solution-step"><strong>Svar: 5 cm</strong></div>
        `,
        videos: ["g9Tyb01YcrQ"],
        variants: [
          {
            text: "En rätvinklig triangel har kateter 5 cm och 12 cm. Beräkna hypotenusan.",
            solution: `
              <div class="solution-step">Vi använder Pythagoras sats. Kateterna är 5 cm och 12 cm:</div>
              <div class="solution-step">\\( c^2 = 5^2 + 12^2 = 25 + 144 = 169 \\)</div>
              <div class="solution-step">\\( c = \\sqrt{169} = 13 \\) cm</div>
              <div class="solution-step"><strong>Svar: 13 cm</strong></div>
            `
          },
          {
            text: "En rätvinklig triangel har kateter 8 cm och 15 cm. Beräkna hypotenusan.",
            solution: `
              <div class="solution-step">Vi använder Pythagoras sats. Kateterna är 8 cm och 15 cm:</div>
              <div class="solution-step">\\( c^2 = 8^2 + 15^2 = 64 + 225 = 289 \\)</div>
              <div class="solution-step">\\( c = \\sqrt{289} = 17 \\) cm</div>
              <div class="solution-step"><strong>Svar: 17 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "En rätvinklig triangel har hypotenusa 13 cm och en katet 5 cm. Beräkna den andra kateten.",
        solution: `
          <div class="solution-step">Vi känner till hypotenusan och en katet, så vi löser ut den andra kateten med Pythagoras sats:</div>
          <div class="solution-step">\\( a^2 + 5^2 = 13^2 \\)</div>
          <div class="solution-step">Vi löser ut \\( a^2 \\):</div>
          <div class="solution-step">\\( a^2 = 169 - 25 = 144 \\)</div>
          <div class="solution-step">\\( a = \\sqrt{144} = 12 \\) cm</div>
          <div class="solution-step"><strong>Svar: 12 cm</strong></div>
        `,
        videos: ["aASRszW1GWw"],
        variants: [
          {
            text: "En rätvinklig triangel har hypotenusa 10 cm och en katet 6 cm. Beräkna den andra kateten.",
            solution: `
              <div class="solution-step">Vi ställer upp Pythagoras sats och löser ut den okända kateten:</div>
              <div class="solution-step">\\( a^2 + 6^2 = 10^2 \\)</div>
              <div class="solution-step">\\( a^2 = 100 - 36 = 64 \\)</div>
              <div class="solution-step">\\( a = \\sqrt{64} = 8 \\) cm</div>
              <div class="solution-step"><strong>Svar: 8 cm</strong></div>
            `
          },
          {
            text: "En rätvinklig triangel har hypotenusa 17 cm och en katet 8 cm. Beräkna den andra kateten.",
            solution: `
              <div class="solution-step">Vi ställer upp Pythagoras sats och löser ut den okända kateten:</div>
              <div class="solution-step">\\( a^2 + 8^2 = 17^2 \\)</div>
              <div class="solution-step">\\( a^2 = 289 - 64 = 225 \\)</div>
              <div class="solution-step">\\( a = \\sqrt{225} = 15 \\) cm</div>
              <div class="solution-step"><strong>Svar: 15 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Beräkna avståndet mellan punkterna \\( (1, 2) \\) och \\( (4, 6) \\).",
        solution: `
          <div class="solution-step">Tänk dig en rätvinklig triangel mellan punkterna: den vågräta kateten är skillnaden i x-led och den lodräta kateten är skillnaden i y-led.</div>
          <div class="solution-step">Vågrät katet: \\( 4 - 1 = 3 \\), Lodrät katet: \\( 6 - 2 = 4 \\)</div>
          <div class="solution-step">Avståndet är hypotenusan: \\( d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\)</div>
          <div class="solution-step"><strong>Svar: 5 längdenheter</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Beräkna avståndet mellan punkterna \\( (-2, 3) \\) och \\( (1, 7) \\).",
            solution: `
              <div class="solution-step">Vi beräknar skillnaden i x- och y-led, som blir kateterna i en rätvinklig triangel:</div>
              <div class="solution-step">Vågrät katet: \\( 1 - (-2) = 3 \\), Lodrät katet: \\( 7 - 3 = 4 \\)</div>
              <div class="solution-step">Avståndet är hypotenusan:</div>
              <div class="solution-step">\\( d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\)</div>
              <div class="solution-step"><strong>Svar: 5 längdenheter</strong></div>
            `
          },
          {
            text: "Beräkna avståndet mellan origo \\( (0, 0) \\) och punkten \\( (5, 12) \\).",
            solution: `
              <div class="solution-step">Skillnaden i x-led och y-led ger kateterna i en rätvinklig triangel:</div>
              <div class="solution-step">Vågrät katet: \\( 5 \\), Lodrät katet: \\( 12 \\)</div>
              <div class="solution-step">Avståndet är hypotenusan:</div>
              <div class="solution-step">\\( d = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\)</div>
              <div class="solution-step"><strong>Svar: 13 längdenheter</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "En stege är 5 m lång och lutar mot en vägg. Stegens fot står 2 m från väggen. Hur högt upp på väggen når stegen?",
        solution: `
          <div class="solution-step">Stegen, väggen och marken bildar en rätvinklig triangel. Stegen är hypotenusan.</div>
          <div class="solution-step">\\( h^2 + 2^2 = 5^2 \\)</div>
          <div class="solution-step">\\( h^2 = 25 - 4 = 21 \\)</div>
          <div class="solution-step">\\( h = \\sqrt{21} \\approx 4{,}6 \\) m</div>
          <div class="solution-step"><strong>Svar: Ungefär 4,6 m</strong></div>
        `,
        videos: ["g9Tyb01YcrQ"],
        variants: [
          {
            text: "En stege är 6 m lång och lutar mot en vägg. Stegens fot står 1,5 m från väggen. Hur högt upp når stegen?",
            solution: `
              <div class="solution-step">Stegen, väggen och marken bildar en rätvinklig triangel. Stegen (6 m) är hypotenusan och avståndet från väggen (1,5 m) är en katet:</div>
              <div class="solution-step">\\( h^2 + 1{,}5^2 = 6^2 \\)</div>
              <div class="solution-step">Vi löser ut höjden:</div>
              <div class="solution-step">\\( h^2 = 36 - 2{,}25 = 33{,}75 \\)</div>
              <div class="solution-step">\\( h = \\sqrt{33{,}75} \\approx 5{,}8 \\) m</div>
              <div class="solution-step"><strong>Svar: Ungefär 5,8 m</strong></div>
            `
          },
          {
            text: "En stege ska nå upp till ett fönster som sitter 4 m ovanför marken. Stegens fot måste stå minst 3 m från väggen. Hur lång behöver stegen vara?",
            solution: `
              <div class="solution-step">Väggen och marken bildar en rätvinklig triangel där stegen är hypotenusan. Kateterna är 4 m (höjd) och 3 m (avstånd):</div>
              <div class="solution-step">\\( c^2 = 4^2 + 3^2 = 16 + 9 = 25 \\)</div>
              <div class="solution-step">\\( c = \\sqrt{25} = 5 \\) m</div>
              <div class="solution-step"><strong>Svar: Stegen behöver vara minst 5 m lång.</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "Avgör om en triangel med sidorna 7 cm, 24 cm och 25 cm är rätvinklig.",
        solution: `
          <div class="solution-step">Vi kontrollerar om \\( a^2 + b^2 = c^2 \\) där \\( c \\) är längsta sidan.</div>
          <div class="solution-step">\\( 7^2 + 24^2 = 49 + 576 = 625 \\)</div>
          <div class="solution-step">\\( 25^2 = 625 \\)</div>
          <div class="solution-step">Eftersom \\( 7^2 + 24^2 = 25^2 \\) är triangeln rätvinklig.</div>
          <div class="solution-step"><strong>Svar: Ja, triangeln är rätvinklig.</strong></div>
        `,
        videos: ["aASRszW1GWw"],
        variants: [
          {
            text: "Avgör om en triangel med sidorna 9 cm, 12 cm och 15 cm är rätvinklig.",
            solution: `
              <div class="solution-step">Vi kontrollerar om Pythagoras sats stämmer. Längsta sidan (15) är möjlig hypotenusa:</div>
              <div class="solution-step">\\( 9^2 + 12^2 = 81 + 144 = 225 \\)</div>
              <div class="solution-step">\\( 15^2 = 225 \\)</div>
              <div class="solution-step">Eftersom \\( 9^2 + 12^2 = 15^2 \\) är triangeln rätvinklig.</div>
              <div class="solution-step"><strong>Svar: Ja, triangeln är rätvinklig.</strong></div>
            `
          },
          {
            text: "Avgör om en triangel med sidorna 5 cm, 7 cm och 9 cm är rätvinklig.",
            solution: `
              <div class="solution-step">Vi kontrollerar om Pythagoras sats stämmer. Längsta sidan (9) är möjlig hypotenusa:</div>
              <div class="solution-step">\\( 5^2 + 7^2 = 25 + 49 = 74 \\)</div>
              <div class="solution-step">\\( 9^2 = 81 \\)</div>
              <div class="solution-step">Eftersom \\( 74 \\neq 81 \\) är triangeln inte rätvinklig.</div>
              <div class="solution-step"><strong>Svar: Nej, triangeln är inte rätvinklig.</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 6,
        text: "En liksidig triangel har sidan 10 cm. Beräkna höjden i triangeln.",
        solution: `
          <div class="solution-step">Höjden i en liksidig triangel delar basen på mitten, så vi får en rätvinklig triangel med hypotenusan 10 cm och ena kateten 5 cm.</div>
          <div class="solution-step">Pythagoras sats: \\( h^2 + 5^2 = 10^2 \\)</div>
          <div class="solution-step">\\( h^2 = 100 - 25 = 75 \\)</div>
          <div class="solution-step">\\( h = \\sqrt{75} = 5\\sqrt{3} \\approx 8{,}66 \\) cm</div>
          <div class="solution-step"><strong>Svar: Höjden är ungefär 8,66 cm</strong></div>
        `,
        videos: ["hYaDPznXIzk"],
        variants: [
          {
            text: "En rektangel har en diagonal på 13 cm. Ena sidan är 5 cm. Beräkna den andra sidan och rektangelns area.",
            solution: `
              <div class="solution-step">Diagonalen i en rektangel bildar en rätvinklig triangel med sidorna. Vi använder Pythagoras sats:</div>
              <div class="solution-step">\\( b^2 + 5^2 = 13^2 \\)</div>
              <div class="solution-step">\\( b^2 = 169 - 25 = 144 \\Rightarrow b = 12 \\) cm</div>
              <div class="solution-step">Nu kan vi beräkna arean:</div>
              <div class="solution-step">Area: \\( 5 \\cdot 12 = 60 \\) cm²</div>
              <div class="solution-step"><strong>Svar: Andra sidan är 12 cm och arean är 60 cm².</strong></div>
            `
          },
          {
            text: "En liksidig triangel har sidan 6 cm. Beräkna höjden och arean.",
            solution: `
              <div class="solution-step">Höjden i en liksidig triangel delar basen på mitten, så vi får en rätvinklig triangel med hypotenusan 6 och kateten 3:</div>
              <div class="solution-step">\\( h^2 + 3^2 = 6^2 \\)</div>
              <div class="solution-step">\\( h^2 = 36 - 9 = 27 \\Rightarrow h = \\sqrt{27} = 3\\sqrt{3} \\approx 5{,}20 \\) cm</div>
              <div class="solution-step">Vi beräknar arean med basen och höjden:</div>
              <div class="solution-step">Area: \\( \\dfrac{6 \\cdot 3\\sqrt{3}}{2} = 9\\sqrt{3} \\approx 15{,}6 \\) cm²</div>
              <div class="solution-step"><strong>Svar: Höjden är ungefär 5,2 cm och arean ungefär 15,6 cm².</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "Punkterna \\( A(1, 1) \\), \\( B(4, 1) \\) och \\( C(4, 5) \\) bildar en triangel. Beräkna triangelns omkrets.",
        solution: `
          <div class="solution-step">Vi beräknar varje sida med avståndsformeln (Pythagoras sats i koordinatsystemet):</div>
          <div class="solution-step">\\( AB = \\sqrt{(4-1)^2 + (1-1)^2} = \\sqrt{9} = 3 \\)</div>
          <div class="solution-step">\\( BC = \\sqrt{(4-4)^2 + (5-1)^2} = \\sqrt{16} = 4 \\)</div>
          <div class="solution-step">\\( AC = \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{9+16} = \\sqrt{25} = 5 \\)</div>
          <div class="solution-step">Vi adderar alla sidor för att få omkretsen:</div>
          <div class="solution-step">Omkrets: \\( 3 + 4 + 5 = 12 \\)</div>
          <div class="solution-step"><strong>Svar: 12 längdenheter</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Punkterna \\( A(0, 0) \\), \\( B(6, 0) \\) och \\( C(3, 4) \\) bildar en triangel. Beräkna triangelns omkrets.",
            solution: `
              <div class="solution-step">Vi beräknar varje sida med avståndsformeln:</div>
              <div class="solution-step">\\( AB = \\sqrt{6^2 + 0^2} = 6 \\)</div>
              <div class="solution-step">\\( BC = \\sqrt{(3-6)^2 + 4^2} = \\sqrt{9 + 16} = 5 \\)</div>
              <div class="solution-step">\\( AC = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5 \\)</div>
              <div class="solution-step">Vi adderar sidorna:</div>
              <div class="solution-step">Omkrets: \\( 6 + 5 + 5 = 16 \\)</div>
              <div class="solution-step"><strong>Svar: 16 längdenheter</strong></div>
            `
          },
          {
            text: "Punkterna \\( P(-1, 2) \\), \\( Q(3, 2) \\) och \\( R(3, -1) \\) bildar en triangel. Beräkna omkretsen och avgör om triangeln är rätvinklig.",
            solution: `
              <div class="solution-step">Vi beräknar varje sida med avståndsformeln:</div>
              <div class="solution-step">\\( PQ = \\sqrt{4^2 + 0^2} = 4 \\)</div>
              <div class="solution-step">\\( QR = \\sqrt{0^2 + 3^2} = 3 \\)</div>
              <div class="solution-step">\\( PR = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5 \\)</div>
              <div class="solution-step">Vi adderar sidorna:</div>
              <div class="solution-step">Omkrets: \\( 4 + 3 + 5 = 12 \\)</div>
              <div class="solution-step">Vi kontrollerar om triangeln är rätvinklig med Pythagoras sats:</div>
              <div class="solution-step">\\( 3^2 + 4^2 = 9 + 16 = 25 = 5^2 \\) — rätvinklig!</div>
              <div class="solution-step"><strong>Svar: Omkretsen är 12 le. Triangeln är rätvinklig.</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 8,
        text: "En rektangulär låda har måtten 3 dm, 4 dm och 12 dm. Beräkna avståndet från ett hörn till det diagonalt motsatta hörnet (rymddiagonalen).",
        solution: `
          <div class="solution-step">Först beräknar vi bottendiagonalen: \\( d_b = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\) dm</div>
          <div class="solution-step">Sedan rymddiagonalen: \\( d_r = \\sqrt{d_b^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\) dm</div>
          <div class="solution-step"><strong>Svar: Rymddiagonalen är 13 dm.</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En rektangulär låda har måtten 6 cm, 8 cm och 10 cm. Beräkna rymddiagonalen.",
            solution: `
              <div class="solution-step">Vi beräknar rymddiagonalen i två steg. Först bottendiagonalen med Pythagoras sats:</div>
              <div class="solution-step">Bottendiagonal: \\( d_b = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\) cm</div>
              <div class="solution-step">Sedan använder vi bottendiagonalen och höjden för att få rymddiagonalen:</div>
              <div class="solution-step">Rymddiagonal: \\( d_r = \\sqrt{10^2 + 10^2} = \\sqrt{200} \\approx 14{,}1 \\) cm</div>
              <div class="solution-step"><strong>Svar: Ungefär 14,1 cm</strong></div>
            `
          },
          {
            text: "En kub har sidan 4 cm. Beräkna rymddiagonalen.",
            solution: `
              <div class="solution-step">I en kub är alla sidor lika. Vi beräknar först bottendiagonalen:</div>
              <div class="solution-step">Bottendiagonal: \\( d_b = \\sqrt{4^2 + 4^2} = \\sqrt{32} \\)</div>
              <div class="solution-step">Sedan använder vi bottendiagonalen och kubens höjd (4 cm) för rymddiagonalen:</div>
              <div class="solution-step">Rymddiagonal: \\( d_r = \\sqrt{32 + 16} = \\sqrt{48} = 4\\sqrt{3} \\approx 6{,}9 \\) cm</div>
              <div class="solution-step"><strong>Svar: \\( 4\\sqrt{3} \\approx 6{,}9 \\) cm</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 11: STATISTIK =====
  {
    id: 11,
    title: "Statistik",
    points: "Snitt 5,7 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Statistik</h3>

      <h4>Lägesmått</h4>
      <p>Lägesmått beskriver var i en datamängd värdena ligger:</p>
      <div class="formula-box">
        <p><strong>Medelvärde:</strong> \\( \\bar{x} = \\dfrac{\\text{summan av alla värden}}{\\text{antalet värden}} \\)</p>
        <p><strong>Median:</strong> det mittersta värdet när värdena är ordnade i storleksordning. Om antalet värden är jamt är medianen medelvärden av de två mittersta.</p>
        <p><strong>Typvärde:</strong> det värde som forekoмmer flest gånger.</p>
      </div>

      <h4>Spridningsmått</h4>
      <div class="formula-box">
        <p><strong>Variationsbredd:</strong> skillnaden mellan största och minsta värdet.</p>
        \\[ \\text{variationsbredd} = x_{\\max} - x_{\\min} \\]
      </div>

      <h4>Diagram</h4>
      <p>Vanliga diagramtyper:</p>
      <div class="formula-box">
        <p><strong>Stapeldiagram:</strong> visar antal eller frekvens för olika kategorier.</p>
        <p><strong>Cirkeldiagram:</strong> visar andelar av en helhet.</p>
        <p><strong>Linjediagram:</strong> visar förändringar över tid.</p>
        <p><strong>Histogram:</strong> visar fördelning av data i intervall.</p>
      </div>

      <h4>Frekvenstabell</h4>
      <p>En frekvenstabell visar hur många gånger varje värde forekoмmer i en datamängd. Relativ frekvens är andelen: \\( \\dfrac{\\text{frekvens}}{\\text{totalt antal}} \\).</p>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "Beräkna medelvärde, median och typvärde för följande datamängd: \\( 3, 5, 7, 5, 3, 8, 5, 4 \\).",
        solution: `
          <div class="solution-step"><strong>Medelvärde:</strong> \\( \\bar{x} = \\dfrac{3+5+7+5+3+8+5+4}{8} = \\dfrac{40}{8} = 5 \\)</div>
          <div class="solution-step"><strong>Median:</strong> Ordna: \\( 3, 3, 4, 5, 5, 5, 7, 8 \\). Mittersta två: 5 och 5. Median = \\( \\dfrac{5+5}{2} = 5 \\)</div>
          <div class="solution-step"><strong>Typvärde:</strong> 5 förekommer 3 gånger (flest). Typvärde = 5</div>
          <div class="solution-step"><strong>Svar: Medelvärde = 5, median = 5, typvärde = 5</strong></div>
        `,
        videos: ["Ir9UHzhxiok", "m0p9kn1EGHI", "tfrGwSrSm48"],
        variants: [
          {
            text: "Beräkna medelvärde, median och typvärde för: \\( 2, 6, 4, 8, 6, 3, 6, 9 \\).",
            solution: `
              <div class="solution-step"><strong>Medelvärde:</strong> \\( \\bar{x} = \\dfrac{2+6+4+8+6+3+6+9}{8} = \\dfrac{44}{8} = 5{,}5 \\)</div>
              <div class="solution-step"><strong>Median:</strong> Ordna: \\( 2, 3, 4, 6, 6, 6, 8, 9 \\). Mittersta två: 6 och 6. Median = 6</div>
              <div class="solution-step"><strong>Typvärde:</strong> 6 förekommer 3 gånger. Typvärde = 6</div>
              <div class="solution-step"><strong>Svar: Medelvärde = 5,5; median = 6; typvärde = 6</strong></div>
            `
          },
          {
            text: "Sju elever har läst följande antal böcker under sommaren: \\( 1, 3, 5, 2, 5, 8, 4 \\). Beräkna medelvärde och median.",
            solution: `
              <div class="solution-step"><strong>Medelvärde:</strong> \\( \\bar{x} = \\dfrac{1+3+5+2+5+8+4}{7} = \\dfrac{28}{7} = 4 \\)</div>
              <div class="solution-step"><strong>Median:</strong> Ordna: \\( 1, 2, 3, 4, 5, 5, 8 \\). Mittersta värdet (4:e av 7) = 4</div>
              <div class="solution-step"><strong>Svar: Medelvärde = 4, median = 4</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "Variationsbredden för en grupp elevers resultat på ett prov är 35 poäng. Det lägsta resultatet var 12 poäng. Vad var det högsta resultatet?",
        solution: `
          <div class="solution-step">Variationsbredden är skillnaden mellan det högsta och det lägsta värdet:</div>
          <div class="solution-step">Variationsbredd = max − min</div>
          <div class="solution-step">Vi vet variationsbredden och minsta värdet, så vi löser ut det högsta:</div>
          <div class="solution-step">\\( 35 = \\text{max} - 12 \\)</div>
          <div class="solution-step">\\( \\text{max} = 35 + 12 = 47 \\)</div>
          <div class="solution-step"><strong>Svar: 47 poäng</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Temperaturen under en vecka i februari var: \\( -5, -2, 0, 3, -1, 2, -4 \\) °C. Beräkna variationsbredden.",
            solution: `
              <div class="solution-step">Högsta temperatur: \\( 3 \\) °C. Lägsta: \\( -5 \\) °C.</div>
              <div class="solution-step">Variationsbredd: \\( 3 - (-5) = 3 + 5 = 8 \\) °C</div>
              <div class="solution-step"><strong>Svar: 8 °C</strong></div>
            `
          },
          {
            text: "I en löptävling var den snabbaste tiden 12,4 sekunder och variationsbredden 3,8 sekunder. Vad var den långsammaste tiden?",
            solution: `
              <div class="solution-step">Variationsbredden är skillnaden mellan den långsammaste och snabbaste tiden:</div>
              <div class="solution-step">Variationsbredd = max − min</div>
              <div class="solution-step">Vi sätter in det vi vet och löser ut den långsammaste tiden:</div>
              <div class="solution-step">\\( 3{,}8 = \\text{långsammast} - 12{,}4 \\)</div>
              <div class="solution-step">\\( \\text{långsammast} = 12{,}4 + 3{,}8 = 16{,}2 \\) sekunder</div>
              <div class="solution-step"><strong>Svar: 16,2 sekunder</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Fem kompisar är 158 cm, 162 cm, 170 cm, 165 cm och 175 cm långa. Beräkna medellängden.",
        solution: `
          <div class="solution-step">Medelvärdet beräknas genom att dela summan av alla värden med antalet värden:</div>
          <div class="solution-step">\\( \\bar{x} = \\dfrac{158 + 162 + 170 + 165 + 175}{5} = \\dfrac{830}{5} = 166 \\) cm</div>
          <div class="solution-step"><strong>Svar: 166 cm</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Sara har fått följande resultat på fem matteläxor: 7, 9, 6, 8 och 5 poäng. Beräkna hennes medelpoäng.",
            solution: `
              <div class="solution-step">Medelvärdet beräknas genom att addera alla poäng och dela med antalet läxor:</div>
              <div class="solution-step">\\( \\bar{x} = \\dfrac{7 + 9 + 6 + 8 + 5}{5} = \\dfrac{35}{5} = 7 \\)</div>
              <div class="solution-step"><strong>Svar: 7 poäng</strong></div>
            `
          },
          {
            text: "Under sex dagar sålde en glasskiosk 45, 62, 38, 55, 70 och 50 glassar. Beräkna det genomsnittliga antalet per dag. Avrunda till en decimal.",
            solution: `
              <div class="solution-step">Vi beräknar medelvärdet genom att dela totala antalet sålda glassar med antalet dagar:</div>
              <div class="solution-step">\\( \\bar{x} = \\dfrac{45 + 62 + 38 + 55 + 70 + 50}{6} = \\dfrac{320}{6} \\approx 53{,}3 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 53,3 glassar per dag</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "I en klass fick eleverna följande betyg på ett prov (poäng): 15, 22, 18, 22, 25, 30, 22, 28, 19, 15. Beräkna medelvärde och median. Vilket lägesmått representerar gruppen bäst?",
        solution: `
          <div class="solution-step"><strong>Medelvärde:</strong> \\( \\bar{x} = \\dfrac{15+22+18+22+25+30+22+28+19+15}{10} = \\dfrac{216}{10} = 21{,}6 \\)</div>
          <div class="solution-step"><strong>Median:</strong> Ordna: \\( 15, 15, 18, 19, 22, 22, 22, 25, 28, 30 \\)</div>
          <div class="solution-step">Mittersta två (5:e och 6:e): 22 och 22. Median = 22</div>
          <div class="solution-step">Både medelvärde (21,6) och median (22) är nära varandra. Medianen påverkas inte lika mycket av extremvärden, så medianen representerar gruppen något bättre.</div>
          <div class="solution-step"><strong>Svar: Medelvärde = 21,6; median = 22. Medianen representerar gruppen bäst.</strong></div>
        `,
        videos: ["Ir9UHzhxiok"],
        variants: [
          {
            text: "Temperaturen kl 12 under 7 dagar var: \\( 12, 15, 13, 28, 14, 13, 12 \\) °C. Beräkna medelvärde och median. Förklara varför resultaten skiljer sig.",
            solution: `
              <div class="solution-step"><strong>Medelvärde:</strong> \\( \\bar{x} = \\dfrac{12+15+13+28+14+13+12}{7} = \\dfrac{107}{7} \\approx 15{,}3 \\) °C</div>
              <div class="solution-step"><strong>Median:</strong> Ordna: \\( 12, 12, 13, 13, 14, 15, 28 \\). Mittersta (4:e av 7) = 13 °C</div>
              <div class="solution-step">Värdet 28 °C är ett extremvärde som drar upp medelvärdet. Medianen (13 °C) påverkas inte.</div>
              <div class="solution-step"><strong>Svar: Medelvärde ≈ 15,3 °C, median = 13 °C. Extremvärdet 28 drar upp medelvärdet.</strong></div>
            `
          },
          {
            text: "Antal simningslängder för 6 elever: \\( 5, 6, 5, 7, 5, 40 \\). Beräkna medelvärde, median och typvärde. Vilket lägesmått är mest missvisande?",
            solution: `
              <div class="solution-step"><strong>Medelvärde:</strong> \\( \\dfrac{5+6+5+7+5+40}{6} = \\dfrac{68}{6} \\approx 11{,}3 \\)</div>
              <div class="solution-step"><strong>Median:</strong> Ordna: \\( 5, 5, 5, 6, 7, 40 \\). Mittersta två: \\( \\dfrac{5+6}{2} = 5{,}5 \\)</div>
              <div class="solution-step"><strong>Typvärde:</strong> 5 (förekommer 3 gånger)</div>
              <div class="solution-step">Medelvärdet (11,3) dras upp kraftigt av extremvärdet 40. De flesta simmade runt 5–7 längder.</div>
              <div class="solution-step"><strong>Svar: Medelvärdet (11,3) är mest missvisande.</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "Sju elever har medelvärdet 14 poäng på ett prov. En åttonde elev skriver provet och medelvärdet höjs till 15 poäng. Hur många poäng fick den åttonde eleven?",
        solution: `
          <div class="solution-step">Vi använder att medel = totalsumma / antal, och räknar ut totalsumman för varje grupp:</div>
          <div class="solution-step">Totalpoäng för 7 elever: \\( 7 \\cdot 14 = 98 \\)</div>
          <div class="solution-step">Totalpoäng för 8 elever: \\( 8 \\cdot 15 = 120 \\)</div>
          <div class="solution-step">Skillnaden är vad den åttonde eleven fick:</div>
          <div class="solution-step">Den åttonde elevens poäng: \\( 120 - 98 = 22 \\)</div>
          <div class="solution-step"><strong>Svar: 22 poäng</strong></div>
        `,
        videos: ["DYMXRdKjJOY"],
        variants: [
          {
            text: "Erik har i snitt gjort 3 mål per match under fyra matcher. Hur många mål måste han göra i den femte matchen för att snittet ska bli 4 mål per match?",
            solution: `
              <div class="solution-step">Från snittet kan vi räkna ut det totala antalet mål hittills:</div>
              <div class="solution-step">Totalt mål i 4 matcher: \\( 4 \\cdot 3 = 12 \\)</div>
              <div class="solution-step">För att få snitt 4 på 5 matcher behövs totalt:</div>
              <div class="solution-step">Totalt mål i 5 matcher för snitt 4: \\( 5 \\cdot 4 = 20 \\)</div>
              <div class="solution-step">Skillnaden ger antalet mål som behövs i femte matchen:</div>
              <div class="solution-step">Mål i femte matchen: \\( 20 - 12 = 8 \\)</div>
              <div class="solution-step"><strong>Svar: 8 mål</strong></div>
            `
          },
          {
            text: "I en grupp på 6 elever är medellängden 168 cm. En ny elev som är 182 cm lång tillkommer. Vad blir den nya medellängden?",
            solution: `
              <div class="solution-step">Utgå från medellängden för att beräkna den totala längden för de 6 eleverna:</div>
              <div class="solution-step">Total längd för 6 elever: \\( 6 \\cdot 168 = 1\\,008 \\) cm</div>
              <div class="solution-step">Lägg till den nya elevens längd:</div>
              <div class="solution-step">Total för 7 elever: \\( 1\\,008 + 182 = 1\\,190 \\) cm</div>
              <div class="solution-step">Dela den nya totalen med 7 för att få nya medelvärdet:</div>
              <div class="solution-step">Ny medellängd: \\( \\dfrac{1\\,190}{7} = 170 \\) cm</div>
              <div class="solution-step"><strong>Svar: 170 cm</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 6,
        text: "I en datamängd med 5 tal är medelvärdet 12, medianen 10 och typvärdet 10. Det största värdet är 25. Det minsta värdet är okänt. Alla tal är positiva heltal. Bestäm alla fem tal.",
        solution: `
          <div class="solution-step">Medelvärde 12 med 5 tal ger totalsumman: \\( 5 \\cdot 12 = 60 \\)</div>
          <div class="solution-step">Medianen är 10, så det mittersta (3:e) värdet är 10.</div>
          <div class="solution-step">Typvärdet är 10, så minst två tal är 10.</div>
          <div class="solution-step">Största värdet är 25. Låt talen i ordning vara: \\( a, 10, 10, b, 25 \\)</div>
          <div class="solution-step">\\( a + 10 + 10 + b + 25 = 60 \\Rightarrow a + b = 15 \\)</div>
          <div class="solution-step">Med \\( a = 5, b = 10 \\): talen blir 5, 10, 10, 10, 25.</div>
          <div class="solution-step">Kontroll: medel = 60/5 = 12 ✓, median = 10 ✓, typvärde = 10 ✓</div>
          <div class="solution-step"><strong>Svar: 5, 10, 10, 10, 25 (ett möjligt svar)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "I en datamängd med 6 värden är medianen 8, typvärdet 7, det minsta värdet 3 och det största 20. Medelvärdet är 10. Bestäm alla sex tal.",
            solution: `
              <div class="solution-step">Vi börjar med att räkna ut den totala summan från medelvärdet:</div>
              <div class="solution-step">Summa: \\( 6 \\cdot 10 = 60 \\)</div>
              <div class="solution-step">Typvärde 7 → minst 2 stycken 7:or.</div>
              <div class="solution-step">Vi sätter in det vi vet och kallar okända tal för d och e:</div>
              <div class="solution-step">Ordnade: \\( 3, 7, 7, d, e, 20 \\)</div>
              <div class="solution-step">Medianen för 6 tal är medelvärdet av det 3:e och 4:e talet:</div>
              <div class="solution-step">Median (6 tal) = \\( \\dfrac{7 + d}{2} = 8 \\Rightarrow d = 9 \\)</div>
              <div class="solution-step">Nu kan vi lösa ut det sista okända talet från summan:</div>
              <div class="solution-step">\\( 3 + 7 + 7 + 9 + e + 20 = 60 \\Rightarrow e = 14 \\)</div>
              <div class="solution-step">Kontroll: 3, 7, 7, 9, 14, 20. Medel = 10 ✓, median = 8 ✓, typvärde = 7 ✓</div>
              <div class="solution-step"><strong>Svar: 3, 7, 7, 9, 14, 20</strong></div>
            `
          },
          {
            text: "I en datamängd med 7 positiva heltal (alla olika) är medelvärdet 15, medianen 14, största talet 30 och variationsbredden 25. Hitta en möjlig datamängd.",
            solution: `
              <div class="solution-step">Vi börjar med att bestämma det minsta talet från variationsbredden:</div>
              <div class="solution-step">Variationsbredd 25, max 30 → min = \\( 30 - 25 = 5 \\)</div>
              <div class="solution-step">Från medelvärdet får vi den totala summan:</div>
              <div class="solution-step">Summa: \\( 7 \\cdot 15 = 105 \\)</div>
              <div class="solution-step">Medianen (4:e talet) är 14. Vi sätter upp talen i ordning med okända:</div>
              <div class="solution-step">Ordnade: \\( 5, b, c, 14, e, f, 30 \\) (alla olika)</div>
              <div class="solution-step">\\( 5 + b + c + 14 + e + f + 30 = 105 \\Rightarrow b + c + e + f = 56 \\)</div>
              <div class="solution-step">Vi provar värden som är olika och i rätt storleksordning:</div>
              <div class="solution-step">Prova: \\( b = 8, c = 12, e = 16, f = 20 \\). Summa: \\( 8 + 12 + 16 + 20 = 56 \\) ✓</div>
              <div class="solution-step">Talen: 5, 8, 12, 14, 16, 20, 30. Kontroll: medel = 105/7 = 15 ✓, median = 14 ✓</div>
              <div class="solution-step"><strong>Svar: 5, 8, 12, 14, 16, 20, 30 (ett möjligt svar)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "En lärare rättar prov. De första 20 provens medelvärde är 16 poäng. De sista 10 provens medelvärde är 22 poäng. Vad är medelvärdet för alla 30 proven?",
        solution: `
          <div class="solution-step">För att hitta det totala medelvärdet beräknar vi först totalpoängen för varje grupp:</div>
          <div class="solution-step">Totalpoäng för första 20 proven: \\( 20 \\cdot 16 = 320 \\)</div>
          <div class="solution-step">Totalpoäng för sista 10 proven: \\( 10 \\cdot 22 = 220 \\)</div>
          <div class="solution-step">Sedan lägger vi ihop och delar med det totala antalet prov:</div>
          <div class="solution-step">Total: \\( 320 + 220 = 540 \\)</div>
          <div class="solution-step">Medelvärde för alla 30: \\( \\dfrac{540}{30} = 18 \\)</div>
          <div class="solution-step"><strong>Svar: 18 poäng</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "Två klasser skriver samma prov. Klass A (25 elever) har medelvärdet 68 poäng. Klass B (15 elever) har medelvärdet 76 poäng. Beräkna medelvärdet för alla 40 elever.",
            solution: `
              <div class="solution-step">Vi beräknar totalpoängen för varje klass separat:</div>
              <div class="solution-step">Totalpoäng klass A: \\( 25 \\cdot 68 = 1\\,700 \\)</div>
              <div class="solution-step">Totalpoäng klass B: \\( 15 \\cdot 76 = 1\\,140 \\)</div>
              <div class="solution-step">Sedan lägger vi ihop och delar med totala antalet elever:</div>
              <div class="solution-step">Totalt: \\( 1\\,700 + 1\\,140 = 2\\,840 \\)</div>
              <div class="solution-step">Medelvärde: \\( \\dfrac{2\\,840}{40} = 71 \\)</div>
              <div class="solution-step"><strong>Svar: 71 poäng</strong></div>
            `
          },
          {
            text: "I en skola fick flickorna (12 st) medelbetyget 4,2 och pojkarna (18 st) medelbetyget 3,8. Beräkna medelbetyget för hela klassen. Avrunda till en decimal.",
            solution: `
              <div class="solution-step">Vi räknar ut den totala betygspoängen för varje grupp:</div>
              <div class="solution-step">Flickornas totala betygspoäng: \\( 12 \\cdot 4{,}2 = 50{,}4 \\)</div>
              <div class="solution-step">Pojkarnas totala betygspoäng: \\( 18 \\cdot 3{,}8 = 68{,}4 \\)</div>
              <div class="solution-step">Sedan delar vi den sammanlagda poängen med totala antalet elever:</div>
              <div class="solution-step">Totalt: \\( 50{,}4 + 68{,}4 = 118{,}8 \\)</div>
              <div class="solution-step">Medelvärde: \\( \\dfrac{118{,}8}{30} = 3{,}96 \\approx 4{,}0 \\)</div>
              <div class="solution-step"><strong>Svar: Ungefär 4,0</strong></div>
            `
          }
        ]
      },
      // --- E4 (NY): Läs av data / beräkna andel ---
      {
        level: "E",
        num: 8,
        text: "I en klass tillfrågades eleverna om favoritsport. Resultaten: Fotboll 12, Basket 5, Simning 3, Ishockey 8, Annat 2. Hur stor andel av klassen valde fotboll? Svara i procent.",
        solution: `
          <div class="solution-step">Först räknar vi ut det totala antalet elever:</div>
          <div class="solution-step">Totalt antal elever: \\( 12 + 5 + 3 + 8 + 2 = 30 \\)</div>
          <div class="solution-step">Andelen som valde fotboll får vi genom att dela fotbollens antal med totalen:</div>
          <div class="solution-step">Andel fotboll: \\( \\dfrac{12}{30} = 0{,}40 = 40\\% \\)</div>
          <div class="solution-step"><strong>Svar: 40 %</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "I en undersökning om favoritämne fick man: Matte 15, Svenska 8, Engelska 10, SO 7. Hur stor andel valde Matte? Svara i procent.",
            solution: `
              <div class="solution-step">Först räknar vi ut det totala antalet elever i undersökningen:</div>
              <div class="solution-step">Totalt: \\( 15 + 8 + 10 + 7 = 40 \\)</div>
              <div class="solution-step">Andelen som valde matte är antalet som valde matte delat med totalen:</div>
              <div class="solution-step">Andel matte: \\( \\dfrac{15}{40} = 0{,}375 = 37{,}5\\% \\)</div>
              <div class="solution-step"><strong>Svar: 37,5 %</strong></div>
            `
          },
          {
            text: "I ett cirkeldiagram visar en sektor 25 % och den motsvarar 15 elever. Hur många elever deltog totalt i undersökningen?",
            solution: `
              <div class="solution-step">Vi vet att 25 % av eleverna motsvarar 15 elever.</div>
              <div class="solution-step">För att få det totala antalet delar vi med andelen som decimal:</div>
              <div class="solution-step">100 % = \\( \\dfrac{15}{0{,}25} = 60 \\) elever</div>
              <div class="solution-step"><strong>Svar: 60 elever</strong></div>
            `
          }
        ]
      },
      // --- C3 (NY): Vilseledande statistik ---
      {
        level: "C",
        num: 9,
        text: "Medellönen på ett litet företag med 5 anställda är 41 100 kr. Lönerna är: 22 000, 24 000, 26 000, 28 000 och 105 500 kr. Beräkna medianen och förklara varför medelvärdet kan vara vilseledande.",
        solution: `
          <div class="solution-step">Ordna: \\( 22\\,000, \\; 24\\,000, \\; 26\\,000, \\; 28\\,000, \\; 105\\,500 \\)</div>
          <div class="solution-step">Median (3:e av 5) = \\( 26\\,000 \\) kr</div>
          <div class="solution-step">Kontroll medelvärde: \\( \\dfrac{22000+24000+26000+28000+105500}{5} = \\dfrac{205\\,500}{5} = 41\\,100 \\) kr ✓</div>
          <div class="solution-step">Lönen 105 500 kr är ett extremvärde som drar upp medelvärdet kraftigt. Fyra av fem tjänar 22 000–28 000 kr.</div>
          <div class="solution-step"><strong>Svar: Medianen är 26 000 kr. Medelvärdet är vilseledande eftersom en hög lön drar upp snittet.</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "I en bostadsförening bor 10 personer med månadsinkomster (i kr): 25 000, 26 000, 27 000, 28 000, 29 000, 30 000, 31 000, 32 000, 33 000 och 150 000. Beräkna medelvärde och median. Vilket mått ger en bättre bild?",
            solution: `
              <div class="solution-step">Vi beräknar medelvärdet genom att summera alla inkomster och dela med 10:</div>
              <div class="solution-step">Medelvärde: \\( \\dfrac{25+26+27+28+29+30+31+32+33+150}{10} \\cdot 1\\,000 = \\dfrac{411\\,000}{10} = 41\\,100 \\) kr</div>
              <div class="solution-step">Medianen är medelvärdet av det 5:e och 6:e värdet (när de är ordnade):</div>
              <div class="solution-step">Median (5:e och 6:e): \\( \\dfrac{29\\,000 + 30\\,000}{2} = 29\\,500 \\) kr</div>
              <div class="solution-step">Personen med 150 000 kr drar upp medelvärdet. De flesta tjänar 25 000–33 000 kr.</div>
              <div class="solution-step"><strong>Svar: Medelvärde = 41 100 kr, median = 29 500 kr. Medianen ger en bättre bild.</strong></div>
            `
          },
          {
            text: "Ett företag marknadsför att deras kunder i snitt sparar 2 000 kr per månad. I verkligheten sparar 9 av 10 kunder 500 kr, medan den tionde kunden sparar 15 500 kr. Beräkna medianen och förklara vad som är missvisande.",
            solution: `
              <div class="solution-step">Vi kontrollerar först att medelvärdet stämmer:</div>
              <div class="solution-step">Medelvärde: \\( \\dfrac{9 \\cdot 500 + 15\\,500}{10} = \\dfrac{4\\,500 + 15\\,500}{10} = \\dfrac{20\\,000}{10} = 2\\,000 \\) kr ✓</div>
              <div class="solution-step">Medianen är det mittersta värdet när alla är ordnade:</div>
              <div class="solution-step">Median: 9 av 10 sparar 500 kr, så medianen = 500 kr.</div>
              <div class="solution-step">Marknadsföringen är missvisande: 90 % av kunderna sparar bara 500 kr, inte 2 000 kr. En enda storkund drar upp snittet.</div>
              <div class="solution-step"><strong>Svar: Medianen är 500 kr. Medelvärdet 2 000 kr ger en falsk bild eftersom nästan alla sparar mycket mindre.</strong></div>
            `
          }
        ]
      }
    ]
  },

  // ===== KAPITEL 12: SANNOLIKHET & KOMBINATORIK =====
  {
    id: 12,
    title: "Sannolikhet & Kombinatorik",
    points: "Snitt 3,4 p/prov",
    tags: ["Utan hjälpmedel", "Med hjälpmedel"],
    videos: [],
    theory: `
      <h3>Sannolikhet och kombinatorik</h3>

      <h4>Sannolikhet - Grunder</h4>
      <p>Sannolikheten för en händelse \\(A\\) är:</p>
      <div class="formula-box">
        \\[ P(A) = \\frac{\\text{antal gynnsamma utfall}}{\\text{antal möjliga utfall}} \\]
        <p>Sannolikheten är alltid mellan 0 och 1 (eller 0 % och 100 %).</p>
        <p>\\( P(A) = 0 \\): händelsen är omojlig</p>
        <p>\\( P(A) = 1 \\): händelsen är säker</p>
      </div>

      <h4>Komplementhändelse</h4>
      <div class="formula-box">
        \\[ P(\\text{inte } A) = 1 - P(A) \\]
      </div>

      <h4>Träddiagram</h4>
      <p>Ett träddiagram är ett verktyg för att räkna ut sannolikheter när ett försök bestar av flera steg. Man multiplicerar sannolikheterna långs grenärna.</p>

      <h4>Oberoende och beroende händelser</h4>
      <div class="formula-box">
        <p><strong>Oberoende händelser:</strong> utfallet av den ena påverkar inte den andra.</p>
        \\[ P(A \\text{ och } B) = P(A) \\cdot P(B) \\]
        <p><strong>Beroende händelser:</strong> utfallet av den ena påverkar sannolikheten för den andra (t.ex. dragning utan aterlaggning).</p>
      </div>

      <h4>Multiplikationsprincipen</h4>
      <p>Om ett val kan goras på \\(m\\) sätt och ett annat val kan goras på \\(n\\) sätt, så kan bada valen goras på \\(m \\cdot n\\) sätt.</p>
      <div class="formula-box">
        <p>Exempel: 3 trosor och 4 byxor ger \\( 3 \\cdot 4 = 12 \\) olika kombinationer.</p>
      </div>
    `,
    problems: [
      {
        level: "E",
        num: 1,
        text: "En vanlig tärning kastas. Vad är sannolikheten att få en sexa?",
        solution: `
          <div class="solution-step">Antal möjliga utfall: 6 (siffrorna 1–6)</div>
          <div class="solution-step">Antal gynnsamma utfall: 1 (bara 6)</div>
          <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(6) = \\dfrac{1}{6} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{6} \\approx 16{,}7\\% \\)</strong></div>
        `,
        videos: ["EleENQGVbCk"],
        variants: [
          {
            text: "Du kastar en vanlig tärning. Vad är sannolikheten att få ett tal som är större än 4?",
            solution: `
              <div class="solution-step">Möjliga utfall: 6 st (1–6)</div>
              <div class="solution-step">Gynnsamma utfall (större än 4): 5 och 6 = 2 st</div>
              <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(>4) = \\dfrac{2}{6} = \\dfrac{1}{3} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{3} \\approx 33{,}3\\% \\)</strong></div>
            `
          },
          {
            text: "Du kastar en vanlig tärning. Vad är sannolikheten att få ett udda tal?",
            solution: `
              <div class="solution-step">Möjliga utfall: 6 st (1–6)</div>
              <div class="solution-step">Gynnsamma utfall (udda): 1, 3, 5 = 3 st</div>
              <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(\\text{udda}) = \\dfrac{3}{6} = \\dfrac{1}{2} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{2} = 50\\% \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 2,
        text: "I en påse finns 4 röda, 3 blåa och 5 gröna kulor. Du drar en kula slumpmässigt. Vad är sannolikheten att dra en blå kula?",
        solution: `
          <div class="solution-step">Vi räknar först ut hur många kulor det finns totalt: \\( 4 + 3 + 5 = 12 \\)</div>
          <div class="solution-step">Sannolikheten att dra en blå kula är antalet blåa delat med totalen: \\( P(\\text{blå}) = \\dfrac{3}{12} = \\dfrac{1}{4} = 0{,}25 \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{4} = 25\\% \\)</strong></div>
        `,
        videos: ["ku_zGPJPkwo"],
        variants: [
          {
            text: "I en burk finns 6 röda, 4 gula och 2 blåa kulor. Du drar en kula slumpmässigt. Vad är sannolikheten att dra en röd kula?",
            solution: `
              <div class="solution-step">Vi räknar ut totala antalet kulor: \\( 6 + 4 + 2 = 12 \\)</div>
              <div class="solution-step">Sannolikheten att dra en röd kula är antalet röda delat med totalen: \\( P(\\text{röd}) = \\dfrac{6}{12} = \\dfrac{1}{2} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{2} = 50\\% \\)</strong></div>
            `
          },
          {
            text: "I en påse finns 3 vita, 5 svarta och 7 gröna kulor. Vad är sannolikheten att dra en kula som inte är grön?",
            solution: `
              <div class="solution-step">Totalt antal kulor: \\( 3 + 5 + 7 = 15 \\)</div>
              <div class="solution-step">Vi använder komplementregeln -- sannolikheten att inte dra grön är 1 minus sannolikheten att dra grön:</div>
              <div class="solution-step">\\( P(\\text{inte grön}) = 1 - \\dfrac{7}{15} = \\dfrac{8}{15} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{8}{15} \\approx 53{,}3\\% \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "E",
        num: 3,
        text: "Du kastar ett mynt. Vad är sannolikheten att inte få krona?",
        solution: `
          <div class="solution-step">Ett mynt har två sidor, så sannolikheten för krona är: \\( P(\\text{krona}) = \\dfrac{1}{2} \\)</div>
          <div class="solution-step">Vi använder komplementregeln för att beräkna "inte krona": \\( P(\\text{inte krona}) = 1 - \\dfrac{1}{2} = \\dfrac{1}{2} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{2} = 50\\% \\)</strong></div>
        `,
        videos: [],
        variants: [
          {
            text: "En vanlig tärning kastas. Vad är sannolikheten att inte få en etta?",
            solution: `
              <div class="solution-step">Sannolikheten att få en etta är 1 av 6: \\( P(\\text{etta}) = \\dfrac{1}{6} \\)</div>
              <div class="solution-step">Komplementregeln ger sannolikheten att inte få etta: \\( P(\\text{inte etta}) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{5}{6} \\approx 83{,}3\\% \\)</strong></div>
            `
          },
          {
            text: "I en kortlek med 52 kort drar du ett kort slumpmässigt. Vad är sannolikheten att det inte är ett hjärter?",
            solution: `
              <div class="solution-step">Det finns 13 hjärter av 52 kort.</div>
              <div class="solution-step">Sannolikheten att dra ett hjärter: \\( P(\\text{hjärter}) = \\dfrac{13}{52} = \\dfrac{1}{4} \\)</div>
              <div class="solution-step">Komplementregeln ger sannolikheten att inte dra hjärter: \\( P(\\text{inte hjärter}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{3}{4} = 75\\% \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 4,
        text: "En tärning kastas två gånger. Vad är sannolikheten att få summan 7?",
        solution: `
          <div class="solution-step">Varje tärning kan visa 1--6, så totalt antal utfall: \\( 6 \\cdot 6 = 36 \\)</div>
          <div class="solution-step">Vi listar alla kombinationer som ger summan 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 stycken</div>
          <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(\\text{summa 7}) = \\dfrac{6}{36} = \\dfrac{1}{6} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{6} \\approx 16{,}7\\% \\)</strong></div>
        `,
        videos: ["B7mUhKX5Srs"],
        variants: [
          {
            text: "Två tärningar kastas. Vad är sannolikheten att summan blir minst 10?",
            solution: `
              <div class="solution-step">Varje tärning kan visa 1--6, så totalt antal utfall: \\( 6 \\cdot 6 = 36 \\)</div>
              <div class="solution-step">Vi listar alla kombinationer som ger minst 10:</div>
              <div class="solution-step">Summa 10: (4,6), (5,5), (6,4) = 3 st</div>
              <div class="solution-step">Summa 11: (5,6), (6,5) = 2 st</div>
              <div class="solution-step">Summa 12: (6,6) = 1 st</div>
              <div class="solution-step">Totalt gynnsamma utfall: \\( 3 + 2 + 1 = 6 \\)</div>
              <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(\\text{summa} \\geq 10) = \\dfrac{6}{36} = \\dfrac{1}{6} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{6} \\approx 16{,}7\\% \\)</strong></div>
            `
          },
          {
            text: "Två tärningar kastas. Vad är sannolikheten att produkten av de två talen blir jämn?",
            solution: `
              <div class="solution-step">Produkten är udda bara om båda talen är udda. Vi räknar därför ut sannolikheten för udda produkt och använder komplementet.</div>
              <div class="solution-step">Sannolikheten att en tärning visar udda (1, 3 eller 5): \\( P(\\text{udda på en tärning}) = \\dfrac{3}{6} = \\dfrac{1}{2} \\)</div>
              <div class="solution-step">Eftersom tärningarna är oberoende multiplicerar vi: \\( P(\\text{båda udda}) = \\dfrac{1}{2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{4} \\)</div>
              <div class="solution-step">Komplementregeln ger sannolikheten för jämn produkt: \\( P(\\text{jämn produkt}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{3}{4} = 75\\% \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 5,
        text: "I en påse finns 5 röda och 3 blåa kulor. Du drar två kulor utan återläggning. Vad är sannolikheten att båda är röda?",
        solution: `
          <div class="solution-step">Det finns 5 röda av 8 kulor. Sannolikheten att första kulan är röd: \\( \\dfrac{5}{8} \\)</div>
          <div class="solution-step">Utan återläggning finns nu 4 röda och 3 blåa kvar (7 totalt).</div>
          <div class="solution-step">Sannolikheten att andra också är röd: \\( \\dfrac{4}{7} \\)</div>
          <div class="solution-step">Vi multiplicerar eftersom båda måste inträffa: \\( P(\\text{båda röda}) = \\dfrac{5}{8} \\cdot \\dfrac{4}{7} = \\dfrac{20}{56} = \\dfrac{5}{14} \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{5}{14} \\approx 35{,}7\\% \\)</strong></div>
        `,
        videos: ["2EBp6QsjSDg"],
        variants: [
          {
            text: "I en påse finns 4 röda och 6 blåa kulor. Du drar två kulor utan återläggning. Vad är sannolikheten att båda är blåa?",
            solution: `
              <div class="solution-step">Det finns 6 blåa av totalt 10 kulor. Sannolikheten att första kulan är blå: \\( P(\\text{1:a blå}) = \\dfrac{6}{10} \\)</div>
              <div class="solution-step">Utan återläggning finns nu 5 blåa av 9 kvar: \\( P(\\text{2:a blå} \\mid \\text{1:a blå}) = \\dfrac{5}{9} \\)</div>
              <div class="solution-step">Vi multiplicerar eftersom båda måste inträffa: \\( P(\\text{båda blåa}) = \\dfrac{6}{10} \\cdot \\dfrac{5}{9} = \\dfrac{30}{90} = \\dfrac{1}{3} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{3} \\approx 33{,}3\\% \\)</strong></div>
            `
          },
          {
            text: "I en låda finns 3 gula och 7 gröna bollar. Du drar två utan återläggning. Vad är sannolikheten att du får en av varje färg?",
            solution: `
              <div class="solution-step">Det kan hända på två sätt: gul först eller grön först. Vi beräknar båda fallen.</div>
              <div class="solution-step">Gul sedan grön: \\( \\dfrac{3}{10} \\cdot \\dfrac{7}{9} = \\dfrac{21}{90} \\)</div>
              <div class="solution-step">Grön sedan gul: \\( \\dfrac{7}{10} \\cdot \\dfrac{3}{9} = \\dfrac{21}{90} \\)</div>
              <div class="solution-step">Eftersom det räcker att ett av fallen inträffar adderar vi: \\( P(\\text{en av varje}) = \\dfrac{21}{90} + \\dfrac{21}{90} = \\dfrac{42}{90} = \\dfrac{7}{15} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{7}{15} \\approx 46{,}7\\% \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "C",
        num: 6,
        text: "Hur många olika tresiffriga tal kan man bilda med siffrorna 1, 2, 3, 4 och 5 om varje siffra bara får användas en gång?",
        solution: `
          <div class="solution-step">Vi använder multiplikationsprincipen:</div>
          <div class="solution-step">Första siffran: 5 val</div>
          <div class="solution-step">Andra siffran: 4 val (en är redan använd)</div>
          <div class="solution-step">Tredje siffran: 3 val</div>
          <div class="solution-step">Totalt: \\( 5 \\cdot 4 \\cdot 3 = 60 \\)</div>
          <div class="solution-step"><strong>Svar: 60 tresiffriga tal</strong></div>
        `,
        videos: ["hr6EOqT6-GM"],
        variants: [
          {
            text: "Hur många olika fyrsiffriga koder kan man bilda med siffrorna 0–9 om varje siffra får användas flera gånger?",
            solution: `
              <div class="solution-step">Vi använder multiplikationsprincipen. Varje position har 10 val (0–9) och siffror får återanvändas.</div>
              <div class="solution-step">Vi multiplicerar antalet val för varje position: \\( 10 \\cdot 10 \\cdot 10 \\cdot 10 = 10\\,000 \\)</div>
              <div class="solution-step"><strong>Svar: 10 000 koder</strong></div>
            `
          },
          {
            text: "Lisa ska välja en outfit. Hon har 4 tröjor, 3 kjolar och 2 par skor. Hur många olika outfits kan hon sätta ihop?",
            solution: `
              <div class="solution-step">Multiplikationsprincipen: varje val (tröja, kjol, skor) är oberoende av de andra.</div>
              <div class="solution-step">Vi multiplicerar antalet val: \\( 4 \\cdot 3 \\cdot 2 = 24 \\)</div>
              <div class="solution-step"><strong>Svar: 24 olika outfits</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 7,
        text: "I ett brädspel snurrar du ett lyckohjul två gånger. Hjulet har 4 lika stora fält: Röd, Blå, Grön och Gul. Om du får samma färg båda gångerna vinner du. Vad är sannolikheten att vinna?",
        solution: `
          <div class="solution-step">Varje snurr har 4 möjliga färger, så totalt antal utfall: \\( 4 \\cdot 4 = 16 \\)</div>
          <div class="solution-step">Gynnsamma utfall (samma färg): (Röd, Röd), (Blå, Blå), (Grön, Grön), (Gul, Gul) = 4 st</div>
          <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(\\text{vinst}) = \\dfrac{4}{16} = \\dfrac{1}{4} \\)</div>
          <div class="solution-step">Alternativt: Oavsett första snurren är sannolikheten att få samma på andra snurren \\( \\dfrac{1}{4} \\).</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{4} = 25\\% \\)</strong></div>
        `,
        videos: ["h_mHW2og2-0"],
        variants: [
          {
            text: "Du kastar två tärningar. Vad är sannolikheten att få samma tal på båda? Vad är sannolikheten att inte få samma tal?",
            solution: `
              <div class="solution-step">Varje tärning har 6 utfall, så totalt antal utfall: \\( 6 \\cdot 6 = 36 \\)</div>
              <div class="solution-step">Vi listar alla kombinationer med samma tal: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 st</div>
              <div class="solution-step">Sannolikheten att få samma tal: \\( P(\\text{samma}) = \\dfrac{6}{36} = \\dfrac{1}{6} \\)</div>
              <div class="solution-step">Komplementregeln ger sannolikheten att få olika: \\( P(\\text{olika}) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6} \\)</div>
              <div class="solution-step"><strong>Svar: \\( P(\\text{samma}) = \\dfrac{1}{6} \\approx 16{,}7\\% \\), \\( P(\\text{olika}) = \\dfrac{5}{6} \\approx 83{,}3\\% \\)</strong></div>
            `
          },
          {
            text: "I en skål finns 3 röda och 2 blåa kulor. Du drar en kula, lägger tillbaka den, och drar igen. Vad är sannolikheten att du får samma färg båda gångerna?",
            solution: `
              <div class="solution-step">Dragning med återläggning innebär att händelserna är oberoende. Samma färg kan fås på två sätt:</div>
              <div class="solution-step">Röd båda gångerna: \\( \\dfrac{3}{5} \\cdot \\dfrac{3}{5} = \\dfrac{9}{25} \\)</div>
              <div class="solution-step">Blå båda gångerna: \\( \\dfrac{2}{5} \\cdot \\dfrac{2}{5} = \\dfrac{4}{25} \\)</div>
              <div class="solution-step">Vi adderar eftersom det räcker att ett av fallen inträffar: \\( P(\\text{samma färg}) = \\dfrac{9}{25} + \\dfrac{4}{25} = \\dfrac{13}{25} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{13}{25} = 52\\% \\)</strong></div>
            `
          }
        ]
      },
      {
        level: "A",
        num: 8,
        text: "Anton har 5 par strumpor i en låda: 2 svarta, 2 vita och 1 grått. Han tar slumpmässigt två strumpor ur lådan i mörkret. Vad är sannolikheten att han får ett matchande par (två av samma färg)?",
        solution: `
          <div class="solution-step">Varje par har 2 strumpor, så totalt antal enskilda strumpor: \\( 5 \\cdot 2 = 10 \\) (4 svarta, 4 vita, 2 grå).</div>
          <div class="solution-step">Vi beräknar antalet sätt att välja 2 strumpor av 10: \\( \\binom{10}{2} = \\dfrac{10 \\cdot 9}{2} = 45 \\)</div>
          <div class="solution-step">Nu räknar vi hur många av dessa ger matchande färg:</div>
          <div class="solution-step">-- 2 svarta av 4: \\( \\binom{4}{2} = 6 \\)</div>
          <div class="solution-step">-- 2 vita av 4: \\( \\binom{4}{2} = 6 \\)</div>
          <div class="solution-step">-- 2 grå av 2: \\( \\binom{2}{2} = 1 \\)</div>
          <div class="solution-step">Totalt gynnsamma: \\( 6 + 6 + 1 = 13 \\)</div>
          <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(\\text{matchande par}) = \\dfrac{13}{45} \\approx 0{,}289 \\)</div>
          <div class="solution-step"><strong>Svar: \\( \\dfrac{13}{45} \\approx 28{,}9\\% \\)</strong></div>
        `,
        videos: ["h_mHW2og2-0"],
        variants: [
          {
            text: "I en burk finns 8 kulor numrerade 1–8. Du drar tre kulor utan återläggning. Vad är sannolikheten att alla tre är jämna tal?",
            solution: `
              <div class="solution-step">Vi börjar med att identifiera de jämna talen: 2, 4, 6, 8 = 4 st</div>
              <div class="solution-step">Totalt antal sätt att välja 3 kulor av 8: \\( \\binom{8}{3} = \\dfrac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = 56 \\)</div>
              <div class="solution-step">Antal sätt att välja 3 jämna kulor av de 4 jämna: \\( \\binom{4}{3} = 4 \\)</div>
              <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(\\text{alla jämna}) = \\dfrac{4}{56} = \\dfrac{1}{14} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{1}{14} \\approx 7{,}1\\% \\)</strong></div>
            `
          },
          {
            text: "Ett lag med 3 personer ska väljas bland 5 tjejer och 4 killar. Vad är sannolikheten att laget har minst 2 tjejer?",
            solution: `
              <div class="solution-step">Totalt finns 9 personer (5 + 4). Antal sätt att välja 3 av 9: \\( \\binom{9}{3} = 84 \\)</div>
              <div class="solution-step">"Minst 2 tjejer" betyder antingen exakt 2 eller exakt 3 tjejer.</div>
              <div class="solution-step">Exakt 2 tjejer + 1 kille: \\( \\binom{5}{2} \\cdot \\binom{4}{1} = 10 \\cdot 4 = 40 \\)</div>
              <div class="solution-step">Exakt 3 tjejer: \\( \\binom{5}{3} = 10 \\)</div>
              <div class="solution-step">Vi adderar de gynnsamma fallen: \\( 40 + 10 = 50 \\)</div>
              <div class="solution-step">Sannolikheten är gynnsamma delat med möjliga: \\( P(\\text{minst 2 tjejer}) = \\dfrac{50}{84} = \\dfrac{25}{42} \\)</div>
              <div class="solution-step"><strong>Svar: \\( \\dfrac{25}{42} \\approx 59{,}5\\% \\)</strong></div>
            `
          }
        ]
      }
    ]
  }
];

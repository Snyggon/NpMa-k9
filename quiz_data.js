// Quiz-data for NP Matte Quest
// Each chapter has E, C, and A level quizzes
// Questions have text (with KaTeX) and a numeric answer
// tolerance: optional, default 0 (exact match). Set for decimal answers.

const quizzes = {
  1: { // Tal & Beräkningar
    E: [
      { text: "Beräkna \\( 8 + 4 \\cdot 3 \\)", answer: 20 },
      { text: "Beräkna \\( (5 + 3) \\cdot 2 \\)", answer: 16 },
      { text: "Vad är \\( 3^4 \\)?", answer: 81 },
      { text: "Beräkna \\( \\sqrt{144} \\)", answer: 12 },
      { text: "Beräkna \\( 15 - 2 \\cdot 3 + 1 \\)", answer: 10 },
      { text: "Hur många gram är 2,5 kg?", answer: 2500 },
      { text: "Beräkna \\( 3{,}6 \\cdot 0{,}5 \\). Svara i tiondels (t.ex. 18 för 1,8).", answer: 18 },
    ],
    C: [
      { text: "Beräkna \\( 2^3 \\cdot 2^4 \\)", answer: 128 },
      { text: "Förenkla \\( \\dfrac{10^6}{10^4} \\). Svara med ett heltal.", answer: 100 },
      { text: "Skriv \\( 0{,}00045 \\) i grundpotensform: \\( a \\cdot 10^n \\). Vad är \\( n \\)?", answer: -4 },
      { text: "Beräkna \\( \\sqrt{81} + \\sqrt{49} \\)", answer: 16 },
      { text: "Uppskatta \\( \\sqrt{50} \\). Vilket heltal är närmast?", answer: 7 },
    ],
    A: [
      { text: "Beräkna \\( (3^2)^3 \\)", answer: 729 },
      { text: "Hur många centimeter är 0,035 km?", answer: 3500 },
      { text: "Beräkna \\( 2^{-3} \\cdot 2^7 \\)", answer: 16 },
    ]
  },
  2: { // Bråk & Negativa tal
    E: [
      { text: "Beräkna \\( \\dfrac{2}{3} + \\dfrac{1}{3} \\). Svara som ett heltal eller bråk (skriv täljaren).", answer: 1 },
      { text: "Beräkna \\( (-3) + (-5) \\)", answer: -8 },
      { text: "Beräkna \\( (-4) \\cdot (-6) \\)", answer: 24 },
      { text: "Beräkna \\( \\dfrac{3}{4} \\cdot 8 \\)", answer: 6 },
    ],
    C: [
      { text: "Beräkna \\( \\dfrac{5}{6} - \\dfrac{1}{4} \\). Svara som bråk: ange täljaren om nämnaren är 12.", answer: 7 },
      { text: "Beräkna \\( (-3)^3 \\)", answer: -27 },
      { text: "Beräkna \\( \\dfrac{2}{3} \\cdot \\dfrac{9}{4} \\). Svara som bråk: täljaren om nämnaren är 2.", answer: 3 },
    ],
    A: [
      { text: "Beräkna \\( \\dfrac{7}{12} + \\dfrac{5}{8} \\). Svara med täljaren om nämnaren är 24.", answer: 29 },
      { text: "Ordna talen: \\(-2{,}5\\), \\(\\dfrac{-7}{3}\\), \\(-2{,}4\\). Vilket är minst? Svara med decimaltal gånger 10 (t.ex. -25 för -2,5).", answer: -25 },
    ]
  },
  3: { // Procent
    E: [
      { text: "Hur mycket är 25% av 240?", answer: 60 },
      { text: "Hur många procent är 15 av 60?", answer: 25 },
      { text: "Ett pris höjs med 10%. Vad blir förändringsfaktorn?", answer: 1.1 },
      { text: "Hur mycket är 30% av 500?", answer: 150 },
      { text: "Vad är förändringsfaktorn vid en minskning med 30%?", answer: 0.7 },
    ],
    C: [
      { text: "En jacka kostar 800 kr. Den sänks med 35%. Vad kostar den nu?", answer: 520 },
      { text: "Ett pris höjs med 20% och sänks sedan med 20%. Om originalpriset var 100 kr, vad är slutpriset?", answer: 96 },
      { text: "Befolkningen ökade från 1200 till 1500. Hur många procent ökade den?", answer: 25 },
    ],
    A: [
      { text: "Efter en sänkning på 40% kostar en vara 450 kr. Vad var originalpriset?", answer: 750 },
      { text: "En aktie ökar med 15% år 1 och 10% år 2. Med hur många procent totalt? Svara som ett heltal (avrunda).", answer: 27, tolerance: 1 },
      { text: "En vara kostar 600 kr efter 25% rabatt. Vad var originalpriset i kr?", answer: 800 },
    ]
  },
  4: { // Algebra
    E: [
      { text: "Lös ekvationen \\( 3x + 5 = 20 \\). Vad är \\( x \\)?", answer: 5 },
      { text: "Förenkla \\( 4a + 3a - 2a \\). Hur många \\( a \\)?", answer: 5 },
      { text: "Lös \\( 2x = 14 \\). Vad är \\( x \\)?", answer: 7 },
      { text: "Om \\( x = 3 \\), vad är \\( 2x^2 + 1 \\)?", answer: 19 },
      { text: "Sätt in \\( x = 2 \\) i uttrycket \\( 3x^2 - x + 4 \\).", answer: 14 },
    ],
    C: [
      { text: "Lös ekvationen \\( 5(x - 2) = 3x + 4 \\). Vad är \\( x \\)?", answer: 7 },
      { text: "Lös ekvationssystemet: \\( x + y = 10 \\) och \\( x - y = 4 \\). Vad är \\( x \\)?", answer: 7 },
      { text: "Förenkla \\( (2x + 3)(x - 1) \\). Vad är koefficienten framför \\( x^2 \\)?", answer: 2 },
      { text: "Lös ekvationen \\( \\dfrac{x}{3} + 2 = 5 \\). Vad är \\( x \\)?", answer: 9 },
    ],
    A: [
      { text: "Lös \\( \\dfrac{x+1}{3} = \\dfrac{2x-1}{5} \\). Svara: vad är \\( x \\) (multiplicerat med 1, avrunda ej)?", answer: 8 },
      { text: "Summan av tre på varandra följande tal är 96. Vad är det minsta talet?", answer: 31 },
    ]
  },
  5: { // Mönster & Generalisering
    E: [
      { text: "I en talföljd är mönstret: 2, 5, 8, 11, ... Vad är nästa tal?", answer: 14 },
      { text: "I en talföljd ökar talen med 4: 3, 7, 11, 15, ... Vad är det 6:e talet?", answer: 23 },
      { text: "Figur 1 har 4 tändstickor, figur 2 har 7, figur 3 har 10. Hur många har figur 5?", answer: 16 },
      { text: "Kvadrattalen är 1, 4, 9, 16, 25, ... Vad är det 8:e kvadrattalet?", answer: 64 },
    ],
    C: [
      { text: "I en talföljd gäller \\( a_n = 3n + 2 \\). Vad är \\( a_{10} \\)?", answer: 32 },
      { text: "En talföljd börjar 5, 8, 11, 14, ... Vid vilket värde på \\( n \\) blir talet 50? (Räkna \\(n=1\\) som det första.)", answer: 16 },
      { text: "Figur \\( n \\) har \\( n^2 + n \\) prickar. Hur många prickar har figur 7?", answer: 56 },
      { text: "En talföljd ges av \\( a_n = 4n - 3 \\). Vilken term (\\( n \\)) har värdet 37?", answer: 10 },
    ],
    A: [
      { text: "Summan av de \\( n \\) första talen i följden 1, 3, 5, 7, ... ges av \\( S = n^2 \\). Vad är summan av de 12 första udda talen?", answer: 144 },
      { text: "En talföljd ges av \\( a_n = n(n+1)/2 \\). Vad är \\( a_8 \\)?", answer: 36 },
    ]
  },
  6: { // Proportionalitet & Skala
    E: [
      { text: "3 kg äpplen kostar 45 kr. Vad kostar 5 kg?", answer: 75 },
      { text: "På en karta med skala 1:50 000 är det 4 cm mellan två städer. Hur långt är det i verkligheten (i km)?", answer: 2 },
      { text: "Om 8 pennor kostar 120 kr, vad kostar 1 penna?", answer: 15 },
      { text: "En bil förbrukar 0,8 liter per mil. Hur många liter behövs för 25 mil?", answer: 20 },
    ],
    C: [
      { text: "Dela 600 kr i förhållandet 2:3. Hur mycket får den större delen?", answer: 360 },
      { text: "En modellbil är 12 cm lång. Verkliga bilen är 4,8 m. Vad är skalan? Svara som 1:X. Vad är X?", answer: 40 },
    ],
    A: [
      { text: "Skala 1:500 för längd. Hur många gånger större blir en area i verkligheten? (Skalfaktor för area)", answer: 250000 },
      { text: "En karta har skala 1:25 000. En sjö har arean 8 cm² på kartan. Hur stor är sjön i m²?", answer: 50000 },
    ]
  },
  7: { // Funktioner & Samband
    E: [
      { text: "Om \\( y = 2x + 3 \\), vad är \\( y \\) när \\( x = 4 \\)?", answer: 11 },
      { text: "En linjär funktion har \\( k = 3 \\) och \\( m = -1 \\). Vad är \\( y \\) när \\( x = 5 \\)?", answer: 14 },
      { text: "Vad är lutningen (k-värdet) för linjen som går genom \\( (0, 2) \\) och \\( (3, 8) \\)?", answer: 2 },
    ],
    C: [
      { text: "Linjen \\( y = 4x - 5 \\) skär x-axeln. Vad är x-koordinaten? Svara som decimal.", answer: 1.25, tolerance: 0.01 },
      { text: "Var skär \\( y = 2x + 1 \\) och \\( y = -x + 10 \\)? Vad är x-koordinaten?", answer: 3 },
      { text: "Ella tjänar 80 kr/h. Fadi tjänar 50 kr/h men har 600 kr sparat. Efter hur många timmar har de lika mycket?", answer: 20 },
    ],
    A: [
      { text: "Om \\( y = x^2 - 6x + 8 \\), vad är \\( y \\) när \\( x = 2 \\)?", answer: 0 },
      { text: "Om \\( y = x^2 - 4x + 3 \\), beräkna \\( y \\) när \\( x = 1 \\) plus \\( y \\) när \\( x = 3 \\).", answer: 0 },
    ]
  },
  8: { // Geometri: Area, Omkrets & Volym
    E: [
      { text: "En rektangel har sidorna 8 cm och 5 cm. Vad är arean i cm²?", answer: 40 },
      { text: "Vad är omkretsen av en rektangel med sidorna 6 cm och 4 cm?", answer: 20 },
      { text: "En triangel har basen 10 cm och höjden 6 cm. Vad är arean i cm²?", answer: 30 },
      { text: "Vad är volymen av ett rätblock med sidorna 3, 4 och 5 cm? Svara i cm³.", answer: 60 },
      { text: "En cirkel har diametern 10 cm. Vad är radien i cm?", answer: 5 },
    ],
    C: [
      { text: "En cirkel har radien 7 cm. Vad är arean? Svara i heltal (avrunda, använd π ≈ 3,14).", answer: 154, tolerance: 2 },
      { text: "En cylinder har radien 5 cm och höjden 10 cm. Vad är volymen? Svara i heltal cm³ (π ≈ 3,14).", answer: 785, tolerance: 5 },
      { text: "En triangel har sidorna 3, 4 och 5 cm. Vad är arean i cm²?", answer: 6 },
      { text: "En cirkel har radien 4 cm. Vad är omkretsen i cm? Svara i heltal (π ≈ 3,14).", answer: 25, tolerance: 1 },
    ],
    A: [
      { text: "En kon har radien 6 cm och höjden 8 cm. Vad är volymen? Svara i heltal cm³ (π ≈ 3,14).", answer: 301, tolerance: 5 },
      { text: "En sfär har radien 3 cm. Vad är volymen? Svara i heltal cm³ (π ≈ 3,14).", answer: 113, tolerance: 2 },
    ]
  },
  9: { // Geometri: Vinklar, Symmetri & Likformighet
    E: [
      { text: "Två vinklar i en triangel är 55° och 70°. Hur stor är den tredje vinkeln?", answer: 55 },
      { text: "En rät vinkel är hur många grader?", answer: 90 },
      { text: "Summan av vinklarna i en fyrhörning är hur många grader?", answer: 360 },
      { text: "Hur många symmetrilinjer har en kvadrat?", answer: 4 },
    ],
    C: [
      { text: "Två trianglar är likformiga. Den lilla har sidorna 3, 4, 5 cm. Den stora har den längsta sidan 15 cm. Hur lång är den kortaste sidan?", answer: 9 },
      { text: "En liksidig triangel har sidan 8 cm. Hur stor är varje vinkel i grader?", answer: 60 },
      { text: "Beräkna vinkelsumman i en åttahörning.", answer: 1080 },
    ],
    A: [
      { text: "Två likformiga trianglar har skalfaktor 3. Om den lilla triangelns area är 12 cm², vad är den storas area i cm²?", answer: 108 },
      { text: "Två likformiga figurer har skalfaktorn 2:5. Omkretsen av den mindre är 20 cm. Vad är den störres omkrets i cm?", answer: 50 },
    ]
  },
  10: { // Geometri: Pythagoras sats & Koordinater
    E: [
      { text: "En rätvinklig triangel har kateterna 3 och 4 cm. Hur lång är hypotenusan?", answer: 5 },
      { text: "En rätvinklig triangel har hypotenusan 13 cm och en katet 5 cm. Hur lång är den andra kateten?", answer: 12 },
      { text: "Vad är avståndet mellan punkterna (0, 0) och (3, 4)?", answer: 5 },
    ],
    C: [
      { text: "En rätvinklig triangel har kateterna 6 och 8 cm. Vad är arean i cm²?", answer: 24 },
      { text: "Vad är avståndet mellan punkterna (1, 2) och (4, 6)?", answer: 5 },
      { text: "En rektangulär låda har måtten 3, 4 och 12 dm. Vad är rymddiagonalen i dm?", answer: 13 },
    ],
    A: [
      { text: "En stege på 10 m lutar mot en vägg. Stegens fot är 6 m från väggen. Hur högt upp på väggen når stegen?", answer: 8 },
      { text: "I en liksidig triangel med sidan 10 cm, vad är höjden i heltal cm? (Avrunda nedåt)", answer: 8, tolerance: 1 },
    ]
  },
  11: { // Statistik
    E: [
      { text: "Beräkna medelvärdet av: 4, 7, 3, 6, 10.", answer: 6 },
      { text: "Vad är medianen av: 2, 5, 1, 8, 3?", answer: 3 },
      { text: "Vad är typvärdet av: 3, 5, 3, 7, 3, 8?", answer: 3 },
      { text: "Vad är variationsbredden av: 12, 5, 8, 15, 3?", answer: 12 },
    ],
    C: [
      { text: "Medelvärdet av 5 tal är 8. Fyra av talen är 6, 7, 9, 10. Vad är det femte talet?", answer: 8 },
      { text: "Medianen av 8 tal (sorterade): 3, 5, 7, ?, 12, 14, 16, 20. Medianen är 10. Vad är det saknade talet?", answer: 8 },
      { text: "5 elever fick 2 poäng, 10 fick 4 poäng och 5 fick 6 poäng. Vad är medelvärdet?", answer: 4 },
    ],
    A: [
      { text: "Medelvärdet av 20 tal är 15. Medelvärdet av 30 andra tal är 25. Vad är medelvärdet av alla 50 talen?", answer: 21 },
      { text: "En familj med fem personer hade medelvikten 59 kg. När en person är bortrest stiger medelvikten med 5 kg. Vad väger personen som reste bort?", answer: 39 },
    ]
  },
  12: { // Sannolikhet & Kombinatorik
    E: [
      { text: "En tärning kastas. Vad är sannolikheten att få en 6? Svara i procent (avrunda).", answer: 17, tolerance: 1 },
      { text: "I en påse finns 3 röda och 7 blå kulor. Vad är sannolikheten i procent att dra en röd?", answer: 30 },
      { text: "Hur många möjliga utfall finns det när man kastar en tärning och samtidigt singlar ett mynt?", answer: 12 },
    ],
    C: [
      { text: "Två tärningar kastas. Hur många möjliga utfall finns det totalt?", answer: 36 },
      { text: "Hur många av de 36 utfallen vid två tärningskast ger summan 7?", answer: 6 },
      { text: "Hur många olika tvåsiffriga tal kan bildas med siffrorna 1–5 om upprepning tillåts?", answer: 25 },
    ],
    A: [
      { text: "Ett mynt singlas 3 gånger. Hur många möjliga utfall finns det?", answer: 8 },
      { text: "Vad är sannolikheten att få exakt 2 kronor vid 3 singlingar? Svara som täljare om nämnaren är 8.", answer: 3 },
    ]
  }
};

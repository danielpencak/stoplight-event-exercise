/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
(function() {
  'use strict';
  const h1s = document.querySelectorAll('h1');

  const div = document.getElementById('controls');
  for (const h1 of h1s) {
    h1.addEventListener('mouseover', () => {
      console.log(`Entered ${h1.textContent} button`);
    });
  }

  for (const h1 of h1s) {
    h1.addEventListener('mouseout', () => {
      console.log(`Left ${h1.textContent} button`);
    });
  }

  const redLight = document.getElementById('stopLight');
  const yellowLight = document.getElementById('slowLight');
  const greenLight = document.getElementById('goLight');

  div.addEventListener('click', (event) => {
    const h1 = event.target.textContent;
        if (h1 === 'Stop') {
          redLight.setAttribute('style', 'background-color: red');
          greenLight.setAttribute('style', 'background-color: #111');
          yellowLight.setAttribute('style', 'background-color: #111');
        }
        if (h1 === 'Slow') {
          yellowLight.setAttribute('style', 'background-color: yellow');
          greenLight.setAttribute('style', 'background-color: #111');
          redLight.setAttribute('style', 'background-color: #111');
        }
        if (h1 === 'Go') {
          goLight.setAttribute('style', 'background-color: green');
          yellowLight.setAttribute('style', 'background-color: #111');
          redLight.setAttribute('style', 'background-color: #111');
        }
  });
})();

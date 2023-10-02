const optionsTissu = [
    { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];
const optionsPoche = [
    { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];
const couleurText = [
    { couleur: 'Blanc', code: '#FFFFFF' },
    { couleur: 'Noir', code: '#000000' },
    { couleur: 'Bleu', code: '#11119e' },
    { couleur: 'Fuchsia', code: '#991157' },
    { couleur: 'Rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'Jaune', code: '#e2d047' },
    { couleur: 'Orange', code: '#f1722f' }
];



const coulTab = document.getElementById('tissu');
const coulpoch = document.getElementById('optionPoche');
const useText = document.getElementById('UseText1');
const colorRound1 = document.querySelectorAll('.ColorRound1');
const colorRound2 = document.querySelectorAll('.ColorRound2');
const colorRound3 = document.querySelectorAll('.ColorRound3');
const selectText1 = document.getElementById('UseText1');
const selectText2 = document.getElementById('UseText2');
const customText1 = document.getElementById('customText');
const textColorOptions = document.getElementById('textColorOptions');
const TexteIci = document.getElementsByClassName ('textePerso');
const prixTot = document.getElementsByClassName('price');
const displayTissu = document.getElementById('displayTissu');
const displayPoche = document.getElementById('displayPoche');

let selectedTissu = 'Violet';
let selectedPoche = 'Rouge';
let customText = 'Votre texte ici';
let selectedTextColor = 'Noir';
let textOption = true;
const prixLettre = 1.80;
let prix1 = 0; 
let prix2 = 0; 
let prix3 = 0;

window.addEventListener("load", () => {
console.log("everything's ready !");
})


const customTexte1 = document.getElementById('customText');
const textePerso = document.querySelector('.textePerso');

            function updateTotal() {
                        let Totalfin = prix1 + prix2 + prix3;
                        const priceElement = document.querySelector('.price');
                        priceElement.textContent = `${Totalfin.toFixed(2)} €`;
                    }

            customTexte1.addEventListener('input', function () {
            textePerso.textContent = customTexte1.value;
            prix3 = customText1.value.length * prixLettre;
            updateTotal();
});

colorRound1.forEach(colorRound => {
    colorRound.addEventListener('click', (event) => {
        colorRound1.forEach(round => round.classList.remove('selectedColor'));
        event.target.classList.add('selectedColor');
        const coulChoise = event.target.id.replace('tissu', '');

        for (let i = 0; i < optionsTissu.length; i++) {
            if (optionsTissu[i].couleur === coulChoise) {
                prix1 = optionsTissu[i].price;
                updateTotal();
                displayTissu.textContent = coulChoise;
                const recupImage = optionsTissu[i].image;
                const optionTissuImage = document.getElementById('optionTissuImage');
                optionTissuImage.src = recupImage;

              
            }
        }
       
    });
});

colorRound2.forEach(colorRound => {
    colorRound.addEventListener('click', (event) => {
        colorRound2.forEach(round => round.classList.remove('selectedColor'));
        event.target.classList.add('selectedColor');
        const coulChoise = event.target.id.replace('poche', '');

        for (let i = 0; i < optionsPoche.length; i++) {
            if (optionsPoche[i].couleur === coulChoise) {
               prix2 = optionsPoche[i].price;
                updateTotal();
                displayPoche.textContent = coulChoise;
                const recupImage = optionsPoche[i].image;
                const optionTissuImage = document.getElementById('optionPocheImage');
                optionTissuImage.src = recupImage;
              
            }
        }
        
    });
});

colorRound3.forEach(colorRound => {
    colorRound.addEventListener('click', (event) => {
        colorRound3.forEach(round => round.classList.remove('selectedColor'));
        event.target.classList.add('selectedColor');
        const coulChoise = event.target.id.replace('texte', '');

for (let i = 0; i < couleurText.length; i++) {
    if (couleurText[i].couleur === coulChoise) {
        const recupCoul = couleurText[i].code;
        textePerso.style.color = recupCoul
      
    }
}
      
    });
});

        selectText2.addEventListener("change", function () {
            if (selectText2.checked) {
                customText1.style.display = 'none';
                textColorOptions.style.display = 'none';
                TexteIci[0].style.display ='none';
                prix3 =0;
                updateTotal();
            }
        });

        selectText1.addEventListener("change", function () {
            if (selectText1.checked) {
                customText1.style.display = 'initial';
                textColorOptions.style.display = 'initial';
                TexteIci[0].style.display ='initial';
            }
        });

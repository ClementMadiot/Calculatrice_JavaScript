// DOM
const touches = [...document.querySelectorAll('.button')]
const listKeyCode = touches.map(touche => touche.dataset.key)
const ecran = document.querySelector('.ecran')
// console.log(listKeyCode);

/// Évènement au clavier
document.addEventListener('keydown', (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur)
  // console.log(valeur, typeof valeur)
})

/// Évènement au click
document.addEventListener('click', (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur)
})

const calculer = (valeur) => {
  if(listKeyCode.includes(valeur)){
    switch(valeur){
      case '67':
        ecran.textContent = '';
        break;
      case '13':
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
        case '8':
          if (ecran.textContent.length > 0) {
            ecran.textContent = ecran.textContent.slice(0, -1);
          }
      default:
        const indexKeycode = listKeyCode.indexOf(valeur)
        const touche = touches[indexKeycode];

        if(valeur !== '8') {
          ecran.textContent += touche.innerHTML
        }
    }
  }
}
window.addEventListener('error', (e) => {
  alert('Une erreur est survenue dans votre calcul :' + e.message)
  ecran.textContent = '';
})
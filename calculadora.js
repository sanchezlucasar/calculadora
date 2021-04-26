 document.querySelectorAll('div.bot').forEach(elemento =>
     elemento.addEventListener('click', ev => {

         switch (ev.target.id) {
             case 'AD':
                 document.querySelector('#operation').value = "";
                 document.querySelector('#result').value = "0";
                 break;
             case '=':
                 let resultado = document.querySelector('#operation').value;
                 document.querySelector('#result').value = eval(resultado);
                 break;
             case '+-':
                 document.querySelector('#result').value *= (-1);
                 break;

             default:
                 document.querySelector('#operation').value += ev.target.id;

         }

     }));
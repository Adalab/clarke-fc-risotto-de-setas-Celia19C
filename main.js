'use strict'



//LA LLAMADA
function requestFetch (){
fetch('https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    //el nombre del plato
    var name2 = json.recipe.name;
    var nameRecipe= document.querySelector('.header__title');
      nameRecipe.innerHTML= name2;
    //la lista de artículos
    var product2=json.recipe.ingredients;
    var listHTML = '';
    for (var i = 0; i < product2.length; i++) {
      listHTML += '<ul> <li>' + product2[i] + '</li> </ul>';
    }
    var listIngr = document.querySelector('.main__list--article');
      listIngr.innerHTML = listHTML;
      console.log(product2);

  })
  .catch(function(error){
    console.log('Ha sucedido un error: ' + error);
  });

}
requestFetch();

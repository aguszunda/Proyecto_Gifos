

window.onload = () => {
    
}
/*
async function getCategoriesFromChuckNorris() {
    try{
      
      let tendency = 'autos';
      let apiKey = 'FBISKgk3iiH04HMYUOCMJ6rqPgLwVZbp';
      let url = 'http://api.giphy.com/v1/gifs/search?q=' + tendency + '&api_key=' + apiKey;

      const resp = await fetch(url);//consulto a la Api
      const datos = await resp.json();//Traigo los objetos de tipo json en resultado
      console.log(datos);
      //armando el html de categorias
      let lista = "";
      datos.forEach(dato => {
        lista += " <a href='#'><h2>"+ dato +"</h2></a>" 
      });

      //return gifos_tendency.innerHTML = lista; // Pega listado en "#cuck_list"
    }catch(err){
      alert("Falló el api al traer el listado.\n", err);
    }

  }*/

function Sailor_night() {

    document.body.style.backgroundColor = '#0B173B';
    //theme.href = './style/index_style_white.css';
    
    document.getElementById("title").style.backgroundImage = 'linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)';
    document.getElementById("search_title").style.backgroundImage = 'linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)';
    
    document.getElementById("create_Gifos").style.background = '#EE3EFE';
    document.getElementById("create_Gifos").style.color = '#FFFFFF';
    document.getElementById("background_gifos").style.background = '#EE3EFE';
    document.getElementById("background_gifos").style.color = '#FFFFFF';
    document.getElementById("gifos_options").style.background = '#EE3EFE';
    document.getElementById("gifos_options").style.color = '#FFFFFF';
    document.getElementById("my_Gifos").style.background = '#0B173B';
    document.getElementById("my_Gifos").style.color = '#FFFFFF';
}
function Sailor_day() {
    document.body.style.backgroundColor = 'white';
    //theme.href = './style/index_style_white.css';
    document.getElementById("title").style.backgroundImage = ' linear-gradient(to right, #4180F6 0%, #F7C9F3 100%)';
    document.getElementById("search_title").style.backgroundImage = 'linear-gradient(to right, #4180F6 0%, #F7C9F3 100%)';
    
    
    document.getElementById("create_Gifos").style.background = '#F7C9F3';
    document.getElementById("create_Gifos").style.color = '#110038';
    document.getElementById("background_gifos").style.background = '#F7C9F3';
    document.getElementById("background_gifos").style.color = '#110038';
    document.getElementById("gifos_options").style.background = '#F7C9F3';
    document.getElementById("gifos_options").style.color = '#110038';
    document.getElementById("my_Gifos").style.background = '#FFFFFF';
    document.getElementById("my_Gifos").style.color = '#110038';
}
function sailors_guifos() {
    let backgound = document.getElementById("menu_button").style.display;
    
    if(backgound == "none" || backgound == ""){
        document.getElementById("menu_button").style.display = 'block';
    } else {
        document.getElementById("menu_button").style.display = 'none';
    }
}

function search_recommendations(){
    let backgound = document.getElementById("recommendation_search").style.display;

    if(backgound == 'none' || backgound == ""){
        document.getElementById("recommendation_search").style.display = 'block';
        document.getElementById("search_button").style.background = '#F7C9F3';
        document.getElementById("search_button").style.color = '#110038';
    } else {
        document.getElementById("recommendation_search").style.display = 'none';
        document.getElementById("search_button").style.background = '#E6E6E6';
        document.getElementById("search_button").style.color = '#B4B4B4';
    }
}
/*https://www.dropbox.com/s/ihc86nsh7l5fsuu/gifOS.mp4?dl=0

gifos: FBISKgk3iiH04HMYUOCMJ6rqPgLwVZbp

*/

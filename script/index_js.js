

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
    document.getElementById("logo").src = "./images/gifOF_logo_dark.png";
    document.getElementById("title").className = "title_black";
    document.getElementById("search_title").className = "search_title_black";
    document.getElementById("create_Gifos").className = "create_guifos_dark";
    document.getElementById("background_gifos").className = "create_guifos_dark";
    document.getElementById("gifos_options").className = "guifos_options_dark";
    document.getElementById("my_Gifos").className = "my_gifos_dark";
    document.getElementById("menu_button").className = "menu_button_dark";
    document.getElementById("search").className = "search_dark";
}
function Sailor_day() {
    document.body.style.backgroundColor = 'white';
    document.getElementById("logo").src = "./images/gifOF_logo.png";
    document.getElementById("title").className = "title";
    document.getElementById("search_title").className = "search_title";
    document.getElementById("create_Gifos").className = "create_guifos";
    document.getElementById("background_gifos").className = "create_guifos";
    document.getElementById("gifos_options").className = "guifos_options";
    document.getElementById("my_Gifos").className = "my_gifos";
    document.getElementById("menu_button").className = "menu_button";
    document.getElementById("search").className = "search";
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

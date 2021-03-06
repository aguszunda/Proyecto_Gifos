/*class Giphy {
    constructor(keyword) {
        this.keyword = keyword;
        this.endpoint = 'http://api.giphy.com/v1/gifs';
        this.apiKey = 'FBISKgk3iiH04HMYUOCMJ6rqPgLwVZbp'; 
    }

    getGifUrl(callback){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.endpoint + "/search?api_key=" + this.apiKey + "&s=" + this.keyword);
        xhr.responseType = "Json";
        xhr.onload = function() {
            callback(this.response.data.images.original.mp4);
        }
        xhr.send();
    }

    static getUrlAsync(keyword,callback) {
        return new Giphy(keyword).getGifUrl(callback);
    }
}*/

window.onload = () => {
    getSearchTendencies('Goku', 'suggest1');
    getSearchTendencies('Vegeta', 'suggest2');
    getSearchTendencies('Naruto', 'suggest3');
    getSearchTendencies('Sakuragi', 'suggest4');
    getSearchGiftTendencies();
}

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
    document.getElementById("recommendation_search").style.display = 'none';
    document.getElementById("search_button").style.background = '#B4B4B4';
    document.getElementById("search_button").style.color = '#8F8F8F';
    document.getElementById("search_button").className = "search_button_dark";
    document.getElementById("recommendation_search").className = "recommendation_search_dark";
    document.getElementById("recommendation_search_menu").className = "recommendation_search_menu_dark";
    document.getElementById("today_we_suggest_you").className = "today_we_suggest_you_dark";
    document.getElementById("tendency").className = "today_we_suggest_you_dark";
    document.getElementById("title_suggest1").className = "title_gift_dark";
    document.getElementById("frame1").className = "frame_dark";
    document.getElementById("more_suggest1").className = "more_suggest_dark";
    document.getElementById("title_suggest2").className = "title_gift_dark";
    document.getElementById("frame2").className = "frame_dark";
    document.getElementById("more_suggest2").className = "more_suggest_dark";
    document.getElementById("title_suggest3").className = "title_gift_dark";
    document.getElementById("frame3").className = "frame_dark";
    document.getElementById("more_suggest3").className = "more_suggest_dark";
    document.getElementById("title_suggest4").className = "title_gift_dark";
    document.getElementById("frame4").className = "frame_dark";
    document.getElementById("more_suggest4").className = "more_suggest_dark";
    document.getElementById("tendencies_gifos").className = "tendencies_gifos_dark";
    
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
    document.getElementById("recommendation_search").style.display = 'none';
    document.getElementById("search_button").style.background = '#E6E6E6';
    document.getElementById("search_button").style.color = '#B4B4B4';
    document.getElementById("search_button").className = "search_button";
    document.getElementById("recommendation_search").className = "recommendation_search";
    document.getElementById("recommendation_search_menu").className = "recommendation_search_menu";
    document.getElementById("today_we_suggest_you").className = "today_we_suggest_you";tendency
    document.getElementById("tendency").className = "today_we_suggest_you";
    document.getElementById("title_suggest1").className = "title_gift";
    document.getElementById("frame1").className = "frame";
    document.getElementById("more_suggest1").className = "more_suggest";
    document.getElementById("title_suggest2").className = "title_gift";
    document.getElementById("frame2").className = "frame";
    document.getElementById("more_suggest2").className = "more_suggest";
    document.getElementById("title_suggest3").className = "title_gift";
    document.getElementById("frame3").className = "frame";
    document.getElementById("more_suggest3").className = "more_suggest";
    document.getElementById("title_suggest4").className = "title_gift";
    document.getElementById("frame4").className = "frame";
    document.getElementById("more_suggest4").className = "more_suggest";
    document.getElementById("tendencies_gifos").className = "tendencies_gifos";
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
    let aux = document.getElementById("search").className;

    if(aux === "search"){
        if(backgound == 'none' || backgound == ""){
            document.getElementById("recommendation_search").style.display = 'block';
            document.getElementById("search_button").style.background = '#F7C9F3';
            document.getElementById("search_button").style.color = '#110038';textbox_search
            document.getElementById("textbox_search").style.color = '#000000';
        } else {
            document.getElementById("recommendation_search").style.display = 'none';
            document.getElementById("search_button").style.background = '#E6E6E6';
            document.getElementById("search_button").style.color = '#B4B4B4';
            document.getElementById("textbox_search").style.color = '#B4B4B4';
        }

    } else if(aux === "search_dark") {
        if(backgound == 'none' || backgound == ""){
            document.getElementById("recommendation_search").style.display = 'block';
            document.getElementById("search_button").style.background = '#EE3EFE';
            document.getElementById("search_button").style.color = '#FFFFFF';
            document.getElementById("textbox_search").style.color = '#000000';
        } else {
            document.getElementById("recommendation_search").style.display = 'none';
            document.getElementById("search_button").style.background = '#B4B4B4';
            document.getElementById("search_button").style.color = '#8F8F8F';
            document.getElementById("textbox_search").style.color = '#B4B4B4';
        }
    }
}

async function getSearchTendencies(suggest, img_id) {
    const mykey = 'lDyVjahIgvrbdCs1DLGN9CV0pCweWgQV';
    let url =  'http://api.giphy.com/v1/gifs/search?q=' + suggest + '&api_key=' + mykey;
    let resp = await fetch(url);
    let respuestaJson = await resp.json();
    let data = respuestaJson.data;

    let gifLink = data[0].images.downsized_medium.url;
    document.getElementById(img_id).src = gifLink;
    document.getElementById('title_'+img_id).value = '#' + suggest;
}

async function getSearchGift() {
    try{
        debugger;
        let suggest = document.getElementById("textbox_search").value
        const mykey = 'lDyVjahIgvrbdCs1DLGN9CV0pCweWgQV';
        let url =  'http://api.giphy.com/v1/gifs/search?q=' + suggest + '&api_key=' + mykey + '&limit=48&offset=0&rating=g&lang=en';
        let resp = await fetch(url);
        let list = await resp.json();
        let thumb = "";
        list.data.forEach(element => {
            thumb += `<div id="tendencies_gifos_group">
            <img  src='${element.images.fixed_height.url}'>
            <h2>#${element.title.substring(0,30)}...</h2>
            </div>
             `;
        });
        document.getElementById("tendency").value = "  "+ suggest.toUpperCase();
        const giphyListDiv = document.getElementById("tendencies_gifos");
        giphyListDiv.innerHTML = thumb;
        search_recommendations();
    }catch(err){
        alert("Error: " + err);
    }
}
//TENDENCIES
async function getSearchGiftTendencies() {
    try{
        const mykey = 'lDyVjahIgvrbdCs1DLGN9CV0pCweWgQV';
        let url =  'https://api.giphy.com/v1/gifs/trending?api_key=' + mykey + '&limit=48&rating=g';
        let resp = await fetch(url);
        let list = await resp.json();
        let thumb = "";
        list.data.forEach(element => {
            thumb += `<div id="tendencies_gifos_group">
            <img  src='${element.images.fixed_height.url}'>
            <h2>#${element.title.substring(0,30)}...</h2>
            </div>
             `;
        });
        document.getElementById("tendency").value = "  TENDENCIAS";
        const giphyListDiv = document.getElementById("tendencies_gifos");
        giphyListDiv.innerHTML = thumb;
    }catch(err){
        alert("Error: " + err);
    }
}

/*https://www.dropbox.com/s/ihc86nsh7l5fsuu/gifOS.mp4?dl=0

gifos: lDyVjahIgvrbdCs1DLGN9CV0pCweWgQV

*/

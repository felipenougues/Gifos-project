// Menu Hamburguesa //
function cambiarClase() {
    let siteNav = document.getElementById('site-nav');
    siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-nav');
    menuOpen.classList.toggle('menu-open');
}


// Dark Night Mood //
const dark = document.getElementById("dark-night");
const headerDark = document.getElementById('headerDark');


dark.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        dark.textContent = 'Modo Diurno';
        logo.src = '/assets/logo-mobile-modo-noct.svg';

    } else {
        dark.textContent = 'Modo Nocturno';
        logo.src = '/assets/logo-mobile.svg';

    }
});

// Refresh Logo //
let logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    window.location.reload(true);
});

// Ir a Pantalla Favoritos //
const listafavoritos = document.getElementById('lista-favoritos');
const favoritos = document.getElementById('favoritos');



listafavoritos.addEventListener('click', () => {
    if (favoritos.classList.contains('disabled-favoritos')) {
        favoritos.classList.remove('disabled-favoritos');
        favoritos.classList.add('enabled-favoritos');
        document.getElementById('container-title-favoritos').style.display = 'block';

        document.getElementById('favoritos').style.display = 'grid';
        document.getElementById('search-section').style.display = 'none';


        document.getElementById('favoritos').style.marginBottom = '50px';
        document.getElementById('trending-section').style.display = 'none';
        document.getElementById('busqueda').style.display = 'none';
        document.getElementById('mis-gifos').style.display = 'none';
        document.getElementById('grabagrif').style.display = 'none';
        document.getElementById('title-section').style.display = 'none';




    } else {


        favoritos.classList.remove('enabled-favoritos');
        favoritos.classList.add('disabled-favoritos');
        document.getElementById('container-title-favoritos').style.display = 'none';

        document.getElementById('busqueda').style.display = 'block';
        document.getElementById('search-section').style.display = 'block';

        document.getElementById('title-section').style.display = 'block';
        document.getElementById('favoritos').style.display = 'none';
        document.getElementById('trending-section').style.display = 'block';



    }
});

// Ir a Pantalla MISGIFOS //
const liMisGifos = document.getElementById('li-mis-gifos');
const misGifos = document.getElementById('mis-gifos');

liMisGifos.addEventListener('click', () => {
    if (misGifos.classList.contains('disabled-mis-gifos')) {
        misGifos.classList.remove('disabled-mis-gifos');
        misGifos.classList.add('enabled-mis-gifos');
        document.getElementById('mis-gifos').style.display = 'block';


        document.getElementById('favoritos').style.display = 'none';
        document.getElementById('search-section').style.display = 'none';


        document.getElementById('favoritos').style.marginBottom = '50px';
        document.getElementById('trending-section').style.display = 'none';
        document.getElementById('busqueda').style.display = 'none';
        document.getElementById('container-title-favoritos').style.display = 'none';
        document.getElementById('grabagrif').style.display = 'none';
        document.getElementById('title-section').style.display = 'none';




    } else {


        misGifos.classList.remove('enabled-mis-gifos');
        misGifos.classList.add('disabled-mis-gifos');
        document.getElementById('mis-gifos').style.display = 'none';

        document.getElementById('busqueda').style.display = 'block';
        document.getElementById('search-section').style.display = 'block';

        document.getElementById('title-section').style.display = 'block';
        document.getElementById('trending-section').style.display = 'block';



    }

});

// SECCION BUSQUEDA //

let searchIconClose = document.getElementById('search-icon-close');
let searchIcon = document.getElementById('search-icon');
let search = document.getElementById('search-section');
let imageSearch = document.getElementById('image-search');
let titleSection = document.getElementById('title-section');
let searchBox = document.getElementById('search-input');
let trendingSection = document.getElementById('trending-section');
let centerBorder = document.getElementById('center-border');
let titleBusqueda = document.getElementById('title-busqueda');
let gifosSection = document.getElementById('gifos-section');
let gifsBusquedaSection = document.getElementById('gifs-busqueda-section');



let letSearch = search.addEventListener('input', () => {

    centerBorder.style.display = 'block';

    titleBusqueda.textContent = searchBox.Value;

    let containerBtnVerMasBusqueda = document.getElementById('container-btn-ver-mas-busqueda');

    containerBtnVerMasBusqueda.style.display = 'block';


    const desktop = 600;
    if (screen.width >= desktop) {
        searchBox.addEventListener('input', () => {
            document.getElementById('search-section').style.display = 'block';
            document.getElementById('title-section').style.display = 'block';
            document.getElementById('trending-title').style.display = 'none';
            document.getElementById('paragraph-container').style.display = 'none';
            searchIconClose.style.marginLeft = '-445px';
            searchIcon.style.color = '#9CAFC3';
            searchIconClose.style.marginLeft = '47px';
            searchIconClose.style.display = 'block';
            searchIconClose.style.marginTop = '-20px';
            titleSection.style.display = 'block';
            imageSearch.style.display = 'block';
            trendingSection.style.marginTop = '100px';
            gifosSection.style.marginTop = '27%';
        });
    } else {
        searchIcon.style.marginLeft = '-270px';
        searchIcon.style.marginTop = '-270px';
        searchIcon.style.color = '#9CAFC3'
        searchIconClose.style.display = 'block';
        titleSection.style.display = 'none';
        imageSearch.style.display = 'none';
        searchIconClose.style.marginLeft = '10px';
        searchIconClose.style.marginTop = '-20px';
        gifosSection.style.marginTop = '46%';
    }
});


let funcionIconoClose = searchIconClose.addEventListener('click', () => {
    document.getElementById('search-input').Value = "";
    document.getElementById('image-search').style.display = 'block';
    document.getElementById('title-section').style.display = 'block';
    searchIconClose.style.display = 'none';
    document.getElementById('search-icon').style.display = 'block';
    document.getElementById('search-input').style.marginTop = '0px';
    document.getElementById('container-sugerencias').style.display = 'none';

    let searchIcon = document.getElementById('search-icon');
    searchIcon.style.marginLeft = '0px';
    searchIcon.style.marginTop = '0px';
    searchIcon.style.color = '#572ee5';

    document.getElementById('search-input').style.border = '#572ee5 1px solid';

});





// CONECCION CON LA API //
let busquedaGifs;

const searchForm = document.getElementById('search-form');
let searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const q = searchInput.value;
    busqueda(q);
})


function busqueda(q) {

    const apikey = '2SmopXnYLL5DF8XL4JxbiU73QevU3k40'
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`
    const conteiner = document.getElementById('busqueda');

    fetch(path)
        .then(Response => {
            return Response.json();
        })
        .then(json => {

            if (document.getElementById('gifs-busqueda-section') != null) {
                document.getElementById('gifs-busqueda-section').remove();

            }


            let arrayGifs = [];

            let divContenedor = document.createElement('div');
            conteiner.insertBefore(divContenedor, document.getElementById('container-btn-ver-mas-busqueda'));


            divContenedor.classList.add('gifs-busqueda-section');
            divContenedor.setAttribute('id', 'gifs-busqueda-section');

            if (arrayGifs.length !== null) {

                for (let i = 0; i < 12; i++) {
                    let div = document.createElement('div');
                    let img = document.createElement('img');
                    // img.setAttribute('src', json.data[i].images.original.url);
                    img.src = json.data[i].images.original.url;
                    // img.style.width = '156px';
                    // img.style.height = '120px';
                    img.setAttribute('class', 'gifs12');
                    img.setAttribute('id', json.data[i].id);
                    div.setAttribute('class', 'gifs-12-container');
                    div.setAttribute('id', `gifs-${i}-container`);
                    divContenedor.appendChild(img);
                    divContenedor.appendChild(div);
                    div.appendChild(img);
                    arrayGifs.push(img);
                    img.addEventListener('click', gifosclick);


                    if (screen.width >= 600) {




                        let divTarjetas = document.createElement('div');

                        let corazonTarjeta = document.createElement('img');


                        let descargaTarjeta = document.createElement('img');


                        let ampliarTarjeta = document.createElement('img');



                        divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                        divTarjetas.setAttribute('id', 'div-tarjetas');

                        corazonTarjeta.setAttribute('class', 'corazon-tarjeta');
                        corazonTarjeta.setAttribute('id', 'corazon-tarjeta');
                        // corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');

                        descargaTarjeta.setAttribute('class', 'descarga-tarjeta');
                        descargaTarjeta.setAttribute('id', 'descarga-tarjeta');
                        descargaTarjeta.setAttribute('src', '/assets/icon-download.svg');

                        ampliarTarjeta.setAttribute('id', 'ampliar-tarjeta');
                        ampliarTarjeta.setAttribute('class', 'ampliar-tarjeta');
                        ampliarTarjeta.setAttribute('src', 'assets/icon-max-normal.svg');


                        divTarjetas.appendChild(corazonTarjeta);
                        divTarjetas.appendChild(descargaTarjeta);
                        divTarjetas.appendChild(ampliarTarjeta);


                        div.appendChild(divTarjetas);
                        //////////////////////

                        let favoStorage = JSON.parse(localStorage.getItem('favoritos'));
                        if (favoStorage == null) {
                            favoStorage = [];
                        }
                        if (favoStorage.length > 0) {

                            for (j = 0; j < favoStorage.length; j++) {
                                if (json.data[i].id === favoStorage[j]._id) {
                                    corazonTarjeta.removeAttribute('src', '/assets/icon-fav.svg');
                                    corazonTarjeta.setAttribute('src', '/assets/icon-fav-active.svg');

                                } else {
                                    corazonTarjeta.removeAttribute('src', '/assets/icon-fav-active.svg');
                                    corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');
                                }
                            }
                        } else {
                            console.log('asdasdasd')
                            corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');
                        }

                        //////////////////////

                        // CODIGO DE GUARDAR EN LOCALSTORAGE FAVORITOS DESKTOP////////////////////////////////////////////////////

                        corazonTarjeta.addEventListener('click', (e) => {

                            let source = corazonTarjeta.src;


                            if (source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                                corazonTarjeta.src = '/assets/icon-fav.svg';
                            } else {
                                corazonTarjeta.src = '/assets/icon-fav-active.svg';
                            }


                            for (let k = 0; k < arrayFavoritosGuardados.length; k++) {
                                // console.log(arrayFavoritosGuardados[k]._src);
                                // console.log(e.target.parentNode.previousSibling.src);
                                if (arrayFavoritosGuardados[k]._src == e.target.parentNode.previousSibling.src) {
                                    console.log(arrayFavoritosGuardados)
                                    arrayFavoritosGuardados.splice(k, 1);
                                    localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));

                                    return;
                                    // console.log(arrayFavoritosGuardados)
                                }
                            }

                            // console.log('esta mal');
                            class favoritosStorage {
                                constructor(id, src, title, user) {
                                    this._id = id;
                                    this._src = src;
                                    this._title = title;
                                    this._user = user;
                                }

                            }

                            let evento = e.target.parentNode.previousSibling;
                            // console.warn('/////')
                            // console.log(e.target.parentNode.previousSibling);
                            // console.warn('/////')
                            // let arrayFavoritos = [];
                            var favId = evento.id;
                            var favSrc = evento.src;
                            var favTitle = evento.title;
                            var favUserName = evento.user;
                            var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);
                            arrayFavoritosGuardados.push(fav);



                            localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));



                        });
                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////

                        // CODIGO DE DESCARGA/////////////

                        descargaTarjeta.addEventListener("click", async function() {
                            let a = document.createElement("a");
                            let response = await fetch(img.src);
                            let gif = await response.blob();
                            a.download = "Gif";
                            a.href = window.URL.createObjectURL(gif);
                            a.dataset.downloadurl = ["application/octet-stream", a.download, a.href, ].join(":");
                            a.click();
                        });



                        corazonTarjeta.addEventListener('mouseover', () => {
                            corazonTarjeta.src = '/assets/icon-fav-hover.svg';
                        });

                        corazonTarjeta.addEventListener('mouseout', () => {
                            corazonTarjeta.src = '/assets/icon-fav.svg';
                        });

                        corazonTarjeta.addEventListener('click', () => {

                            corazonTarjeta.addEventListener('mouseover', () => {
                                corazonTarjeta.src = '/assets/icon-fav-active.svg';
                            });

                            corazonTarjeta.addEventListener('mouseout', () => {

                                corazonTarjeta.src = '/assets/icon-fav-active.svg';
                            });




                        });
                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


                        descargaTarjeta.addEventListener('mouseover', () => {
                            descargaTarjeta.src = '/assets/icon-download-hover.svg';



                        });

                        descargaTarjeta.addEventListener('mouseout', () => {
                            descargaTarjeta.src = '/assets/icon-download.svg';
                        });

                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
                        ampliarTarjeta.addEventListener('mouseover', () => {
                            ampliarTarjeta.src = '/assets/icon-max-hover.svg';

                        });

                        ampliarTarjeta.addEventListener('mouseout', () => {
                            ampliarTarjeta.src = '/assets/icon-max-normal.svg';

                        });

                        ampliarTarjeta.addEventListener('click', () => {
                            img.click();
                        });



                        div.addEventListener('mouseover', () => {

                            divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-muestra');
                            divTarjetas.classList.remove('div-tarjetas-no-muestra');

                        });

                        div.addEventListener('mouseout', () => {

                            divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                            divTarjetas.classList.remove('div-tarjetas-muestra');

                        });

                    }


                }
            } else {


                let imagenBusquedaVacio = document.createElement('img');
                let textoBusquedaVacio = document.createElement('p');

                imagenBusquedaVacio.setAttribute('src', '/assets/icon-busqueda-sin-resultado.svg');

                textoBusquedaVacio.textContent = 'Intenta con otra búsqueda.';

                document.getElementById('busqueda').appendChild(imagenBusquedaVacio);
                document.getElementById('busqueda').appendChild(textoBusquedaVacio);

            }


            busquedaGifs = json.data;



        })
        .catch(function(err) {
            console.log(err);
        });



}


let main = document.getElementById('main');








// TRENDINGS//


const apikeyTrending = '2SmopXnYLL5DF8XL4JxbiU73QevU3k40'
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikeyTrending}`;
const containerTrending = document.getElementById('gifos-section-container');

fetch(url)
    .then(Response => {
        return Response.json();
    })
    .then(json => {
        let arrayTrending = [];

        class gifTrendings {
            constructor(id, src, title, user) {
                this._id = id;
                this._src = src;
                this._title = title;
                this._user = user;
            }
        }



        for (let i = 0; i < 12; i++) {


            let newId = json.data[i].images.original.id;
            let newSrc = json.data[i].images.original.url;
            let newTitle = json.data[i].title;
            let newUserName = json.data[i].username;


            let gif = new gifTrendings(
                newId,
                newSrc,
                newTitle,
                newUserName
            );
            arrayTrending.push(gif);
            let div = document.createElement('div');
            let img = document.createElement('img');

            img.setAttribute('class', 'img-gifos-section');

            img.src = newSrc;
            img.id = newId;
            img.title = newTitle;
            img.user = newUserName;

            div.appendChild(img);
            conteinerTrending.appendChild(div);


            img.addEventListener('click', gifosclick);




            if (screen.width >= 600) {


                let divTarjetas = document.createElement('div');

                let corazonTarjeta = document.createElement('img');


                let descargaTarjeta = document.createElement('img');


                let ampliarTarjeta = document.createElement('img');

                let title = document.createElement('p');
                let userName = document.createElement('p');


                title.setAttribute('class', 'title-gif-trending');
                userName.setAttribute('class', 'username-gif-trending');

                divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                divTarjetas.setAttribute('id', 'div-tarjetas');

                corazonTarjeta.setAttribute('class', 'corazon-tarjeta corazon-tarjeta-no-muestra');
                corazonTarjeta.setAttribute('id', 'corazon-tarjeta');
                corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');

                descargaTarjeta.setAttribute('class', 'descarga-tarjeta');
                descargaTarjeta.setAttribute('id', 'descarga-tarjeta');
                descargaTarjeta.setAttribute('src', '/assets/icon-download.svg');

                ampliarTarjeta.setAttribute('id', 'ampliar-tarjeta');
                ampliarTarjeta.setAttribute('class', 'ampliar-tarjeta');
                ampliarTarjeta.setAttribute('src', 'assets/icon-max-normal.svg');

                divTarjetas.appendChild(title);
                divTarjetas.appendChild(userName);
                divTarjetas.appendChild(corazonTarjeta);
                divTarjetas.appendChild(descargaTarjeta);
                divTarjetas.appendChild(ampliarTarjeta);
                div.appendChild(divTarjetas);



                //////////////////////////////////////////////////////////////////////////////////////////////////

                // CODIGO DE DESCARGA/////////////

                descargaTarjeta.addEventListener("click", async function() {
                    let a = document.createElement("a");
                    let response = await fetch(img.src);
                    let gif = await response.blob();
                    a.download = "Gif";
                    a.href = window.URL.createObjectURL(gif);
                    a.dataset.downloadurl = ["application/octet-stream", a.download, a.href, ].join(":");
                    a.click();
                });



                corazonTarjeta.addEventListener('click', (e) => {

                    let source = corazonTarjeta.src;


                    if (source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                        corazonTarjeta.src = '/assets/icon-fav.svg';
                    } else {
                        corazonTarjeta.src = '/assets/icon-fav-active.svg';
                    }

                    if (arrayFavoritosGuardados.length != null) {
                        corazonTarjeta.src = '/assets/icon-fav-active.svg';
                    }
                    for (let k = 0; k < arrayFavoritosGuardados.length; k++) {
                        // console.log(arrayFavoritosGuardados[k]._src);
                        // console.log(e.target.parentNode.previousSibling.src);
                        if (arrayFavoritosGuardados[k]._src == e.target.parentNode.previousSibling.src) {
                            console.log(arrayFavoritosGuardados);
                            arrayFavoritosGuardados.splice(k, 1);
                            localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));
                            return;
                            // console.log(arrayFavoritosGuardados)
                        }
                    }
                    console.log('no anda')
                    class favoritosStorage {
                        constructor(id, src, title, user) {
                            this._id = id;
                            this._src = src;
                            this._title = title;
                            this._user = user;
                        }

                    }

                    let evento = event.target.parentNode.previousSibling;
                    // let arrayFavoritos = [];
                    var favId = evento.id;
                    var favSrc = evento.src;
                    var favTitle = evento.title;
                    var favUserName = evento.user;
                    var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);

                    arrayFavoritosGuardados.push(fav);
                    localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));


                });



                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


                descargaTarjeta.addEventListener('mouseover', () => {
                    descargaTarjeta.src = '/assets/icon-download-hover.svg';



                });

                descargaTarjeta.addEventListener('mouseout', () => {
                    descargaTarjeta.src = '/assets/icon-download.svg';


                });

                //////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
                ampliarTarjeta.addEventListener('mouseover', () => {
                    ampliarTarjeta.src = '/assets/icon-max-hover.svg';

                });

                ampliarTarjeta.addEventListener('mouseout', () => {
                    ampliarTarjeta.src = '/assets/icon-max-normal.svg';

                });

                ampliarTarjeta.addEventListener('click', () => {
                    img.click();
                });




                div.addEventListener('mouseover', () => {

                    divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-muestra');
                    divTarjetas.classList.remove('div-tarjetas-no-muestra');
                    title.textContent = newTitle;
                    userName.textContent = newUserName;
                });

                div.addEventListener('mouseout', () => {

                    divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                    divTarjetas.classList.remove('div-tarjetas-muestra');

                });

                document.getElementById('flechas').style.display = 'flex';



            } else {
                document.getElementById('flechas').style.display = 'none';



            }

        }



        document.getElementById("hover-der").addEventListener("click", () => {
            if (screen.width >= 1280) {
                document.getElementById("gifos-section-container").scrollLeft += 1158;
            }
        });
        document.getElementById("hover-izq").addEventListener("click", () => {
            if (screen.width >= 1280) {
                document.getElementById("gifos-section-container").scrollLeft -= 1158;
            }
        });

    })
    .catch(function(err) {
        console.log(err);
    })


// SUGERENCIAS


let buscarSugerencia = document.getElementById('search-input');

const apiKey = '2SmopXnYLL5DF8XL4JxbiU73QevU3k40';
const conteinerSugerencias = document.getElementById('container-sugerencias');

// const urlSuggestion = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${buscarSugerencia}`;

arraySugerencias = [];

function sugerencias(textoABuscar) {
    let urlSuggestion = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${textoABuscar}`;
    // console.log(urlSuggestion);
    fetch(urlSuggestion)
        .then(Response => {
            return Response.json();
        })
        .then(json => {
            // console.log(json);



            buscarSugerencia.value
            conteinerSugerencias.innerHTML = '';
            arraySugerencias = [];

            let divContenedor = document.createElement('div');
            let div1 = document.createElement('div');
            let div3 = document.createElement('div');
            let div2 = document.createElement('div');
            let div4 = document.createElement('div');
            let lupa1 = document.createElement('i')
            let lupa2 = document.createElement('i')
            let lupa3 = document.createElement('i')
            let lupa4 = document.createElement('i')

            divContenedor.setAttribute('class', 'sugerencias-contenedor');
            div1.setAttribute('class', 'sugerencia-1');
            div2.setAttribute('class', 'sugerencia-2');
            div3.setAttribute('class', 'sugerencia-3');
            div4.setAttribute('class', 'sugerencia-4');
            lupa1.setAttribute('class', 'fas fa-search');
            lupa2.setAttribute('class', 'fas fa-search');
            lupa3.setAttribute('class', 'fas fa-search');
            lupa4.setAttribute('class', 'fas fa-search');

            div1.textContent = (json.data[0].name);
            div2.textContent = (json.data[1].name);
            div3.textContent = (json.data[2].name);
            div4.textContent = (json.data[3].name);
            divContenedor.appendChild(div1);
            divContenedor.appendChild(div2);
            divContenedor.appendChild(div3);
            divContenedor.appendChild(div4);
            div1.appendChild(lupa1);
            div2.appendChild(lupa2);
            div3.appendChild(lupa3);
            div4.appendChild(lupa4);
            conteinerSugerencias.appendChild(divContenedor);
            arraySugerencias.push(div1);
            arraySugerencias.push(div2);
            arraySugerencias.push(div3);
            arraySugerencias.push(div4);
            // div1.addEventListener('click', () => {
            //     busqueda(buscarSugerencia);
            // });


            if (buscarSugerencia == "") {
                divContenedor.style.display = 'none';
            } else {
                divContenedor.style.display = 'block';
            }

            div1.addEventListener('click', () => {
                busqueda(json.data[0].name);
                titleBusqueda.textContent = json.data[0].name;
            });

            div2.addEventListener('click', () => {
                busqueda(json.data[1].name);
                titleBusqueda.textContent = json.data[1].name;
            });

            div3.addEventListener('click', () => {
                busqueda(json.data[2].name);
                titleBusqueda.textContent = json.data[2].name;
            });

            div4.addEventListener('click', () => {
                busqueda(json.data[3].name);
                titleBusqueda.textContent = json.data[3].name;
            });

        })
        .catch(function(err) {
            console.log(err.message);
        });



}


buscarSugerencia.addEventListener('input', () => {

    sugerencias(document.getElementById('search-input').value);
    conteinerSugerencias.style.display = 'block';
});





// FUNCIONAMIENTO DEL HOVER DE LOS BOTONES DE IZQUIERDA Y DERECHA DE SLIDER



let flechaIzquierda = document.getElementById('flecha-izquierda-container');
let flechaDerecha = document.getElementById('flecha-derecha-container');
let flechaIzqHover = document.getElementById('hover-izq');
let flechaDerHover = document.getElementById('hover-der');

flechaIzquierda.addEventListener('mouseover', () => {

    flechaIzqHover.style.display = 'block';

});

flechaIzquierda.addEventListener('mouseout', () => {
    flechaIzqHover.style.display = 'none';

});



flechaDerecha.addEventListener('mouseover', () => {
    flechaDerHover.style.display = 'block';
});


flechaDerecha.addEventListener('mouseout', () => {
    flechaDerHover.style.display = 'none';
});






/*
fetch(url)
    .then(Response => {
        return Response.json();
    })
    .then(json => {
        let arrayTrending = [];

        class gifTrendings {
            constructor(id, src, title, user) {
                this._id = id;
                this._src = src;
                this._title = title;
                this._user = user;
            }
        }



        for (let i = 0; i < 12; i++) {


            let newId = json.data[i].images.original.id;
            let newSrc = json.data[i].images.original.url;
            let newTitle = json.data[i].title;
            let newUserName = json.data[i].username;


            let gif = new gifTrendings(
                newId,
                newSrc,
                newTitle,
                newUserName
            );
            arrayTrending.push(gif);
            let div = document.createElement('div');
            let img = document.createElement('img');

            img.setAttribute('class', 'img-gifos-section');

            img.src = newSrc;
            img.id = newId;
            img.title = newTitle;
            img.user = newUserName;

            div.appendChild(img);
            conteinerTrending.appendChild(div);


            img.addEventListener('click', gifosMax);




            if (screen.width >= 600) {


                let divTarjetas = document.createElement('div');

                let corazonTarjeta = document.createElement('img');


                let descargaTarjeta = document.createElement('img');


                let ampliarTarjeta = document.createElement('img');

                let title = document.createElement('p');
                let userName = document.createElement('p');


                title.setAttribute('class', 'title-gif-trending');
                userName.setAttribute('class', 'username-gif-trending');

                divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                divTarjetas.setAttribute('id', 'div-tarjetas');

                corazonTarjeta.setAttribute('class', 'corazon-tarjeta corazon-tarjeta-no-muestra');
                corazonTarjeta.setAttribute('id', 'corazon-tarjeta');
                corazonTarjeta.setAttribute('src', '/assets/icon-fav.svg');

                descargaTarjeta.setAttribute('class', 'descarga-tarjeta');
                descargaTarjeta.setAttribute('id', 'descarga-tarjeta');
                descargaTarjeta.setAttribute('src', '/assets/icon-download.svg');

                ampliarTarjeta.setAttribute('id', 'ampliar-tarjeta');
                ampliarTarjeta.setAttribute('class', 'ampliar-tarjeta');
                ampliarTarjeta.setAttribute('src', 'assets/icon-max-normal.svg');

                divTarjetas.appendChild(title);
                divTarjetas.appendChild(userName);
                divTarjetas.appendChild(corazonTarjeta);
                divTarjetas.appendChild(descargaTarjeta);
                divTarjetas.appendChild(ampliarTarjeta);
                div.appendChild(divTarjetas);



                //////////////////////////////////////////////////////////////////////////////////////////////////

                // CODIGO DE DESCARGA/////////////

                descargaTarjeta.addEventListener("click", async function() {
                    let a = document.createElement("a");
                    let response = await fetch(img.src);
                    let gif = await response.blob();
                    a.download = "Gif";
                    a.href = window.URL.createObjectURL(gif);
                    a.dataset.downloadurl = ["application/octet-stream", a.download, a.href, ].join(":");
                    a.click();
                });



                corazonTarjeta.addEventListener('click', (e) => {

                    let source = corazonTarjeta.src;


                    if (source.slice(source.indexOf('/assets'), source.length) == '/assets/icon-fav-active.svg') {
                        corazonTarjeta.src = '/assets/icon-fav.svg';
                    } else {
                        corazonTarjeta.src = '/assets/icon-fav-active.svg';
                    }

                    if (arrayFavoritosGuardados.length != null) {
                        corazonTarjeta.src = '/assets/icon-fav-active.svg';
                    }
                    for (let k = 0; k < arrayFavoritosGuardados.length; k++) {
                        // console.log(arrayFavoritosGuardados[k]._src);
                        // console.log(e.target.parentNode.previousSibling.src);
                        if (arrayFavoritosGuardados[k]._src == e.target.parentNode.previousSibling.src) {
                            console.log(arrayFavoritosGuardados);
                            arrayFavoritosGuardados.splice(k, 1);
                            localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));
                            return;
                            // console.log(arrayFavoritosGuardados)
                        }
                    }
                    console.log('no anda')
                    class favoritosStorage {
                        constructor(id, src, title, user) {
                            this._id = id;
                            this._src = src;
                            this._title = title;
                            this._user = user;
                        }

                    }

                    let evento = event.target.parentNode.previousSibling;
                    // let arrayFavoritos = [];
                    var favId = evento.id;
                    var favSrc = evento.src;
                    var favTitle = evento.title;
                    var favUserName = evento.user;
                    var fav = new favoritosStorage(favId, favSrc, favTitle, favUserName);

                    arrayFavoritosGuardados.push(fav);
                    localStorage.setItem('favoritos', JSON.stringify(arrayFavoritosGuardados));


                });



                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


                descargaTarjeta.addEventListener('mouseover', () => {
                    descargaTarjeta.src = '/assets/icon-download-hover.svg';



                });

                descargaTarjeta.addEventListener('mouseout', () => {
                    descargaTarjeta.src = '/assets/icon-download.svg';


                });

                //////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
                ampliarTarjeta.addEventListener('mouseover', () => {
                    ampliarTarjeta.src = '/assets/icon-max-hover.svg';

                });

                ampliarTarjeta.addEventListener('mouseout', () => {
                    ampliarTarjeta.src = '/assets/icon-max-normal.svg';

                });

                ampliarTarjeta.addEventListener('click', () => {
                    img.click();
                });




                div.addEventListener('mouseover', () => {

                    divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-muestra');
                    divTarjetas.classList.remove('div-tarjetas-no-muestra');
                    title.textContent = newTitle;
                    userName.textContent = newUserName;
                });

                div.addEventListener('mouseout', () => {

                    divTarjetas.setAttribute('class', 'div-tarjetas div-tarjetas-no-muestra');
                    divTarjetas.classList.remove('div-tarjetas-muestra');

                });

                document.getElementById('flechas').style.display = 'flex';



            } else {
                document.getElementById('flechas').style.display = 'none';



            }

        }



        document.getElementById("hover-der").addEventListener("click", () => {
            if (screen.width >= 1280) {
                document.getElementById("gifos-section-container").scrollLeft += 1158;
            }
        });
        document.getElementById("hover-izq").addEventListener("click", () => {
            if (screen.width >= 1280) {
                document.getElementById("gifos-section-container").scrollLeft -= 1158;
            }
        });

    })
    .catch(function(err) {
        console.log(err);
    })

*/




// CONCECCION API //
// // const searchForm = document.getElementById('search-form')
// // const searchInput = document.getElementById('search-input')


// // searchForm.addEventListener('submit', function(e) {
// //     e.preventDefault()
// //     const q = searchInput.Value
// //     busqueda(q)
// // })

// // function busqueda(q) {


// //     const resultsEl = document.getElementById('busqueda')

// //     fetch(path).then(Response => {
// //         return res.json()
// //     }).then(json => {
// //         console.log(json.data[0].images.fixed_width.url)

// //         let resultsHTML = ''

// //         json.data.forEach(function(obj) {
// //             console.log(obj)

// //             const url = obj.images.fixed_width.url
// //             const width = obj.images.fixed_width.width
// //             const height = obj.images.fixed_width.height
// //             const title = obj.title
// //             resultsHTML += `<img 
// //                 src="${url}"
// //                 width="${width}" 
// //                 height="${height}"
// //                 alt="${title}"
// //                 >`
// //         })

// //         resultsEl.innerHTML = resultsHTML
// //     }).catch(function(err) {
// //         console.log(err.message)
// //     })
// // }
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1-IyaPWlN7d0blaMAvYTBNsqMI-w_lM023tiJb8YynGU';
const query1 = `/gviz/tq?`
const endpoint1 = `${url}${ssid}${query1}`;

fetch(endpoint1)
.then(res => res.text())
.then(data => {
  
  const temp = data.substr(47).slice(0,-2);
  const json = JSON.parse(temp);
  const rows = json.table.rows;
  
  var formatted = rows.map(function (originalItem) {
    return {
      article: originalItem.c[0] === null ? '' : originalItem.c[0].v,
      titre: originalItem.c[1] === null ? '' : originalItem.c[1].v,
      volume: originalItem.c[2] === null ? '' : originalItem.c[2].v,
      note: originalItem.c[3] === null ? '' : originalItem.c[3].v,
      info: originalItem.c[4] === null ? '' : originalItem.c[4].v,
      statut: originalItem.c[5] === null ? '' : originalItem.c[5].v,
      stock: originalItem.c[6] === null ? '' : originalItem.c[6].v,
      type: originalItem.c[7] === null ? '' : originalItem.c[7].v,
    }
  });
  //console.log(formatted);


  // sauvegarde de la listes
  window.allLectures = [];
  for (const a of formatted) {
    window.allLectures.push(a)
  }

  
  Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  });
  
  var data = { 
    "lectures" : formatted
  };


  var template = Handlebars.compile(document.querySelector('#handlebars-template').innerHTML);
  var filled = template(data);
  document.querySelector('#handlebars-output').innerHTML = filled;
 
});





function filtrePar(colonne, valeur) {

  if( colonne && valeur ){

    window.filtreLecture = [];
    for (const a of window.allLectures) {
      window.filtreLecture.push(a)
    }
  
    for (let i = 0; i < filtreLecture.length; i++) {
      if (filtreLecture[i][colonne] != valeur){
        delete filtreLecture[i];
      }
    } 

  } else {

    filtreLecture = window.allLectures;

  } 

  var data = { 
    "lectures" : filtreLecture
  };

  var template = Handlebars.compile(document.querySelector('#handlebars-template').innerHTML);
  var filled = template(data);
  document.querySelector('#handlebars-output').innerHTML = filled;

}





function trieParNote() {

  window.trieLecture = [];

  var noteMax = 0;
  for (var i = 0; i < window.allLectures.length; i++) {
    if (window.allLectures[i].note > noteMax) {
      noteMax = window.allLectures[i].note;
    }
  }

  for (let j = noteMax; j >= 0; j--) {
    for (let i = 0; i < window.allLectures.length; i++) {
      if ( window.allLectures[i].note == j ) {
        window.trieLecture.push(window.allLectures[i])
      }
    }
  }

  var data = { 
    "lectures" : trieLecture
  };

  var template = Handlebars.compile(document.querySelector('#handlebars-template').innerHTML);
  var filled = template(data);
  document.querySelector('#handlebars-output').innerHTML = filled;

}
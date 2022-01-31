const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1wBen3ShPLi-YsjLcY0wHEhOvtq8GqTvcwiSnkNWbz54';
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
      notePourcentage : originalItem.c[3] === null ? '' : originalItem.c[3].v * 10,
      noteSur5 : originalItem.c[3] === null ? '' : originalItem.c[3].v / 2,
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

  Handlebars.registerHelper('ifSuperieur', function(a, b, options) {
    return (a > b) ? options.fn(this) : options.inverse(this);
});
  
  update(formatted);
 
});





function controle(formulaire, ordre) {

  //récupération du choix du STATUT
  const statut = formulaire.statut;
  for (let i = 0; i < statut.length; i++) {
    if (statut[i].checked) {
      var valeurStatut = statut[i].value;
    }
  }

  //récupération du choix du TYPE
  const type = formulaire.type;
  for (let i = 0; i < type.length; i++) {
    if (type[i].checked) {
      var valeurType = type[i].value;
    }
  }

  //récupération du choix du STOCK
  const stock = formulaire.stock;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i].checked) {
      var valeurStock = stock[i].value;
    }
  }

  //nouveau tableau pour pas écraser les données complètes
  window.filtreLecture = [];
  for (const a of window.allLectures) {
    window.filtreLecture.push(a);
  }


  //filtre STATUT
  if (valeurStatut != "all"){
    for (let i = 0; i < filtreLecture.length; i++) {
      if (filtreLecture[i]["statut"] != valeurStatut){
        delete filtreLecture[i];
      }
    }
    // ré-index le tablau
    filtreLecture = filtreLecture.filter(function(val){return val});
  }


  //filtre TYPE
  if (valeurType != "all"){
    for (let i = 0; i < filtreLecture.length; i++) {
      if (filtreLecture[i]["type"] != valeurType){
        delete filtreLecture[i];
      }
    }
    // ré-index le tablau
    filtreLecture = filtreLecture.filter(function(val){return val});
  }


  //filtre STOCK
  if (valeurStock != "all"){
    for (let i = 0; i < filtreLecture.length; i++) {
      if (filtreLecture[i]["stock"] != valeurStock){
        delete filtreLecture[i];
      }
    }
    // ré-index le tablau
    filtreLecture = filtreLecture.filter(function(val){return val});
  }


  // Ordre par note
  ordreParNote = [];
  if (ordre) {
    var noteMax = 0;
    for (var i = 0; i < filtreLecture.length; i++) {
      if (filtreLecture[i].note > noteMax) {
        noteMax = filtreLecture[i].note;
      }
    }
    for (let j = noteMax; j >= 0; j--) {
      for (let i = 0; i < filtreLecture.length; i++) {
        if ( filtreLecture[i].note == j ) {
          ordreParNote.push(filtreLecture[i])
        }
      }
    }
    filtreLecture = ordreParNote
  }


  //envois des données
  update(filtreLecture);


  //affiche le resultat
  filtre.classList.add('hide');
  contenu.classList.remove('hide');
}




function update(dataUpdate) {
  var data = { 
    "lectures" : dataUpdate
  };

  var template = Handlebars.compile(document.querySelector('#handlebars-template').innerHTML);
  var filled = template(data);
  document.querySelector('#handlebars-output').innerHTML = filled;
}
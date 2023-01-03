let data;

let xhr = new XMLHttpRequest(); 

xhr.open("GET", "Film.json"); 
(xhr.onreadystatechange = function () {
if (this.readyState === 4 && this.status === 200) {
    data = JSON.parse(xhr.response);
    console.log(data);

    create(data);
}
}),
xhr.send();

/////////////////////////////////////////////////////////////// search////////////////////////////////////////////////////////////////
document.getElementById("search").onkeyup = function () {
var search = document.getElementById("search").value;
let datasearch = data.filter(function (a) {
    return a.titre.toLowerCase().includes(search.toLowerCase());
});
create(datasearch);
};
/////////////////////////////////////////////////////////////////// Sort////////////////////////////////////////////////////////////////
document.getElementById("floatingSelect").onchange = function () {
var select = document.getElementById("floatingSelect").value;
if (select == "titre") {
    data = data.sort((a, b) => {
    let A = a.titre.toLowerCase();
    let B = b.titre.toLowerCase();
    if (A < B) {
        return -1;
}
if (A > B) {
        return 1;
}
if (A == B) {
        return 0;
    }
    });
} else if (select == "réalisateur") {
    data = data.sort((a, b) => {
    let A = a.réalisateur.toLowerCase();
    let B = b.réalisateur.toLowerCase();
    if (A < B) {
        return -1;
    }
    if (A > B) {
        return 1;
    }
    if (A == B) {
        return 0;
    }
    });
} else if (select == "durée") {
    data = data.sort((a, b) => {
    let A = a.durée.toLowerCase();
    let B = b.durée.toLowerCase();
    if (A < B) {
        return -1;
}
if (A > B) {
        return 1;
    }
    if (A == B) {
        return 0;
    }
    });
} else if (select == "année de production") {
    data = data.sort((a, b) => {
    let A = a.production;
    let B = b.production;
    if (A < B) {
        return -1;
    }
    if (A > B) {
        return 1;
    }
    if (A == B) {
        return 0;
    }
    });
} else if (select == "TITRE") {
    data = data.sort((a, b) => {
    let A = a.titre.toLowerCase();
    let B = b.titre.toLowerCase();
    if (A < B) {
        return 1;
}
if (A > B) {
        return -1;
    }
    if (A == B) {
        return 0;
    }
    });
} else if (select == "Réalisateur") {
    data = data.sort((a, b) => {
    let A = a.réalisateur.toLowerCase();
    let B = b.réalisateur.toLowerCase();
    if (A < B) {
        return 1;
    }
    if (A > B) {
        return -1;
    }
    if (A == B) {
        return 0;
    }
    });
} else if (select == "Durée") {
    data = data.sort((a, b) => {
    let A = a.durée.toLowerCase();
    let B = b.durée.toLowerCase();
    if (A < B) {
        return 1;
    }
    if (A > B) {
        return -1;
    }
    if (A == B) {
        return 0;
    }
    });
} else if (select == "Année de Production") {
    data = data.sort((a, b) => {
    let A = a.production;
    let B = b.anné;
    if (A < B) {
        return 1;
    }
    if (A > B) {
        return -1;
    }
    if (A == B) {
        return 0;
    }
    });
}
create(data);
};
////////////////////////////////////////////////// createElement////////////////////////////////////////////////////////////////////////////////////////////////
function create(array) {
document.querySelector("#tbody").innerHTML = "";
array.forEach((element) => {
    let tr = document.createElement("tr");
    let poster = document.createElement("img");
    let title = document.createElement("td");
    let realisateur = document.createElement("td");
    let RDate = document.createElement("td");
    let lasts = document.createElement("td");
    let festival = document.createElement("td");
    let actor = document.createElement("td");
    poster.setAttribute("src", element.poster);
    poster.style.width = "150px";
    poster.append(element.poster);
    title.append(element.titre);
    realisateur.append(element.réalisateur);
    RDate.append(element.production);
    lasts.append(element.durée);
    festival.append(element.Festivales);
    actor.append(element.Acteurs);
    tr.appendChild(poster);
    tr.appendChild(title);
    tr.appendChild(realisateur);
    tr.appendChild(RDate);
    tr.appendChild(lasts);
    tr.appendChild(festival);
    const actorsList = document.createElement("ul");
    element.Acteurs.forEach((Acteurs) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.append(Acteurs.sonnom);
    p.append(Acteurs.sonprénom);
    p.append(Acteurs.Sanationalité);
    li.append(p);
    actorsList.append(li);
    });
    tr.append(actorsList);
    document.querySelector("#tbody").appendChild(tr);
});
}

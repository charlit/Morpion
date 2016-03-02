//charles jussan Morpion I4 EPSI Recherche Opérationnelle
var grille = [];
var temporaireProba = [];
var proba = [];
var grilleLigne = [];
var grilleColonne = [];
var grilleDiagonale = [];


var gagnant = '';
var jeuFin = false;
var attendre = false;

initialisationGrille();
initialisationProbabilite();
dessinerGrille();
dessinerProbabilite();


function initialisationGrille(){
    for(var i = 0; i < 3; i++){
        grille[i] = new Array('', '', '');
        proba[i] = new Array('', '', '');
        grilleLigne[i] = new Array('', '', '');
        grilleColonne[i] = new Array('', '', '');
        grilleDiagonale[i] = new Array('0', '0', '0');
        temporaireProba[i] = new Array(0, 0, 0);
    }
}


function initialisationProbabilite(){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            proba[i][j] = verifierMouvements(i, j) / 8;
        }
    }
}


function verifierMouvements(i, j){
    var mouvementPossibible = 0;
    mouvementPossibible += verifierMouvementLigne(i, j);
    mouvementPossibible += verifierMouvementColonne(i, j);
    mouvementPossibible += verfierMouvementDiago(i, j);

    return mouvementPossibible
}


function verifierMouvementLigne(i, j){
    var nombreCase = 0;
    if(j == 2){
        
        for(var jBis = j; jBis > -1; jBis--){
            if(jBis > -1 && grille[i][jBis] == ''){
                nombreCase++;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    } else if(j == 1){
        
        if(j - 1 > -1 && j + 1 < 3 && grille[i][j - 1] == '' && grille[i][j + 1] == ''){
            return 1;
        }else{
            return 0;
        }
    } else{
        
        for(var jBis = j; jBis < 3; jBis++){
            if(jBis < 3 && grille[i][jBis] == ''){
                nombreCase++;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    }
}


function verifierMouvementColonne(i, j){
    var nombreCase = 0;
    if(i == 2){
        
        for(var iBis = i; iBis > -1; iBis--){
            if(iBis > -1 && grille[iBis][j] == ''){
                nombreCase++;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    } else if(i == 1){
        
        if(i - 1 > -1 && i + 1 < 3 && grille[i - 1][j] == '' && grille[i + 1][j] == ''){
            return 1;
        }else{
            return 0;
        }
    } else{
        
        for(var iBis = i; iBis < 3; iBis++){
            if(iBis < 3 && grille[iBis][j] == ''){
                nombreCase++;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    }
}


function verfierMouvementDiago(i, j){
    var nombreCase = 0;
    if(i == 0 && j == 0){
        
        for(var iBis = i; iBis < 3; iBis++){
            for(var jBis = j + 1; jBis < 3; jBis++){
                if(jBis < 3 && grille[iBis][jBis] == ''){
                    nombreCase++
                }
                break;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    }else if(i == 0 && j == 2){
        // Ligne 1 et colonne 3
        for(var iBis = i; iBis < 3; iBis++){
            for(var jBis = j - 1; jBis > -1; jBis--){
                if(jBis > -1 && grille[iBis][jBis] == ''){
                    nombreCase++
                }
                break;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    }else if(i == 2 && j == 0){
        
        for(var iBis = i; iBis > -1; iBis--){
            for(var jBis = j + 1; jBis < 3; jBis++){
                if(jBis < 3 && grille[iBis][jBis] == ''){
                    nombreCase++
                }
                break;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    }else if(i == 2 && j == 2){
        
        for(var iBis = i; iBis > -1; iBis--){
            for(var jBis = j - 1; jBis > -1; jBis--){
                if(jBis > -1 && grille[iBis][jBis] == ''){
                    nombreCase++
                }
                break;
            }
        }
        if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    }else if(i == 1 && j == 1){
        
        for(var iBis = i - 1; iBis < 3; iBis++){
            for(var jBis = j - 1; jBis < 3; jBis++){
                if(grille[iBis][jBis] == ''){
                    nombreCase++
                }
                break;
            }
        }
        for(var iBis = i - 1; iBis < 3; iBis++){
            for(var jBis = j + 1; jBis > -1; jBis--){
                if(grille[iBis][jBis] == ''){
                    nombreCase++
                }
                break;
            }
        }
        if(nombreCase === 6){
            return 2;
        }else if(nombreCase === 3){
            return 1;
        }else{
            return 0;
        }
    }else{
        return 0;
    }

}

function dessinerGrille(){

    $('#table-morpion').remove();
    var html = '<table id="table-morpion">';
    for(var i = 0; i < 3; i++){
        html += '<tr class="'+i+'">';
        for(var j = 0; j < 3; j++){
            html += '<td class="'+j+'">'+ grille[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    $('body').append(html);

    $('td').click(function(){

        if(!jeuFin && !attendre){

            var ligne = $(this).parent()[0].className;
            var colonne = $(this)[0].className;

            if(grille[ligne][colonne] == ''){
                grille[ligne][colonne] = 'X';
                dessinerGrille();
                attendre = true;

                if(!jeuFini('X')){
                    setTimeout(function () {
                        majProba();
                        dessinerProbabilite();
                        tourAi();
                        dessinerGrille();
                        dessinerProbabilite();
                        jeuFini('O');
                        attendre = false;
                    }, 250);
                }
            }
        }

    });
}


function dessinerProbabilite(){
    $('#table-proba').remove();
    var html = '<table id="table-proba">';
    for(var i = 0; i < 3; i++){
        html += '<tr>';
        for(var j = 0; j < 3; j++){
            html += '<td>'+ proba[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    $('body').append(html);
}

function tourAi(){
    var ok = false;
    while(!ok) {


        var coord = probaEleve().split('-');

        var ligne = coord[0];
        var colonne = coord[1];

        if (grille[ligne][colonne] == '') {
            grille[ligne][colonne] = 'O'
            ok = true;
            majProba();
        }
    }
    
}

function majProbaDiag (g) {
    var check = 0;
    var gTemp = new Array(g[0][0], g[1][1], g[2][2]);
    if(gTemp.filter(function(arr){arr == -2;}).length == 2){
        for(var i=0; i<3;i++){
            if(g[i][i] != -2){
                g[i][i] = 2;
            }
        }
    } else if(gTemp.filter(function(arr){arr == 2;}).length == 2){
        for(var i=0; i<3;i++){
            if(g[i][i] != 2){
                g[i][i] = 3;
            }
        }
    } else if (gTemp.filter(function(arr){return arr == -2;}).length == 1){
        for(var i=0; i<3;i++){
            if(g[i][i] != 2 && g[i][i] != -2){
                if(i == 1)
                    check++;
                g[i][i] = 0;
            }
        }
    }
    
    gTemp = new Array(g[0][2], g[1][1], g[2][0]);
    if(gTemp.filter(function(arr){return arr == -2;}).length == 2){
        var j = 2;
        for(var i=0; i<3;i++){
                if(g[i][j] != -2){
                    g[i][j] = 2;
                }
            j--;
        }
    } else if(gTemp.filter(function(arr){return arr == 2;}).length == 2){
        var j = 2;
        for(var i=0; i<3;i++){
                if(g[i][j] != 2){
                    g[i][j] = 3;
                }
            j--;
        }
    } else if (gTemp.filter(function(arr){return arr == -2;}).length == 1){
        var j = 2;
        for(var i=0; i<3;i++){
                if(g[i][j] != -2){
                    if(i == 1 && j == 1)
                        check++;
                    g[i][j] = 0;
                }
            j--;
        }
    }
    if(check != 2){
        g[1][1] = 1;
    }
}

function probaEleve(){
    var value = 0;
    var coord = '';
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            if(proba[i][j] > value && grille[i][j] != 'X' && grille[i][j] != 'O'){
                value = proba[i][j];
                coord = i + '-' + j;
            }
        }
    }
    return coord;
}

function jeuFini(joueur){
    for(var i = 0; i<3; i++ ){
        if(grille[i][0] == joueur && grille[i][1] == joueur && grille[i][2] == joueur){
            alert(joueur+ " a gagné");
            location.reload();
        }
        if(grille[0][i] == joueur && grille[1][i] == joueur && grille[2][i] == joueur){
            alert(joueur+ " a gagné");
            location.reload();
        }   
    }
    if(grille[0][0] == joueur && grille[1][1] == joueur && grille[2][2] == joueur){
            alert(joueur+ " a gagné");
            location.reload();
        }
    if(grille[0][2] == joueur && grille[1][1] == joueur && grille[2][0] == joueur){
            alert(joueur+ " a gagné");
            location.reload();
        }
    return false;
}


function majProbaLC (g) {
    for(var i = 0; i <3; i++){
        if(g[i].indexOf(-2) != -1){
            for(var j = 0; j<3; j++){
                if(g[i][j] != -2 && g[i][j] != 2)
                    g[i][j] = 0;
            }
        }
    }
    for(var i = 0; i <3; i++){
        var checkWin = 0;
        var checkLoose = 0;
        for(var j = 0; j<3; j++){
            if(g[i][j] == 2){
                checkWin ++;
            }
            if(g[i][j] == -2){
                checkLoose ++;
            }
            if (checkWin >= 2 && g[i][j] != -2)
                g[i][j] = 3;
            if(checkLoose >=2 && g[i][j] != 2 && g[i][j] != -2)
                g[i][j] = 2;
            if(checkWin == 2){
                checkWin++;
                j=-1;
            }
            if( checkLoose == 2){
                checkLoose++;
                j=-1;
            }
        }
    }
}



function majProba() {

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (grille[i][j] == 'X') {
                grilleLigne[i][j] = -2;
            } else if (grille[i][j] == 'O') {
                grilleLigne[i][j] = 2;
            } else {
                grilleLigne[i][j] = 1;
            }
        }
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (grille[j][i] == 'X')
                grilleColonne[i][j] = -2;
            else if (grille[j][i] == 'O')
                grilleColonne[i][j] = 2;
            else
                grilleColonne[i][j] = 1;
        }
    }

    grilleDiagonale[0] = new Array(grilleLigne[0][0], 0, grilleLigne[0][2]);
    grilleDiagonale[1] = new Array(0, grilleLigne[1][1], 0);
    grilleDiagonale[2] = new Array(grilleLigne[2][0], 0, grilleLigne[2][2]);

    majProbaLC(grilleLigne);
    majProbaLC(grilleColonne);
    majProbaDiag(grilleDiagonale);

    proba = ajouterProba(grilleLigne, grilleColonne, grilleDiagonale);
}

function ajouterProba (grilleLigne, grilleColonne, grilleDiagonale) {
    for (var i = 0; i <3; i++) {   
        for (var j = 0; j <3; j++) {
            if(grilleLigne[i][j] == 0){
                if(grilleColonne[j][i] == 1)
                    temporaireProba[i][j] += 1/8;
                if(grilleDiagonale[i][j] == 1)
                    temporaireProba[i][j] += 1/8;
            }

            if(grilleLigne[i][j] == 1){
                    temporaireProba[i][j] += 1/8;
                if(grilleColonne[j][i] == 1)
                    temporaireProba[i][j] += 1/8;
                if(grilleDiagonale[i][j] == 1)
                    temporaireProba[i][j] += 1/8;
            }

            if(grilleLigne[i][j] == -2)
                temporaireProba[i][j] = -2;

            if(grilleLigne[i][j] == 2)
                temporaireProba[i][j] = 2;

            if(grilleLigne[i][j] == 3)
                temporaireProba[i][j] = 3;            

            if(grilleColonne[j][i] == -2)
                temporaireProba[i][j] = -2;

            if(grilleColonne[j][i] == 2)
                temporaireProba[i][j] = 2;

            if(grilleColonne[j][i] == 3)
                temporaireProba[i][j] = 3;

            if(grilleDiagonale[i][j] == -2)
                temporaireProba[i][j] = -2;

            if(grilleDiagonale[i][j] == 2)
                temporaireProba[i][j] = 2;

            if(grilleDiagonale[i][j] == 3)
                temporaireProba[i][j] = 3;

            
        }
    }
    return temporaireProba;
}



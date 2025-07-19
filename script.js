//declaration du tableau
tab=[];
//initialisation de la premiere valeur a vide 
tab[0]="";
//recuperation du bouton 
var btn= document.getElementById("btn").addEventListener("click", ()=>{
    //recuperation du conteneur 
    var output= document.getElementById("output");
    //balayage des valeurs html
    output.innerHTML="";
    //recuperation de la zone de saisis
    var textbox=document.getElementById("textbox").value;
    //condition d'insertion de la valeur
    if(textbox.trim()==""){
        alert('remplissez cette case');
    }else{
        tab.push(textbox);
    }
//navigation dans le tableau
    tab.map((item)=>{
//creation du paragraphe
        var p=document.createElement('p');
//attribution d'une valeur au paragraphe
        p.innerHTML=item;
        output.appendChild(p);
    });
})

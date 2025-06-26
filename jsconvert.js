
function convertir(){
    const montant=parseFloat(document.getElementById("MD").value);
    const from=document.getElementById("DD").value;
    const to=document.getElementById("DA").value;
    const taux={
        USD:1,
        FCFA:600,
        EUR:0.92
    };
    if(isNaN(montant)||montant<=0){
        document.getElementById("MA").value="";
        document.getElementById("RM").innerHTML="Veuillez entrer un montant valide!";
        return;
    }
    const MDOLLAR=montant/taux[from];
    const MCONVERT=MDOLLAR*taux[to];
    document.getElementById("MA").value=MCONVERT.toFixed(1);
    document.getElementById("RM").innerHTML="Le montant "+ montant+" "+ from +" = "+ MCONVERT.toFixed(1)+" "+to; 
};


document.getElementById("MD").addEventListener("input",convertir);
document.getElementById("DD").addEventListener("change",convertir);
document.getElementById("DA").addEventListener("change",convertir);
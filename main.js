function szamit(){
    let magassag=parseFloat(document.getElementById('magassag').value);
    let testsuly=parseFloat(document.getElementById('testsuly').value);
    let eredmeny=testsuly/(magassag/100)**2;
    document.getElementById('eredmeny').textContent="AZ ÖN BMI ÉRTÉKE:"+eredmeny.toFixed(2);
    if (eredmeny<18.5) {
        document.getElementById('sovany').style.backgroundColor="#f8943c";
    }
    else if (eredmeny>=18.5 && eredmeny<=24.9){
        document.getElementById('normal').style.backgroundColor="#f8943c";
    }
    else if (eredmeny>=25 && eredmeny<=29.9){
        document.getElementById('tulsulyos').style.backgroundColor="#f8943c";
    }
    else if (eredmeny>=30 && eredmeny<=34.9){
        document.getElementById('elso_foku').style.backgroundColor="#f8943c";
    }
    else if (eredmeny>=35 && eredmeny<=39.9){
        document.getElementById('masod_foku').style.backgroundColor="#f8943c";
    }
    else if (eredmeny>=40){
        document.getElementById('harmad_foku').style.backgroundColor="#f8943c";
    }
    let idealis=eredmeny*((magassag/100)**2);
    document.getElementById('idealis').style.textDecoration="italic";
    document.getElementById('idealis').textContent="AZ IDEÁLIS TESTTÖMEGE: "+idealis+" kg";

    let szelso_also=18.5*((magassag/100)**2);
    let szelso_felso=24.9*((magassag/100)**2);
    document.getElementById("szelso").textContent=szelso_also.toFixed()+" - "+szelso_felso.toFixed();

}

function init(){
    document.getElementById('szamit').addEventListener("click",szamit);
    console.log("Init")
}
document.addEventListener('DOMContentLoaded',init)
function kuldes(){
    var kijeloles = document.getElementById("kijelolve").checked;
    var mezo = document.getElementsByClassName("bevitel").value;

    let form = document.getElementById('form');
    form.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScQA5AvgthBoj-6c4nPFNnuXJA4SKZ-ZRmsEhJYiBEvx6p6Vg/formResponse';
    form.method = 'POST';
    form.target = "hidden_iframe";

    if(mezo == ""){
        alert("Kérlek írj be adatokat a megadott mezőre!")
    }
    if(kijeloles == false){
        alert("Először pipáld ki a mezőt!");
    }else{
        if(kijeloles == true){
            form.submit();
            window.location.href = "/elfogadva.html"
        }
    }
}
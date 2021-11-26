function openKooth(){
    window.open("https://www.kooth.com/");
}
function openFrank(){
    window.open("http://www.talktofrank.com/");
}
function openYoungMinds(){
    window.open("https://www.youngminds.org.uk/");
}
function openCeop(){
    window.open("https://ceop.police.uk/safety-centre/");
}
function openDurham(){
    window.open("http://www.durham.gov.uk/onepoint");
}
function openChildline(){
    window.open("https://www.childline.org.uk/");
}
function on() {
    document.getElementById("overlay1").style.display = "block";
  }
  function off() {
    document.getElementById("overlay1").style.display = "none";
  }
  function on2() {
    document.getElementById("overlay2").style.display = "block";
    console.log("yes")
  }
  function off2() {
    document.getElementById("overlay2").style.display = "none";
  }
  function on3() {
    document.getElementById("overlay3").style.display = "block";
  }
  function off3() {
    document.getElementById("overlay3").style.display = "none";
  }
  function on4() {
    document.getElementById("overlay4").style.display = "block";
  }
  function off4() {
    document.getElementById("overlay4").style.display = "none";
  }
  function on5() {
    document.getElementById("overlay5").style.display = "block";
  }
  function off5() {
    document.getElementById("overlay5").style.display = "none";
  }
  function on6() {
    document.getElementById("overlay6").style.display = "block";
  }
  function off6() {
    document.getElementById("overlay6").style.display = "none";
  }
  function on7() {
    document.getElementById("overlay7").style.display = "block";
  }
  function off7() {
    document.getElementById("overlay7").style.display = "none";
  }
  function on8() {
    document.getElementById("overlay8").style.display = "block";
  }
  function off8() {
    document.getElementById("overlay8").style.display = "none";
  }
  function on9() {
    document.getElementById("overlay9").style.display = "block";
  }
  function off9() {
    document.getElementById("overlay9").style.display = "none";
  }
  function on10() {
    document.getElementById("overlay10").style.display = "block";
  }
  function off10() {
    document.getElementById("overlay10").style.display = "none";
  }
  function on11() {
    document.getElementById("overlay11").style.display = "block";
  }
  function off11() {
    document.getElementById("overlay11").style.display = "none";
  }
  function on12() {
    document.getElementById("overlay12").style.display = "block";
  }
  function off12() {
    document.getElementById("overlay12").style.display = "none";
  }
  function on13() {
    document.getElementById("overlay13").style.display = "block";
  }
  function off13() {
    document.getElementById("overlay13").style.display = "none";
  }
  function on14() {
    document.getElementById("overlay14").style.display = "block";
  }
  function off14() {
    document.getElementById("overlay14").style.display = "none";
  }
  // Initialize and add the map
function initMap() {
  // The location of Uluru
  const DCYP = { lat: 54.79628385028316, lng:-1.589573868235851 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: DCYP,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: DCYP,
    map: map,
  });
}
  


//Service worker

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.error('Service Worker registration failed:', error);
      });
  });
}

//<- service worker



function würfeln() {
}

function bildWechseln(istGedrueckt) {
  var Bild = document.getElementById("Bild");
  if (istGedrueckt) {
    
    

    var zahlInput = document.getElementById("Zahl1").value;
    if(zahlInput === "") {
      Zeichen.innerHTML = `?`;
      return;
    }
    
    if(isNaN(zahlInput)) {
      Zeichen.innerHTML = `?`;
      return;
    }

    var zahlInput = document.getElementById("Zahl2").value;
    if(zahlInput === "") {
      Zeichen.innerHTML = `?`;
      return;
    }
    
    if(isNaN(zahlInput)) {
      Zeichen.innerHTML = `?`;
      return;
    }
    
    let sign;
    let z;
    let min = document.getElementById("Zahl1").value;
    let max = document.getElementById("Zahl2").value;
    
    let area = max - min + 1;
    
    sign = Math.floor(Math.random() * area);
    
    z = parseFloat(sign) + parseFloat(min);
    
    Zeichen.innerHTML = `${z}`;






    Bild.src = "pictures/Start2.jpg";
  } else {
    Bild.src = "pictures/Start1.jpg";
  }
}

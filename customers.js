function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbxXdtmC4WLNvSD6cFhAwjy7eOBHHFR3cRh17R4TgcBcGlWLHqXZ5PjiFjtfJiohv-Fc/exec"

    fetch(url)
      .then(d => d.json())
      .then(d => {
      
          document.getElementById("app").textContent = d[0].status;
      
      });

}

document.getElementById("btn").addEventListener("click", testGS);

function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbxXdtmC4WLNvSD6cFhAwjy7eOBHHFR3cRh17R4TgcBcGlWLHqXZ5PjiFjtfJiohv-Fc/exec"

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    //credentials: 'omit',
    //headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({name:"HOE", phone: "01025525585", email:"lim@gmail.com", city:"Hayang"})
  });

}

document.getElementById("btn2").addEventListener("click", addGS);
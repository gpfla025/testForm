function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbzZOPQppON5lvB6VujE2PzC8EMdyMOVh1M-XWdg5SfwhQbw88VijhuZoEIymLaLKS-I/exec"

    fetch(url)
      .then(d => d.json())
      .then(d => {
      
          document.getElementById("app").textContent = d[0].status;
      
      });

}

document.getElementById("btn").addEventListener("click", testGS);

function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbzZOPQppON5lvB6VujE2PzC8EMdyMOVh1M-XWdg5SfwhQbw88VijhuZoEIymLaLKS-I/exec"

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    //credentials: 'omit',
    headers: { 
        'Content-Type': 'application/json' 
    },
    redirect: 'follow',
    body: JSON.stringify({first:"Hyelim",last:"Lim",phone:"010-2222-3333"})
  });

}

document.getElementById("btn2").addEventListener("click", addGS);

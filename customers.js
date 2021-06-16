function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbzn-vjkl4BHUGJY8_k_S95cPlzVRkvyOEFOL6YoFwuX-Ryl5HSv8ixrTmqpmFjcn5Sl/exec"

    fetch(url)
      .then(d => d.json())
      .then(d => {
      
          document.getElementById("app").textContent = d[0].status;
      
      });

}

document.getElementById("btn").addEventListener("click", testGS);

function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbzn-vjkl4BHUGJY8_k_S95cPlzVRkvyOEFOL6YoFwuX-Ryl5HSv8ixrTmqpmFjcn5Sl/exec"

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    //credentials: 'omit',
    headers: { 
        'Content-Type': 'application/json' 
    },
    redirect: 'follow',
    body: JSON.stringify({first:"혜림",phone:"010-2222-3333",last:"심"})
  });

}

document.getElementById("btn2").addEventListener("click", addGS);

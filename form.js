function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbxr1eUpUPULzH3jxediZ3FF9heIHrYVTJfxDMvBlj535wmfw1-pGr72RNbp1mps_9iV/exec"



  
  fetch(url)
    .then(d => d.json())
    .then(d => {

      document.getElementById("app").textContent = d[0].status;

    });

}



function addGS(){

  const url = "https://script.google.com/macros/s/AKfycbxr1eUpUPULzH3jxediZ3FF9heIHrYVTJfxDMvBlj535wmfw1-pGr72RNbp1mps_9iV/exec"

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    //referrerPolicy: 'no-referrer',
    body: JSON.stringify({First:"Esther",Phone:"010-5858-7454",Last:"Shim"})
  });

}


document.getElementById("btn").addEventListener("click", testGS);
document.getElementById("btn2").addEventListener("click", addGS);

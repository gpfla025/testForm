function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbzl538XSe-2gVotIsBDy1bcBZYO5HAapKpcoR55cM-EQ9kSPPAVEtkvumPer24yi-uI/exec"



  
  fetch(url)
    .then(d => d.json())
    .then(d => {

      document.getElementById("app").textContent = d[0].status;

    });

}



function addGS(){

  const url = "https://script.google.com/macros/s/AKfycbzl538XSe-2gVotIsBDy1bcBZYO5HAapKpcoR55cM-EQ9kSPPAVEtkvumPer24yi-uI/exec"

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

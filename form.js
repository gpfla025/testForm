function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbycY-ph646C6GVhZILnQliNKoje10moeRPBoMQtPJrdBeC-X8fq7dqHlYTPIH_MU1xb/exec"



  
  fetch(url)
    .then(d => d.json())
    .then(d => {

      document.getElementById("app").textContent = d[0].status;

    });

}

function addGS(){

  const url = "https://script.google.com/macros/s/AKfycbycY-ph646C6GVhZILnQliNKoje10moeRPBoMQtPJrdBeC-X8fq7dqHlYTPIH_MU1xb/exec"

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    //referrerPolicy: 'no-referrer',
    body: JSON.stringify({First:"Esther",Last:"Shim",Phone:"010-5858-7454"})
  });

}

document.getElementById("btn").addEventListener("click", testGS);

document.getElementById("btn2").addEventListener("click", addGS);

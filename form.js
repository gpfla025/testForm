function testGS(){

  const url = "https://script.google.com/macros/s/AKfycbz2gw2BbfXm0JAoSnlacGAFLK4AJJCEFsLLXleJWJeC-ey5SX5vxUIC4HCeDQkFfL98/exec"

  fetch(url)
    .then(d => d.json())
    .then(d => {

      document.getElementById("app").textContent = d[0].status;

    });

}

document.getElementById("btn").addEventListener("click", testGS);
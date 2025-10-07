import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    document.querySelector(".btn").addEventListener("click", generateDomains)
};
  const generateDomains = () => {
    let pronouns = ['my', 'our', 'the', 'his', 'her'];
    let firstAdjectives = ['super', 'huge', 'tiny', 'unfathomable', 'monstrous'];
    let secondAdjectives = ['lit', 'sus', 'fun', 'boring', 'lazy'];
    let nouns = ['garbonzo', 'bassoon', 'sloth', 'koala', 'didgeridoo'];
    let extensions = ['.com', '.net', '.org', '.edu', '.gov'];
    let allDomains = "";

    for(let pronoun of pronouns)
      for(let firstAdjective of firstAdjectives)
        for(let secondAdjective of secondAdjectives)
          for(let noun of nouns)
            for(let extension of extensions) {
              console.log("https://" + pronoun + firstAdjective + secondAdjective + noun + extension);
              allDomains += "https://" + pronoun + firstAdjective + secondAdjective + noun + extension + "<hr>";
          }
    document.getElementById("output").innerHTML = allDomains;
  }

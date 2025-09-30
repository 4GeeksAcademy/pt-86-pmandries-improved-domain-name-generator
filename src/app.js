import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const generateDomains = () => {
    let pronoun = ['my', 'our', 'the', 'his', 'her'];
    let adj1 = ['super', 'huge', 'tiny', 'unfathomable', 'monstrous'];
    let adj2 = ['lit', 'sus', 'fun', 'boring', 'lazy'];
    let noun = ['garbonzo', 'bassoon', 'sloth', 'koala', 'didgeridoo'];
    let extension = ['.com', '.net', '.org', '.edu', '.gov'];

    for(let i = 0; i < pronoun.length; i++) {
      for(let j = 0; j < adj1.length; j++) {
        for(let k = 0; k < adj2.length; k++) {
          for(let l = 0; l < noun.length; l++) {
            for(let m = 0; m < extension.length; m++) {
              console.log("https://" + pronoun[i] + adj1[j] + adj2[k] + noun[l] + extension[m]);
            }
          }
        }
      }
    }
  }
  generateDomains()
};


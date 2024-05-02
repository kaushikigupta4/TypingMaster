const typing_ground=document.querySelector('#textarea');

const btn= document.querySelector('#btn');

const score=document.querySelector('#score');

const show_sentence= document.querySelector("#showSentence")



let startTime, endTime, totalTimeTaken;


const sentences=["In the bustling city streets amidst the cacophony of car horns and chatter life pulses with vibrant energy People rush past each other each with their own destination and purpose like actors in a grand play Tall skyscrapers reach towards the sky their glass facades reflecting the shimmering sunlight"," Down below narrow alleyways hide secrets and stories untold while parks offer oases of calm amid the urban chaos Cafes buzz with conversation the aroma of freshly brewed coffee mingling with the scent of pastries This city is a melting pot of cultures where diversity thrives and dreams take flight","In a quiet forest glade, beneath a canopy of emerald leaves, life teems with unseen wonders. Moss carpets the forest floor, softening each footstep like a silent embrace. Sunlight filters through the branches above, dappling the ground with golden hues. Birds flit from tree to tree, their melodic chirps",
"filling the air with a symphony of sound. Squirrels scamper along the boughs, their playful antics a dance of joy. In this tranquil sanctuary, time slows to a gentle crawl, and worries melt away like morning mist. Here, in nature's embrace, one finds peace, serenity, and a sense of belonging","their playful antics a dance of joy. In this tranquil sanctuary, time slows to a gentle crawl, and worries melt away like morning mist","sound. Squirrels scamper along the boughs, their playful antics a dance of joy. In this tranquil sanctuary, time slows to a gentle crawl, and worries melt away like morning mist. Here, in nature's embrace, o","e teems with unseen wonders. Moss carpets the forest floor, softening each footstep like a silent embrace. Sunlight filters thro","e teems with ytguhjklertgorjgklmfd,unseen wonders. Moss carpets the forest floor, softening each footstep like a silent embrace. Sunlight filters thro"
]

const startTyping=()=>{
let randomNumber=Math.floor(Math.random()*sentences.length)


show_sentence.innerHTML=sentences[randomNumber];

let date=new Date();
 startTime= date.getTime();//time in ms
btn.innerHTML="done"

}




let c=0; let i=0; let actualWords=0;



const calculateSpeed=(totalTimeTaken)=>{
console.log(typing_ground.value);
let totalwords=typing_ground.value.trim();
let actualWords= totalwords===''?'0':totalwords.split(" ").length;
  
console.log(actualWords);
const wpm=Math.round(actualWords*60/(totalTimeTaken));

score.innerText=`your speed is ${actualWords} words in ${Math.round(totalTimeTaken)} sec and your typing speed is ${wpm}`;
}


const endTypingTest=()=>{
  btn.innerHTML="Start";

  let date= new Date()
   endTime=date.getTime();
  totalTimeTaken=(endTime-startTime)/1000;
   console.log( totalTimeTaken)  
   calculateSpeed(totalTimeTaken);
   show_sentence.innerText='';
   typing_ground.value='';
 }
    




btn.addEventListener('click',()=>{
    switch(btn.innerText.toLowerCase()){
    case'start':
    typing_ground.removeAttribute('disabled');
    startTyping();
    break;
    case'done':
    typing_ground.setAttribute('disabled','true')
    endTypingTest();
    break;
    }
})








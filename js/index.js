
// {
//     question:"",
//     a:"",
//     b:"",
//     c:"",
//     d:"",
//     correct:"",
// },

const kbcQuestions = 
    [
        // ----------------- 1 --------------
        [{
            question:"A coin of what value is called as “Athhanni”?",
            a:"1 Rupee",
            b:"25 Paise",
            c:"50 Paise",
            d:"2 Rupee",
            correct:"50 Paise",
        },
        {
            question:"How many squares are there in chess board?",
            a:"49",
            b:"74",
            c:"56",
            d:"64",
            correct:"64",
        }, 
        {
            question:"What do you call homemade cheese?",
            a:"Panir",
            b:"Pury",
            c:"Dahi",
            d:"Ghee",
            correct:"Panir",
        },
        {
            question:"Evaluate :  2+2/2 ",
            a:"2",
            b:"3",
            c:"4",
            d:"1",
            correct:"3",
        },        
        {
            question:"Which of these Roman numerals will have the lowest value?",
            a:"L",
            b:"X",
            c:"V",
            d:"C",
            correct:"V",
        },
        {
            question:"Complete this Hindi idiom: Sau baat ki___",
            a:"Addhi baat",
            b:"Pauni bat",
            c:"Ek baat",
            d:"Dedh baat",
            correct:"Ek baat",
        },
        {
            question:"Where is the Capital of Arunachal Pradesh?",
            a:"Itanagar",
            b:"Dispur",
            c:"Jamnagar",
            d:"Gandhinagar",
            correct:"Itanagar",
        },
        {
            question:"How many colors are there in a rainbow?",
            a:"5",
            b:"6",
            c:"7",
            d:"8",
            correct:"7",
        },
        {
            question:"How many consonants are there in a English alphabet?",
            a:"19",
            b:"21",
            c:"13",
            d:"24",
            correct:"21",
        },
        {
            question:"Which month of the year has the least number of days?",
            a:"February",
            b:"March",
            c:"April",
            d:"June",
            correct:"February",
        },
        {
            question:"Where is the Capital of Madhya Pradesh?",
            a:"Itanagar",
            b:"Dispur",
            c:"Bhopal",
            d:"Gandhinagar",
            correct:"Bhopal",
        },
        {
            question:"Which is not a Capital of any state?",
            a:"Jamshedpur",
            b:"Gandhinagar",
            c:"Raipur",
            d:"Dehradun",
            correct:"Jamshedpur",
        },               
        {
            question:"Where is the Capital of Manipur?",
            a:"Itanagar",
            b:"Dispur",
            c:"Imphal",
            d:"Gandhinagar",
            correct:"Imphal",
        },
        {
            question:"National Anthem of India is",
            a:"Vande Mataram",
            b:"Sare Jaha Se Accha",
            c:"Jhanda Uncha Rahe Hamara",
            d:"Jana Gana Mana",
            correct:"Jana Gana Mana",
        },
        {
            question:"Where is the Capital of Meghalaya?",
            a:"Sikkim",
            b:"Dispur",
            c:"Shillong",
            d:"Gandhinagar",
            correct:"Shillong",
        },
        {
            question:"Where is the Capital of Mizoram?",
            a:"Itanagar",
            b:"Dispur",
            c:"Aizawl",
            d:"Kohima",
            correct:"Aizawl",
        },
        {
            question:"Where is the Capital of Nagaland?",
            a:"Kohima",
            b:"Dispur",
            c:"Jamnagar",
            d:"Gandhinagar",
            correct:"Kohima",
        },
        {
            question:"Where is the Capital of Sikkim?",
            a:"Itanagar",
            b:"Gangtok",
            c:"Jamnagar",
            d:"Sikkim",
            correct:"Gangtok",
        },
        {
            question:"Where is the Capital of Punjab?",
            a:"Itanagar",
            b:"Dispur",
            c:"Jamnagar",
            d:"Chandigarh",
            correct:"Chandigarh",
        },
        {
            question:"Which of these is a board game which can normally be played by only two opponents at a time?",
            a:"Snakes and ladders",
            b:"Chess",
            c:"Carrom",
            d:"Ludo",
            correct:"Chess",
        }],
// ----------------- 2 ------------------------------
        [{
            question:"Who is the governor of bihar as in 2022?",
            a:"Phagu Chauhan",
            b:"Nitesh Kumar",
            c:"RamNath Kovind",
            d:"Sushil Modi",
            correct:"Phagu Chauhan",
        },
        {
            question:"What is the chemical formula for water?",
            a:"H2O",
            b:"H2O2",
            c:"HCL",
            d:"O2",
            correct:"H2O",
        },
        {
            question:"Which among the given animals is NOT vegetarian?",
            a:"giraffes",
            b:"Elephants",
            c:"pandas",
            d:"cat",
            correct:"cat",
        },                
        {
            question:"White Flag is the symbol of",
            a:"Peace",
            b:"War",
            c:"Truth",
            d:"Friendship",
            correct:"Peace",
        },
        {
            question:"Which of these consecutive months have 31 days?",
            a:"January and February",
            b:"June and July",
            c:"July and August",
            d:"September and October",
            correct:"July and August",
        },
        {
            question:"Which month do not have 31 days?",
            a:"August",
            b:"March",
            c:"June",
            d:"October",
            correct:"June",
        },
        {
            question:"Which of these is taken as mouth fresherner after meal?",
            a:"Haldi",
            b:"Dhania",
            c:"Sauf",
            d:"Hing",
            correct:"Sauf",
        },
        {
            question:"Which is the Highest mountain?",
            a:"Mount Everest",
            b:"Kanchenjunga",
            c:"K2",
            d:"Mount Rushmore",
            correct:"Mount Everest",
        },
        {
            question:"In the patriotic song 'Nanha Munna Rahi Hoon', which of these words will come last?",
            a:"Jai Hind, Jai Hind",
            b:"Desh Ka Sipahi Hoon",
            c:"Nanha Munna Rahi Hoon",
            d:"Bolo Mere Sang",
            correct:"Jai Hind, Jai Hind",
        },
        {
            question:" What do you call a house made of ice?",
            a:"Igloo",
            b:"houseboats",
            c:"Kutcha house",
            d:"Society",
            correct:"Igloo",
        },
        {
            question:"Which is the only one of these which comes in different sizes called mini, micro and nano?",
            a:"Trucks",
            b:"Credit cards",
            c:"Cars",
            d:"Sim Cards",
            correct:"Sim Cards",
        },
        {
            question:" Which of these comes in kaali, adrakwali and masala varieties?",
            a:"Chai",
            b:"Chana",
            c:"Chapati",
            d:"Chowmein",
            correct:"Chai",
        },
        {
            question:"Which of these measures is the shortest in length?",
            a:"Half-mile",
            b:"Half foot",
            c:"Half Yard",
            d:"Half Metre",
            correct:"Half foot",
        }],
// ----------------- 3 ------------------------------
        [{
            question:"In which state Kedarnath temple is located?",
            a:"Uttar Pradesh",
            b:"Himachal Pradesh",
            c:"Uttarakhand",
            d:"Jharkhand",
            correct:"Uttarakhand",
        },
        {
            question:"What type of bird lays the largest eggs",
            a:"Ostrich",
            b:"Pengiun",
            c:"Swan",
            d:"Vulture",
            correct:"Ostrich",
        },
        {
            question:"which among them is not a payment app?",
            a:"Paytm",
            b:"Phone Pe",
            c:"Amazon Pay",
            d:"Play Store",
            correct:"Play Store",
        },        
        {
            question:"Materials through which light cannot pass are said to be.....?",
            a:"Transparent",
            b:"Opaque",
            c:"Translucent",
            d:"Obstructor",
            correct:"Opaque",
        },
        {
            question:"Google (www.google.com) is a.....",
            a:"Search Engine",
            b:"Number in Math",
            c:"Directory of images",
            d:"Chat service on the web",
            correct:"Search Engine",
        },
        {
            question:"Which among them is not a mobile company?",
            a:"apple",
            b:"samsung",
            c:"motorola",
            d:"mahindra",
            correct:"mahindra",
        },        
        {
            question:"Choose the correct verb form. The earth _____ round the sun. ",
            a:"move",
            b:"moves",
            c:"moved",
            d:"none of the above",
            correct:"moves",
        },
        {
            question:"What the main particles of an atom are? ",
            a:"Neutron, electron, and proton",
            b:"Proton and electron",
            c:"Photon, electron, and neutron",
            d:"Photon and electron",
            correct:"Neutron, electron, and proton",
        },
        {
            question:"Ampere is the unit of.....?",
            a:"Electric Energy",
            b:"Electric Charge",
            c:"Electrical Current",
            d:"Electromotive Force",
            correct:"Electrical Current",
        },
        {
            question:"What is the main component of biogas and natural gas?",
            a:"Ethane",
            b:"Methane",
            c:"Propane",
            d:"Butane",
            correct:"Methane",
        },
        {
            question:"What metal is a liquid at room temperature?",
            a:"Sodium",
            b:"Mercury",
            c:"Zinc",
            d:"Both Zinc and Sodium",
            correct:"Mercury",
        },
        {
            question:"Which gas in the atmosphere saves us from the UV rays of the sun?",
            a:"Nitrogen",
            b:"Ozone",
            c:"Oxygen",
            d:"Carbon Monoxide",
            correct:"Ozone",
        },
        {
            question:"Which planet is closest to the Earth?",
            a:"Venus",
            b:"Mercury",
            c:"Mars",
            d:"Sun",
            correct:"Venus",
        },
        {
            question:"The mother of which of these characters from the Mahabharata was a 'rakshasi' ?",
            a:"Abhimanyu",
            b:"Ghatotkacha",
            c:"Sahadev",
            d:"Dushasana",
            correct:"Ghatotkacha",
        }
        ],
// ----------------- 4 ------------------------------
        [{
            question:" The hottest planet in the solar system?",
            a:"Mercury",
            b:"Venus",
            c:"Mars",
            d:"Jupiter",
            correct:"Venus",
        },
        {
            question:"Which of the following is used in pencils? ",
            a:"Silicon",
            b:"Phosophorous",
            c:"Graphite",
            d:"Charcoal",
            correct:"Graphite",
        },
        {
            question:" 'Dandia' is a popular dance of ___ ",
            a:"Maharashtra",
            b:"Gujarat",
            c:"Tamil Nadu",
            d:"Punjab",
            correct:"Gujarat",
        },
        {
            question:"Which of the following is the lowermost layer of the Atmosphere?",
            a:"Troposphere",
            b:"Mesosphere",
            c:"Thermosphere",
            d:"Exosphere",
            correct:"Troposphere",
        },
        {
            question:"What is the name of person which controls a football match ",
            a:"A referee",
            b:"An Umpire",
            c:"A spectator",
            d:"A goalkeeper",
            correct:"A referee",
        },
        {
            question:"Mohini Attam dance form developed originally in which of the following states?",
            a:"Karnataka",
            b:"Orissa",
            c:"Tamil Nadu",
            d:"Kerala",
            correct:"Kerala",
        },
        {
            question:"Which of the following is not a part of the Internet?",
            a:"World Wide Web",
            b:"Email",
            c:"CD-ROM",
            d:"HTTP",
            correct:"CD-ROM",
        },
        {
            question:"Candy Crush Saga, Temple Run and Fruit Ninjia are all types of What ? ",
            a:"Search Engines",
            b:"Chat Messangers",
            c:"Games",
            d:"Anti Virus",
            correct:"Games",
        },
        {
            question:"Which is the biggest thing in our solar system ?",
            a:"Jupitar",
            b:"Alpha Century",
            c:"Sun",
            d:"Venus",
            correct:"Sun",
        },
        {
            question:"Skin,ears,and kidneys are examples of_____ ",
            a:"Organ Systems",
            b:"Organs",
            c:"Tissues",
            d:"Cells",
            correct:"Organs",
        }],
// ----------------- 5 ------------------------------
        [{
            question:"How many district are there in bihar?",
            a:"36",
            b:"38",
            c:"40",
            d:"41",
            correct:"38",
        },
        {
            question:"Tansen, a great musician of his time, was in the court of – ",
            a:"Akbar",
            b:"Shahjahan",
            c:"Bahadur Shah",
            d:"Jahangir",
            correct:"Akbar",
        },
        {
            question:"IPL is associated with which sport in India? ",
            a:"Football",
            b:"Cricket",
            c:"Hockey",
            d:"Badminton",
            correct:"Cricket",
        },
        {
            question:"Which is a green planet in the solar system? ",
            a:"Pluto",
            b:"Venus",
            c:"Uranus",
            d:"Mars",
            correct:"Uranus",
        },
        {
            question:"When is the ' World environment Day ' celebrated",
            a:"June 5",
            b:"April 7",
            c:"October 24",
            d:"None of the above",
            correct:"June 5",
        },
        {
            question:"International Women's day is observed on",
            a:"3rd March",
            b:"8th March",
            c:"15th March",
            d:"18th March",
            correct:"8th March",
        },
        {
            question:"Which of the following is the currency of SriLanka?",
            a:"Dinar",
            b:"Rupee",
            c:"Taka",
            d:"Yen",
            correct:"Rupee",
        },
        {
            question:"Computers calculate numbers in what mode?",
            a:"Decimal",
            b:"Octal",
            c:"Binary",
            d:"None of the above",
            correct:"Binary",
        },
        {
            question:"Which is the largest planet of our solar system?",
            a:"Saturn",
            b:"Jupiter",
            c:"Pluto",
            d:"Neptune",
            correct:"Jupiter",
        },
        {
            question:"Which is the Largest continent?",
            a:"Europe",
            b:"America",
            c:"Asia",
            d:"Africa",
            correct:"Asia",
        },
        {
            question:"Which avatar of Lord Vishnu fought against a demon with the help of a vanar sena?",
            a:"Sri Krishna",
            b:"Vamana",
            c:"Sri Rama",
            d:"Narasimha",
            correct:"Sri Rama",
        },
        {
            question:"Which of these number is normally required to verify a transaction when shopping online using a debit card or credit card?",
            a:"PAN",
            b:"PNR",
            c:"CVV",
            d:"AADHAAR",
            correct:"CVV",
        },
        {
            question:"Approximately how many bones are there in the human body?",
            a:"108",
            b:"206",
            c:"196",
            d:"308",
            correct:"206",
        }

        ]
];
const page1Sound = new Audio("./sounds/Kaun_Banega_Crorepati_Bgm.mp3");
const welcomeSound = new Audio("./sounds/page2_kbc_intro_audio.mp3")
const timerSound1 = new Audio("./sounds/KBC_30.mp3");
const timerSound2 = new Audio("./sounds/KBC_60.mp3");
const timerSound3 = new Audio("./sounds/KBC_90.mp3");
const timerSound4 = new Audio("./sounds/KBC_45.mp3");
const wrongAnswerSound = new Audio("./sounds/wrong_with_dramatic.mp3");
const correctAnswerSound = new Audio("./sounds/kbc_background.mp3");
const answerLockSound = new Audio("./sounds/ans_lock2.mp3");
const lifelineComesUpSound = new Audio("./sounds/lifeline-comesUp.mp3");
const audiencePollSound = new Audio("./sounds/audience_poll.mp3");
const audiencePollImplementationSound = new Audio("./sounds/audiencePoll_Implementation.mp3");
const doubleDipWrongAnswerSound = new Audio("./sounds/wrong_ans.mp3");
const themeMusic = new Audio("./sounds/THEME_MUSIC2.mp3");

let contestantIndex = 2;
let currentQuestIndex = 0;
let currentRandomQuestIndex;
let currQuestObject;
let prevQuestIndex;
let currSetTimeoutId ;

let lifelineFlag = {
    fiftyFiftyFlag : 1,
    expertAdviceFlag : 1,
    doubleDipMarker: 0,
}

let quitFlag = {
    wrongAnswerFlag: 0,
    timeUpFlag: 0,
    quitButtonFlag: 0,
    oneCroreFlag: 0,
    winningAmount: 0,
}

let colors = {
    page2btn : "rgb(30, 115, 125)",
}


const disableNextButton = ()=>{
    ele = document.getElementById("Next");
    if(ele.classList.contains("pointer-events-none")==false)
        document.getElementById("Next").classList.add("pointer-events-none");
}

const enableNextButton = ()=>{
    document.getElementById("Next").classList.remove("pointer-events-none");
}


const disableQuitButton = ()=>{
    ele = document.getElementById("Quit");
    if(ele.classList.contains("pointer-events-none")==false)
        document.getElementById("Quit").classList.add("pointer-events-none");
}

const enableQuitButton = ()=>{
    document.getElementById("Quit").classList.remove("pointer-events-none");
}

const optButtonDisabled = ()=>{
    document.querySelectorAll(".answer-opt").forEach((e)=>{
        e.classList.add("pointer-events-none");
    })
}

const optButtonEnabled = ()=>{
    document.querySelectorAll(".answer-opt").forEach((e)=>{
        e.classList.remove("pointer-events-none");
    })
}

const TimeUpSound = ()=>{
    wrongAnswerSound.currentTime=3.6;
    wrongAnswerSound.play();
}

const timeUp = ()=>{
    TimeUpSound();
    quitFlag.timeUpFlag = 1;
    document.getElementById("result").innerText = "Time Up!";
    disableLifelineButton();
    disableQuitButton();
    optButtonDisabled();
    setTimeout(()=>{
        correctAns = currQuestObject.correct;
        correctOptionId = correctOptionAnsEle(correctAns);
        document.getElementById(correctOptionId).style.backgroundColor = "greenyellow";
        document.getElementById(correctOptionId).style.color = "black";
    }, 8000)
    setTimeout(openQuitPage,10000);
}

const stopWatch = () => {
    let timerDuration;
    if (currentQuestIndex < 3) {
        timerDuration = 30;
        document.querySelector(".timer").innerText = timerDuration;
        tikTikSound1();
    } else if (currentQuestIndex < 6) {
        timerDuration = 60;
        document.querySelector(".timer").innerText = timerDuration;
        tikTikSound2();
    } else {
        timerDuration = 90;
        document.querySelector(".timer").innerText = timerDuration;
        tikTikSound3();
    }
}

const tikTikSound1 = () => {
    timerSound1.currentTime = 0;
    timerSound1.play();
    tikTikText();
}
const tikTikSound2 = () => {
    timerSound2.currentTime = 0;
    timerSound2.play();
    tikTikText();
}
const tikTikSound3 = () => {
    timerSound3.currentTime = 0;
    timerSound3.play();
    tikTikText();
}

const tikTikText = () => {
    let innerTextValue = parseInt(document.querySelector(".timer").innerText);
    if (innerTextValue > 0) {
        innerTextValue--;
        document.querySelector(".timer").innerText = innerTextValue;
        clearTimeout(currSetTimeoutId);
        currSetTimeoutId = setTimeout(tikTikText, 1000);
    } else {
        timeUp();
    }
}

const clearStopWatch = () => {
    clearTimeout(currSetTimeoutId);
    timerSound1.pause();
    timerSound2.pause();
    timerSound3.pause();
}

const correctOptionAnsEle = (correctAns)=>{
    obj = currQuestObject;
    for(let items in obj)
    {
        if(obj[items] == correctAns)
            return items;
    }
}

const CorrectAnswerSound = ()=>{
    correctAnswerSound.currentTime = 0;
    correctAnswerSound.play();
}

const WrongAnswerSound = ()=>{
    wrongAnswerSound.currentTime = 0;
    wrongAnswerSound.play();
}

const DoubleDipWrongAnswerSound = ()=>{
    doubleDipWrongAnswerSound.currentTime = 0;
    doubleDipWrongAnswerSound.play();
}

//Result Analysis--------
const resultAnalysis = (e)=>{
    answerLockSound.pause();
    contestantAnsObject = e.childNodes;
    contestantAns = contestantAnsObject[1].nodeValue;
    correctAns = currQuestObject.correct;
    if(contestantAns == correctAns)
    {
        CorrectAnswerSound();
        if(lifelineFlag.doubleDipMarker==1)
        {
            lifelineFlag.doubleDipMarker=0;
        }
        let amount = document.getElementById(currentQuestIndex).innerText;
        amount = amount.replaceAll(",","");
        quitFlag.winningAmount = parseInt(amount);
        document.getElementById("result").innerText = "Correct Answer";
        e.style.backgroundColor = "greenyellow";
        enableNextButton();
        enableQuitButton();
        if(currentQuestIndex==9){
            setTimeout(openQuitPage,8000);
            quitFlag.oneCroreFlag = 1;
            disableQuitButton();
        }
    }
    else
    {
        if(lifelineFlag.doubleDipMarker==1)
        {
            DoubleDipWrongAnswerSound();
            doubleDipLogic(e);
        }
        else
        {
            WrongAnswerSound();
            document.getElementById("result").innerText = "Wrong Answer";
            e.style.backgroundColor = "lightcoral";
            correctOptionId = correctOptionAnsEle(correctAns);
            document.getElementById(correctOptionId).style.backgroundColor = "greenyellow";
            document.getElementById(correctOptionId).style.color = "black";
            disableQuitButton();
            quitFlag.wrongAnswerFlag = 1;
            setTimeout(openQuitPage,8000);
        }
    }
}

const bulletTimeout = (flag,bullets,clearTimeoutId,e)=>{
    if(flag==3)
        {
            document.querySelector("#game-area-result").classList.remove("checking-bullets-container");
            let resultBack = `<div id="result" class="result">Welcome to Kaun Banega Crorepati</div>`;
            let lifelineBox = `
                <div class="lifeline-box">
                    <div class="lifeline-item fifty-fifty">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item expert-advice">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                </div>
            `;
            let gameAreaFullItem = resultBack + lifelineBox;
            document.getElementById("game-area-result").innerHTML = gameAreaFullItem;
            resultAnalysis(e);
        }
    else
      {
          let ele = document.querySelector(".checking-bullets-container");
          ele.innerHTML = bullets;
          ele.children[flag].style.backgroundColor = "gold";
          clearTimeout(clearTimeoutId);
          flag++;
          clearTimeoutId = setTimeout(bulletTimeout,800,flag,bullets,clearTimeoutId,e);
      }

    }

const bulletsRunning = (e)=>{
    document.querySelector("#game-area-result").classList.add("checking-bullets-container");
    let bullets = `
      <div class="bullets"></div>
      <div class="bullets"></div>
      <div class="bullets"></div>
    `
    disableNextButton();
    disableQuitButton();
    let clearTimeoutId;
    let flag=0;
    bulletTimeout(flag,bullets,clearTimeoutId,e);
}

const AnswerLockSound = ()=>{
    answerLockSound.currentTime = 0;
    answerLockSound.play();
}

const disableLifelineButton = ()=>{
    document.getElementById("lifeline-button").classList.add("pointer-events-none");
}

const enableLifelineButton = ()=>{
    document.getElementById("lifeline-button").classList.remove("pointer-events-none");
}

// on click any option by the player----------
const optionFun = ()=>{
    document.querySelectorAll(".answer-opt").forEach((e)=>{
        
        e.addEventListener("click",()=>{
            AnswerLockSound();
            e.style.backgroundColor = "gold";
            e.style.color = "black";
            clearStopWatch();
            optButtonDisabled();
            bulletsRunning(e);
            disableLifelineButton();
        })
    })
}


//Life-line.............

function LifelineImplementationSound(){
    audiencePollSound.currentTime = 4;
    audiencePollSound.play();
}

// Expert Advice lifeline --------------------
const tikTikSound4 = () => {
    timerSound4.currentTime = 0;
    timerSound4.play();
}
const expertAdviceCrossMark = () => {
    let t = document.querySelector(".expert-advice").children;
    for(let i=0;i<t.length;i++)
        t[i].classList.add("opacity-one");
}

const expertAdviceHandler = () => {
    lifelineFlag["expertAdviceFlag"] = 0;
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "Expert Advice";
    document.querySelector(".expert-advice").classList.add("pointer-events-none");
    expertAdviceCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(2000);
    // Start a 45-second timer
    tikTikSound4();
    let timer = 45;
    const timerId = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector(".timer").innerText = timer;
        } else {
            timerSound4.pause();
            clearInterval(timerId);
            document.querySelector(".timer").innerText = "Time's up!";
        }
    }, 1000);
    optButtonEnabled();
    enableQuitButton();
}

const expertAdvice = () => {
    if(lifelineFlag["expertAdviceFlag"])
    {
        document.querySelector(".expert-advice").addEventListener("click",expertAdviceHandler);
    }
    else
    {
        expertAdviceCrossMark();
        document.querySelector(".expert-advice").classList.add("pointer-events-none"); 
    }
}

// 50-50 lifeline-----------

const fiftyFiftyCrossMark = ()=>{
    let t = document.querySelector(".fifty-fifty").children;
    for(let i=0;i<t.length;i++)
        t[i].classList.add("opacity-one");
}

const FiftyFiftySound = ()=>{
    audiencePollSound.currentTime = 8.2;
    audiencePollSound.play();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function correctAnsIndex(array,key){
    for(let i=0;i<array.length;i++)
    {
        if(array[i]==key)
            return i;
    }
    return 0;
}

const fiftyFiftyLogic = ()=>{
    let arr = ["a","b","c","d"];
    arr = shuffleArray(arr);
    let correctAns = currQuestObject.correct;
    correctOptionId = correctOptionAnsEle(correctAns);
    ansIndex = correctAnsIndex(arr,correctOptionId);

    temp = arr[0];
    arr[0] = arr[ansIndex];
    arr[ansIndex] = temp;

    document.getElementById(arr[1]).innerText = "";
    document.getElementById(arr[2]).innerText = "";
    ele = document.getElementById(arr[1]).style.pointerEvents = "none";
    document.getElementById(arr[2]).style.pointerEvents = "none";
}


const fiftyFiftyHandler = ()=>{
    lifelineFlag["fiftyFiftyFlag"] = 0;
    disableQuitButton();
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "Implementing 50-50 ...";
    LifelineImplementationSound();
    document.querySelector(".fifty-fifty").classList.add("pointer-events-none");
    fiftyFiftyCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText ;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(()=>{
        document.getElementById("result").innerText = "Two Wrong Answers Removed!!";
        fiftyFiftyLogic();
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        optButtonEnabled();
        enableQuitButton();
    },4250);
}

const fiftyFifty = ()=>{
    if(lifelineFlag["fiftyFiftyFlag"])
    {
        document.querySelector(".fifty-fifty").addEventListener("click",fiftyFiftyHandler);
    }
    else
    {
        fiftyFiftyCrossMark();
        document.querySelector(".fifty-fifty").classList.add("pointer-events-none"); 
    }
}

const lifelineApplied = ()=>{
    let lifelineNum = document.querySelector(".lifeline-no").innerText;
    if(lifelineNum>0)
    {
        document.getElementById("lifeline-button").addEventListener("click",()=>{
            clearStopWatch();
            optButtonDisabled();
            disableNextButton();
            disableLifelineButton();
        })
    }
}

function shuffleOptions(currQuestObject){
    one = currQuestObject.a;
    two = currQuestObject.b;
    three = currQuestObject.c;
    four = currQuestObject.d;
    arr = [one,two,three,four];
    arr = shuffleArray(arr);
    currQuestObject.a = arr[0];
    currQuestObject.b = arr[1];
    currQuestObject.c = arr[2];
    currQuestObject.d = arr[3];

    return currQuestObject;
}
const buildKBCquestions = ()=>{
    questSetLength = kbcQuestions[contestantIndex].length;
    if (currentQuestIndex >= questSetLength) {
        // Move to the next contestant (i.e., the next array of questions)
        contestantIndex++;
        currentQuestIndex = 0;
    }
    currQuestObject = kbcQuestions[contestantIndex][currentQuestIndex];
    currQuestObject = shuffleOptions(currQuestObject);
    const kbcQuestionsContent = `
        <div class="timer-container">
            <div class="timer">0</div>
        </div>
        <div class="question-box">
            <div class="question">${currQuestObject.question}</div>
        </div>
        <div class="answer-box">
            <div id="a" class="answer-opt"><span>A)</span>${currQuestObject.a}</div>
            <div id="b" class="answer-opt"><span>B)</span>${currQuestObject.b}</div>
            <div id="c" class="answer-opt"><span>C)</span>${currQuestObject.c}</div>
            <div id="d" class="answer-opt"><span>D)</span>${currQuestObject.d}</div>
        </div>
    `;

    document.querySelector(".game-area-ques-ans").innerHTML = kbcQuestionsContent;
    optionFun();
    lifelineApplied();
    fiftyFifty();
    expertAdvice();
}


const nextButtonFun = ()=>{
    if(currentQuestIndex < kbcQuestions.length-1)
    {
        currentQuestIndex++;
        buildKBCquestions();
        buildMoneyArea();
        questForSpecificPrizeMoney();
        clearStopWatch();
        stopWatch();
        correctAnswerSound.pause();
        wrongAnswerSound.pause();
        if(document.querySelector(".lifeline-no").innerText >0 )
            enableLifelineButton();
        quitButton();
        disableNextButton();
    }
}

const buildMoneyArea = ()=>{
    let moneyAreaPrizes = `
            <div id="0" class="each-prize">100</div>
            <div id="1" class="each-prize">200</div>
            <div id="2" class="each-prize">300</div>
            <div id="3" class="each-prize">400</div>
            <div id="4" class="each-prize">500</div>
            <div id="5" class="each-prize">600</div>
            <div id="6" class="each-prize">700</div>
            <div id="7" class="each-prize">800</div>
            <div id="8" class="each-prize">900</div>
            <div id="9" class="each-prize">1000</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('2').style.color = "gold";
    document.getElementById('5').style.color = "gold";
    document.getElementById('4').style.color = "blue";
    let prizeId = `${currentQuestIndex}`;
    document.getElementById(prizeId).style.backgroundColor = colors.page2btn;
    document.getElementById(prizeId).style.borderRadius = "5px";
}

const questForSpecificPrizeMoney = ()=>{
    let prizeId = `${currentQuestIndex}`;
    let prizeValue = document.getElementById(prizeId).innerText ;
    document.getElementById("result").innerText = `Question for ${prizeValue}`;
}

function congratulationComment(ind){
    let comment ;
    if(ind<2)
        comment = "Well";
    else if(ind>=2 && ind<5)
        comment = "Well Played";
    else if(ind>=5 && ind<7)
        comment = "Great Game";
    else if(ind>=7 && ind<9)
        comment = "You Rock";
    else
        comment = "fabulous performance";

    return comment;
}

function lastEndComment(money){
    let com;
    if(money>=600)
        com = "congratulation for winning such a huge amount!";
    else if(money>0)
        com = "It was a good game. played nicely!!";
    else
        com = "Sorry you could not win anything.";

    return com;
}

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function formatedMoney(money){
    let m = money.toString();
    let temp = "";
    if(m.length==5)
    {
        for(let i=0;i<5;i++)
        {
            if(i==2)
                temp+=',';
            temp+=m[i];
        }
        return temp;
    }
    else if(m.length>5)
    {
        for(let i=m.length-1;i>=0;i--)
        {
            if(i==m.length-4 || i==m.length-6)
                temp+=',';
            temp+=m[i];
        }
        temp = reverseString(temp);
        return temp;
    }
    else 
        return m;
}

function ThemeMusic(){
    themeMusic.currentTime = 0;
    themeMusic.play();
}

function openQuitPage(){
    contestantName = document.getElementById("contestant-name").innerText;
    let congratulation;
    let money;
    let lastComment;
    if(quitFlag.oneCroreFlag)
    {
        congratulation = congratulationComment(9);
        money = "1000 Rupees";
        lastComment = "Congratulation to the winner of KBC";
    }
    else if(quitFlag.timeUpFlag)
    {
        let temp;
        temp = currentQuestIndex-1;
        congratulation = congratulationComment(temp);
        money = quitFlag.winningAmount;
        lastComment = lastEndComment(money);    
        money = formatedMoney(money);    
    }
    else if(quitFlag.wrongAnswerFlag)
    {
        let temp = currentQuestIndex-1;
        congratulation = congratulationComment(temp);
        if(quitFlag.winningAmount>=600)
            money = 600;
        else if(quitFlag.winningAmount>=300)
            money = 300;
        else 
            money = 0;        
        lastComment =  `Your prize money comes down from ${quitFlag.winningAmount} to ${money} due to wrong answer.`;
        money = formatedMoney(money);    
    }
    else 
    {
        let temp = currentQuestIndex-1;
        congratulation = congratulationComment(temp);
        money = quitFlag.winningAmount;
        lastComment = lastEndComment(money);
        money = formatedMoney(money);    
    }
    quitContent = `  
    <div class="quit-container">
        <div class="transfer-image"></div>
        <div class="quit-info-container">
            <div class="people">
                <div class="person-image"></div>
                <div class="person-info">
                    <p id="contestant-name">${contestantName}</p>
                    <span>contestant</span>
                </div>
            </div>
            <div class="congratulation">${congratulation}</div>
            <div class="prize-money-earned">Prize Money Earned :</div>
            <div class="money">${money}</div>
            <div class="last-comment">${lastComment}</div>
        </div>
    </div>

    `;
    ThemeMusic();
    document.querySelector(".game-area").innerHTML = quitContent;

}

function quitButton(){
    document.querySelector("#Quit").addEventListener("click",()=>{
        quitFlag.quitButtonFlag = 1;
        correctAns = currQuestObject.correct;
        correctOptionId = correctOptionAnsEle(correctAns);
        document.getElementById(correctOptionId).style.backgroundColor = "greenyellow";
        document.getElementById(correctOptionId).style.color = "black";
        DoubleDipWrongAnswerSound();
        optButtonDisabled();
        clearStopWatch();
        correctAnswerSound.pause();
        setTimeout(openQuitPage,10000);
    });
}

document.querySelector(".lets-play-image").addEventListener("click",()=>{
    buildKBCquestions();
    buildMoneyArea();
    questForSpecificPrizeMoney();
    welcomeSound.pause();
    stopWatch();
    document.querySelector("#Next").addEventListener("click",nextButtonFun);
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    quitButton();
    disableNextButton();
})

const openingSound = ()=>{
    page1Sound.currentTime = 0;
    page1Sound.play();
}

const WelcomeSound = ()=>{
    welcomeSound.currentTime = 0;
    welcomeSound.play();
}

// just to show the money stack before the game begins..
const showMoneyStack = ()=>{
    let moneyAreaPrizes = `
            <div id="0" class="each-prize">100</div>
            <div id="1" class="each-prize">200</div>
            <div id="2" class="each-prize">300</div>
            <div id="3" class="each-prize">400</div>
            <div id="4" class="each-prize">500</div>
            <div id="5" class="each-prize">600</div>
            <div id="6" class="each-prize">700</div>
            <div id="7" class="each-prize">800</div>
            <div id="8" class="each-prize">900</div>
            <div id="9" class="each-prize">1000</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('2').style.color = "gold";
    document.getElementById('5').style.color = "gold";
    document.getElementById('4').style.color = "blue";
}

const hoverLifeline = ()=>{
    let beforeInnerText = document.getElementById("result").innerText;
    document.querySelectorAll(".lifeline-item").forEach((ele)=>{
        ele.addEventListener("mouseover",()=>{
            document.getElementById("result").innerText = ele.classList[1];
        })
    })
}

const LifelineComesUpSound = ()=>{
    lifelineComesUpSound.currentTime = 0;
    lifelineComesUpSound.play();
}

const showLifeline = ()=>{
        document.querySelector("#lifeline-button").addEventListener("click",()=>{
            document.querySelector(".lifeline-box").classList.toggle("show-lifeline");
            hoverLifeline();
            LifelineComesUpSound();
            
        })
}

// adding modal on clicking sitHotSeat button
const sitOnTheHotSeatFun = ()=>{
    let contestantName = document.getElementById("contestant-name-input").value;
    if(contestantName=="")
        contestantName = "Anonymous";
    page1Sound.pause();
    WelcomeSound();
    document.getElementById("page2").classList.add("show-modal");
    document.getElementById("contestant-name").innerText = contestantName;
    showMoneyStack();
    showLifeline();
}
document.getElementById("sitOnTheHotSeat").addEventListener("click",sitOnTheHotSeatFun);



// adding modal on clicking rules button
document.getElementById("btn-rules").addEventListener("click",()=>{   
    document.getElementById("modal-container-rules").classList.add("show-modal");
})

document.getElementById("close-modal-btn").addEventListener("click",()=>{
    document.getElementById("modal-container-rules").classList.remove("show-modal");
})



//show that the button is clicked by flicking shadow
const allBtns = document.querySelectorAll('.btn');  
allBtns.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        buttonSelect(ele);
        transitionEndListener(ele);
    })
})

const buttonSelect = (element)=>{
    element.style.boxShadow = "0px 0px 10px 4px rgb(64, 189, 189)";
}

const buttonDeselect = (element)=>{
    element.style.boxShadow = "none";
}

const transitionEndListener = (element)=>{
    element.addEventListener("transitionend",()=>{
        buttonDeselect(element);
    })
}

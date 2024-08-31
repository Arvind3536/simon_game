

let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["red","yellow","green","purple"];

h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
        {
            started=true;
            console.log("game start");
        }
        levelUp();
});

function btnFlash(btn)
{
btn.classList.add("flash");

setTimeout(function()
{
    btn.classList.remove("flash");
},150);
};

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnFlash(randomBtn);
}

function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
        {
            if(userSeq.length == gameSeq.length)
                {
                    setTimeout(levelUp,1000);
                }
        }else
        {
            h2.innerHTML=`Game over!! your score was <b> ${level}</b> <br> press any key to start`;

            reset();
        }
}

function btnpress()
{
    let btn=this;
    btnFlash(btn);
    let color=btn.getAttribute("id");
    userSeq.push(color);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
    {
        btn.addEventListener("click",btnpress);
    }

    function reset()
    {
        userSeq=[];
        gameSeq=[];
        started=false;
        level=0;
    }
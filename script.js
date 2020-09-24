//initializing as the game starts
 const game=new Game()
 game.start();

 function Game(){
     const gameboard=new GameBoard()
     const playerSelection=new Player(gameboard)
     const computerSelection=new Computer(gameboard)
     //keeping the track of the game
     let turn = 0;

//This will be called to start the tic tac toe game
    this.start = function(){
        //observing whether things are changing in the DOM
        const config = {childList: true}
        const observer=new MutationObserver(() => takeTurn())
        gameboard.positions.forEach((el) => observer.observe(el, config))
         takeTurn()

    }
    function takeTurn(){
        if( turn % 2===0){
            playerSelection.takeTurn();
        }else{
            computerSelection.takeTurn();
        }
        turn ++

    }

 }

 function GameBoard(){
     this.positions=Array.from(document.querySelectorAll('.columns'))
     console.log(this.positions)

 }

 function Player(gameboard){
     this.takeTurn=function(){
         //console.log("player turns")
         gameboard.positions.forEach(el => el.addEventListener('click',handleTurnTaken))
    
     }
     function handleTurnTaken(event){
         //targeting which column is clicked
         event.target.innerText='X'
        //  console.log("Turn taken")
        gameboard.positions.forEach(el =>el.removeEventListener('click',handleTurnTaken))

     }
    
}

function Computer(gameboard){
    this.takeTurn=function(){
        // console.log("Computer turns")
        //creating a variable that checks for the existing positions in the array
        const availablePositions=gameboard.positions.filter((p)=>p.innerText==='')
        const move=Math.floor(Math.random() * availablePositions.length)
        availablePositions[move].innerText='O'
    }
    
}












//  const game={
//      gameboard:["x","x","x","x","x","o","o","o"],
//      displayController:{
//          players,
//          computer
//      },
//      players:[{
//         player:{
//             name:"vivian",
//             mark:"X"
//         },
//         computer:{
//             name:"",
//             mark:"o"
//         }
//     }
//      ]
    
     
//  }

//  function Game(){
//      let gameboard=[]
//      function GameBoard(){
         
         
//      }
//      function displayController(player,computer){

//      }
//      function players(name,mark){
         
//          return {name,
//          mark,
//          playGame=function(){
//              console.log("vivian","x")

//          }
//         }
//      }
//  }
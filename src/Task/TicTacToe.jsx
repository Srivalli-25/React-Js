import {useState} from 'react';
import './TicTacToe.css';
export default function TicTacToe() {
    const [board,setBoard] = useState(["","","","","","","","",""]);
    const[player,setPlayer]=useState("X");
    const[winner,setWinner]=useState(null);
    const[draw,setDraw]=useState(false);
    const[player1,setPlayer1]=useState("");
    const[player2,setPlayer2]=useState("");
    const[gameStarted,setGameStarted]=useState(false);
    function hnadleClick(index){
        if(board[index]!==""||winner)
        {
            return;
        }
        const newBoard =[...board];
        newBoard[index]=player;
        setBoard(newBoard);
        const result =checkWinner(newBoard);
        if(result)
        {
            setWinner(result);
            return;
        }
        if(newBoard.every((cell)=>cell!=="")){
            setDraw(true);
            return;
        }
        setPlayer(player === "X" ? "O" : "X");

    }
    const checkWinner = (board)=>{
        const winningPatterns=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let pattern of winningPatterns){
            const[a,b,c]=pattern;
            if(board[a]&&board[a]===board[b]&&board[a]===board[c]){
                return board[a];
            }
        }
    };
    const restartGame=()=>{
            setBoard(["","","","","","","","",""]);
            setPlayer("X")
            setWinner(null);
            setDraw(false);
            setPlayer1("");
            setPlayer2("");
            setGameStarted(false);
        };
return (
    <div>
        <h1>Tic - Tac - Toe Game</h1>
        {!gameStarted &&(
            <div className='start-card'>
                <h2>Enter player Names</h2>
                <input type="text" name="name" placeholder='Player 1 Name'
                value={player1} onChange={(e)=>setPlayer1(e.target.value)} />
                <input type="text" name="name2" placeholder='Player 2 Name'
                value={player2} onChange={(e)=>setPlayer2(e.target.value)} />
                <button onClick={()=>{
                    if(player1===""||player2===""){
                        alert("Please enter both player names");
                        return;
                }
                setGameStarted(true);}}
                >Start Game</button>
            </div>
        )

        }
    {gameStarted && !winner && !draw &&(<h2>{player === "X"? player1:player2}{" "}({player}) Turn</h2>)}
    {winner && <h2>{winner === "X" ? player1 : player2} ({winner}) Wins!🎉</h2>}
    {draw && <h2>It's a Draw! 🫱🏻‍🫲🏻</h2>}
    <div className="board">
        {board.map((value,index)=>(
        <button key={index} className={value === "X" ? "x" : value === "O" ? "o": ""} onClick={()=>hnadleClick(index)}>
            {value}
            </button>
        ))}
    </div>
    <button className='restart-btn' onClick={restartGame}>Restart Game</button>
    </div>
)
}

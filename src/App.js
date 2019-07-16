import React, {Component} from 'react';
import Cell from './cell';
import './App.css';

class App extends Component{

  state={

    data:[1,2,3,4,5,6,7,8,9],
    game: new Array(9),
    player:"x",
    count:0
  };

  changePlayer =()=>{
    this.setState({player: (this.state.player=="x") ? "o" : "x" })
   };

  checkGame=()=>{

    const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    let {game}= this.state;
    for(let i=0; i<win.length; i++){
      let id = win[i];
      let check = game[id[0]] && game[id[0]] == game[id[1]] && game[id[1]] == game[id[2]];
      if(check)return true

    }

    return false
  };


  updateData=(id)=>{
    console.log(this.state.count)
    this.setState({count: ++this.state.count})

this.state.game[id]=this.state.player;
this.setState({game:this.state.game});
    (this.checkGame()) ? alert(`WIN ${this.state.player}`) : (this.state.count === 9) && alert("DRAW")
console.log(this.state.game)


this.changePlayer()

  }

  render () {

  return (

    <div className="main">
      {
        this.state.data.map((el, key)=>{
          return(
              <Cell id={key} value={this.state.player} onclick={this.updateData} />
              )

        })


      }

    </div>
  );
}
}
export default App;

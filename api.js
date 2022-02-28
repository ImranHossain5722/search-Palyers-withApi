
const allPlayer = ()=> {

    document.getElementById('spinner').style.display="block"
    document.getElementById('divParent').innerHTML="";
    const searchPlayerName = document.getElementById('search-input').value
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchPlayerName}`

    fetch(url)
    .then(response => response.json())
    .then (data => {
        if(data.player == null){
             document.getElementById('spinner').style.display="block"
        }else{
            disPlayAllPlayers(data.player)
             document.getElementById('spinner').style.display="none"
        }
    });

}
const disPlayAllPlayers = (players)=>{

    const mainDiv =document.getElementById('divParent')
  
  for (const player of players ){
    const div =document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${player.strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Player Name: ${player.strPlayer} </h5>
      <h5 class="card-text">Country: ${player.strNationality}</h5>
      <a href="#" class="btn btn-danger">Delete</a>
      <a href="#" onclick="PlayerDetail(${player.idPlayer})" class="btn btn-success ">Details</a>
    </div>
  </div>
  
    `;
    mainDiv.appendChild(div)
  }
}

const PlayerDetail =(detail)=>{

    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${detail}`

    fetch (url)
    .then (response => response.json())
    .then (data => setDetails(data.players[0]))
}

const setDetails =(info)=>{

    if( info.strGender == 'Male'){
        document.getElementById('male').style.display = "block"
        document.getElementById('female').style.display = "none"
    }else{
        document.getElementById('male').style.display = "none"
        document.getElementById('female').style.display = "block"

    }



    document.getElementById('rightDiv').innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${info.strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Player Name: ${info.strPlayer} </h5>
      <h5 class="card-text">Country: ${info.strNationality}</h5>
      <h5 class="card-text">Date of Berth: ${info.dateBorn}</h5>
      
    </div>
  </div>
    `
}
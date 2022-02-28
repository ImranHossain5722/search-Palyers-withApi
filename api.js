
const allPlayer = ()=> {

    const searchPlayerName = document.getElementById('search-input').value
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchPlayerName}`

    fetch(url)
    .then(response => response.json())
    .then (data => disPlayAllPlayers(data.player))
}

const disPlayAllPlayers = (players)=>{

    const mainDiv =document.getElementById('divParent')
  
  for (const player of players){
    const div =document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${player.strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Player Name: ${player.strPlayer} </h5>
      <p class="card-text">${player.strNationality}</p>
      <a href="#" class="btn btn-danger">Delete</a>
      <a href="#" class="btn btn-success ">Details</a>
    </div>
  </div>
  
    `;
    mainDiv.appendChild(div)
    console.log(player);

  }
}
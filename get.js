//  console.log(axios)

//  let url = fetch('https://www.reddit.com/r/Sailboats/.json')

//  async function getURL(){

//      console.log(url)
//  }

//  getURL()
// import axios
// axios.get('')


// console.log(fetch('https://www.reddit.com/r/Sailboats/.json'))

async function capcut(){
    let cap = await axios.get('https://swapi.dev/api/planets/.json')
    .then((resp)=>{
        console.log(resp.data.results)
        for (let result of resp.data.results){
            console.log(result)
            console.log({name :result})
        }
    })
}

capcut()
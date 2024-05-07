const baseUrl = 'https://swapi.dev/api'

//Obtain all the starships from the API 
export async function getAllStarships(){
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
} 


export async function getStarship(idx){
  const res = await fetch(`${baseUrl}/starships/${idx}`)
  // console.log(res)
  return res.json()
}

export async function getAllPlanets(){
  const res = await fetch(`${baseUrl}/planets`)
  return res.json()
} 

export async function getAPlanet(idx){
  const res = await fetch(`${baseUrl}/planets/${idx}`)
  // console.log(res)
  return res.json()
}


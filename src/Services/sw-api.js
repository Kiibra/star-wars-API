const baseUrl = 'https://swapi.dev/api/'

//Obtain all the starships from the API 
export async function getAllStarships(){
  const res = await fetch(`${baseUrl}/api/startships`)
  return res.json()
}
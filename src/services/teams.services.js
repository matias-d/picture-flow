const API_URL = `${import.meta.env.VITE_BACK_URL}/teams` || 'http://localhost:8080/api/teams'

export async function getTeams () {
    const data = await fetch(API_URL)
    const teams = await data.json()

    return teams
}
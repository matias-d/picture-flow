import { API_URL } from "./api"

const API_TEAMS = `${API_URL}/teams`

export async function getTeams () {
    const data = await fetch(API_TEAMS)
    const teams = await data.json()

    return teams
}
import { API_URL } from "./api"

const API_AUTH = `${API_URL}/auth`

async function singin ({ credentials }) {

    const config = {
          method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
    }

    const data = await fetch(`${API_AUTH}/login`, config)
    const user = await data.json()

    return user
}


async function signup ({ credentials }) {

    const config = {
          method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
    }

    const data = await fetch(`${API_AUTH}/register`, config)
    const user = await data.json()

    return user
}

export const api = {
    signup,
    singin
}
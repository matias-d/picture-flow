import { API_URL } from "./api"

const API_PINS = `${API_URL}/publication`


export async function getPins () {
    const data = await fetch(`${API_PINS}/traer`)
    const pins = await data.json()
    return pins
}

export async function getPin ({ id }) {
    const data = await fetch(`${API_PINS}/traer/${id}`)
    const pins = await data.json()
    return pins
}

export async function getPinsByUser ({ userId }) {
    const data = await fetch(`${API_PINS}/user/${userId}`)
    const pins = await data.json()
    return pins
}

export async function getPinsByTeam ({ team }) {
    const data = await fetch(`${API_PINS}/traer/team/${team}`)
    const pins = await data.json()
    return pins
}

export async function getPinsBySearch ({ search }) {
    const data = await fetch(`${API_PINS}/search?query=${search}`)
    const pins = await data.json()
    return pins
}


export async function createPin ({ newPin }) {
    const form = new FormData()

    for (let key in newPin) {
        form.append(key, newPin[key])
    }


    const config = {
        method: "POST",
        body: form,  
      };

    const data = await fetch(`${API_PINS}/crear`, config)

    const result = await data.json()

    return result

}

export async function createComment ({ pinId, newComment}) {

    const config = {
        method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
    }

    const data = await fetch(`${API_PINS}/comments/${pinId}`, config)
    const pin = await data.json()
    return pin
}

export async function deleteComment ({ pinId, commentId }) {

    const config = {
        method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
    }

    const data = await fetch(`${API_PINS}/comments/${pinId}/${commentId}`, config)
    const pin = await data.json()
    return pin
}

export async function likePost ({ pinId, userId }) {
    const config = {
        method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId
          }),
    }

    const data = await fetch(`${API_PINS}/likes/${pinId}`, config)
    const pin = await data.json()
    return pin

}

export async function deleteLikePost ({ pinId, userId }) {
    const config = {
         method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
    }

    const data = await fetch(`${API_PINS}/likes/${pinId}/${userId}`, config)
    const pin = await data.json()
    return pin

}
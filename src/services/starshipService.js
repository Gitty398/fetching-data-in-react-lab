import React from 'react'

const BASE_URL = "https://swapi.info/api"

export const show = async () => {
    try {
        const response = await fetch(`${BASE_URL}/starships`)

        if (!response.ok) {
            throw new Error('Failed to fetch starships.');
        }

        const data = await response.json()

        return data

    } catch (error) {
        console.log(error)
    }
}
// types/playerTypes.ts

// Default in case of nulls
export const defaultPhoto: Photo = {
    url: '' // this has to be above defaultPlayer for whatever reason XD
}
export const defaultPlayer: Player = {
    id: 0,
    documentId: '',
    Name: 'Unknown',
    isAlive: true,
    Number: 0,
    Photo: defaultPhoto,
    TimeOfDeath: "NONE",
    EmergencyContact: "NONE",
    uid: "0"
}

export interface Player {
    id: number
    documentId: string
    Name: string
    isAlive: boolean
    Number: number
    Photo: Photo | null
    TimeOfDeath: string | null
    EmergencyContact: string | null
    uid: string
}
interface Photo {
    url: string
}

// Export end products (lmao)
export interface ApiResponse<T> {
    data: T
}

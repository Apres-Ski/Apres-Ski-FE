export interface Hours {
    "id": number
    "sunday": string
    "monday": string
    "tuesday": string
    "wednesday": string
    "thursday": string
    "friday": string
    "saturday": string
    "restaurant": number
}

export interface HappyHours {
  "id": number
  "sunday": string
  "monday": string
  "tuesday": string
  "wednesday": string
  "thursday": string
  "friday": string
  "saturday": string
  "special": string
  "restaurant": number
}

export interface Engagement {
    "id": number
    "vibe": string
    "rating": string
    "favorites": boolean
    "restaurant": number[]
    "user": number[]
}

export interface RestaurantsState {
  id: string
  type: string
  attributes: {
    name: string
    address: string
    food_type: string
    cost: string
    cover_img: string
    alt_text: string
    lat: string
    lon: string
    alcoholic_drinks: string // fix spelling
    has_happy_hour: string
    hour: Hours[]
    happyhour?: HappyHours[]
    engagement: Engagement[]
  }
}

export interface CleanedHours {
  id: string
  weekday: string
  hours: string
}

export interface CleanedHappyHours {
  id: string
  weekday: string
  hours: string
  specials: string
}

export interface CleanedRestaurantsState {
  id: string
  name: string
  address: string
  foodType: string
  cost: string
  vibe: string
  coverImg: string
  alt: string
  location: {
    lat: string
    long: string
  }
  alcoholic: string
  happyHour: string
  hours: CleanedHours[]
  happyHours: CleanedHappyHours[]
}

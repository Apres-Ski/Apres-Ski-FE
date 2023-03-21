export interface Hours {
  id: number
  sunday: string
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
  restaurant: number
}

export interface HappyHours {
  id: number
  sunday: string
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
  special: string
  restaurant: number
}

export interface Engagement {
  id: number
  vibe: string
  rating: string
  favorites: boolean
  restaurant: number[]
  user: number[]
}

export interface Restaurants {
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
    alcoholic_drinks: boolean
    has_happy_hour: boolean
    hour: Hours[]
    happyhour: HappyHours[]
    engagement: Engagement[]
    photo: Photo[]
  }
}

export interface CleanedHours {
  sunday: string
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
}

export interface CleanedHappyHours {
  sunday: string
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
  special: string
}

export interface CleanedRestaurantsState {
  id: string
  name: string
  address: string
  foodType: string
  cost: string
  vibes: {[key: string]: number}
  coverImg: string
  alt: string
  location: {
    lat: string
    long: string
  }
  alcoholic: boolean
  happyHour: boolean
  hours: CleanedHours
  happyHours: CleanedHappyHours
  engagements: Engagement[]
  avgRating: number
  ratingDist: number[]
  userDistance?: string
  photo: Photo[]
}

export interface Feature {
  type: string
  geometry: {
    type: string
    coordinates: { lon: number; lat: number }
  }
  properties: {
    title: string
    id?: string
  }
}

export interface GeoJson {
  type: string
  features: Feature[]
}

export interface Users {
  id: number
  attributes: {
    name: string
    lat: string
    lon: string
  }
}

export interface CleanedUserState {
  id: number | null
  name: string
  location: {
    lat: string
    long: string
  }
}

export interface Lifts {
  id: string
  attributes: {
    name: string
    lat: string
    lon: string
  }
}

export interface CleanedLiftsState {
  id: string
  name: string
  location: {
    lat: string
    long: string
  }
}

export interface VibeLabelsProps {
  restaurant: CleanedRestaurantsState
}

export interface LabelMap {
  [key: string]: { class: string; text: string }
}

export interface Photo {
  id: number
  url: string
  alt_text: string
  restaurant: number
}
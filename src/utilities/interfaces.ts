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
    alcoholic_drinks: boolean
    has_happy_hour: boolean
    hour: Hours[]
    happyhour: HappyHours[]
    engagement: Engagement[]
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
  vibes: string[]
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
}

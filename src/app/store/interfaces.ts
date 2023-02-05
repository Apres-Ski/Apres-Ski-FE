export interface Hours {
  id: string
  week_day: string
  hours: string
}

export interface HappyHours {
  id: string
  week_day: string
  hours: string
  specals: string // fix spelling
}

export interface RestaurantsState {
  id: string
  type: string
  attributes: {
    name: string
    address: string
    food_type: string
    cost: string
    vibe: string
    cover_img: string
    alt_text: string
    lat: string
    long: string
    alcholic_drinks: string // fix spelling
    happy_hour: string
  }
  relationships: [
    {
      hours: Hours[]
      happy_hours?: HappyHours[]
    }
  ]
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

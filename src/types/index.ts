

export interface InavTabs{
    id:number,
    name:string,
    icon: any
}
export interface IData {
    status: string
    data: Data
  }
  
  export interface Data {
    stats: Stats
    coins: Coin[]
  }
  
  export interface Stats {
    total: number
    totalCoins: number
    totalMarkets: number
    totalExchanges: number
    totalMarketCap: string
    total24hVolume: string
  }
  
  export interface Coin {
    uuid: string
    symbol: string
    name: string
    color: string
    iconUrl: string
    marketCap: string
    price: string
    btcPrice: string
    listedAt: number
    change: string
    rank: number
    sparkline: string[]
    coinrankingUrl: string
    "24hVolume": string
  }
  export interface Thumbnail {
    _type: string
    contentUrl: string
    width: number
    height: number
  }
  
  export interface Provider {
    _type: string
    name: string
    image: Image2
  }
  export interface Image2 {
    _type: string
    thumbnail: Thumbnail2
  }
  
  export interface Thumbnail2 {
    _type: string
    contentUrl: string
  }
  export interface Image {
    _type: string
    thumbnail: Thumbnail
    isLicensed: boolean
  }
  export interface NewsApi {
    _type: string
    name: string
    url: string
    image?: Image
    description: string
    provider: Provider[]
    datePublished: string
  }
  export interface Root {
    _type: string
    webSearchUrl: string
    value: NewsApi[]
  }
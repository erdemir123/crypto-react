

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
  export interface News {
    _type:string
    name:string
    url:string
    description:string
  }
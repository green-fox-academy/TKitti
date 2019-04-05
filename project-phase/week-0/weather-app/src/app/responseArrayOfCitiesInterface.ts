import { ResponseInfo } from './responseInterface';  

export  interface ListOfCities {
  "list": ResponseInfo[],
  "city":{  
    "id": number,
    "name": string
  }
}
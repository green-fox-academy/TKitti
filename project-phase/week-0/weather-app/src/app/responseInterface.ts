export interface ResponseInfo {
  "dt_txt": string,
  "weather": [
    {
      "main": string,
      "description": string
    }
  ],
  "main": {
    "temp": number,
  },
  "sys": {
    "country": string,
  },
  "id": number,
  "name": string
}

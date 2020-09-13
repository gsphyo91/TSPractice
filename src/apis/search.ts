import axios from "axios";

export const searchAPI = {
  google: (keyword: string, start: number) =>
    axios.get("https://www.googleapis.com/customsearch/v1", {
      params: {
        key: "AIzaSyCZ8-p5NKBl8xVfz5ALihopW6yC_SVd3A0",
        cx: "f6c4bdc884c987bb9",
        q: keyword,
        start,
        sort: "date",
        // filter: '',
      },
    }),
  naver: (keyword: string, start: number) =>
    axios.get("https://openapi.naver.com/v1/search/blog", {
      headers: {
        'X-Naver-Client-id': 'EmnjqBPmrlB_N6b2ggD6',
        'X-Naver-Client-Secret': 'XOi1xX9836'
      },
      params: {
        query: keyword,
        display: 10,
        start,
      },
    }),
};

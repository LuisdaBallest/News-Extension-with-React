const API_KEY = 'b9d7aa0a80be0bd44cb294ac89e94f91'

export interface NewsData{
    title: string
    image: string 
    description: string
    url: string 
    index: number 
}[]


export async function fetchNewsData(q, lang, country, category) {
    const res = await fetch (`https://gnews.io/api/v4/top-headlines?q=${q}&category=${category}&apikey=${API_KEY}&lang=${lang}&country=${country}&max=3`

    )
    if (!res.ok){
        return new Error ('Error')
    }
    const data= await res.json()
    const arts= data.articles
    return arts
}

import React, { useEffect,useState } from 'react'
import { fetchNewsData, NewsData } from '../../utills/api'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'

const NewsCard: React.FC<{
    q: string
    lang: string
    country: string 
    category: string
    index: number
}> = ({q, lang, country, category, index})=>{
    const [newsData, setNewsData]=useState<NewsData>(null)
    useEffect(() => {
      fetchNewsData(q, lang, country, category)
        .then((data) => {
          console.log(data)
          setNewsData(data)
        })
        .catch((err) => console.log(err))
    }, [q, lang, country, category, index])
    if(!newsData){
        return <div>Loading...</div>
    }
        console.log(newsData)
        return (
            <Box mx={'5px'} my={'15px'}>
                <Card sx={{ maxWidth: 370 }}>
            <CardMedia sx={{ height: 150 }} image={newsData[index].image} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {newsData[index].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {newsData[index].description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={newsData[index].url}>
                Learn More
              </Button>
            </CardActions>
          </Card>
            </Box>
          
        )
}

export default NewsCard

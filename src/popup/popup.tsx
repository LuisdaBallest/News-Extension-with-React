import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './popup.css'
import NewsCard from './NewsCard/newsCard'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'



const App: React.FC<{}> = () => {
 
    let newsCardsRender=[]
    for (var i=0; i<3;i++){
        newsCardsRender.push(
          <NewsCard q="" lang="en" country="us" category="" index={i} />
        )
    }
    const [articles, setArticles]=useState<any[]>(
      newsCardsRender
    )

    const [searchInput, setSearchInput]=useState<string>('')

    
    const [lang, setLang] = React.useState('')

    const handleChangeLang = (event: SelectChangeEvent) => {
      setLang(event.target.value as string)
    }

    const [country, setCountry] = React.useState('')

    const handleChangeCountry = (event: SelectChangeEvent) => {
      setCountry(event.target.value as string)
    }

    const [category, setCategory] = React.useState('')

    const handleChangeCategory = (event: SelectChangeEvent) => {
      setCategory(event.target.value as string)
    }
    
    
    
    const handleSearchButtonClick=()=>{


        newsCardsRender=[]
        for (var i = 0; i < 3; i++) {
          newsCardsRender.push(
            <NewsCard q={searchInput} lang={lang} country={country} category={category} index={i}/>
          )
        }
        
        setArticles(newsCardsRender)
    }

    





        return (
          <Box mx="8px" my="16px">
            <Paper
              component="form"
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 350,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              />
              <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={handleSearchButtonClick}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            <FormControl sx={{ m: 1, minWidth: 105 }}>
              <InputLabel id="demo-simple-select-label">Lang</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="Language"
                onChange={handleChangeLang}
              >
                <MenuItem value={'ar'}>Arabic</MenuItem>
                <MenuItem value={'zh'}>Chinese</MenuItem>
                <MenuItem value={'nl'}>Dutch</MenuItem>
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'fr'}>French</MenuItem>
                <MenuItem value={'de'}>German</MenuItem>
                <MenuItem value={'el'}>Greek</MenuItem>
                <MenuItem value={'hi'}>Hindi</MenuItem>
                <MenuItem value={'it'}>Italian</MenuItem>
                <MenuItem value={'ja'}>Japanese</MenuItem>
                <MenuItem value={'pt'}>Portuguese</MenuItem>
                <MenuItem value={'ru'}>Russian</MenuItem>
                <MenuItem value={'es'}>Spanish</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 105 }}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Language"
                onChange={handleChangeCountry}
              >
                <MenuItem value={'au'}>Australia</MenuItem>
                <MenuItem value={'br'}>Brazil</MenuItem>
                <MenuItem value={'ca'}>Canada</MenuItem>
                <MenuItem value={'cn'}>China</MenuItem>
                <MenuItem value={'fr'}>France</MenuItem>
                <MenuItem value={'de'}>Germany</MenuItem>
                <MenuItem value={'gr'}>Greece</MenuItem>
                <MenuItem value={'hk'}>Hong Kong</MenuItem>
                <MenuItem value={'in'}>India</MenuItem>
                <MenuItem value={'it'}>Israel</MenuItem>
                <MenuItem value={'jp'}>Japan</MenuItem>
                <MenuItem value={'pk'}>Pakistan</MenuItem>
                <MenuItem value={'es'}>Spain</MenuItem>
                <MenuItem value={'ua'}>Ukraine</MenuItem>
                <MenuItem value={'uk'}>United Kingdom</MenuItem>
                <MenuItem value={'us'}>United States</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 125 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Language"
                onChange={handleChangeCategory}
              >
                <MenuItem value={'general'}>General</MenuItem>
                <MenuItem value={'world'}>World</MenuItem>
                <MenuItem value={'nation'}>Nation</MenuItem>
                <MenuItem value={'business'}>Business</MenuItem>
                <MenuItem value={'technology'}>Technology</MenuItem>
                <MenuItem value={'entertainment'}>Entertainment</MenuItem>
                <MenuItem value={'sports'}>Sports</MenuItem>
                <MenuItem value={'science'}>Science</MenuItem>
                <MenuItem value={'health'}>Health</MenuItem>
              </Select>
            </FormControl>
            {articles.map((art) => art)}
          </Box>
        )
    
}
    

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App/>, root)

/*
const cont = document.createElement('div')
const root = createRoot(cont!) // createRoot(container!) if you use TypeScript
root.render(<App />)
*/
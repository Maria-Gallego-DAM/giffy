import React from "react"
import ListOfGifs from '../../services/components/ListOfGif/ListOfGifs'
import {useGifs} from '../../hooks/useGif'
import TrendingSearches from '../../services/components/TrendingSearches/TrendingSearches'
import SearchForm from "../../services/components/SearchForm"
import {Helmet} from "react-helmet"

export default function Home() {
  const {gifs} = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  )
}
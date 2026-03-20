
import React, { useState, useEffect } from 'react'
import getTrendingTerms from '../../getTrendingTermsService';
import Category from '../Category'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(function () {
  const controller = new AbortController()

  getTrendingTerms({ signal: controller.signal })
    .then(setTrends)
    .catch(err => {
      if (err.name === 'AbortError') return // ✅ ignoramos el abort, no es un error real
      console.error(err) // cualquier otro error sí lo logamos
    })

  return () => controller.abort()
}, [])

  return <Category name='Tendencias' options={trends} />
}

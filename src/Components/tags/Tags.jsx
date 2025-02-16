import { useState } from 'react'
import style from './Tags.module.css'
export const Tags=()=>{
    let [tags,setTags]=useState([
        "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Thriller",
  "Sci-Fi",
  "Fantasy",
  "Romance",
  "Mystery",
  "Crime",
  "Superhero",
  "Animated",
  "Historical",
  "Musical",
  "Documentary",
  "Psychological",
  "Dystopian",
  "War",
  "Sports"
    ])
    return<>
        <div className={style.tags}>
           {tags.map((tag)=>{
            return <li className={style.linktags}>{tag}</li>
           })}
        </div>
    </>
}
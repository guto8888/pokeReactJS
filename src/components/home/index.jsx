import React, { useEffect, useState } from "react"
import  { NavLink } from "react-router-dom"
import styles from "./style.module.css"
import Menu from "../menu";
import { Theme, themes } from "../../contexts/theme"
import { useContext } from "react";

const definePoke = async(num) => {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${num}`);
    const toJson = await url.json()
    return toJson.results
}

const findPoke = async(name) => {
    if(name) {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const toJson = await url.json()
        return toJson
    }
}
const HomePage = () => {
    const [pokeList, setPokeList] = useState([])
    const [pokeData, setPokeData] = useState(10)
    const [showButton, setShowButton] = useState(true)
    const { theme, setTheme } = useContext(Theme)

    const renderPoke = async() => {
        const newPoke = []
        definePoke(pokeData).then(a => {
            a.forEach(o => {
                findPoke(o.name).then(av => {
                    newPoke.push({
                        name: av.name,
                        id: av.id,
                        img: av.sprites.other.dream_world.front_default
                    })
                    newPoke.sort((a, b) => {
                        return a.id - b.id
                    })
                    if(newPoke.length >= pokeData ) {
                        setPokeList(newPoke)
                    }
                })
            })
    
        })
    }
    
    useEffect(()=>  {
        renderPoke()
    }, [pokeData])
 
return (
    <div className={styles.divPoke} style={{backgroundColor: theme.background}}>
        <Menu />
    <div className={styles.ulPoke}>
        {pokeList.map((i, index) => {
            return (
                    <NavLink className={styles.liPoke} style={{backgroundColor: theme.card}} to={`/${i.id}`}  key={index}>
                <div className={styles.divDiv}>
                <img src={i.img} className={styles.pokeImg} alt="pokeImg"></img>
                <h1 className={styles.name}>{i.name}</h1>
                </div>
                </NavLink>
            )
        })}
    </div>
    <div className={styles.btnDiv}>
        {showButton && 
    <button className={styles.btn} style={{backgroundColor: theme.card}} onClick={() => { 
        setPokeData(20)
        setShowButton(false)
    }}>Carregar mais</button> }
    </div>
    </div>
)        

}

export { findPoke };
export default HomePage
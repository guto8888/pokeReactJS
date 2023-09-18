import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import styles from "./style.module.css"
import Menu from "../menu";
import { Theme } from "../../contexts/theme.js"
import { useContext } from "react";

const findPoke = async(name) => {
    if(name) {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const toJson = await url.json()
        return toJson
    }
}

const Details = () => {
    const [detail, setDetail] = useState(null)
    const {id} = useParams()
    const { theme } = useContext(Theme)
 
    const renderPoke = async() => {
        findPoke(id).then(v => {
            setDetail(v)
        })
    }

    useEffect(() => {
        renderPoke()
    }, [])

    return (
        <>
        {detail &&
        <>
        <Menu />
        <div style={{backgroundColor: theme.background}} className={styles.mainCard}>
        <div className={styles.pokeCard} style={{backgroundColor: theme.card}}>
        <img className={styles.ImgPoke} src={detail.sprites.other.dream_world.front_default} alt="" />
        <h1 className={styles.pokeName} style={{backgroundColor: theme.color}}>{detail.name}</h1>
        <p className={styles.text}  style={{backgroundColor: theme.color}} >Golpes:</p>
        <ul className={styles.movePoke} style={{backgroundColor: theme.moves}}>
            <li>{detail.moves[0].move.name}</li>
            <hr />
            <li>{detail.moves[1].move.name}</li>
            <hr />
            <li>{detail.moves[2].move.name}</li>
            <hr />
        </ul>
        <p className={styles.text}  style={{backgroundColor: theme.color}}>Habilidades:</p>
        <ul className={styles.abiPoke} style={{backgroundColor: theme.moves}}>
            <li>{detail.abilities[0].ability.name}</li>
            <hr />
                {detail.abilities[1]?.ability.name && <><li>{detail.abilities[1].ability.name}</li>
            <hr /> </>}
        </ul>
        <p className={styles.pokeType}  style={{backgroundColor: theme.color}}>Tipo: {detail.types[0].type.name}</p>
        </div>
       </div> 
       </>
       
       } 
        </>
    )

}

export default Details
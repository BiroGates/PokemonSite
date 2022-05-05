// React Stuffs
import { Link } from 'react-router-dom'

// React Hooks
import { useState } from 'react';

// Styled Components
import  { StyledPokemon }  from './styled'

// Frame Motion
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion';


export default function ListPokemon({ pokemonImage, pokemonName, type, id, stats}){

    
    // Switching the color based on the type
    let color = '#FFF'
    switch(type) {
        case 'grass': color = '#95CEA5'; break
        case 'fire' : color = '#FFA6A6'; break
        case 'water': color = '#A6D4FF'; break
        case 'normal': color = '#A1AEBB'; break
        case 'ghost': color = '#B18CFF'; break
        case 'ice': color = '#A6EFFF'; break
        case 'dragon': color = '#A6D4FF'
        case 'flying': color = '#CCB4FF'; break
        case 'steel': color = '#FF8C8C'; break
        case 'bug': color = '#C8FFA6'; break
        case 'poison': color = '#C2A6FF'; break
        case 'electric': color = '#FDFFA6'; break
        case 'ground': color = '#CEC595'; break
        case 'dark': color = '#B79563'; break
        case 'rock': color = '#CEAA95'; break
        case 'psychic': color = '#E2A6FF'; break
        case 'fighting': color = '#FF8C8C'; break
        case 'fairy': color = '#FFA6F1';break
        default: color ="#FFF";
    }

    return (
        <StyledPokemon>
            <Link to='/profile' state={{ pokemonImage: pokemonImage,  
                                        pokemonName: pokemonName, 
                                        type: type,
                                        id: id,
                                        stats: stats,
                                        color: color
                                        }}>
                <motion.div 
                    className='card'
                    whileHover={{scale: 1.05}}
                    style={{ background: color}}
                >
                    <div className='card-img'> <img src={pokemonImage} alt="" /> </div>
                    <div className='card-name'> {pokemonName} </div>
                    <div className='card-type'> { type } </div>
                </motion.div>       
            </Link>
        </StyledPokemon>
    )
}
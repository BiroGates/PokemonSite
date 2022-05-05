// React Stuffs
import { useLocation } from 'react-router-dom' 

// Styled Components
import { StyledPokemonProfile } from "./styled"
import StatusBar from '../../components/StatusBar';

export default function PokemonProfile() {
    const location = useLocation();
    const { pokemonImage } = location.state
    const { pokemonName } = location.state
    const { type } = location.state
    const { stats } = location.state
    const { color } = location.state
    const { id } = location.state

    console.log(stats)

    return (
        <StyledPokemonProfile>
          <div className="main">
              <div className="container">
                  <div className="profile">
                    <div className="pf-id">ID: { id } </div>
                    <div className="pf-img"><img src={ pokemonImage } alt="" /></div>
                    <div className="pf-name" style={{ textTransform: 'capitalize' }} > { pokemonName } </div>
                    <div className="pf-type" style={{ background: color, textTransform: 'capitalize'}} > { type } </div>
                  </div>
                  <div className='stats'>
                    {stats.map((item) => {
                      return(
                        <StatusBar bar_value={item.base_stat} bar_name={item.stat.name} />
                      );
                    })}
                  </div>
              </div>
          </div>
        </StyledPokemonProfile>
    )
  }
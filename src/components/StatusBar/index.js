// Styled Components
import { StyledStatusBar } from "./styled"


export default function StatusBar({ bar_value, bar_name }) {
  
  let color = '#FFF'
  switch(bar_name) {
    case 'hp': color = '#C8FFA6';break
    case 'attack': color = '#FFBBA6';break
    case 'defense': color = '#D1D1D1';break
    case 'special-attack': color = '#A6E4FF';break
    case 'special-defense': color = '#A6B9FF';break
    case 'speed': color = '#FDFFA6';break
    default: color = '#FFF'
  }
  
  
  return (
    <StyledStatusBar>
      <div className="bar"> 
        <div className="filling-bar" style={{width: `${bar_value / 3}%`,
                                            background: color}}>
          <div className="name"> { bar_name.toUpperCase() } </div>
        </div>
        <div className="value"> { bar_value }/300 </div>
      </div>
    </StyledStatusBar>
  )
}

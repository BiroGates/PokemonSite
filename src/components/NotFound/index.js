

// Styled Components
import { StyledNotFound } from "./styled"

// Images
import NotFoundImage from '../../assets/images/404_image.png'

export default function NotFound() {
  return (
    <StyledNotFound> 
        <div className="not-found"> <img src={NotFoundImage} alt="" /></div>
    </StyledNotFound>
  )
}

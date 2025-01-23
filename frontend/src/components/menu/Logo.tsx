import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSmile } from "@fortawesome/free-regular-svg-icons"

const Logo = () => {
    return (
        <a href="/">
            <h1 className="text-2xl font-bold">
                <FontAwesomeIcon icon={faSmile} className='mr-2' />
                Kia
            </h1>
        </a>
    )
}

export default Logo
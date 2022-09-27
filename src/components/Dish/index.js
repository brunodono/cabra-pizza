import './Dish.css';


const Dish = ({ name, description, image, price }) => {
    return (
        <div className='dish'>
            <div className='image-container'>
                <img src={image} alt={`${description}`}></img>
            </div>
<div className='content'>
            <p className='name'>
                <strong>
                    {name}
                </strong>
            </p>
            <p className='description'>
                {description}
            </p>
            <p className='price'>
                <strong>
                    €$ {price}
                </strong>
            </p>
            </div>
        </div>
    )
}

export default Dish
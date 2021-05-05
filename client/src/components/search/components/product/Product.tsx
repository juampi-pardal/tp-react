import PriceFormatterUtils from '../../../../utils/price-formatter';
import free_shipping_logo from '../../../../assets/ic_shipping.png';
import { useHistory } from 'react-router-dom';


import './Product.scss';
import SearchProduct from '../../../../models/search/search-product';

export const Product = (props: {product: SearchProduct, isFirstProduct: boolean, isLastProduct: boolean}) => {
    
    const history = useHistory();

    const handleClick = () => {
        history.push(`/items/${props.product.id}`);
    }

    return (
    <div className={["product-container", props.isFirstProduct ? 'first-product' : props.isLastProduct ? 'last-product' : '' ].join(' ')} onClick={handleClick}>
        <div className="image-container">
            <img className="image" src={props.product.picture} alt="Imagen miniatura del producto"></img>
        </div>
        <div className="description-container">
            <div className="price-container">
                <span>{PriceFormatterUtils.formatPrice(props.product.price)}</span>
                {props.product.freeShipping ? 
                <img className="free-shipping-icon" src={free_shipping_logo} alt="Producto con envio gratuito"></img>
                :
                ''}
            </div>
            <div className="title-container">
                <span>{props.product.title}</span>
            </div>                
        </div>
        <div className="location-container">
            <p className="location">{props.product.address}</p>                
        </div>
    </div>
    
)};
import DetailProductModel from '../../../../models/detail/detail-product';
import PriceFormatterUtils from '../../../../utils/price-formatter';


import './Detail-product.scss';

export const DetailProduct = (props: {detailProduct: DetailProductModel}) => (
    <div className="detail-product-container">
        <div className="left-column-container">
            <div className="detail-product-image-container">
                <img src={props.detailProduct.picture} alt="Imagen del producto"></img>
            </div>
            <div className="detail-product-description">
                <div className="detail-product-description-title">
                    <span>Descripción del producto</span>
                </div>
                <div className="detail-product-description">
                    <p>{props.detailProduct.description}</p>
                </div>                
            </div>
        </div>
        <div className="right-column-container">
            <div className="line">
                <span>
                    <span>{props.detailProduct.isNew ? 'Nuevo' : 'Usado'} - </span>
                    <span>{props.detailProduct.soldQuantity === 0 ? 'Ninguno vendido' : props.detailProduct.soldQuantity === 1 ? 'Uno vendido' : props.detailProduct.soldQuantity + ' vendidos'}</span>
                </span>
            </div>
            <div className="title">
                <span>{props.detailProduct.title}</span>
            </div>
            <div className="detail-product-image-container-mobile">
                <img src={props.detailProduct.picture} alt="Imagen del producto"></img>
            </div>
            <div className="price">
                <span>{PriceFormatterUtils.formatPrice(props.detailProduct.price)}</span><sup className="decimals">00</sup>
            </div>
            <div className="button-container">
                <button>Comprar</button>
            </div>
        </div>
    </div>);
import './product-skeleton.scss';

export const ProductSkeleton = () => {
    return (
        <div className="Product-skeleton-container">
            <div className="image-container">
                <div className="-skeleton image-box-skeleton"></div>
            </div>
            <div className="description-container">
                <p className="-skeleton price-skeleton"></p>
                <p className="-skeleton title-skeleton"></p>                
            </div>
            <div className="location-container">
            <p className="-skeleton location-skeleton"></p>                
            </div>
        </div>
    )
}       
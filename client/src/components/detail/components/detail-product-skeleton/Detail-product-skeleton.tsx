import './Detail-product-skeleton.scss';

export const DetailProductSkeleton = () => (
    <div className="detail-product-skeleton-container">
        <div className="left-column-skeleton-container">
            <div className="detail-product-image-skeleton-container">
                <div className="detail-product-image -skeleton"></div>
            </div>
            <div className="detail-product-description-skeleton">
                <p className="detail-product-title -skeleton"></p>
                <p className="detail-product-description -skeleton"></p>                
            </div>
        </div>
        <div className="right-column-skeleton-container">
            <div className="line-skeleton -skeleton"></div>
            <div className="title-skeleton -skeleton"></div>
            <div className="price-skeleton -skeleton"></div>
            <div className="button-skeleton -skeleton"></div>
        </div>
    </div>
);
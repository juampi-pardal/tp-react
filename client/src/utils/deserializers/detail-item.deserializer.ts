import DetailProduct from "../../models/detail/detail-product";
import { DetailItemResponse } from "../../responses/detail/detail-item.interface";

export default class DetailItemDeserializer {

    static deserializeDetailItem(response: DetailItemResponse): DetailProduct {
        return new DetailProduct(
            response.id,
            response.title,
            response.price.amount,
            response.picture,
            response.condition,
            response.free_shipping,
            response.address,
            response.sold_quantity,
            response.description
        );
    }

}
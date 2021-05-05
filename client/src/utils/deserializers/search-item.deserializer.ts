import SearchProduct from "../../models/search/search-product";
import ItemResponse from "../../responses/item.interface";

export default class SearchItemResponseDeserializer {

    static deserializeSearchItems(response: ItemResponse[]): SearchProduct[] {
        return response.map(res => new SearchProduct(res.id, res.title, res.price.amount, res.picture, res.condition, res.free_shipping, res.address));
    }

}
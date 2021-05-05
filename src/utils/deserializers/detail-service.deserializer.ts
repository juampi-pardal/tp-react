import DetailItem from "../../models/item/detail-item";
import Detail from '../../models/detail';
import { ResultResponse } from "../../response/result.interface";
import Author from "../../models/author";
import SearchServiceDeserializer from "./search-service.deserializer";
import PathResponse from "../../response/filter/path.interface";

export default class DetailServiceDeserializer {

    static deserializeItemDetail(itemReponse: ResultResponse, descriptionResponse: string, categories: string[]): Detail {
        return new Detail(
            new Author('Juan Pablo', 'Pardal'),
            new DetailItem(
                itemReponse.id,
                itemReponse.title,
                SearchServiceDeserializer.deserializePrices(itemReponse.price, itemReponse.currency_id),
                itemReponse.pictures[0].url,
                itemReponse.condition,
                itemReponse.shipping.free_shipping,
                null,
                itemReponse.sold_quantity,
                descriptionResponse
            ),
            categories
        );
    }

    static buildDetailBreadcrumb(response: PathResponse[]): string[] {
        return response ? response.map(path => path.name) : []
    }

}
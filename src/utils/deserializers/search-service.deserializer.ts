import Author from "../../models/author";
import Item from "../../models/item/item";
import Price from "../../models/item/price";
import Search from "../../models/search";
import FilterResponse from "../../response/filter/filter.interface";
import { PriceResponse } from "../../response/prices/prices.interface";
import { ResultResponse } from "../../response/result.interface";
import { SearchResponse } from "../../response/search/search.interface";

export default class SearchServiceDeserializer {

    static deserializeSearchResponse(response: SearchResponse): Search {
        return new Search(
            new Author('Juan Pablo', 'Pardal'),
            response.results.map(result => this.deserializeItemResponse(result)),
            this.buildBreadcrumb(response.filters, response.available_filters)
        );
    }

    static deserializeItemResponse(response: ResultResponse): Item {
        return new Item(
            response.id,
            response.title,
            this.deserializePrices(response.price, response.prices?.presentation?.display_currency),
            response.thumbnail,
            response.condition,
            response.shipping.free_shipping,
            response.address?.state_name
        )
    }

    static deserializePrices(amount: number, currency: string) {
        return new Price(currency, amount, 0)
    }

    static buildBreadcrumb(filtersResponse: FilterResponse[], availableFilters: FilterResponse[]): string[] {
        
        if (filtersResponse.length === 0) {
            const categoryAvailableFilter = availableFilters.find(f => f.id === 'category');
            
            const maxResultFilter = categoryAvailableFilter.values.reduce(function(prev, current) {
                return (prev.results > current.results) ? prev : current
            })

            return maxResultFilter.path_from_root?.map(path => path.name) || [maxResultFilter.name];
        }

        const categoryFilter = filtersResponse.find(f => f.id === 'category');

        return categoryFilter?.values[0].path_from_root?.map(path => path.name) || [];


    }

}
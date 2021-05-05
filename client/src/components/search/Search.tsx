/* eslint-disable no-restricted-globals */
import { Component } from "react";
import QueryParamsUtil from "../../utils/query-params";
import './Search.scss';
import { ProductSkeleton } from './components/product-skeleton/Product-skeleton';
import { SearchResponse } from "../../responses/search/search.interface";
import { Product } from './components/product/Product';
import SearchProduct from "../../models/search/search-product";
import SearchItemResponseDeserializer from "../../utils/deserializers/search-item.deserializer";
import { Breadcrumb } from "../commons/breadcrumb/Breadcrumb";
import { Pagination } from "./components/pagination/Pagination";


interface SearchProps {
  location: any
}
  
interface SearchState {
  searchQueryParam: string;
  products: SearchProduct[];
  currentProducts: SearchProduct[],
  categories: string[];
  isLoading: boolean;
  isError: boolean;
}

export default class Search extends Component<SearchProps, SearchState> {


  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchQueryParam: '',
      products: [],
      categories: [],
      currentProducts: [],
      isLoading: false,
      isError: false
    };
  }

  handleFetchProductsState(query: string): void {
    this.setFetchLoadingState();
    this.fetchProducts(query)
    .then(response => {
      if (!response.ok) {
        throw Error(response.MESSAGE)
      }
      return response.json()
    })
    .then(((result: SearchResponse) => {
      this.setFetchSuccessState(result);
      this.updateDocumentTitle();
    }))
    .catch(err => {
      this.setFetchErrorState();
    })
  }

  fetchProducts(query: string): Promise<any> {
    return fetch(`/api/items?q=${query}`);
  }

  componentDidMount() {
      const searchQueryParam: string = QueryParamsUtil.getQueryParamValue('search', location.href);
      if (searchQueryParam) {
          this.setState({
              searchQueryParam
          });
        this.handleFetchProductsState(searchQueryParam);
      }
  }

  updateDocumentTitle(): void {
    const categoriesLength = this.state.categories.length;
    document.title = categoriesLength > 0 ? this.state.categories[categoriesLength -1] : document.title
  }

  setFetchSuccessState(response: SearchResponse): void {
    const products = SearchItemResponseDeserializer.deserializeSearchItems(response.items);
    this.setState({
      ...this.state,
      products,
      categories: response.categories,
      currentProducts: products.slice(0, 4),
      isLoading: false,
      isError: false
    });
  }

  setFetchErrorState(): void {
    this.setState({
      ...this.state,
      products: [],
      categories: [],
      currentProducts: [],
      isLoading: false,
      isError: true
    });
  }
  setFetchLoadingState(): void {
    this.setState({
      ...this.state,
      products: [],
      categories: [],
      currentProducts: [],
      isLoading: true,
      isError: false
    });
  }

  componentDidUpdate(prevProps: SearchProps) {
    const prevQueryParam: string = QueryParamsUtil.getQueryParamValue('search', prevProps.location.search);
    const updatedSearchQueryParam: string = QueryParamsUtil.getQueryParamValue('search', this.props.location.search);

    if (prevQueryParam !== updatedSearchQueryParam) {
      this.setState({
        searchQueryParam: updatedSearchQueryParam
      });
      this.handleFetchProductsState(updatedSearchQueryParam);
    }
  }

  onPageChanged = (data: any) => {
    const allProducts = this.state.products;
    const { currentPage, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({currentProducts});
  }


  render() {

    const productsArray = this.state.currentProducts;

    return (
      this.state.isError ? 
      <span>Lo sentimos, hubo un error inesperado</span>
      :
      <div className="search">
        <div className="search-container">
          <div className="path-container">
            {this.state.isLoading ?
            <div className="-skeleton path-skeleton"></div>
            :
            <Breadcrumb categories={this.state.categories} />}
          </div>
          <div className="products-container">
            {this.state.isLoading ? 
              <div>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </div>
          : 
          productsArray.map((product, index) => (
            <div>
              <Product product={product} isFirstProduct={index === 0} isLastProduct={index === productsArray.length -1}/>
              {index === (productsArray.length -1) ? '' :
              <div className="line-separator"></div>
            }
            </div>
            ))}
          </div>
        {!this.state.isLoading && this.state.products.length > 4 ?
        <Pagination totalRecords={this.state.products.length} pageLimit={4}  onPageChanged={this.onPageChanged} /> : ''}
        </div>
      </div>
    );
  }
}
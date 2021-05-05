import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { DetailProductSkeleton } from "./components/detail-product-skeleton/Detail-product-skeleton";
import { DetailProduct } from "./components/detail-product/Detail-product";
import './Detail.scss';
import { withRouter } from 'react-router-dom';
import { DetailItemResponse } from "../../responses/detail/detail-item.interface";
import DetailItemDeserializer from "../../utils/deserializers/detail-item.deserializer";
import DetailProductModel from "../../models/detail/detail-product";
import { Breadcrumb } from "../commons/breadcrumb/Breadcrumb";
import { DetailResponse } from "../../responses/detail/detail.interface";



interface DetailProps extends RouteComponentProps {
  location: any;
}
  
interface DetailState {
  itemId: string;
  product: DetailProductModel;
  categories: string[];
  isLoading: boolean;
  isError: boolean;
}

class Detail extends Component<DetailProps, DetailState> {

  constructor(props: DetailProps) {
    super(props);
    this.state = {
      itemId: '',
      product: null,
      categories: [],
      isLoading: false,
      isError: false
    };
  }

  handleFetchProductsState(id: string): void {
    this.setFetchLoadingState();
    this.fetchProductDetail(id)
    .then(response => {
      if (!response.ok) {
        throw Error(response.MESSAGE)
      }
      return response.json()
    })
    .then(((result: DetailResponse) => {
      this.setFetchSuccessState(result);
      this.updateDocumentTitle();
    }))
    .catch(err => {
      this.setFetchErrorState();
    })
  }

  fetchProductDetail(id: string): Promise<any> {
    return fetch(`/api/items/${id}`);
  }

  updateDocumentTitle(): void {
    const categoriesLength = this.state.categories.length;
    document.title = categoriesLength > 0 ? this.state.categories[categoriesLength -1] : document.title
  }


  setFetchSuccessState(response: DetailResponse): void {
    this.setState({
      ...this.state,
      product: DetailItemDeserializer.deserializeDetailItem(response.item),
      categories: response.categories,
      isLoading: false,
      isError: false
    });
  }


  setFetchErrorState(): void {
    this.setState({
      ...this.state,
      product: null,
      categories: [],
      isLoading: false,
      isError: true
    });
  }
  setFetchLoadingState(): void {
    this.setState({
      ...this.state,
      product: null,
      categories: [],
      isLoading: true,
      isError: false
    });
  }


  componentDidMount() {
    const params: any = this.props.match.params;
    if (params.id) {
      this.setState({
        itemId: params.id
      });
      this.handleFetchProductsState(params.id);
    }
  }

  render() {
    return (
      this.state.isError ? 
      <span>Lo sentimos, hubo un error inesperado</span>
      :
      <div className="detail">
        <div className="detail-container">
        <div className="path-container">
            {this.state.isLoading ?
            <div className="-skeleton path-skeleton"></div>
            :
            <Breadcrumb categories={this.state.categories} />}
          </div>
          <div className="container">
            {this.state.isLoading ? 
              <DetailProductSkeleton />
              : 
              this.state.product ?
              <DetailProduct detailProduct={this.state.product}/>
              : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
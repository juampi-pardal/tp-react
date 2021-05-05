import React, { Component } from 'react';
import './Pagination.scss';



interface PaginationProps {
    totalRecords: number,
    pageLimit: number,
    onPageChanged: Function
}

interface PaginationState {
    currentPage: number;
    totalPages: number;
}


export class Pagination extends Component<PaginationProps, PaginationState> {

  constructor(props: PaginationProps) {
    super(props);
    this.state = {
       currentPage: 1,
       totalPages: Math.ceil(props.totalRecords / props.pageLimit)
    };

  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = (page: number) => {

    const { onPageChanged = (f: Function) => f } = this.props;

    const currentPage = page;

    const paginationData = {
      currentPage,
      totalPages: this.state.totalPages,
      pageLimit: this.props.pageLimit,
      totalRecords: this.props.totalRecords
    };

    this.setState({ currentPage },  () => onPageChanged(paginationData));
  }

  handleClick = (page: number) => (evt: any) => {
    evt.preventDefault();
    this.gotoPage(page);
  }


  render() {

    if (!this.props.totalRecords || this.state.totalPages === 1) return null;

    const { currentPage } = this.state;
    const nArray = Array.from(Array(this.state.totalPages).keys());
    
    return (
        <div className="Pagination-container">
            { nArray.map((page, index) => {
              return (
                <div key={index} className={`page-item${ currentPage === index + 1 ? ' active' : ''}`}>
                  <span className="page-link"  onClick={ this.handleClick(index + 1) }>{ index + 1 }</span>
                </div>
              );
            }) }
        </div>
    );

  }
}

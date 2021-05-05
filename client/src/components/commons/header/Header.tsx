import { Component } from "react";
import logo from '../../../assets/Logo_ML.png';
import searchIcon from '../../../assets/ic_Search.png';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './Header.scss';


interface HeaderState {
  searchInputValue: string;
}

class Header extends Component<RouteComponentProps, HeaderState> {

  constructor(props: any) {
    super(props);

    this.setState({
      searchInputValue: ''
    });

  }

  handleSearchClick = ($event: any) => {
    $event.preventDefault();
    if (this.state.searchInputValue) {
      this.props.history.push(`/items?search=${this.state.searchInputValue}`);
    }
  }
 
  handleLogoClick = () => {
    this.props.history.push(`/`);
  }

  updateInputValue(event: any) {
    this.setState({
      searchInputValue: event.target.value
    });
  }

  render() {

    return (
        <div className="header -bg-c-yellow">
            <div className="header-container ">
                <div className="logo-container">
                    <img src={logo} alt="" onClick={this.handleLogoClick}/>
                </div>
                <form className="form-container">
                    <input className="search-input" type="text" placeholder="Nunca dejes de buscar" onChange={evt => this.updateInputValue(evt)}/>
                    <button className="search-icon-container" onClick={($event) => this.handleSearchClick($event)}>
                      <img src={searchIcon} alt=""/>
                    </button>
                </form>
            </div>
        </div>
    );
  }
}

export default withRouter(Header);
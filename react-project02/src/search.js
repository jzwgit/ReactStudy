import React,{Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      value: '',
      isChecked: false
    }
  }
  handleChange(e) {
    this.setState({value: e.target.value});
    //这里用了取巧的办法，this.state.value值有延迟，故用e.target.value暂时代替
    this.props.getValue(e.target.value);
  }
  handleCheck(e) {
    this.setState({isChecked: !this.state.isChecked});
    this.props.getChecked(this.state.isChecked);
  }
  render() {
    return (
      <div className="search">
	<input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
	<p>
	  <input type="checkbox" onChange={this.handleCheck}/>
	  {''}
	  只显示有货的产品
	</p>
      </div>
    );
  }
}
export default Search;

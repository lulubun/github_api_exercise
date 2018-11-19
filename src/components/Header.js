import React from "react";
import * as actions from '../redux/actions';
import { connect } from "react-redux";
import Button from './Button';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "" 
        };
      }
      handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.props.newSearch(this.state.inputVal, 1)
        }
      }
    render () {
        const { newSearch } = this.props;
        const { inputVal } = this.state;
        return (
          <div>
            <input 
              onChange={(e) => {
                  this.setState({ inputVal: e.target.value })
              }}
              style={{
                  backgroundColor: '#65B891',
                  color: '#00241B',
                  borderRadius: '4px',
                  marginRight: '5px',
                  MozBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                  WebkitBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                  boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
              }}
              placeholder={'Find a GitHub user...'}
              value={inputVal}
              onKeyPress={this.handleKeyPress}
            />
            <Button
              buttonTitle={'Search'}
              buttonFunction={() => newSearch(inputVal, 1)}
            />
          </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
});
  
const mapDispatchToProps = (dispatch) => ({
    newSearch: (term, num) => dispatch(actions.startSearch(term, num)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
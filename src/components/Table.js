import React from "react";
import { connect } from "react-redux";
import Result from './Result';
import Button from './Button';
import * as actions from '../redux/actions'


class Table extends React.Component {
  pagination = (page, count, res, term) => {
    if (res.length < 1) {
      return null;
    } else if (count < 31) {
      return (<p>{page}</p>)
    } else if (page === 1){
      return (
        <div
          style={{
            display: 'inline-flex',
          }}
        >
        <p>{page}</p>
        <Button
          buttonTitle={'->'}
          buttonFunction={() => this.props.newSearch(term, 2)}
        />
        </div>
      )
    } else if ((page * 30) > count) {
      return (
        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
          }}
        >
          <Button
            buttonTitle={'<-'}
            buttonFunction={() => this.props.newSearch(term, (page - 1))}
          />
          <p>{page}</p>
        </div>
      )
    }
    return (
        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
          }}
        >
          <Button
            buttonTitle={'<-'}
            buttonFunction={() => this.props.newSearch(term, (page - 1))}
          />
          <p>{page}</p>
          <Button
            buttonTitle={'->'}
            buttonFunction={() => this.props.newSearch(term, (page + 1))}
          />
        </div>
    )
  }
  render () {
    const { results, userNm, totalCt, pageNumber, callDetail, details, clearDetail } = this.props;
    return (
      <div>
        {userNm && <h1>{totalCt} results for {userNm}</h1>}
        <table
          style={{
              borderRadius: '7px',
          }}
        >
          <tbody
            style={{ textAlign: 'left' }}
          >
            {results.map((m, i) => <Result m={m} i={i} key={m.id} callDetail={callDetail} details={details} clearDetail={clearDetail}/>)}
          </tbody>
        </table>
        {this.pagination(pageNumber, totalCt, results, userNm)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    results: state.results,
    userNm: state.userNm,
    totalCt: state.totalCt,
    pageNumber: state.pageNumber,
    details: state.details,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    newSearch: (term, num) => dispatch(actions.startSearch(term, num)),
    callDetail: (url, star_url) => dispatch(actions.callDetail(url, star_url)),
    clearDetail: () => dispatch(actions.clearDetail()),
})

  export default connect(mapStateToProps, mapDispatchToProps)(Table);
  
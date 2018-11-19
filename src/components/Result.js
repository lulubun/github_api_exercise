import React from "react";
import Button from './Button';


class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDetail: false,
    };
  }
  render () {
    const { m, i, callDetail, details, clearDetail } = this.props;
    const { viewDetail } = this.state;
    const dis = (viewDetail && details) ? 'flex' : 'none';
    const buttonText = viewDetail ? 'Less' : 'More';
    return(
      <tr
          style={{
              borderRadius: '7px',
          }}
          key={m.login}
      >
        <td
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            backgroundColor: i % 2 !== 0 ? '#4E878C' : 'null',
            color: i % 2 !== 0 ? '#B5FFE1' :  '#0A0908',
            borderRadius: '7px',
            border: '1px solid #65B891',
            MozBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
            WebkitBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
            boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
            margin: '15px',
            }}
          >
           <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
            }}>
              <div>
                <img
                    src={m.avatar_url}
                    style={{
                        maxHeight: '150px',
                        padding: '5px',
                        borderRadius: '7px',
                    }}
                    alt={`avatar for ${m.login}`}
                />
              </div>
              <div style={{
                padding: '15px'
              }}>
                <h3>
                  {m.login}
                </h3>
                <p>{m.type}</p>
                <Button
                  disabled={!viewDetail && details}
                  buttonTitle={buttonText}
                  buttonFunction={() => {
                    if (viewDetail && details) {
                      this.setState({ viewDetail: false })
                      clearDetail()
                    } else {
                      callDetail(m.url, m.starred_url)
                      this.setState({ viewDetail: true })
                    }
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: dis,
                margin: '5px',
                flexDirection: 'column',
              }}
            >
              {details && details.name &&<p>{details && details.name}</p>}
              {details && details.bio && <p>{details && details.bio}</p>}
              <a
                href={m.html_url}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'none', color: i % 2 !== 0 ? 'white' :  '#4E878C'}}
              >
                {m.login} on GitHub
              </a>
              {details && details.followers && <p>Followers: {details.followers} | Following: {details.following}</p>}
            </div>
          </div>
        </td>
      </tr>
    )
  }
}

export default Result
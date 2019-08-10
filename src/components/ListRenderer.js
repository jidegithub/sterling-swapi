import React, { Component } from 'react';
import Buttons from './Buttons';
import Spinner from './spinner';
import { Card } from 'semantic-ui-react';

class ListRenderer extends Component {
  state = {
    curr: null,
    prev: null,
    next: null,
    content: null
  };

  handleRespond = link => {
    if (link) {
      fetch(link)
        .then(resp => {
          if (resp.ok) return resp.json();
          else throw new Error('something is not right');
        })
        .then(({ results, next, previous }) => {
          this.setState({
            content: results,
            next: next,
            prev: previous
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    return;
  };

  componentDidMount() {
    this.handleRespond(this.props.curr);
  }

  componentDidUpdate() {
    this.handleRespond(this.props.curr);
  }

  handlePrevButton = () => {
    this.handleRespond(this.state.prev);
  };

  handleNextButton = () => {
    this.handleRespond(this.state.next);
  };

  render() {
    return this.state.content ? (
      <>
      <div className="rendered-cards" style={{position:'absolute', top:'445px'}}>
        <h2 style={{ color: '#1b1c1d' }}>{this.props.name}</h2>
        <Buttons
          prev={this.state.prev}
          next={this.state.next}
          fnPrev={this.handlePrevButton}
          fnNext={this.handleNextButton}
        />
        <Card.Group>{this.state.content.map(this.props.renderCard)}</Card.Group>
      </div>  
      </>
    ) : (
      <Spinner />
    );
  }
}

export default ListRenderer;

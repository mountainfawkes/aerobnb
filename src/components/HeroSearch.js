import React, { Component } from 'react';
import MagnifyingGlass from '../images/mag_glass.svg';

class HeroSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // which of the sections/buttons is selected, which type of form is showing
      type: 'experiences',
      bob: "not your uncle",
      unrelated: "hayo"
    }
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTypeChange(event) {
    console.log(event.target)
    this.setState({ type: event.target.id, "bob": "your uncle" })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("MAG GLASS CLICKED");
  }

  render() {
    const styles = {
      padding: '5px',
      margin: '8px'
    }

    const selectedStyles = {
      borderBottom: '2px solid gray',
      transition: 'all 2s'
    }

    const placesStyles = { display: 'flex', flexDirection: 'column', maxWidth: '22%' }

    const experiencesStyles = { display: 'flex', flexDirection: 'column', maxWidth: '40%' }

    const unselectedStyles = {
      borderBottom: 'none'
    }

    return (
      <div className="container">
        <div style={styles}>
          <span
            id='places'
            onClick={this.handleTypeChange}
            style={ this.state.type === 'places' ? {...styles, ...selectedStyles} : {...styles, ...unselectedStyles} }
          >Places to stay</span>
          <span
            id='experiences'
            onClick={this.handleTypeChange}
            style={ this.state.type === 'experiences' ? {...styles, ...selectedStyles} : {...styles, ...unselectedStyles} }
          >Experiences</span>
        </div>
        <div style={{ display: 'inline-flex', maxWidth: '99vw' }}>
          <div style={ this.state.type === 'places' ? placesStyles : experiencesStyles }>
            <label>Location</label>
              <input type='text'></input>
          </div>
          {
            this.state.type === 'places' ?
            <>
              <div style={ this.state.type === 'places' ? placesStyles : null }>
                <label>Check in</label>
                  <input type='date'></input>
              </div>
              <div style={ this.state.type === 'places' ? placesStyles : null }>
                <label>Check out</label>
                  <input type='date'></input>
              </div>
              <div style={ this.state.type === 'places' ? placesStyles : null }>
                <label>Guests</label>
                  <input type='text'></input>
              </div>
            </>
            :
            <>
              <div style={ this.state.type === 'experiences' ? experiencesStyles : null }>
                <label>Date</label>
                  <input type='date'></input>
              </div>
            </>
          }
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <img src={MagnifyingGlass} alt='submit search' style={{ width: '20px', margin: '4px', marginTop: '6px', alignSelf: 'flex-end' }} onClick={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSearch;

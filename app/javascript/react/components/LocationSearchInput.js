import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(address){
    this.setState({ address });
    this.props.handleAddress(address)
  };
  handleSelect = address => {
    this.setState({ address });
    this.props.handleAddress(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(longlat => {
          this.props.handleGeoLocation(longlat)
      })
      .catch(error => console.error('Error', error));

  }

  render() {
    return (
    <div className="">
    <label>
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                    );
                  })}
                </div>
                <br/>
              </div>
            )}
          </PlacesAutocomplete>
        </label>
      </div>
    );
  }
}

export default LocationSearchInput

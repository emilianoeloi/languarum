import React, {
  Component,
} from 'react';

class VerbItem extends Component {
  render() {
    return (
      <li>{this.props.verb}</li>
    )
  }
}

export default VerbItem;
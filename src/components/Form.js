import React, {
  Component,
} from 'react';

import VerbItem from './VerbItem';

class Form extends Component {
  render() {
    return (
      <div class={this.props.cssClass}>
        <h3>{this.props.title}</h3>
        <ul>
        {this.props.verbList.map((verb) => {
          return (
            <VerbItem verb={verb} />
          );
        })}
        </ul>
      </div>
    )
  }
}

export default Form;
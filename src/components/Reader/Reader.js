import { Component } from 'react';
import { Controls } from './Controls/Controls';
import { Progress } from './Progress/Progress';
import { Publication } from './Publication/Publication';

const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount = () => {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      const index = Number(localStorage.getItem(LS_KEY));
      this.setState({ index });
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;

    const currentItem = items[index];

    return (
      <div>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />

        <Publication item={currentItem} />
      </div>
    );
  }
}
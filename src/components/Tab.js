import React from 'react';
import PropTypes from 'prop-types';

//class Tab extends Component {
function Tab(props) {
  // static propTypes = {
  //   activeTab: PropTypes.string.isRequired,
  //   label: PropTypes.string.isRequired,
  //   onClick: PropTypes.func.isRequired,
  // };

  // calls Tabs.js onClickTabItem
  let onClick2 = () => {
    const { label, onClickTabItem } = props;
    onClickTabItem(label);
  }

  //render() {
    // const {
    //   onClick2,
    //   props: {
    //     activeTab,
    //     label,
    //   },
    // } = this;

    let className = 'tab-list-item';

    if (props.activeTab === props.label) {
      className += ' tab-list-active';
    }

    {/* Displays actual tab */}
    return (
      <li
        className={className}
        onClick={onClick2}
      >
        {props.label}
      </li>
    );
  //}
}

export default Tab;
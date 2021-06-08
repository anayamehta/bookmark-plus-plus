import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

//class Tabs extends Component {
function Tabs(props) {
    // static propTypes = {
    //     children: PropTypes.instanceOf(Array).isRequired,
    // }
    
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);
    // this.state = {
    //     activeTab: this.props.children[0].props.label,
    // };


    let onClickTabItem = (tab) => {
        setActiveTab(tab);
    }

    // const {
    //     onClickTabItem, 
    //     props: {
    //         children,
    //     }
    // } = this;
    

  return (
      <div className="tabs">
        <ol className="tab-list">
          {props.children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClickTabItem={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {props.children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            //console.log(props);
            return child.props.children;
          })}
        </div>
      </div>
    );
}

export default Tabs;
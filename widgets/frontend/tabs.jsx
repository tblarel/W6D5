import React from 'react'

class Tabs extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected_index : 1
    };
    this.tabsClick = this.tabsClick.bind(this);
    // this.textSwitch = this.textSwitch.bind(this);
  }



  tabsClick(e){
    e.preventDefault();
    this.setState({ selected_index: parseInt(e.currentTarget.innerText) });
    const tabbers = document.getElementsByClassName("tab");
    console.log(tabbers);
    
    for(var tab of tabbers){
      tab.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  }

  textSwitch() {
    switch (this.state.selected_index) {
      case 1:
        return "This is the text content for the first tab";
        break;
      case 2:
        return "This is the text content for the second tab";
        break;
      case 3:
        return "This is the text content for the third tab";
        break;
    };
  }


  render(){
    return (
      <>
        <ul className="tabs">
          <span onClick={this.tabsClick} className="tab active"key={1}>
            1
          </span>
          <span onClick={this.tabsClick} className="tab"key={2}>
            2
          </span>
          <span onClick={this.tabsClick} className="tab"key={3}>
            3          
          </span>
        </ul>
        <article className="article">{this.textSwitch()}</article>
      </>
    )
  }

}

  export default Tabs;




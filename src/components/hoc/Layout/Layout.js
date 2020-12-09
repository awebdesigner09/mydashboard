import React,{Component} from 'react';
import './Layout.css';
import Toolbar from '../../UI/Toolbar/Toolbar';
import Sidebar from '../../UI/Sidedrawer/Sidedrawer';


class Layout extends Component {
    state={
        showSidebar: false
    }

    sidebarClosedHandler = () =>{
        this.setState({showSidebar: false});
    }

    sidebarToggleHandler = () => {
        this.setState(
            (prevState) => {
                return {showSidebar: !prevState.showSidebar}
            }

        );
    }

    render(){
        let contentClasses = ['Content'];
        if(this.state.showSidebar)
            contentClasses = ['Content', 'Margin'];

        return (
            <div>
                <Sidebar open={this.state.showSidebar} closed={this.sidebarClosedHandler} />
                
                    <main className={contentClasses.join(' ')}>
                        <Toolbar sidebarToggle={this.sidebarToggleHandler} />
                        {this.props.children}
                    </main>
                
            </div>
        );
    }
}

export default Layout;
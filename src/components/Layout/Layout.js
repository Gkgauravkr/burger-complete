import React, {Component}from 'react';
import Aux from '../../hoc/auxillary';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state= {
        showSideDrawer : false
    }
    SideDrawerClosedHandler= () =>{
        this.setState({showSideDrawer: false});
    }
    drawerToggleHandler =() =>{

        this.setState( this.setState(
            (preState ) =>{
                return {
                    showSideDrawer : ! preState.showSideDrawer
                }
            }
        ));
    }

    render() {
        return (
        <Aux>
         
        <ToolBar  DrawerToggleClicked= {this.drawerToggleHandler}/>
        <SideDrawer open ={this.state.showSideDrawer} clicked ={this.SideDrawerClosedHandler}/>
        <main className={classes.content}>
            {this.props.children}
        </main>
    </Aux>
        )
        }
} 

export default Layout;
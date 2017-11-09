/**
 * Created by zhengdongxiang on 2017/11/9.
 */
import React ,{Component} from 'react'
import CheckBox from './checkbox'
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            style:props.style,
            head:props.head
        }
    }
    render(){
        const {style,head} = this.state;
        return (
            <div className="menu" style={style}>
                <div style={{paddingBottom:15}}>{head}</div>
                {this.props.children}
            </div>
        )
    }
}

class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id,
            checked:props.checked,
            count:props.count,
            title:props.title
        };
    }
    //props变化
    componentWillReceiveProps(nextProps){
        let {checked}= nextProps;
        this.setState({
            checked:checked
        })
    }
    render(){
        let {id,checked,count,title} = this.state;
        return (
            <li className="menu-item">
                <div className="title">
                    <CheckBox
                        checked={checked}
                        onChange={(checked)=>{
                            this.props.onChange(id,checked)
                        }}
                    />
                    {title}
                    <a className="count-pop">{count}</a>
                </div>
            </li>
        )
    }
}
class SubMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id,
            checked:props.checked,
            count:props.count,
            title:props.title
        }
    }
    //props变化
    componentWillReceiveProps(nextProps){
        let {checked}= nextProps;
        this.setState({
            checked:checked
        })
    }
    render(){
        let {id,checked,count,title} = this.state;
        return (
            <div className="sub-menu sub-menu-open">
                <div className="title">
                    <CheckBox
                        checked={checked}
                        onChange={(checked)=>{
                            this.props.onChange(id,checked)
                        }}
                    />
                    {title}
                    <span className="sub-menu-icon"></span>
                    <a className="count-pop">{count}</a>
                </div>
                <ul className="sub-menu-ul">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}
SubMenu.defaultProps = {
    title:{},
    checked:false,
    count:0,
};
MenuItem.defaultProps = {
    title:{},
    checked:false,
    count:0,
};
Menu.defaultProps ={
    openKey:[],
    style:{},
    head:{}
};
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu

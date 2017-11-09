import React ,{Component} from 'react'

import CheckBox from '../components/checkbox'
import Menu from '../components/menu'
const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

class Index extends Component{
    constructor(){
        super();
        this.state = {
            MenuMap :[{
                id:'sub1',
                title:'工程研发部门',
                checked:false,
                count:120,
                sub:[{id:'sub1$1',title:'Mac 开发工程师',count:9,checked:false},
                    {id:'sub1$2',title:'iOSApp 测试工程师',count:17,checked:false},
                    {id:'sub1$3',title:'Android 远程控制工程师',count:61,checked:false},
                    {id:'sub1$4',title:'Web 前端工程师',count:31,checked:false},
                    {id:'sub1$5',title:'Android 多媒体软件开发工程师',count:2,checked:false}]
            },{
                id:'sub2',
                title:'产品设计部门',
                checked:false,
                count:136,
                sub:[{id:'sub2$1',title:'网页设计师',count:47,checked:false},
                    {id:'sub2$2',title:'ID/工业设计师',count:39,checked:false},
                    {id:'sub2$3',title:'视觉设计师/GUI界面设计师',count:42,checked:false},
                    {id:'sub2$4',title:'平面设计师',count:8,checked:false}]
            }]
        }
    }
    subChecked(id,checked){
        let {MenuMap} = this.state;
        MenuMap.map((i)=>{
            if(i.id == id){
                i.checked = checked ;
                let {sub} = i ;
                sub.map((j)=>{
                    j.checked = checked
                })
            }
        });
        this.setState({
            MenuMap:MenuMap
        })
    }
    itemChecked(subId,id,checked){
        let {MenuMap} = this.state;
        MenuMap.map((i)=>{
            if(i.id == subId){
                let {sub} = i ;
                sub.map((j)=>{
                    if(j.id == id){
                        j.checked = checked
                    }
                })
                if(!checked){
                    i.checked = false
                }else{
                    let status = sub.filter((k)=>{
                        return k.checked == false;
                    });
                    if(!status.length){
                        i.checked = true
                    }
                }
            }
        });
        this.setState({
            MenuMap:MenuMap
        })
    }
    clearChecked(){
        let {MenuMap} = this.state;
        MenuMap.map((i)=>{
            let {sub} = i
            i.checked = false;
            sub.map((j)=>{j.checked=false})
        });
        this.setState({
            MenuMap:MenuMap
        })
    }
    render(){
        let {MenuMap} = this.state;
        return (
            <div class="content-wrapper">
                <Menu style={{width:300}} head={<div><span className="menu-head">招聘职位</span><a className="menu-button" onClick={()=>{this.clearChecked()}}>清空</a></div>}>
                    {MenuMap.map((i) =>{
                        let {sub,title,id,checked,count} = i;
                        let subId = id;
                        return (
                            <SubMenu
                                id={id}
                                checked={checked}
                                title={<span style={{display:'inline-block',paddingLeft:10,marginTop:5}}>{title}</span>}
                                count={count}
                                onChange={(id,checked)=>{
                                    this.subChecked(id,checked)
                                }}
                            >
                                {sub.map((j)=> {
                                    let {title,id,checked,count} = j;
                                    return (<Item
                                        id={id}
                                        checked={checked}
                                        title={<span style={{display:'inline-block',paddingLeft:10,marginTop:5}}>{title}</span>}
                                        count={count}
                                        onChange={(id,checked)=>{
                                            this.itemChecked(subId,id,checked)
                                        }}
                                    >

                                    </Item>)
                                })}
                            </SubMenu>
                        )
                    })}
                </Menu>
            </div>
        )
    }
}
export default Index
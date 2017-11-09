import React ,{Component} from 'react'

class CheckBox extends Component{
    constructor(props){
        super(props);
        const {defaultCheck,checked,onChange} = props;
        this.state = {
            checked:defaultCheck||checked,
            onChange:onChange
        }
    }
    componentWillReceiveProps(nextProps){
        let {checked}= nextProps;
        this.setState({
            checked:checked
        })
    }
    render(){
        const {checked,onChange} = this.state;
        return(
            <span className={checked?'checkbox checkbox-checked':'checkbox'} onClick={()=>{
                this.setState({
                    checked:!checked
                },()=>{
                    onChange(this.state.checked)
                })
            }}>
                <input type="checkbox" className="checkbox-input" value="on" />
                <span className="checkbox-inner" />
            </span>
        )
    }
}
CheckBox.defaultProps = {
    checked:false,
    defaultCheck:false,
    onChange:function () {
        
    }
};
export default CheckBox
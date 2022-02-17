import { Component } from "react/cjs/react.production.min";
import Button from "./UI/Button";
import Checkbox from './UI/Checkbox'
import classes from './Todos.module.css'

class Todos extends Component{
    deletedHandler(e){
        this.props.setTodos({todos : this.props.todos.filter(el=>el.id !== e.target.id)})
    }
    checkedHandler(e){
        this.props.setTodos({todos : this.props.todos.map(el=>el.id === e.target.id ? {...el,complete : !el.complete} : el)})
        console.log(this.props.todos);
    }
    render(){
        let show = <h1 className={classes.h1}>No tasks found 📝</h1>
        if(this.props.todos.length > 0){
               show = this.props.todos.map((todo)=>(
                <li className={`${classes.li} ${todo.complete && classes.donee}`} key={todo.id}>
                    <Checkbox type="checkbox" onChange = {this.checkedHandler.bind(this)} checked = {todo.complete} id = {todo.id} />
                    <label className={`${todo.complete ? classes.done : classes.task }`} htmlFor="">{todo.task}</label>
                    <Button className={classes.btnDelete} onClick={this.deletedHandler.bind(this)} id={todo.id}>Delete</Button>
                </li>
            ))
        }
        return(
            <ul>
                {show}
            </ul>
        )
    }
}
export default Todos
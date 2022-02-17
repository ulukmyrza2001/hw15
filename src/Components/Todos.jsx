import { Component } from "react/cjs/react.production.min";
import Button from "./UI/Button";
import Checkbox from './UI/Checkbox'
import classes from './Todos.module.css'
import { TodoContext } from "../Store/context-todo";

class Todos extends Component{
    static contextType = TodoContext
    deletedHandler(e){
        this.context.setState({todos : this.context.todos.filter(el=>el.id !== e.target.id)})
    }
    checkedHandler(e){
        this.context.setState({todos : this.context.todos.map(el=>el.id === e.target.id ? {...el,complete : !el.complete} : el)})
    }
    render(){
        let show = <h1 className={classes.h1}>No tasks found 📝</h1>
        if(this.context.todos.length > 0){
               show = this.context.todos.map((todo)=>(
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
function TodoMsg(props) {
    return(
        <div>
            <p>
                {props.allTodos.length > 0 ? "Please Complete all todos": "Done for the day :)"}
            </p>
        </div>
    )
}

export default TodoMsg;
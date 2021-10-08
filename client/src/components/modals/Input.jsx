function Input(props) {
    return(
        <input {...props} className={"bg-white border border-reddit_border focus:outline-none p-3 rounded-md "+ props.className} />
    );
}

export default Input;
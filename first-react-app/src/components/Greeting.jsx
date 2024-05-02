function Greeting(props) {
    return (
<>
{props.name ? (<h1>Hello {props.name}</h1>) : (<h1>Hello World</h1>)} {props.name && props.children ? (<p>{props.children}</p>) : null}
</>

    )
}

export default Greeting
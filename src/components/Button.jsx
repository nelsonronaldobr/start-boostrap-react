
export const Button = ({children, className}) => {
    console.log(className)
    console.log(children);
    return (
        <button className={className}>{children}</button>
    )
}

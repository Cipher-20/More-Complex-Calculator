
function Button({symbol, handleClick}) {

    return(
        <button className="btn"
        onClick={ () => handleClick(symbol)}>
        {symbol}
        </button>
    )
}

export default Button;
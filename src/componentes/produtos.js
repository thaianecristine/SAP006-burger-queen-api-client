import React from 'react';
import Button from './button.js';


function Produtos({
    onClick,
    divClassName,
    divKey,
    divName,
    divId,
    divPrice,
    produtosName,
    produtosPrice,
    produtosNameKey,
    produtosPriceKey,
    produtosFlavor,
    produtosComplement,
    ImgSrc,
}) {
    return (
        <>
            <div className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
                <div>
                    <img src={ImgSrc} className="img-food" alt="img-food"></img>
                </div>
                <h1 className="divName" key={produtosNameKey}>{produtosName}</h1>
                <div className="divButton">
                    <h1 className="divPrice" key={produtosPriceKey}> {divId} R${produtosPrice},00</h1>
                    <h1 className="divFlavor"> {produtosFlavor}</h1>
                    <h1 className="divComplement"> {produtosComplement}</h1>
                </div>
                <Button onClick={onClick} buttonClass="add-button"> ADD </Button>
            </div>
        </>
    );
}
export default Produtos;
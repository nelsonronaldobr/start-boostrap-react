

export const CardContainer = ({products, className}) => {
    // console.log(products)
    // console.log(children);
    return (
        <div className={className}> 
            {products.map((product,index) => (
             <ProductCard key={product.id} producto={product}>{product.description}</ProductCard>
            )

           ) }
        </div>
    )
}

const ProductCard= ( {children,producto})=>{
    const {name,price} = producto;
return(
    <div>
    <h1>{name}</h1>
    <span>{price}</span>
    <p>{children}</p>
</div>
)
}

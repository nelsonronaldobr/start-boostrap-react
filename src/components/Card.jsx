

export const CardContainer = ({products, className}) => {
    // console.log(products)
    // console.log(children);
    return (
        <div className={className}> 
            {products.map((product,index) => (
             <ProductCard key={product.id} product={product}>{product.description}</ProductCard>
            )

           ) }
        </div>
    )
}

const ProductCard= ( {children, product : { name, price }})=>{
return(
    <div>
    <h1>{name}</h1>
    <span>{price}</span>
    <p>{children}</p>
</div>
)
}

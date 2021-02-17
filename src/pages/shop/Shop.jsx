export function Shop({products}){
    return (
        <>
        <div>
            wrapper
            {
                products.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}
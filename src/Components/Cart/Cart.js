import React from 'react'

const Cart = () => {
    let cart=data;
    let total=0;
  return (
    <div>
         <table>
        {
            cart.map(function(product){

                total += product.price;

                return <tr>
                  
                    <td>{product.title}</td>
                    <td>{product.price}</td>                    
                </tr>
            })
        }
        <tr>
            <td>Total Bill</td>
            <td>
            {total}
            </td>
        </tr>
    </table>
    </div>
  )
}

export default Cart;

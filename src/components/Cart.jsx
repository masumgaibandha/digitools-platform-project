import React from 'react';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, cart)=> sum + cart.price, 0)
    return (
        <div className='w-7xl mx-auto'>
          
            {
                carts.map((cart, index)=>{
                    return <div key={index} >
            <div className="space-y-3 border my-3 rounded-2xl overflow-hidden">
        <div className="card card-side bg-base-100 shadow-sm items-center px-3 ">
      <div>
        <img
          src={cart.icon} className="w-20 object-cover rounded-2xl h-20 p-6"
          alt="Movie"
        />
      </div>
      <div className="card-body ">
        <h2 className="card-title">{cart.name}</h2>
        <p>$ {cart.price}</p>
      </div>
      <div className=" cursor-pointer" >
          <span className='text-red-500 font-bold pr-4'>Remove</span>
        </div>
    </div>
    
    </div>
    
        </div> 

                })
            }

            <div className="flex justify-between items-center pr-3 text-2xl font-bold">
        <p>Total:</p>
        <span>$ {totalPrice}</span>
      </div>
      <div className="mt-5">
        <button className="btn w-full rounded-2xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">Proceed to Checkout</button>
      </div>
            
        </div>
    );
};

export default Cart;
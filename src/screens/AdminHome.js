import React, { useEffect, useState } from 'react'
// import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Order() {

    const [orderData, setorderData] = useState({})

    const fetchOrder = async () => {
        // console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/auth/AllOrdersData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            // mode : "cors",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async (res) => {
            let response = await res.json()
            setorderData(response)
            console.log(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchOrder()
    }, [])

  return (
    <div >
      <div>
        <Navbar user={"Admin"}/>
      </div> 
      <div className='container'> {/* boootstrap is mobile first */}
        {
        //   foodCat !== []
        //     ? foodCat.map((data) => {
        //       return (
        //         // justify-content-center
        //         <div className='row mb-3'>
        //           <div key={data.id} className='fs-3 m-3'>
        //             {data.CategoryName}
        //           </div>
        //           <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
        //           {foodItems !== [] ? foodItems.filter(
        //             (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
        //             .map(filterItems => {
        //               return (
        //                 <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
        //                   {console.log(filterItems.url)}
        //                   <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
        //                 </div>
        //               )
        //             }) : <div> No Such Data </div>}
        //         </div>
        //       )
        //     })
        //     : ""
        <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>

    }
      </div>
      <Footer />
    </div>









  )
}

import Quality from '../assets/Q-Food.png'
import Healthy from '../assets/Healthy Food.png'
import fastDelivery from '../assets/fast-delivery.png'
const Why = () => {
   return (
    <>
    <div className='flex flex-col items-center'>
        <h4 className='font-bold uppercase text-center text-[#f47628]'>Services</h4>
        <h1 className='font-bold text-2xl text-center py-5'>Why Choose our Food</h1>

        <div className='flex flex-col justify-center gap-16 w-screen lg:flex lg:flex-row lg:justify-around lg:px-20 lg:w-[100rem] md:flex md:flex-col'>
            <section className='border flex flex-col items-center gap-4 py-4 px-auto lg:w-[22rem] md:w-[18rem] rounded-2xl'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={Quality}/>
                <h4 className='font-bold text-xl'>Quality Food</h4>
                <p className='text-center leading-8 px-3'>But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.</p>
            </section>

            <section className='flex flex-col items-center gap-4 py-4 px-auto lg:w-[22rem] md:w-[18rem] rounded-2xl shadow-xl border'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={Healthy}/>
                <h4 className='font-bold text-xl'>Healthy Food</h4>
                <p className='text-center leading-8 px-3'>But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.</p>
            </section>

            <section className='border flex flex-col items-center gap-4 py-4 px-auto lg:w-[22rem] md:w-[18rem] rounded-2xl'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={fastDelivery}/>
                <h4 className='font-bold text-xl'>Fast Delivery</h4>
                <p className='text-center leading-8 px-3'>But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.</p>
            </section>
        </div>
    </div>
    </>
   )
}
export default Why
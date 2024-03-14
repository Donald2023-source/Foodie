import Quality from '../assets/Q-Food.png'
import Healthy from '../assets/Healthy Food.png'
import fastDelivery from '../assets/fast-delivery.png'
const Why = () => {
   return (
    <>
    <div>
        <h4 className='font-bold uppercase text-center text-[#f47628] mt-20'>Services</h4>
        <h1 className='font-bold text-2xl text-center py-5'>Why Choose our Food</h1>

        <div className='grid grid-cols-1 gap-20 place-items-center lg:flex justify-around lg:w-[100rem] md:grid md:gap-4 md:grid-cols-3'>
            <section className='border flex flex-col items-center gap-4 py-4 px-auto w-[22rem] md:w-[18rem] rounded-2xl'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={Quality}/>
                <h4 className='font-bold text-xl'>Quality Food</h4>
                <p className='text-center leading-8'>But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.</p>
            </section>

            <section className='flex flex-col border items-center gap-10 py-4 px-auto w-[22rem] md:w-[18rem] rounded-2xl shadow-xl'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={Healthy}/>
                <h4 className='font-bold text-xl'>Healthy Food</h4>
                <p className='text-center leading-8'>But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.</p>
            </section>

            <section className='border flex flex-col items-center gap-4 py-4 px-auto w-[22rem] md:w-[18rem] rounded-2xl'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={fastDelivery}/>
                <h4 className='font-bold text-xl'>Fast Delivery</h4>
                <p className='text-center leading-8'>But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.</p>
            </section>
        </div>
    </div>
    </>
   )
}
export default Why
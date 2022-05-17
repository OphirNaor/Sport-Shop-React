// import { memo } from 'react'
// import { useFormRegister } from '../hooks/useFormRegister.js'

// export const ProductFilter = memo((props) => {

//     const [register] = useFormRegister({
//         name: '',
//         price: '',
//     }, props.onChangeFilter)


//     console.log('Filter rendered');
//     return (
//         <section className="robot-filter">

//             <section>
//                 <label htmlFor="model">Name</label>
//                 <input type="text" {...register('name')} />
//             </section>
//             <section>
//                 <label htmlFor="type">Price</label>
//                 <input type="text" {...register('price')} />
//             </section>
//             {/* <section>
//                 <label htmlFor="minBatteryStatus">minBatteryStatus</label>
//                 <input type="number" {...register('minBatteryStatus')} />
//             </section>
//             <section>
//                 <label htmlFor="maxBatteryStatus">maxBatteryStatus</label>
//                 <input type="number" {...register('maxBatteryStatus')} />
//             </section> */}
//         </section>
//     )
// })
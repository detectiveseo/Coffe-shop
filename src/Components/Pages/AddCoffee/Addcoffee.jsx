import React from 'react';
import { addCoffeFormHandle } from './fucntion';

const Addcoffee = () => {
    return (
        <div className='bg-colors-accent'>
            <div className='w-11/12 mx-auto'>
                <form 
                onSubmit={addCoffeFormHandle}
                className='px-96 py-32'>
                    <label
                        htmlFor="title"
                        className='font-bold uppercase'> Title
                        <br />
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder='title'
                            className='border p-2 w-full'
                        />
                    </label>

                    <label
                        htmlFor="image_url"
                        className='font-bold uppercase'> Image URL
                        <br />
                        <input
                            type="text"
                            name="image_url"
                            id="image_url"
                            placeholder='Image url'
                            className='border p-2 w-full'
                        />
                    </label>


                    <div className='flex justify-between gap-10'>
                        <label
                            htmlFor="weight"
                            className='font-bold uppercase w-full'> Weight
                            <br />
                            <input
                                type="text"
                                name="weight"
                                id="Weight"
                                placeholder='Weight'
                                className='border p-2 w-full'
                            />
                        </label>

                        <label
                            htmlFor="Origin"
                            className='font-bold uppercase w-full'> Origin
                            <br />
                            <input
                                type="text"
                                name="origin"
                                id="Origin"
                                placeholder='Origin'
                                className='border p-2 w-full'
                            />
                        </label>

                        <label
                            htmlFor="Price"
                            className='font-bold uppercase w-full'> Price
                            <br />
                            <input
                                type="number"
                                name="price"
                                id="Price"
                                placeholder='Price'
                                className='border p-2 w-full'
                            />
                        </label>
                    </div>

                    <label
                        htmlFor="title"
                        className='font-bold uppercase'> details
                        <br />
                        <textarea
                            className='w-full border p-2'
                            name="details"
                            id="details"
                            rows="10"></textarea>
                    </label>
                    <input 
                    className='btn border py-2 px-3 bg-colors-secondary text-colors-gray uppercase font-mono font-bold'
                    type="submit" 
                    value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default Addcoffee;
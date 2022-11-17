import React from 'react';

const Subscribe = () => {
    return (
        <div className="w-full px-4 py-16 bg-black text-white text-center">
            <div className="max-w-[1240px] mx-auto px-4">
                <h1 className="my-4">Join Our DeFi Community</h1>
                <form className="py-4">
                    <input className="p-3 rounded-3xl mr-4" type="text" placeholder="Enter your email" />
                    <button>Sign Up</button>
                </form>
                <div className='flex items-center justify-center py-2 space-x-2'>
                    <input type='checkbox' />
                    <p className="text-xs sm:text-base">Yes, I agree to receive email communications from DeFi</p>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
import React from 'react';
import Input from './Input';

const NewsLetter = () => {
  return (
    <div className='pt-24'>
      <div className='flex flex-col justify-center items-center'>
        <div className='max-w-[560px] font-semibold text-[22px] font-Poppins leading-[33px] text-center'>
          <h3>Updates Subscription!</h3>
          <h3>Never miss our latest updates!</h3>
        </div>

        <div className='flex flex-wrap items-center gap-4 pt-8'>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            className='max-w-[620px]'
          />
          <button className='bg-[#FD6221] px-6 rounded-lg py-3'>
            Notify me
          </button>
        </div>
      </div>

      <div className='text-center'>
        <p className='text-[12px] text-[#9BA6B7] font-medium pt-2'>
          We care about the protection of your data. Read our{' '}
          <span className='text-[#3772FF]'>Privacy Policy.</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;

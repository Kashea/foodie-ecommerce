import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Store } from '@/utils/Store';

export default function Layout({ title, children }) {
  const { state} = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + ' - Foodie' : 'Foodie'}</title>
        <meta name='description' content='Ecommerce Created by RWORX' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link href='/' legacyBehavior>
              <a className='text-lg font-bold'>FOODIE</a>
            </Link>
            <div>
              <Link href="/cart" legacyBehavior>
                <a className='p-2'>Cart
                  {cart.cartItems.length > 0 && (
                    <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className='p-2'>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4 '>
          {children}
        </main>
        <footer className='flex justify-center items-center shadow-inner'>
          <p>Copyright © 2023 FOODIE</p>
        </footer>
      </div>
    </>
  );
}

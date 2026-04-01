import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='text-white bg-black py-8'>
            <div className="flex flex-col gap-2  m-[3%]">
                <div className="grid grid-cols-6 gap-5">
                    <div className=" col-span-2">
                        <h1 className='text-2xl'>DigiTools</h1>
                        <p className='text-xs opacity-70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className="">
                        <h3 className=''>Product</h3>
                        <h4 className='text-xs opacity-70'>Features</h4>
                        <h4 className='text-xs opacity-70'>Pricing</h4>
                        <h4 className='text-xs opacity-70'>Templates</h4>
                        <h4 className='text-xs opacity-70'>Integrations</h4>
                    </div>
                    <div className="">
                        <h3 className=''>Company</h3>
                        <h4 className='text-xs opacity-70'>About</h4>
                        <h4 className='text-xs opacity-70'>Blog</h4>
                        <h4 className='text-xs opacity-70'>Careers</h4>
                        <h4 className='text-xs opacity-70'>Press</h4>
                    </div>
                    <div className="">
                        <h3 className=''>Resources</h3>
                        <h4 className='text-xs opacity-70'>Documentation</h4>
                        <h4 className='text-xs opacity-70'>Help Center</h4>
                        <h4 className='text-xs opacity-70'>Community</h4>
                        <h4 className='text-xs opacity-70'>Contact</h4>
                    </div>
                    <div className="space-y-2">
                        <h3>Social Links</h3>
                        <ul className='flex gap-2'>
                            <li><a href="">
                            <FaInstagram/>
                            </a></li>
                            <li><a href="">
                            <FaFacebook/>
                            </a></li>
                            <li><a href="">
                            <FaXTwitter/>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="h-px bg-gray-400 m-2">
                    </div>
                    <div className="flex justify-between">
                        <h3>© 2026 Digitools. All rights reserved.</h3>
                        <div className="flex gap-3">
                            <h3>Privacy Policy</h3>
                            <h3> Terms of Service</h3>
                            <h3>Cookies</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'nextjs-toploader/app';
import { useTopLoader } from 'nextjs-toploader';

const Logo = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/')} className="relative h-10 w-auto ">
            <Image src="/images/owner_logo.jpg" alt="logo" className="block cursor-pointer" priority={true} height={100} width={200} />
        </div>
    );
};


export default Logo;
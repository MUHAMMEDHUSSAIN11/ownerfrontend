// 'use client';


// import useClickOutside from '@/app/hooks/useClickOutside';
// import { useRouter } from 'nextjs-toploader/app';
// import React, { useCallback } from 'react'
// import { AiOutlineMenu } from "react-icons/ai";
// import Avatar from '../Avatar/Avatar';
// import UserMenuItem from './UserMenuItem';


//   const RightContent = () => {
    
//     // Use the custom hook instead of useState and useEffect
//     const { isOpen, setIsOpen, ref, toggleRef } = useClickOutside(false);
//     const router = useRouter();

//     const handleLogout = () => {
//         // signOut();
//     };

//     const toggleOpen = useCallback(() => {
//         setIsOpen((value) => !value);
//     }, [setIsOpen]);

//     const onRent = useCallback(() => {
//         //open rent modal
//         // rentModal.onOpen();
//     }, [])

//     return (
//         <div className="relative">
//             <div className="flex flex-row items-center gap-4 ">
   
//                 <div 
//                     ref={toggleRef} // Apply toggleRef to the toggle button
//                     onClick={toggleOpen} 
//                     className="p-3 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
//                 >
//                     <AiOutlineMenu />
//                     <div className="hidden md:block gap-2">
//                         <Avatar />
//                     </div>
//                 </div>
//             </div>
//             {isOpen &&
//                 <div
//                     ref={ref} // Apply ref to the dropdown menu
//                     className="absolute rounded-xl shadow-md w-[40vw] md:w-48 bg-white overflow-hidden right-0 top-12 text-sm z-[60]"
//                 >
//                     {/* <div className="absolute rounded-xl shadow-md w-[40vw] md:w-40 bg-white overflow-hidden right-0 top-12 text-sm min-w-[180px]"> */}
//                     <div className="flex flex-col cursor-pointer">
//                         {true && (
//                             <>
//                                 <UserMenuItem onClick={handleLogout} label="Logout" />
//                                 <hr />
//                                 <div className="sm:block md:hidden px-4 py-3 hover:bg-neutral-100 transition">Contact Us</div>
//                             </>
//                         )}
//                         {!true && (
//                             <>
//                                 <UserMenuItem onClick={() => {}} label="Login" />
//                                 <UserMenuItem onClick={() => {}} label="Sign Up" />
//                                 <div className="sm:block md:hidden px-4 py-3 hover:bg-neutral-100 transition ">Contact Us</div>
//                             </>
//                         )}
//                         {true && 
//                         // isAuthority(user.uid) && 
//                         (
//                             <>
//                                 <UserMenuItem onClick={() => router.push('/admin')} label="Reservations" />
//                                 <hr />
//                                 <UserMenuItem onClick={onRent} label="Add Listing" />
//                                 <hr />
//                                 <UserMenuItem onClick={() => router.push('/manageListings')} label="Manage Listings" />

//                             </>
//                         )}
//                     </div>
//                 </div>
//             }
//         </div>
//     );
// };


// export default RightContent

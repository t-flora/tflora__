import React from "react";
const today = new Date();

export default function Footer() {
    return ( 
        <div className="p-2.5 text-center">
            <footer>
                &copy; {today.getFullYear()} Tiago Flora. All rights reserved. Built with ❤️ with <a href="https://nextjs.org/" className="hover:underline">Next.js</a>
            </footer>
        </div>
    )
}
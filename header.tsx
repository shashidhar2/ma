"use client"
import { useState } from 'react';
import './globals.css'
import Link from 'next/link';

export default function Header() {
    const [route, setRoute] = useState("/");

    return (
        <div className="topnav">
          <Link
            className={route === "/" ? "active" : ""}
            onClick={() => setRoute('/')}
            href="member-attribute"
          >
            Member Attribute
          </Link>
          <Link
            className={route === "/fap" ? "active" : ""}
            onClick={() => setRoute('/fap')}
            href="fap"
          >
            FAP
          </Link>
          <Link
            className={route === "/member-attribute" ? "active" : ""}
            href="contact"
          >
            Error Page
          </Link>
        </div>
    )
  }
  
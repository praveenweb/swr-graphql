import React, { Component } from 'react';
import Link from 'next/link';
import '../styles/style.css';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <header>
            <ul>
                <li><Link href="/"><a>Queries</a></Link></li>
                <li><Link href="/optimistic-ui"><a>Optimistic UI</a></Link></li>
                <li><Link href="/subscriptions"><a>Subscriptions</a></Link></li>
            </ul>
        </header>
        {children}
      </div>
    );
  }
}

export default Layout;
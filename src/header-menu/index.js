import React from 'react'
import { Menu } from 'semantic-ui-react'
import './index.css';

export default function HeaderMenu() {
  return (
    <div className="header-menu">
      <Menu stackable>
        <Menu.Item>
          <img alt="t" src='http://semantic-ui.com/images/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
        >
          Sign-in
        </Menu.Item>
      </Menu>
    </div>
  );
}

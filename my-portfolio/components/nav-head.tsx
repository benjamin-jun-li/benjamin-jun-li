'use client'
import React, { useState } from "react";
import Link from 'next/link';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './styles.module.css';

const NavHead = () => {
    const [activeButton, setActiveButton] = useState('');
    const [menuShow, setMenuShow] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuShow);
    const handleIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (menuShow) {
            setMenuShow(null);
        } else {
            setMenuShow(event.currentTarget);
        }
    };
    return (
        <div className={styles.header}>
            <span className={styles.nameSpan}>Benjamin Jun Li</span>
            <ButtonGroup className={styles.optionGroup} variant="text" aria-label="text button group">
                <Button id='home' className={`${styles.option} ${activeButton === 'home' && styles.activeOpt}`}><Link href={'/'}>Home</Link></Button>
                <Button id='about' className={`${styles.option} ${activeButton === 'about' && styles.activeOpt}`}><Link href={'/about'}>About</Link></Button>
                <Button id='projects' className={`${styles.option} ${activeButton === 'projects' && styles.activeOpt}`}><Link href={'/projects'}>Projects</Link></Button>
            </ButtonGroup>
            <IconButton className={styles.icon}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleIcon}>
                <MenuIcon />
            </IconButton>
            <Menu
                className={styles.menu}
                anchorEl={menuShow}
                open={open}
                onClose={() => { setMenuShow(null) }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem >Home</MenuItem>
                <MenuItem >About</MenuItem>
                <MenuItem >Projects</MenuItem>
            </Menu>
        </div>
    )
}

export default NavHead;
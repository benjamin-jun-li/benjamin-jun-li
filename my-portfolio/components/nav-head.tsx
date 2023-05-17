'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './styles.module.css';

const NavHead = () => {
    const router = useRouter();
    const [menuShow, setMenuShow] = useState<null | HTMLElement>(null);
    const open = Boolean(menuShow);
    const handleIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (menuShow) {
            setMenuShow(null);
        } else {
            setMenuShow(event.currentTarget);
        }
    };

    const handleNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const id = event.currentTarget.id;
        if (id !== 'home') {
            router.push(`/${id}`);
        } else {
            router.push('/');
        }

    }
    return (
        <div className={styles.header}>
            <ButtonGroup className={styles.optionGroup} variant="text" aria-label="text button group">
                <Button id='home' onClick={handleNavigate} className={styles.option}>Home</Button>
                <Button id='about' onClick={handleNavigate} className={styles.option}>About</Button>
                <Button id='projects' onClick={handleNavigate} className={styles.option}>Projects</Button>
            </ButtonGroup>
            <IconButton id={'menu'}
                        className={styles.icon}
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
                    'aria-labelledby': 'menu'
                }}
            >
                <MenuItem onClick={() => router.push('/')} id='home'>Home</MenuItem>
                <MenuItem onClick={(event) => router.push(`/${event.currentTarget.id}`)} id='about'>About</MenuItem>
                <MenuItem onClick={(event) => router.push(`/${event.currentTarget.id}`)} id='projects'>Projects</MenuItem>
            </Menu>
        </div>
    )
}

export default NavHead;
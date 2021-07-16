import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import { BiHomeCircle, BiMessageDetail } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { FaRegLaugh } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './NavbarHead.css'

const NavbarHead = () => {
    const user = 'James'
    const group = 'space CowBOY'

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
            margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));

    const classes = useStyles();

    return (
        <div className='navbarhead'>

           <div className="navbarhead__left">
               <div className="navbarhead__logo">
                   GAMERSBACK
               </div>
               <div className="navbarhead__search">
                   <ImSearch className='search-icon' />                   
                   <input type="text" placeholder='Search..' />
               </div>
            </div> 
            
            <div className="navbarhead__right">
                <div className="navbarhead__list">
                    <h4>
                        Stream
                    </h4>
                    <ul>
                        <li> <BiHomeCircle /> </li>
                        <li className='navbarhead__notif'>
                             <FaRegLaugh />
                             <span className="notif-badge">4</span>
                              </li>
                        <li> <BiMessageDetail /> </li>
                        <li className='navbarhead__notif'>
                            <BsBell />
                            <span className="notif-badge">17</span>
                         </li>
                    </ul>
                </div>
                <div className="navbarhead__user">
                    <Avatar className={classes.small} alt={user} src />
                    <div className="username">
                        <b> {user} </b>
                        <b> { group } </b>
                    </div>
                    <RiArrowDropDownLine className='down-arrow' />
                </div>
            </div>

        </div>
    )
}

export default NavbarHead

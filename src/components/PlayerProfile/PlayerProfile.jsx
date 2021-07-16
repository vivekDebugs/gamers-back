import React from 'react'
import './PlayerProfile.css'
import { AiFillHome } from 'react-icons/ai'
import { GiGamepad } from 'react-icons/gi'
import playerProfile from '../../assets/player_profile.png'

const PlayerProfile = () => {
    return (
        <div className='playerprofile'>
           <div className="playerprofile__head">
               <div className="playerprofile__game">
                    <h3>GameName</h3>
                    <button>Add Game</button>
               </div>
               <div className="playerprofile__nav">
                   <AiFillHome className='fill-home' />
                   <GiGamepad />
               </div>
           </div>
           <div className="playerprofile__main">
               <div className="playerprofile__gameType">
                   <h4>Casual</h4>
                   <h4>Competitive</h4>
               </div>
               <div className="playerprofile__hero">
                   <div className="playerprofile__name">
                        <h1>
                            PlayerName
                        </h1>
                        <button>Edit</button>
                        <h4>
                            Assaulter
                        </h4>
                   </div>
                   <div className="playerprofile__recentGames">
                       <h3>Recently played</h3>
                       <div className="playerprofile__games">
                           <div className="game-container">
                               {/* img */}
                           </div>
                           <div className="game-container">
                               {/* img */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            <div className="playerprofile__statsContainer">
                <div className="stats-left">
                    <ul>
                        <li>Matches Played</li>
                        <li>Finishes</li>
                        <li>Wins</li>
                        <li>K/D Ratio</li>
                    </ul>
                </div>
                <div className="stats-right">
                    <ul>
                        <li>Avg Damage</li>
                        <li>Avg Survival Time</li>
                        <li>Accuracy</li>
                        <li>Headshot Percentage</li>
                    </ul>
                </div>
            </div>
            <div className="player-img">
                <img src={playerProfile} alt="playerProfile" />
                <div className="player-tier"></div>
            </div>
        </div>
    )
}

export default PlayerProfile

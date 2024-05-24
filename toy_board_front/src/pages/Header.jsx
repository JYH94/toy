import { useState } from 'react';
import './Header.css';
import { Link, Routes,Route } from 'react-router-dom';
import Fishing from './selectProject/fishing/Fishing';
import Board from './selectProject/board/Board';
import SelectProject from './selectProject/SelectProject';


const Header = () => {
    const [openStatus, SetOpenStatus] = useState({
        point: false,
        board: false,
    });
    return (
        <div id='total_info'>
            <div id='privacy'>
                <span className='info_title'>Name</span>
                <p>테스트 </p>
                <span className='info_title'>Github</span>
                <p>https://github.com/JYH94</p>
                <span className='info_title'>velog</span>
                <p>https://velog.io/@dydgusc66/posts</p>
            </div>
            <div id='menu_bar'>
                <div>
                    <Link to='/'>HOME</Link>
                </div>
                <div onClick={() => SetOpenStatus(pre => ({ ...pre, board: !openStatus.board }))}>About ME
                    {openStatus.board &&
                        <ul>
                            <li>자유게시판</li>
                            <li>조행기</li>
                        </ul>
                    }
                </div>
                <div onClick={() => SetOpenStatus(pre => ({ ...pre, point: !openStatus.point }))}>Fishing
                    {openStatus.point &&
                        <ul>
                            <li><Link to="/fishing?column=pointAddr&keyword=강원">강원</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=서울">서울</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=경기">경기</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=충북">충북</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=충남">충남</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=전북">전북</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=전남">전남</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=경북">경북</Link></li>
                            <li><Link to="/fishing?column=pointAddr&keyword=경남">경남</Link></li>
                        </ul>
                    }
                </div>
                <div onClick={() => SetOpenStatus(pre => ({ ...pre, board: !openStatus.board }))}>Board
                    {openStatus.board &&
                        <ul>
                            <li>자유게시판</li>
                            <li>조행기</li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
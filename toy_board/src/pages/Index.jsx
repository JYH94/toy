import { useState } from 'react';
import './Index.css';
import SelectProject from './selectProject/SelectProject';


const Index = () => {

    const [openStatus, SetOpenStatus] = useState({
        point: false,
        board: false,
    });

    return (
        <div className='container'>
            <div id='total_info'>
                <div id='privacy'>
                    {/* <p><span className='info_title'>Name</span> 주용현</p>
                    <p><span className='info_title'>Github</span> https://github.com/JYH94</p>
                    <p><span className='info_title'>velog</span> https://velog.io/@dydgusc66/posts</p> */}
                    <span className='info_title'>Name</span>
                    <p>주용현</p>
                    <span className='info_title'>Github</span>
                    <p>https://github.com/JYH94</p>
                    <span className='info_title'>velog</span>
                    <p>https://velog.io/@dydgusc66/posts</p>
                </div>
                <div id='menu_bar'>
                    <div onClick={() => SetOpenStatus(pre => ({ ...pre, point: !openStatus.point }))}>Fishing
                        {openStatus.point &&
                            <ul>
                                <li>경기</li>
                                <li>충청</li>
                                <li>경상</li>
                                <li>강원</li>
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
            <SelectProject />

        </div>
    );
}

export default Index;
import './Board.css';
import { useEffect } from "react";
import { api } from "../../model";
import { useState } from "react";
import Board_side from './board_side/Board_side';


const Board = () => {

    const [posting, setPosting] = useState({
        writer: '테스트',
        title: '테스트',
        content: '테스트중입니다.',
        image: null
    });
    const [fileURL, setFileURL] = useState();


    useEffect(() => {

    }, [])

    const changePosting = (e) => {
        setPosting(pre => ({
            ...pre,
            [e.target.name]: e.target.value
        }))


    }

    const changeFile = (e) => {
        setPosting(pre => ({
            ...pre,
            image: e.target.files[0]
        }))
        const reader = new FileReader();
        reader.onload = (event) => {
            setFileURL(event.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const submitPosting = () => {
        const formData = new FormData();
        formData.append('title', posting.title);
        formData.append('content', posting.content);
        formData.append('writer', posting.writer);
        formData.append('image', posting.image);

        api('/board/check', 'post', formData);
    }

    console.log(posting)

    return (
        <div className="container">
            <div className="contentBox">
                <div className="topTitle">
                    <div>
                        <label htmlFor="">회원&nbsp;
                            <input type="checkbox" />
                        </label>
                        <label htmlFor="">비회원&nbsp;
                            <input type="checkbox" />
                        </label>
                    </div>
                    <h3>조행기</h3>
                </div>
                <div className='board_contentBox'>
                    <div>
                        <div>seq</div>
                        <div>분류</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일시</div>
                        <div>조회수</div>
                    </div>
                    <div>
                        <div>seq</div>
                        <div>분류</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일시</div>
                        <div>조회수</div>
                    </div>
                    <div>
                        <div>seq</div>
                        <div>분류</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일시</div>
                        <div>조회수</div>
                    </div>
                    <div>
                        <div>seq</div>
                        <div>분류</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일시</div>
                        <div>조회수</div>
                    </div>
                </div>
            </div>
            <Board_side />
        </div>
    )
}

export default Board;
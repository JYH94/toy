import { useEffect } from "react";
import { api } from "../../model";
import { useState } from "react";


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
                <h1>자유게시판</h1>

                <div className="board_main">
                    <div>제목
                        <input type="text" name="title" onChange={changePosting} />
                    </div>
                    <div>작성자
                        <input type="text" name="writer" onChange={changePosting} />
                    </div>
                    <div>
                        <textarea name="content" id="" cols="30" rows="10" onChange={changePosting}></textarea>
                    </div>
                    <div>
                        <input type="file" name="image" onChange={changeFile} />
                    </div>
                    <button onClick={submitPosting}>제출</button>
                </div>

            </div>
        </div>
    )
}

export default Board;
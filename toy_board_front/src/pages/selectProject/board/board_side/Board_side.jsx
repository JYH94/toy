import { useState } from "react";



const Board_side = () => {

    const [boardForm, setBoardForm] = useState({
        classification : 0
    });


    const changeBoardForm = () => {

    }

    return (
        <div className="insert_AddrBox">
            <div id="board_insertBox">
                <div><span>분류</span>
                    <select name="classification" id="classification" onChange={changeBoardForm}>
                        <option value="">자유게시판</option>
                        <option value="">조행기</option>
                    </select>
                </div>
                <label htmlFor="title">제목
                    <input type="text" name="title" id="title" onChange={changeBoardForm}/>
                </label>
                <label htmlFor="content">내용
                    <input type="text" name="content" id="content" onChange={changeBoardForm}/>
                </label>
                <label htmlFor="">작성자
                    <input type="text" name="writer" id="writer" onChange={changeBoardForm} />
                </label>
            </div>
        </div>
    )
}

export default Board_side;
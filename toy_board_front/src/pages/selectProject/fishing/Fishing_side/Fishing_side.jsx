import { useEffect, useState } from 'react';
import './Fishing_side.css'
import { api } from '../../../model';
import { makeMarker } from '../MapScript';
import Fishing_side_ele from './Fishing_side_ele';


const Fishing_sideMenu = () => {

    const [pointList, setPointList] = useState([]);
    const [searchForm, setSearchForm] = useState(null);

    useEffect(() => {
        api("/fishing/selectall", 'get')
            .then(res => {
                setPointList(res.data);
                makeMarker(res.data, searchForm);
            })
            .catch(err => console.log(err.message));

        // makeMarker2(searchForm);
    }, []);

    const searchPoint = () => {

        if (!searchForm) {
            setSearchForm({ column: 'pointName', keyword: searchForm.keyword })
        }

        console.log(searchForm);
        // makeMarker(pointList, keyword);
    }

    const changeKeyword = (e) => {
        setSearchForm(pre => ({
            ...pre,
            keyword: e.target.value
        }))

        console.log(searchForm);
    }

    const changeSearchOption = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    }


    return (
        <div className="insert_AddrBox">
            <div id='searchBox'>
                <select name="column" id='column' onChange={changeSearchOption}>
                    {pointList.length > 0 && Object.keys(pointList[0]).map((e, key) =>
                        <option key={key} value={e}>{e}</option>
                    )}
                </select>
                <input type="text" name='keyword' placeholder='포인트명으로 검색해주세요.' onChange={changeKeyword} />
                <button onClick={searchPoint}>검색</button>
            </div>
            {pointList.map((point, key) => <Fishing_side_ele key={key} point={point} />)}
        </div>
    )
}

export default Fishing_sideMenu;
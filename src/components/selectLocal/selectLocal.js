import React from "react";
import './selectLocal.css'
import { BrowserRouter,Link } from "react-router-dom";
import KyotoOsaka from "../../pages/selectedLocal/kyotoOsaka";
import BeppuYufuin from "../../pages/selectedLocal/beppuYufuin";
import Tokyo from "../../pages/selectedLocal/tokyo";

const SelectLocal = () =>{
    return(
        <>
        <div className="selectingLocal">   
            <h3>여행을 원하는 지역을 선택해주세요.</h3>
        </div>
        <div className="localList">
            <Link to='kyotoOsaka' className="link">오사카 - 교토</Link>
            <Link to='beppuYufuin' className="link">뱃부 - 유후인</Link>
            <Link to='tokyo' className="link">도쿄</Link>
        </div>
        </>
    )
}

export default SelectLocal;
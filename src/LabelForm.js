import React from 'react';

function LabelForm() {
    return(
        <div>
            <label htmlFor="name">이름 : </label>
            <input type="text" id="name" placeholder="입력해주세요"/>
        </div>
    )
}

export default LabelForm;
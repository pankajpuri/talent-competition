import React from 'react';


const CreatePagination = () => {
    return (
        <div aria-label="Pagination Navigation" role="navigation" className="ui pagination menu  ">
            <a aria-current="false" aria-disabled="false" tabindex="0" value="1" aria-label="First item" type="firstItem" className="item">«</a>
            <a aria-current="false" aria-disabled="false" tabindex="0" value="4" aria-label="Previous item" type="prevItem" className="item">⟨</a>
            <a aria-current="false" aria-disabled="false" tabindex="0" value="1" type="pageItem" className="item">1</a>
            <a aria-current="false" aria-disabled="false" tabindex="0" value="6" aria-label="Next item" type="nextItem" className="item">⟩</a>
            <a aria-current="false" aria-disabled="false" tabindex="0" value="10" aria-label="Last item" type="lastItem" className="item">»</a>
        </div>
    );
};
export default CreatePagination;

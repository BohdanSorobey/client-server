import React from 'react';
import PropTypes from 'prop-types';

const GroupBlock = (props) => {
    const {keyDownNameTable, groupname, groupId, requestModalCallback, makeGroupActive, activeGroup, doubleClickCallback, onBlurInput, changeGroupToDelete} = props;

    const toggleModalAndRequest = (e) => {
        changeGroupToDelete(e.target.id);
        requestModalCallback("X");
    };
    return (
        <div className={"group-block"} onClick={() => makeGroupActive(groupId)} onDoubleClick={doubleClickCallback} ><input
            className={"custom-group-input"}
            disabled={"disabled"}
            defaultValue={groupname}
            onBlur={onBlurInput}
            id={groupId}
            onKeyDown={keyDownNameTable}
            style={activeGroup === groupId ? {background:"#0CC5DC"} : null}
        />
          <button id={groupId} className={"custom-button-modal"} onClick={toggleModalAndRequest}>X</button>
        </div>
    );
};

GroupBlock.propTypes = {
    groupname: PropTypes.string.isRequired,
    groupId: PropTypes.number.isRequired,
    makeGroupActive: PropTypes.func.isRequired,
    groups: PropTypes.array.isRequired,
    dictionary: PropTypes.object.isRequired,
    elemName: PropTypes.string,
    activateGroup: PropTypes.func,
    requestModalCallback: PropTypes.func,
};

export default React.memo(GroupBlock);

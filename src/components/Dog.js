import React from 'react';
import FavoriteActions from "./FavoriteActions";
import { Link, Switch } from "react-router-dom";


const Dog = ({ id, name, toggle, getStatus, loadingId }) => {
    return <li>
        <Link to={`/detail/${id}`}>
            {name}
        </Link>
        <FavoriteActions
            toggle={toggle}
            id={id}
            getStatus={getStatus}
            loadingId={loadingId}
        />
    </li>
};

export default Dog;

/**
 *
 *   return <li key={id} style={{
        margin: "15px"
    }}>
                            <span style={{
                                display: "inline-block",
                                marginRight: "15px"
                            }}>
                                {name}
                            </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus}/>
    </li>
 */
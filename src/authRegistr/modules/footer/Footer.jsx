import React from "react";

export default class Header extends React.Component {

    render() {
        const {dictionary} = this.props;
        return(
            <>
                <p className={"footer__text copyright"}>{dictionary.resources.rightsFooter} &copy;</p>
                <p align="right" className={"footer__text"}>{dictionary.resources.developersFooter}</p>
                <p align="right" className={"footer__text"}>{dictionary.resources.testersFooter}</p>
            </>
        )
    }
};




import "./btnBackToHome.css";
import { Link } from "react-router";
import { ArrowBack } from "../icons/ArrowBack";

export function BtnBackToHome() {
    return (
        <Link to={'/'} className="btnToHome">
            <ArrowBack className="btnToHome__ArrowBack"></ArrowBack>
            Back
        </Link >
    )
}
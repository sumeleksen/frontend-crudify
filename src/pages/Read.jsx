import backIcon from "../assests/images/back.svg";
import deleteIcon from "../assests/images/delete.svg";
import editIcon from "../assests/images/pen.svg";
import plusIcon from "../assests/images/plus.svg";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { a } from "../services/axiosInstance";
import { CREATE, DELETE, HOME, UPDATE } from "../services/consts";
function Read() {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await a.get(`items/detail/${id}`);
                setPost(res.data);
                console.log(res.data);
            } catch(e) {
                console.log(e);
            }
        }
        fetchPost();
    }, [id]);


    return (
        <div className="block">
            <div className="container">
            <Link to={HOME} className="fixed-top-left">
                <img src={backIcon} alt="Back" />
            </Link>
            <h1 className="title">Чтение заметку</h1>
            <p className="description">{post.content}</p>
            <div className="fixed-menu-bottom">
                <Link to={DELETE.substring(0, DELETE.length - 3) + post.id} className="delete-button">
                <img src={deleteIcon} alt="Delete" />
                </Link>
                <Link to={UPDATE.substring(0, UPDATE.length - 3) + post.id} className="edit-button">
                <img src={editIcon} alt="Pen" />
                </Link>
                <Link to={CREATE} className="plus-button">
                <img src={plusIcon} alt="Create" />
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Read;
import React, { useState, useRef } from 'react';
import CommentPost from "../Components/CommentPost";
import '../Styles/Comment.css';
import CommentList from "../Components/CommentList";
import MyButton from "../Components/UI/Button/MyButton";
import MyInput from "../Components/UI/Input/MyInput";
import MySelect from "../Components/UI/Select/MySelect";

const Login = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Ильяс', body: 'Очень крутой сервис!' },
        { id: 2, title: 'Нуржигит', body: 'Советую брать у них машины в аренду)' },
        { id: 3, title: 'Максим', body: 'Крутые тачки' },
        { id: 4, title: 'Тимур', body: 'Цены приличные' },
        { id: 5, title: 'Мадина', body: 'Доступные цены' },
    ]);

    const [title, setTitle] = useState('');
    const bodyRef = useRef(null);

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body: bodyRef.current.value
        };
        setPosts([...posts, newPost]);
        setTitle('');
        bodyRef.current.value = '';
    };

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const sortComment = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortComment}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По имени'},
                        {value: 'body', name: 'По отзыву'},
                    ]}
                />
            </div>
            <hr style={{margin: '15px 0'}}/>
            <form>
                <MyInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Ваше Имя"
                />
                <input style={{width:"100%", border:"2px solid #212121"}}
                    ref={bodyRef}
                    type="text"
                    placeholder="Ваш Отзыв"
                />
                <MyButton onClick={addNewPost}>Оставить отзыв</MyButton>
            </form>
            <CommentList posts={posts} remove={removePost} />
        </div>
    );
};

export default Login;

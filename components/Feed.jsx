"use client"

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";



const PromptCardList = ({data, handleTagClick}) =>{


    return (
        <div className="mt-16 prompt_layout">

            

            {data.map((post)=>(
                <PromptCard
                key={post._id}
                post={post}
                handleTagClick = {handleTagClick}></PromptCard>
            ))}

            
            
        </div>
    )

}

const Feed = () => {

    const [searchText, setSearchText] = useState('');

    const [posts, setPosts] = useState([]);
    
    const handleSearchChange = (e) =>{
        

    }

    const fetchPosts = async () => {
        const response = await fetch('/api/prompt');

        const data = await response.json();

        setPosts(data);

    }


    useEffect(()=>{

        fetchPosts();
    
        // console.log(posts);
    },[])

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input 
                type="text"
                placeholder="search for a tag or a username"
                value={searchText}
                onChange={handleSearchChange}
                required
                className="search_input peer"></input>

            </form>

            <PromptCardList
            data = {posts}
            handleTagClick={()=>{}}></PromptCardList>
        </section>
    )
}

export default Feed
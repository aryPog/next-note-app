"use client";

import { useRouter } from 'next/navigation'; // react é real muito merda slk slk tem a porra do 'next/router' q tem o reload q é obgh q add automatico qnd vc dar a bu
import { useState } from "react";

export default function CreateNote(){
    const [title,setTitle] = useState('');
    const [notes,setNotes] = useState('');

    const router = useRouter();

    const create = async(e : any) => {
        e.preventDefault();

        if(title.trim() === '' || notes === ''){
            window.alert("fill both");
            return ;
        }
            

        await fetch(`http://127.0.0.1:8090/api/collections/postit/records`,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                title,notes,
            }),
        });
        setNotes('');
        setTitle('');

        router.refresh();
    }

    return(
        <form onSubmit={create}>
            <title> Create a new Note</title>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Content"
                value={notes}
                onChange={(e)=> setNotes(e.target.value)}
            />
            <button type="submit">
                create NOTE
            </button>
        </form>
    )
}
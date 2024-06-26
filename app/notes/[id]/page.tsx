"use client";

import styles from '../Notes.module.css'

async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/postit/records/${noteId}`,
    {next:{revalidate:10}});//create a "new" page for the note id and refreshs the page evry 10 sec
    const data = await res.json();
    return data;
}

export default async function NotePage({params}:any) {
    const note = await getNote(params.id)


    const deletee = async () =>{
        await fetch(`http://127.0.0.1:8090/api/collections/postit/records/${params.id}`,{
            method:'DELETE',
        })
        window.location.href = '/notes';
    }

    return(
        <div>
            <h1>note id -&gt; {note.id}</h1>
            <div className={styles.note}>
                <h2>{note.title}</h2>
                <h5>{note.notes}</h5>
                <p>{note.created}</p>
            </div>

            <button onClick={deletee} className={styles.delete}> delete note </button>
        </div>
    )
}
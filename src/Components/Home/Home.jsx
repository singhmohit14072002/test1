import React from 'react'
import "./Home.css"
import PostingForm from "./Posts/PostingForm.jsx";
import RecentContacts from "./RecentContacts/RecentContacts.jsx"

export default function Home() {
  return (
    <div>
      <div className="container">
      <PostingForm className="postContainer" />
      <RecentContacts className="contactsContainer" />
    </div>
    </div>
  )
}

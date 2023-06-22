import React, { useState,useEffect } from "react";
import Header from '../components/Header'
import axios from "axios";

import configData from "../config.json";
export default function Home() {
  const [posts, setPosts]  = useState([{}]);
  useEffect(() => {
    console.log("primesc datele");
    axios
      .get(configData.SERVER_POST_URL)
      .then(({ data }) => {
        console.log(data['data']);
        setPosts(data['data']);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
   <>
   <Header />
   {posts.map(data => 
      <div key={data.id}>
          <p>{data.titlu}</p>
      </div>
      )}
   <div className="container">
    <div className="row mt-4">
      <h1>Ultimele articole</h1>
      <div className="col">
        <div className="card mb-4">
            <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div className="card-body">
                <div className="small text-muted">January 1, 2023</div>
                <h2 className="card-title h4">Post Title</h2>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                <a className="btn btn-primary" href="#!">Read more →</a>
            </div>
        </div>
      </div>
    </div>                              
   </div>
   </>
  )
}
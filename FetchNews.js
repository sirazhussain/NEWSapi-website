import React, { useState } from 'react'
import axios from 'axios'
function FetchNews() {

    const [news, setNews] = useState([])

    const FetchNews =()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=c905f636db2546439960feedb61a2f90")
            .then((response)=>{
                console.log(response);
                setNews(response.data.articles)
            })
    }
    return (
        <>
            <div className='container my-4 '>
                <div className='row'>
                    <div className='col-4'>
                    <button className='btn btn-danger' onClick={FetchNews}>FetchNews</button>
                </div>
            </div>
            </div>

            <div className="container">
                <div className='row'>
                    {
                        news.map((value) => {
                            return (
                                <div className='col-4 my-5 '>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={value.urlToImage} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href="/" className="btn btn-primary">Main</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default FetchNews;

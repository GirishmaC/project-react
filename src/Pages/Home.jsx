import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'
import { store } from './Details'

const Home = () => {

  const [detail] = useContext(store);
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <h1>Green Gardens</h1>
        <span>Best Place to visit</span>
      </div>
      <div className="home__sec">
       <Link to="/fitness" > <img src="https://images.unsplash.com/photo-1569622296640-38737c1d82de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="an img" /></Link>
       
      </div>
      </div>
      
      <div className="home__thir">
       <Link to='/technology'>   <img src="https://media.istockphoto.com/photos/closeup-nature-view-of-green-leaf-background-picture-id1208290498?k=20&m=1208290498&s=612x612&w=0&h=iOgX0Ycplsasv_aHAY4wWVfncP5AZK0Zs-Lr5mQxdTQ=" alt="not found" /></Link>
          </div>
          <h1 style={{marginTop:"40px"}}>The Latest</h1>
          <hr style={{width:"200px",  thickness:"20px"}} />
          <div className='home__left '>
                    {
                        detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}                            
                            />
                        ))
                    }
                </div>
          <div className='home__left '>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left '>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"50px", marginLeft:"10px", display : "inline-block"}}>Latest Articles</h1>
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px", thickness:"20px"}} />
            
                <div className='rightbar2'>
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                    
    </div>
  
    </div>
  )
}

export default Home;
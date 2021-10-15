import React, { useEffect,useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [Totalresults, setTotalResults] = useState(0)

   const  updateNews= async() =>{
    console.log("cdm");
    props.setProgress(10)
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=65fd5600eed74676bb08edc14585136e&page=${page}&pageSize=${props.pageSize}`;
      setloading(true)
    let data = await fetch(url);
    props.setProgress(50)
    let parsedData = await data.json()
    console.log(parsedData);
  setarticles(parsedData.articles)
  setTotalResults(parsedData.TotalResults)
  setloading(false)
  props.setProgress(100)
  }
  useEffect(() => {// to remove react hook  warning 
    document.title=`${props.category} -Newsmonkey`
    updateNews();
   // eslint-disable-next-line 
    }, [])


  // const handlePrevClick = async () => {
  //   console.log("previous");
  //   setPage(page -1)
  //   updateNews();
  // };
  // const handleNextClick = async () => {
  //   console.log("next");
  //  setPage(page +1)
  //   updateNews();
  // };
  const fetchMoreData=async()=>{
    setPage(page +1)
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=65fd5600eed74676bb08edc14585136e&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.Totalresults)


};



    return (
      <>
      <h1 className="text-center" style={{ margin: '65px 20px' }}>NewsMonkey - Top Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== Totalresults}
          loader={<Spinner/>}
      > 
          <div className="container">
               
          <div className="row">
              {articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                      <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
              })}
          </div>
          </div> 
      </InfiniteScroll>

  </>
    )
}
News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  News.defaultTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;

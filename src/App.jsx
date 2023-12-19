
function App() {
  let data = [{
    title: "Project One",
    description: "Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this"
    },
    {
      title: "Project two",
      description: "Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this"
    },
    {
      title: "Project Three",
      description: "Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this"
    },
    {
      title: "Project Four",
      description: "Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this"
    },
    {
      title: "Project Five",
      description: "Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this"
    },
    {
      title: "Project Six",
      description: "Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this"
    }
]
  return <>
<div className="container">
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>
<div className="row">
  {
    data.map((e,i)=>{
      return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{e.title}</a>
          </h4>
          <p className="card-text">{e.description}</p>
        </div>
      </div>
    </div>
    })
  }
</div>
</div>
</>
}

export default App
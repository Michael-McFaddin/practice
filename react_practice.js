return (
  <div className="container">
    <div>
      <h1>First APOD API Call: "Most Recent"</h1>
      <h1>{this.state.APOData.title}</h1>
      <img style={{ width: "700px", height: "500px" }}
        src={this.state.APOData.url}></img>
      <ol>
        <li>{this.state.APOData.date}</li>
        <li>{this.state.APOData.description}</li>
        <li>{this.state.APOData.apod_site}</li>
      </ol>
    </div>
    <div>
      <h1>Second APOD API Call: Last Ten Search Results "Planetary Nebula"</h1>
      {this.state.NebularData.map((result, index) => (
        <ol>
          <li>{this.state.NebularData.title}</li>
          <li>{this.state.NebularData.date}</li>
          <li>{this.state.NebularData.description}</li>
          <li>{this.state.NebularData.apod_site}</li>
        ))}
        </ol>
    </div>
    <div>
      <h1>Third APOD API Call: Last Ten Search Results, Any</h1>
      <h1>
      </h1>
    </div>
  </div>
)
};
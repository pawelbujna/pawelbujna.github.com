import React from "react"

const Card = ({ item }) => {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={item.image} />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p>{item.description}</p>
          <br />
          <time datetime="2016-1-1">1 Styczeń 2016</time>
        </div>
      </div>
    </div>
  )
}

export { Card }

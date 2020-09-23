import React, { useState } from "react"
import { gradients, uniqueTags  } from "../gradients"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {
  const [filter, setFilter] = useState("all")
  const selectedList = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <>
      <GradientsSelect tags={uniqueTags} filter={filter} setFilter={setFilter} />
      <GradientsList list={selectedList} />
    </>
  )
}

export default Gradients
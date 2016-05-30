import React from "react"

export const Repository = ({repository}) => {
  return (
    <tr>
      <td>{repository.stars}</td>
      <td>{repository.name}</td>
      <td>{repository.owner}</td>
      <td><a href={repository.url}>{repository.url}</a></td>
    </tr>
  )
}

export default Repository

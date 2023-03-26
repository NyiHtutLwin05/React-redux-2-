import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetTitle } from '../actions/action';
export  const ComC = ({ usersUi, FetchGetUser }) => {
    console.log("UsersUI",usersUi);
    useEffect(() => {
        FetchGetUser()
    },[])
  return (
      <div>
          <h1>Component C </h1>
          {
              usersUi && usersUi.map((e) => (
                  
                  <div >
                    <span>{e.id}</span>
                      <span>{ e.title}</span>
                      <span>{ e.body}</span>
                  </div>
              ))
}

      </div>
  )
}

const mapStateToProps = (state) => ({
    usersUi :state?.usersRoot?.posts // api array
})
const mapDispatchToProps = {
  FetchGetUser:  GetTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(ComC)
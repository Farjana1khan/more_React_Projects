import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
const List = ({people}) =>{
return(
      <>
      {people.map((person) =>{
            //const {id, name, age, image} = person;
            return (
              <article key={person.id} className="person">
                <img src={person.image} alt={person.name} />
                <div>
                  <h4>{person.name}</h4>
                  <p>{person.age}</p>
                </div>
              </article>
            );
      })}
      </>
)
}


export default List
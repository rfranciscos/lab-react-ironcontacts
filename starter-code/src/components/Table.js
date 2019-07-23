import React from 'react';

const Table = ({ key, contact }) => {
  return (
      
        <tr>
          <th>
            <img src={contact.pictureUrl} />
          </th>
          <th>
            <h2>{contact.name}</h2>
          </th>
          <th>
            <p>{contact.popularity}</p>
          </th>
        </tr>

  );
};

export default Table;

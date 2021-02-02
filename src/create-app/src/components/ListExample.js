import React from 'react';

const initialList = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Williams',
    year: 2018,
  },
  {
    id: 'b',
    firstname: 'Ark',
    lastname: 'Zero',
    year: 1001,
  },
];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    default:
      throw new Error();
  }
};

const ListExample = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });

  function handleRemove(id) {
    dispatchListData({ type: 'REMOVE_ITEM', id });
  }

  if (!listData.isShowList) {
    return null;
  }

  return <List list={listData.list} onRemove={handleRemove} />;
};

const List = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} text="remove" onRemove={onRemove} />
    ))}
  </ul>
);

const Item = ({ item, onRemove, text}) => (
  <li>
    <span>{item.firstname}</span>
    <span>{item.lastname}</span>
    <span>{item.year}</span>
    <button type="button" onClick={() => onRemove(item.id)}>
      {text}
    </button>
  </li>
);

export default ListExample;

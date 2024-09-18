import React, { FC } from 'react';

interface HelloProps {
  hello: string
}

const Hello: FC<HelloProps> = props => {
  return <div>{props.hello} world! </div>
}

export const HelloParent = (): JSX.Element => {
  return <Hello hello={'Hello'} />
}

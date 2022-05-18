import { memo } from 'react';

function Layout({ todos }) {
  return <div className={'main-container'}>{todos}</div>;
}

export default memo(Layout);
